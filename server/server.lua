ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

math.randomseed(os.time())

function getPhoneRandomNumber()
    local numBase0 = math.random(100,999)
    local numBase1 = math.random(0,9999)
    local num = string.format("0912-%03d-%04d", numBase0, numBase1 )
	return num
end

-- Exemple pour les numero du style 06XXXXXXXX
-- function getPhoneRandomNumber()
-- return '0' .. math.random(600000000,699999999)
-- end

--====================================================================================
-- Utils
--====================================================================================
function getSourceFromIdentifier(identifier, cb)
	TriggerEvent("es:getPlayers", function(users)
		for k , user in pairs(users) do
			if (user.getIdentifier ~= nil and user.getIdentifier() == identifier) or (user.identifier == identifier) then
				cb(k)
				return
			end
		end
	end)
	cb(nil)
end
function getNumberPhone(identifier)
	local result = MySQL.Sync.fetchAll("SELECT phone_number FROM users WHERE identifier = @identifier", {
		['@identifier'] = identifier
	})
	if result[1] ~= nil then
		return result[1].phone_number
	end
	return nil
end
function getIdentifierByPhoneNumber(phone_number)
	local result = MySQL.Sync.fetchAll("SELECT identifier FROM users WHERE phone_number = @phone_number", {
		['@phone_number'] = phone_number
	})
	if result[1] ~= nil then
		return result[1].identifier
	end
	return nil
end


function getPlayerID(source)
	local identifiers = GetPlayerIdentifiers(source)
	local player = getIdentifiant(identifiers)
	return player
end
function getIdentifiant(id)
	for _, v in ipairs(id) do
		return v
	end
end


function getOrGeneratePhoneNumber (sourcePlayer, identifier, cb)
	local sourcePlayer = sourcePlayer
	local identifier = identifier
	local myPhoneNumber = getNumberPhone(identifier)
	if myPhoneNumber == '0' or myPhoneNumber == nil then
		repeat
			myPhoneNumber = getPhoneRandomNumber()
			local id = getIdentifierByPhoneNumber(myPhoneNumber)
		until id == nil
		MySQL.Async.insert("UPDATE users SET phone_number = @myPhoneNumber WHERE identifier = @identifier", {
			['@myPhoneNumber'] = myPhoneNumber,
			['@identifier'] = identifier
		}, function ()
			cb(myPhoneNumber)
		end)
	else
		cb(myPhoneNumber)
	end
end
--====================================================================================
-- Contacts
--====================================================================================
function getContacts(identifier)
	local result = MySQL.Sync.fetchAll("SELECT * FROM phone_users_contacts WHERE phone_users_contacts.identifier = @identifier", {
		['@identifier'] = identifier
	})
	return result
end
function addContact(source, identifier, number, display)
	local sourcePlayer = tonumber(source)
	MySQL.Async.insert("INSERT INTO phone_users_contacts (`identifier`, `number`,`display`) VALUES(@identifier, @number, @display)", {
		['@identifier'] = identifier,
		['@number'] = number,
		['@display'] = display,
	},function()
		notifyContactChange(sourcePlayer, identifier)
	end)
end
function updateContact(source, identifier, id, number, display)
	local sourcePlayer = tonumber(source)
	MySQL.Async.insert("UPDATE phone_users_contacts SET number = @number, display = @display WHERE id = @id", {
		['@number'] = number,
		['@display'] = display,
		['@id'] = id,
	},function()
		notifyContactChange(sourcePlayer, identifier)
	end)
end
function deleteContact(source, identifier, id)
	local sourcePlayer = tonumber(source)
	MySQL.Sync.execute("DELETE FROM phone_users_contacts WHERE `identifier` = @identifier AND `id` = @id", {
		['@identifier'] = identifier,
		['@id'] = id,
	})
	notifyContactChange(sourcePlayer, identifier)
end
function deleteAllContact(identifier)
	MySQL.Sync.execute("DELETE FROM phone_users_contacts WHERE `identifier` = @identifier", {
		['@identifier'] = identifier
	})
end
function notifyContactChange(source, identifier)
	local sourcePlayer = tonumber(source)
	local identifier = identifier
	if sourcePlayer ~= nil then
		TriggerClientEvent("irrp_phone:contactList", sourcePlayer, getContacts(identifier))
	end
end
function getBlockList(blocker)
	local result = MySQL.Sync.fetchAll("SELECT blocked FROM block_list_phone WHERE block_list_phone.blocker = @blocker", {
		['@blocker'] = blocker
	})
	return result
end
function deleteBlock(blocked)
	MySQL.Sync.execute("DELETE FROM block_list_phone WHERE `blocked` = @blocked", {
		['@blocked'] = blocked,
	})
end

RegisterServerEvent('irrp_phone:blockNumber')
AddEventHandler('irrp_phone:blockNumber', function(number)
	local identifier = getPlayerID(source)
	local myPhone = getNumberPhone(identifier)
	if not number ~= nil then
		MySQL.Sync.execute("INSERT INTO `block_list_phone` (`blocker`, `blocked`) VALUES (@blocker, @blocked)", {
			['@blocker'] = myPhone,
			['@blocked'] = number,
		})
	else
		print('number is null')
	end

end)

RegisterServerEvent('irrp_phone:UnblockNumber')
AddEventHandler('irrp_phone:UnblockNumber', function(number)
	deleteBlock(number)

end)

RegisterServerEvent('irrp_phone:addContact')
AddEventHandler('irrp_phone:addContact', function(display, phoneNumber)
	local sourcePlayer = tonumber(source)
	local identifier = getPlayerID(source)
	addContact(sourcePlayer, identifier, phoneNumber, display)
end)

RegisterServerEvent('irrp_phone:updateContact')
AddEventHandler('irrp_phone:updateContact', function(id, display, phoneNumber)
	local sourcePlayer = tonumber(source)
	local identifier = getPlayerID(source)
	updateContact(sourcePlayer, identifier, id, phoneNumber, display)
end)

RegisterServerEvent('irrp_phone:deleteContact')
AddEventHandler('irrp_phone:deleteContact', function(id)
	local sourcePlayer = tonumber(source)
	local identifier = getPlayerID(source)
	deleteContact(sourcePlayer, identifier, id)
end)

--====================================================================================
-- Messages
--====================================================================================
function getMessages(identifier)
	local result = MySQL.Sync.fetchAll("SELECT phone_messages.* FROM phone_messages LEFT JOIN users ON identifier = @identifier WHERE phone_messages.receiver = phone_number", {
		['@identifier'] = identifier
	})
	return result
	--return MySQLQueryTimeStamp("SELECT phone_messages.* FROM phone_messages LEFT JOIN users ON identifier = @identifier WHERE phone_messages.receiver = phone_number", {['@identifier'] = identifier})
end

RegisterServerEvent('gcPhone:_internalAddMessagemgrp')
AddEventHandler('gcPhone:_internalAddMessagemgrp', function(transmitter, receiver, message, owner, cb)
	cb(_internalAddMessagetg(transmitter, receiver, message, owner))
end)

function _internalAddMessage(source, transmitter, receiver, message, owner)
	local Query = "INSERT INTO phone_messages (`transmitter`, `receiver`,`message`, `isRead`,`owner`) VALUES(@transmitter, @receiver, @message, @isRead, @owner)"
	local Query2 = 'SELECT * from phone_messages WHERE `id` = @id'
	local sourcePlayer = tonumber(source)
	local Parameters = {
		['@transmitter'] = transmitter,
		['@receiver'] = receiver,
		['@message'] = message,
		['@isRead'] = owner,
		['@owner'] = owner
	}
	TriggerClientEvent("esx_addons_irrp_phone:call", sourcePlayer, message, transmitter)
	local lastInsertId = MySQL.Sync.insert(Query, Parameters)
	return MySQL.Sync.fetchAll(Query2, {['id'] = lastInsertId})[1]
end

function _internalAddMessagetg(transmitter, receiver, message, owner)
	local Query = "INSERT INTO phone_messages (`transmitter`, `receiver`,`message`, `isRead`,`owner`) VALUES(@transmitter, @receiver, @message, @isRead, @owner)"
	local Query2 = 'SELECT * from phone_messages WHERE `id` = @id'
	local Parameters = {
		['@transmitter'] = transmitter,
		['@receiver'] = receiver,
		['@message'] = message,
		['@isRead'] = owner,
		['@owner'] = owner
	}
	local lastInsertId = MySQL.Sync.insert(Query, Parameters)
	return MySQL.Sync.fetchAll(Query2, {['id'] = lastInsertId})[1]
end

function addMessage(source, identifier, phone_number, message)
	local sourcePlayer = tonumber(source)
	local otherIdentifier = getIdentifierByPhoneNumber(phone_number)
	local myPhone = getNumberPhone(identifier)

	if otherIdentifier ~= nil then
		local tomess = _internalAddMessage(sourcePlayer, myPhone, phone_number, message, 0)
		getSourceFromIdentifier(otherIdentifier, function (osou)
			if tonumber(osou) ~= nil then
				local xPlayer = ESX.GetPlayerFromId(tonumber(osou))

				if xPlayer then
					local phone = xPlayer.getInventoryItem("phone")
					local havephone
					if phone ~= nil and phone.count > 0 then havephone = true else havephone = false end
					TriggerClientEvent("irrp_phone:receiveMessage", xPlayer.source , tomess, havephone)
					print('3')
				end

			end
		end)
	end
	local memess = _internalAddMessage(sourcePlayer, phone_number, myPhone, message, 1)
	TriggerClientEvent("irrp_phone:receiveMessage", sourcePlayer, memess)
	print('4')
end

function setReadMessageNumber(identifier, num)
	local mePhoneNumber = getNumberPhone(identifier)
	MySQL.Sync.execute("UPDATE phone_messages SET phone_messages.isRead = 1 WHERE phone_messages.receiver = @receiver AND phone_messages.transmitter = @transmitter", {
		['@receiver'] = mePhoneNumber,
		['@transmitter'] = num
	})
end

function deleteMessage(msgId)
	MySQL.Sync.execute("DELETE FROM phone_messages WHERE `id` = @id", {
		['@id'] = msgId
	})
end

function deleteAllMessageFromPhoneNumber(source, identifier, phone_number)
	local source = source
	local identifier = identifier
	local mePhoneNumber = getNumberPhone(identifier)
	MySQL.Sync.execute("DELETE FROM phone_messages WHERE `receiver` = @mePhoneNumber and `transmitter` = @phone_number", {['@mePhoneNumber'] = mePhoneNumber,['@phone_number'] = phone_number})
end

function deleteAllMessage(identifier)
	local mePhoneNumber = getNumberPhone(identifier)
	MySQL.Sync.execute("DELETE FROM phone_messages WHERE `receiver` = @mePhoneNumber", {
		['@mePhoneNumber'] = mePhoneNumber
	})
end

RegisterServerEvent('irrp_phone:sendMessage')
AddEventHandler('irrp_phone:sendMessage', function(phoneNumber, message)
	local sourcePlayer = tonumber(source)
	local identifier = getPlayerID(source)
	addMessage(sourcePlayer, identifier, phoneNumber, message)
end)

RegisterServerEvent('irrp_phone:deleteMessage')
AddEventHandler('irrp_phone:deleteMessage', function(msgId)
	deleteMessage(msgId)
end)

RegisterServerEvent('irrp_phone:deleteMessageNumber')
AddEventHandler('irrp_phone:deleteMessageNumber', function(number)
	local sourcePlayer = tonumber(source)
	local identifier = getPlayerID(source)
	deleteAllMessageFromPhoneNumber(sourcePlayer,identifier, number)
	-- TriggerClientEvent("irrp_phone:allMessage", sourcePlayer, getMessages(identifier))
end)

RegisterServerEvent('irrp_phone:deleteAllMessage')
AddEventHandler('irrp_phone:deleteAllMessage', function()
	local sourcePlayer = tonumber(source)
	local identifier = getPlayerID(source)
	deleteAllMessage(identifier)
end)

RegisterServerEvent('irrp_phone:setReadMessageNumber')
AddEventHandler('irrp_phone:setReadMessageNumber', function(num)
	local identifier = getPlayerID(source)
	setReadMessageNumber(identifier, num)
end)

RegisterServerEvent('irrp_phone:deleteALL')
AddEventHandler('irrp_phone:deleteALL', function()
	local sourcePlayer = tonumber(source)
	local identifier = getPlayerID(source)
	deleteAllMessage(identifier)
	deleteAllContact(identifier)
	appelsDeleteAllHistorique(identifier)
	TriggerClientEvent("irrp_phone:contactList", sourcePlayer, {})
	TriggerClientEvent("irrp_phone:allMessage", sourcePlayer, {})
	TriggerClientEvent("irrp_phone:appelsDeleteAllHistorique", sourcePlayer, {})
end)

--====================================================================================
-- Gestion des appels
--====================================================================================
local AppelsEnCours = {}
local PhoneFixeInfo = {}
local lastIndexCall = 11

function getHistoriqueCall (num)
	local result = MySQL.Sync.fetchAll("SELECT * FROM phone_calls WHERE phone_calls.owner = @num ORDER BY time DESC LIMIT 120", {
		['@num'] = num
	})
	return result
end

function sendHistoriqueCall (src, num)
	local histo = getHistoriqueCall(num)
	TriggerClientEvent('irrp_phone:historiqueCall', src, histo)
end

function saveAppels (appelInfo)
	if appelInfo.extraData == nil or appelInfo.extraData.useNumber == nil then
		MySQL.Async.insert("INSERT INTO phone_calls (`owner`, `num`,`incoming`, `accepts`) VALUES(@owner, @num, @incoming, @accepts)", {
			['@owner'] = appelInfo.transmitter_num,
			['@num'] = appelInfo.receiver_num,
			['@incoming'] = 1,
			['@accepts'] = appelInfo.is_accepts
		}, function()
			notifyNewAppelsHisto(appelInfo.transmitter_src, appelInfo.transmitter_num)
		end)
	end
	if appelInfo.is_valid == true then
		local num = appelInfo.transmitter_num
		if appelInfo.hidden == true then
			mun = "###-####"
		end
		MySQL.Async.insert("INSERT INTO phone_calls (`owner`, `num`,`incoming`, `accepts`) VALUES(@owner, @num, @incoming, @accepts)", {
			['@owner'] = appelInfo.receiver_num,
			['@num'] = num,
			['@incoming'] = 0,
			['@accepts'] = appelInfo.is_accepts
		}, function()
			if appelInfo.receiver_src ~= nil then
				notifyNewAppelsHisto(appelInfo.receiver_src, appelInfo.receiver_num)
			end
		end)
	end
end

function notifyNewAppelsHisto (src, num)
	sendHistoriqueCall(src, num)
end

RegisterServerEvent('irrp_phone:getHistoriqueCall')
AddEventHandler('irrp_phone:getHistoriqueCall', function()
	local sourcePlayer = tonumber(source)
	local srcIdentifier = getPlayerID(source)
	local srcPhone = getNumberPhone(srcIdentifier)
	sendHistoriqueCall(sourcePlayer, num)
end)


RegisterServerEvent('irrp_phone:internal_startCall')
AddEventHandler('irrp_phone:internal_startCall', function(source, phone_number, rtcOffer, extraData)
	--[[if FixePhone[phone_number] ~= nil then
		onCallFixePhone(source, phone_number, rtcOffer, extraData)
		return
	end]]
	print('ab koon')
	local rtcOffer = rtcOffer
	if phone_number == nil or phone_number == '' then
		print(phone_number)
		return
	end
	
	local hidden = string.sub(phone_number, 1, 1) == '#'
	if hidden == true then
		phone_number = string.sub(phone_number, 2)
	end
	
	local indexCall = lastIndexCall
	lastIndexCall = lastIndexCall + 1
	
	local sourcePlayer = tonumber(source)
	local srcIdentifier = getPlayerID(source)
	
	local srcPhone = ''
	if extraData ~= nil and extraData.useNumber ~= nil then
		srcPhone = extraData.useNumber
	else
		srcPhone = getNumberPhone(srcIdentifier)
	end
	local destPlayer = getIdentifierByPhoneNumber(phone_number)
	local is_valid = destPlayer ~= nil and destPlayer ~= srcIdentifier
	AppelsEnCours[indexCall] = {
		id = indexCall,
		transmitter_src = sourcePlayer,
		transmitter_num = srcPhone,
		receiver_src = nil,
		receiver_num = phone_number,
		is_valid = destPlayer ~= nil,
		is_accepts = false,
		hidden = hidden,
		rtcOffer = rtcOffer,
		extraData = extraData
	}
	
	
	if is_valid == true then
		getSourceFromIdentifier(destPlayer, function (srcTo)
			print('ab kooobs')
			if srcTo ~= nil then
				local xPlayer = ESX.GetPlayerFromId(srcTo)
				local phone = xPlayer.getInventoryItem("phone")
				local doeshavephone
				if phone ~= nil and phone.count > 0 then AppelsEnCours[indexCall].hidden = false else AppelsEnCours[indexCall].hidden = true end

				AppelsEnCours[indexCall].receiver_src = srcTo
				TriggerEvent('gcPhone:addCall', AppelsEnCours[indexCall])
				TriggerClientEvent('irrp_phone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true)
				TriggerClientEvent('irrp_phone:waitingCall', srcTo, AppelsEnCours[indexCall], false)
			else
				TriggerEvent('gcPhone:addCall', AppelsEnCours[indexCall])
				TriggerClientEvent('irrp_phone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true)
			end
		end)
	else
		print('ab kir')
		TriggerEvent('gcPhone:addCall', AppelsEnCours[indexCall])
		TriggerClientEvent('irrp_phone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true)
	end
	
end)

RegisterServerEvent('irrp_phone:startCall')
AddEventHandler('irrp_phone:startCall', function(phone_number, rtcOffer, extraData)
	TriggerEvent('irrp_phone:internal_startCall',source, phone_number, rtcOffer, extraData)
end)

RegisterServerEvent('irrp_phone:candidates')
AddEventHandler('irrp_phone:candidates', function (callId, candidates)
	if AppelsEnCours[callId] ~= nil then
		local source = source
		local to = AppelsEnCours[callId].transmitter_src
		if source == to then
			to = AppelsEnCours[callId].receiver_src
		end
		TriggerClientEvent('irrp_phone:candidates', to, candidates)
	end
end)


RegisterServerEvent('irrp_phone:acceptCall')
AddEventHandler('irrp_phone:acceptCall', function(infoCall, rtcAnswer)
	local id = infoCall.id
	if AppelsEnCours[id] ~= nil then
		if PhoneFixeInfo[id] ~= nil then
			onAcceptFixePhone(source, infoCall, rtcAnswer)
			return
		end
		AppelsEnCours[id].receiver_src = infoCall.receiver_src or AppelsEnCours[id].receiver_src
		if AppelsEnCours[id].transmitter_src ~= nil and AppelsEnCours[id].receiver_src~= nil then
			AppelsEnCours[id].is_accepts = true
			AppelsEnCours[id].rtcAnswer = rtcAnswer
			TriggerClientEvent('irrp_phone:acceptCall', AppelsEnCours[id].transmitter_src, AppelsEnCours[id], true)
			SetTimeout(2000, function()
			TriggerClientEvent('irrp_phone:acceptCall', AppelsEnCours[id].receiver_src, AppelsEnCours[id], false)
			end)
			saveAppels(AppelsEnCours[id])
		end
	end
end)


RegisterServerEvent('irrp_phone:rejectCall')
AddEventHandler('irrp_phone:rejectCall', function (infoCall)
	local id = infoCall.id
	if AppelsEnCours[id] ~= nil then
		if PhoneFixeInfo[id] ~= nil then
			onRejectFixePhone(source, infoCall)
			return
		end
		if AppelsEnCours[id].transmitter_src ~= nil then
			TriggerClientEvent('irrp_phone:rejectCall', AppelsEnCours[id].transmitter_src, false, AppelsEnCours[id].transmitter_src)
		end
		if AppelsEnCours[id].receiver_src ~= nil then
			TriggerClientEvent('irrp_phone:rejectCall', AppelsEnCours[id].receiver_src, false, AppelsEnCours[id].transmitter_src)
		end
		
		if AppelsEnCours[id].is_accepts == false then
			saveAppels(AppelsEnCours[id])
		end
		TriggerEvent('gcPhone:removeCall', AppelsEnCours)
		AppelsEnCours[id] = nil
	end
end)

RegisterServerEvent('irrp_phone:appelsDeleteHistorique')
AddEventHandler('irrp_phone:appelsDeleteHistorique', function (numero)
	local sourcePlayer = tonumber(source)
	local srcIdentifier = getPlayerID(source)
	local srcPhone = getNumberPhone(srcIdentifier)
	MySQL.Sync.execute("DELETE FROM phone_calls WHERE `owner` = @owner AND `num` = @num", {
		['@owner'] = srcPhone,
		['@num'] = numero
	})
end)

function appelsDeleteAllHistorique(srcIdentifier)
	local srcPhone = getNumberPhone(srcIdentifier)
	MySQL.Sync.execute("DELETE FROM phone_calls WHERE `owner` = @owner", {
		['@owner'] = srcPhone
	})
end

RegisterServerEvent('irrp_phone:appelsDeleteAllHistorique')
AddEventHandler('irrp_phone:appelsDeleteAllHistorique', function ()
	local sourcePlayer = tonumber(source)
	local srcIdentifier = getPlayerID(source)
	appelsDeleteAllHistorique(srcIdentifier)
end)


--====================================================================================
-- OnLoad
--====================================================================================
AddEventHandler('esx:playerLoaded',function(source)
	local sourcePlayer = tonumber(source)
	local xPlayer = ESX.GetPlayerFromId(source)
	local amount = xPlayer.bank
	local identifier = xPlayer.identifier
	getOrGeneratePhoneNumber(sourcePlayer, identifier, function (myPhoneNumber)
		TriggerClientEvent("irrp_phone:myPhoneNumber", sourcePlayer, myPhoneNumber)
		TriggerClientEvent("irrp_phone:contactList", sourcePlayer, getContacts(identifier))
		TriggerClientEvent("irrp_phone:allMessage", sourcePlayer, getMessages(identifier))
		TriggerClientEvent("irrp_phone:setUiPhone", sourcePlayer, amount)
	end)
end)

RegisterCommand('reloadphone', function(source)
	local sourcePlayer = tonumber(source)
	local xPlayer = ESX.GetPlayerFromId(source)
	local amount = xPlayer.bank
	local identifier = xPlayer.identifier
	getOrGeneratePhoneNumber(sourcePlayer, identifier, function (myPhoneNumber)
		TriggerClientEvent("irrp_phone:myPhoneNumber", sourcePlayer, myPhoneNumber)
		TriggerClientEvent("irrp_phone:contactList", sourcePlayer, getContacts(identifier))
		TriggerClientEvent("irrp_phone:allMessage", sourcePlayer, getMessages(identifier))
		TriggerClientEvent("irrp_phone:setUiPhone", sourcePlayer, amount)
	end)
end, false)

-- Just For reload
RegisterServerEvent('irrp_phone:allUpdate')
AddEventHandler('irrp_phone:allUpdate', function()
	local _source = source
	local sourcePlayer = tonumber(_source)
	local xPlayer = ESX.GetPlayerFromId(_source)
	local identifier = getPlayerID(_source)
	local num = getNumberPhone(identifier)
	TriggerClientEvent("irrp_phone:myPhoneNumber", sourcePlayer, num)
	TriggerClientEvent("irrp_phone:contactList", sourcePlayer, getContacts(identifier))
	TriggerClientEvent("irrp_phone:allMessage", sourcePlayer, getMessages(identifier))
	TriggerClientEvent("irrp_phone:setUiPhone", sourcePlayer, xPlayer.bank)
	TriggerClientEvent('irrp_phone:getBourse', sourcePlayer, getBourse())
	sendHistoriqueCall(sourcePlayer, num)
end)


AddEventHandler('onMySQLReady', function ()
	MySQL.Async.fetchAll("DELETE FROM phone_messages WHERE (DATEDIFF(CURRENT_DATE,time) > 10)")
end)

--====================================================================================
-- App bourse
--====================================================================================
function getBourse()
	-- Format
	-- Array
	-- Object
	-- -- libelle type String | Nom
	-- -- price type number | Prix actuelle
	-- -- difference type number | Evolution
	--
	-- local result = MySQL.Sync.fetchAll("SELECT * FROM `recolt` LEFT JOIN `items` ON items.`id` = recolt.`treated_id` WHERE fluctuation = 1 ORDER BY price DESC",{})
	local result = {
		{
			libelle = 'Google',
			price = 125.2,
			difference = -12.1
		},
		{
			libelle = 'Microsoft',
			price = 132.2,
			difference = 3.1
		},
		{
			libelle = 'Amazon',
			price = 120,
			difference = 0
		}
	}
	return result
end

--====================================================================================
-- App ... WIP
--====================================================================================


-- SendNUIMessage('ongcPhoneRTC_receive_offer')
-- SendNUIMessage('ongcPhoneRTC_receive_answer')

-- RegisterNUICallback('gcPhoneRTC_send_offer', function (data)


-- end)


-- RegisterNUICallback('gcPhoneRTC_send_answer', function (data)


-- end)



function onCallFixePhone (source, phone_number, rtcOffer, extraData)
	local indexCall = lastIndexCall
	lastIndexCall = lastIndexCall + 1
	
	local hidden = string.sub(phone_number, 1, 1) == '#'
	if hidden == true then
		phone_number = string.sub(phone_number, 2)
	end
	local sourcePlayer = tonumber(source)
	local srcIdentifier = getPlayerID(source)
	
	local srcPhone = ''
	if extraData ~= nil and extraData.useNumber ~= nil then
		srcPhone = extraData.useNumber
	else
		srcPhone = getNumberPhone(srcIdentifier)
	end
	
	AppelsEnCours[indexCall] = {
		id = indexCall,
		transmitter_src = sourcePlayer,
		transmitter_num = srcPhone,
		receiver_src = nil,
		receiver_num = phone_number,
		is_valid = false,
		is_accepts = false,
		hidden = hidden,
		rtcOffer = rtcOffer,
		extraData = extraData,
		coords = FixePhone[phone_number].coords
	}
	
	PhoneFixeInfo[indexCall] = AppelsEnCours[indexCall]
	
	TriggerClientEvent('irrp_phone:notifyFixePhoneChange', -1, PhoneFixeInfo)
	TriggerClientEvent('irrp_phone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true)
end



function onAcceptFixePhone(source, infoCall, rtcAnswer)
	local id = infoCall.id
	
	AppelsEnCours[id].receiver_src = source
	if AppelsEnCours[id].transmitter_src ~= nil and AppelsEnCours[id].receiver_src~= nil then
		AppelsEnCours[id].is_accepts = true
		AppelsEnCours[id].forceSaveAfter = true
		AppelsEnCours[id].rtcAnswer = rtcAnswer
		PhoneFixeInfo[id] = nil
		TriggerClientEvent('irrp_phone:notifyFixePhoneChange', -1, PhoneFixeInfo)
		TriggerClientEvent('irrp_phone:acceptCall', AppelsEnCours[id].transmitter_src, AppelsEnCours[id], true)
		TriggerClientEvent('irrp_phone:acceptCall', AppelsEnCours[id].receiver_src, AppelsEnCours[id], false)
		saveAppels(AppelsEnCours[id])
	end
end

function onRejectFixePhone(source, infoCall, rtcAnswer)
	local id = infoCall.id
	PhoneFixeInfo[id] = nil
	TriggerClientEvent('irrp_phone:notifyFixePhoneChange', -1, PhoneFixeInfo)
	TriggerClientEvent('irrp_phone:rejectCall', AppelsEnCours[id].transmitter_src, source)
	if AppelsEnCours[id].is_accepts == false then
		saveAppels(AppelsEnCours[id])
	end
	AppelsEnCours[id] = nil
	
end

AddEventHandler('esx:onRemoveInventoryItem', function(source, item, count)
	if item.name == 'phone' and item.count < 1 then
		TriggerClientEvent('irrp_phone:phoneRemoved', source)
	end
end)

--------- //////// CALL Backs //////// ----------------------

ESX.RegisterServerCallback('gcphone:getbank', function(source, cb)

	local xPlayer = ESX.GetPlayerFromId(source)

	cb(xPlayer.bank >= 2000)

end)
--[[ESX.RegisterServerCallback('irrp_phone:haveMoney', function(source, cb)

	local xPlayer = ESX.GetPlayerFromId(source)
	local xBank = xPlayer.bank

	if x

	cb()

end)]]

ESX.RegisterServerCallback('gcphone:doeshavephone', function(source, cb)

	local xPlayer = ESX.GetPlayerFromId(source)
	local phone = xPlayer.getInventoryItem("phone")
	if phone ~= nil and phone.count > 0 then
		cb(true)
	else
		cb(false)
	end

end)

ESX.RegisterServerCallback('irrp_phone:getitemcount', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer.getInventoryItem('phone').count >= 1 then
        cb(true)
    else
        cb(false)
    end
end)
RegisterCommand('numget', function(source, args)
	local number = getPhoneNumber(source)
	print(number)
end)

RegisterNetEvent("irrp_phone:transferMoney")
AddEventHandler("irrp_phone:transferMoney", function(tPlayerId, amount)

	-- Get Money Sender Values
	local _source = source
	local xPlayer = ESX.GetPlayerFromId(_source)
	local xMoney = xPlayer.money
	local xBank = xPlayer.bank
	local xIdentifier = xPlayer.identifier

	-- Get Money Receiver Values
	local tPlayer = ESX.GetPlayerFromId(tPlayerId)
	local tMoney = tPlayer.money
	local tBank = tPlayer.bank
	local tIdentifier = tPlayer.identifier
	
	if (_source == tPlayerId) or (xPlayer == tPlayer) then
		return TriggerClientEvent('esx:showNotification', _source, 'Shoma Nemitavanid Be Hesab Khod Pool Variz Konid .') 
	else
		if (xBank - amount) >= 0 then
			if amount >= 5000 then
				xPlayer.removeBank(amount)
				tPlayer.addBank(amount)
				TriggerClientEvent('esx:showNotification', _source, 'Shoma Be ID : ~g~'..tPlayerId..'~w~, ~r~'..amount..'~w~ Dollar Variz Kardid.')
				TriggerClientEvent('esx:showNotification', tPlayerId, 'ID : ~g~'.._source..'~w~, Be Hesab Shoma ~r~'..amount..'~w~ Dollar Variz Kard..')
			else
				return TriggerClientEvent('esx:showNotification', _source, 'Hade Aghal Pool Baraye Enteghal ~g~5000$ ~w~Ast .')
			end

		else
			return TriggerClientEvent('esx:showNotification', _source, 'Shoma Pool Kafi Nadarid.')
		end
	end

end)