--====================================================================================
-- #Author: Jonathan D @ Gannon
-- Modified by:
-- BTNGaming
-- Chip
-- DmACK (f.sanllehiromero@uandresbello.edu)
--====================================================================================

-- Configuration
local KeyToucheCloseEvent = {
  ["return"] =  "Enter",
	["back"] =  "Backspace",
	["up"] =  "ArrowUp",
	["right"] =  "ArrowRight",
	["left"] =  "ArrowLeft",
	["down"] =  "ArrowDown"
}

menuIsOpen = false
local contacts = {}
local blockList = {}
local messages = {}
local gpsBlips = {}
local myPhoneNumber = ''
local isDead = false
local USE_RTC = false
useMouse = false
local ignoreFocus = false
takePhoto = false
local hasFocus = false
local TokoVoipID = nil

local PhoneInCall = {}
local currentPlaySound = false
local soundDistanceMax = 8.0

ESX = nil
Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
  end
end)


local threadCreated
RegisterNetEvent('irrp_phone:mouseStatusChanged')
AddEventHandler('irrp_phone:mouseStatusChanged', function(status)
    if status then
      if not threadCreated then
        threadCreated = true
        InPutLock()
        SetNuiFocusKeepInput(true)
      end
    else
      if threadCreated then
        threadCreated = false
        SetNuiFocusKeepInput(false)
      end
    end
end)

RegisterNetEvent('irrp_phone:setMenuStatus')
AddEventHandler('irrp_phone:setMenuStatus', function(opened)
    if opened then
      exports.dpemotes:performState(false)
    else
      exports.dpemotes:performState(true)
    end
end)

function InPutLock()
  Citizen.CreateThread(function()
     while threadCreated do
      Citizen.Wait(5)
			DisableAllControlActions(0)
      EnableControlAction(0, 249, true) -- N  
      EnableControlAction(0, 32, true) -- W
      EnableControlAction(0, 34, true) -- A
      EnableControlAction(0, 31, true) -- S
      EnableControlAction(0, 30, true) -- D
      EnableControlAction(0, 59, true) -- Enable steering in vehicle
      EnableControlAction(0, 71, true) -- Enable driving forward in vehicle
      EnableControlAction(0, 72, true) -- Enable reversing in vehicle
      EnableControlAction(0, 21, true) -- LSHIFT
      EnableControlAction(0, 22, true) -- SPACE
      EnableControlAction(0, 23, true) -- F
      EnableControlAction(0, 75, true) -- Exit Vehicle
     end
  end)
end

AddEventHandler('esx:onPlayerDeath', function()
  if menuIsOpen then
    menuIsOpen = false
    TriggerEvent('irrp_phone:setMenuStatus', false)
    SendNUIMessage({show = false})
    PhonePlayOut()
  end
end)

-- AddEventHandler('esx:playerLoaded', function()
--   TriggerServerEvent('irrp_phone:allUpdate')
-- end)
RegisterCommand('phoneup', function(source, args) -- Toggles Phone Via Command. Can coment out.
  ESX.TriggerServerCallback('irrp_phone:getitemcount', function(has)
    if has then
      TooglePhone()
    else
      ESX.ShowNotification("Shoma ~o~Goshi ~w~nadarid ya khamosh ast!")
    end
  end)
 end)

--====================================================================================
--  
--====================================================================================
Citizen.CreateThread(function()
  while true do
    Citizen.Wait(500)
    
    if menuIsOpen then
      if useMouse == true and hasFocus == ignoreFocus then
        local nuiFocus = not hasFocus
        SetNuiFocus(nuiFocus, nuiFocus)
        hasFocus = nuiFocus
        if hasFocus then TriggerEvent('irrp_phone:mouseStatusChanged', true) end
      elseif useMouse == false and hasFocus == true then
        SetNuiFocus(false, false)
        hasFocus = false
        TriggerEvent('irrp_phone:mouseStatusChanged', false)
      end

      local ped = PlayerPedId()
      if IsPedArmed(ped, 7) and not IsPedInAnyVehicle(ped) then
        menuIsOpen = false
        TriggerEvent('irrp_phone:setMenuStatus', false)
        PhonePlayOut()
        SendNUIMessage({show = false})
        TriggerEvent('irrp_phone:mouseStatusChanged', false)
        SetNuiFocus(false, false)
        hasFocus = false
      end
    else
      if hasFocus then
        SetNuiFocus(false, false)
        hasFocus = false
        TriggerEvent('irrp_phone:mouseStatusChanged', false)
      end
    end

  end
end)

AddEventHandler("onKeyDown", function(key)
  if key == "f1" and ESX.GetPlayerData()['IsDead'] ~= 1 then
    ESX.TriggerServerCallback('irrp_phone:getitemcount', function(has) 
      if has then
        TooglePhone()
      else
        ESX.ShowNotification("Shoma ~o~Goshi ~w~nadarid ya khamosh ast!")
      end
    end)
    if takePhoto then return ESX.ShowNotification("Shoma dar hale aks gereftan hastid!") end
  end

  local event = KeyToucheCloseEvent[key]
  if menuIsOpen and event then
    SendNUIMessage({keyUp = event})
  end
end)

--====================================================================================
-- GPS Blips
--====================================================================================
function styleBlip(blip, type, number, player)
  local blipLabel = '#' .. number
  local blipLabelPrefix = 'Phone GPS Location: '

  -- [[ type 0 ]] --
  if (type == 0) then
    local isContact = false
    for k,contact in pairs(contacts) do
      if contact.number == number then
        blipLabel = contacts[k].display .. ' (' .. blipLabel .. ')'
        isContact = true
        break
      end
    end

    ShowCrewIndicatorOnBlip(blip, true)
    if (isContact == true) then
      SetBlipColour(blip, 2)
    else
      SetBlipColour(blip, 4)
    end
  end

  -- [[ type 1 ]] --
  if (type == 1) then
    blipLabelPrefix = 'Emergency SMS Sender Location: '
    ShowCrewIndicatorOnBlip(blip, true)
    SetBlipColour(blip, 5)
  end

  BeginTextCommandSetBlipName("STRING")
  AddTextComponentString(blipLabelPrefix .. blipLabel)
  EndTextCommandSetBlipName(blip)

  SetBlipSecondaryColour(blip, 255, 0, 0)
  SetBlipScale(blip, 0.9)
end

-- s

--====================================================================================
--  Activate or Deactivate an application (appName => config.json)
--====================================================================================
RegisterNetEvent('irrp_phone:setEnableApp')
AddEventHandler('irrp_phone:setEnableApp', function(appName, enable)
  SendNUIMessage({event = 'setEnableApp', appName = appName, enable = enable })
end)

--====================================================================================
--  Fixed call management
--====================================================================================
function startFixeCall (fixeNumber)
  local number = ''
  DisplayOnscreenKeyboard(1, "FMMC_MPM_NA", "", "", "", "", "", 10)
  while (UpdateOnscreenKeyboard() == 0) do
    DisableAllControlActions(0);
    Wait(0);
  end
  if (GetOnscreenKeyboardResult()) then
    number =  GetOnscreenKeyboardResult()
  end
  if number ~= '' then
    TriggerEvent('irrp_phone:autoCall', number, {
      useNumber = fixeNumber
    })
    PhonePlayCall(true)
  end
end

function TakeAppel (infoCall)
  TriggerEvent('irrp_phone:autoAcceptCall', infoCall)
end

RegisterNetEvent("irrp_phone:notifyFixePhoneChange")
AddEventHandler("irrp_phone:notifyFixePhoneChange", function(_PhoneInCall)
  PhoneInCall = _PhoneInCall
end)

--[[
  Displays information when the player is near a fixed phone (Static location phone like MRPD Desk Phone)
--]]
function showFixePhoneHelper (coords)
  for number, data in pairs(Config.FixePhone) do
    local dist = GetDistanceBetweenCoords(
      data.coords.x, data.coords.y, data.coords.z,
      coords.x, coords.y, coords.z, 1)
    if dist <= 2.5 then
      SetTextComponentFormat("STRING")
      AddTextComponentString(_U('use_fixed', data.name, number))
      DisplayHelpTextFromStringLabel(0, 0, 0, -1)
      if IsControlJustPressed(1, Config.KeyTakeCall) then
        startFixeCall(number)
      end
      break
    end
  end
end

-- RegisterNetEvent('irrp_phone:register_FixePhone')
-- AddEventHandler('irrp_phone:register_FixePhone', function(phone_number, data)
--   Config.FixePhone[phone_number] = data
-- end)

-- local registeredPhones = {}
-- Citizen.CreateThread(function()
--   if not Config.AutoFindFixePhones then return end
--   while not ESX do Citizen.Wait(0) end
--   while true do
--     local playerPed = GetPlayerPed(-1)
--     local coords = GetEntityCoords(playerPed)
--     for _, key in pairs({'p_phonebox_01b_s', 'p_phonebox_02_s', 'prop_phonebox_01a', 'prop_phonebox_01b', 'prop_phonebox_01c', 'prop_phonebox_02', 'prop_phonebox_03', 'prop_phonebox_04'}) do
--       local closestPhone = GetClosestObjectOfType(coords.x, coords.y, coords.z, 25.0, key, false)
--       if closestPhone ~= 0 and not registeredPhones[closestPhone] then
--         local phoneCoords = GetEntityCoords(closestPhone)
--         number = ('0%.2s-%.2s%.2s'):format(math.abs(phoneCoords.x*100), math.abs(phoneCoords.y * 100), math.abs(phoneCoords.z *100))
--         if not Config.FixePhone[number] then
--           TriggerServerEvent('irrp_phone:register_FixePhone', number, phoneCoords)
--         end
--         registeredPhones[closestPhone] = true
--       end
--     end
--     Citizen.Wait(1000)
--   end
-- end)

-- Citizen.CreateThread(function ()
--   local mod = 0
--   while true do
     
--     local playerPed   = PlayerPedId()
--     local coords      = GetEntityCoords(playerPed)
--     local inRangeToActivePhone = false
--     local inRangedist = 0
--     for i, _ in pairs(PhoneInCall) do 
--         local dist = GetDistanceBetweenCoords(
--           PhoneInCall[i].coords.x, PhoneInCall[i].coords.y, PhoneInCall[i].coords.z,
--           coords.x, coords.y, coords.z, 1)
--         if (dist <= soundDistanceMax) then
--           DrawMarker(1, PhoneInCall[i].coords.x, PhoneInCall[i].coords.y, PhoneInCall[i].coords.z,
--               0,0,0, 0,0,0, 0.1,0.1,0.1, 0,255,0,255, 0,0,0,0,0,0,0)
--           inRangeToActivePhone = true
--           inRangedist = dist
--           if (dist <= 1.5) then 
--             SetTextComponentFormat("STRING")
--             AddTextComponentString(_U('key_answer'))
--             DisplayHelpTextFromStringLabel(0, 0, 1, -1)
--             if IsControlJustPressed(1, Config.KeyTakeCall) then
--               PhonePlayCall(true)
--               TakeAppel(PhoneInCall[i])
--               PhoneInCall = {}
--               StopSoundJS('ring2.ogg')
--             end
--           end
--           break
--         end
--     end
--     if inRangeToActivePhone == false then
--       showFixePhoneHelper(coords)
--     end
--     if inRangeToActivePhone == true and currentPlaySound == false then
--       PlaySoundJS('ring2.ogg', 0.2 + (inRangedist - soundDistanceMax) / -soundDistanceMax * 0.8 )
--       currentPlaySound = true
--     elseif inRangeToActivePhone == true then
--       mod = mod + 1
--       if (mod == 15) then
--         mod = 0
--         SetSoundVolumeJS('ring2.ogg', 0.2 + (inRangedist - soundDistanceMax) / -soundDistanceMax * 0.8 )
--       end
--     elseif inRangeToActivePhone == false and currentPlaySound == true then
--       currentPlaySound = false
--       StopSoundJS('ring2.ogg')
--     end
--     Citizen.Wait(0)
--   end
-- end)

function PlaySoundJS(sound, volume)
  SendNUIMessage({ event = 'playSound', sound = sound, volume = volume })
end

function SetSoundVolumeJS(sound, volume)
  SendNUIMessage({ event = 'setSoundVolume', sound = sound, volume = volume})
end

function StopSoundJS(sound)
  SendNUIMessage({ event = 'stopSound', sound = sound})
end

RegisterNetEvent("irrp_phone:forceOpenPhone")
AddEventHandler("irrp_phone:forceOpenPhone", function(_myPhoneNumber)
  if menuIsOpen == false then
    TooglePhone()
  end
end)
 
--====================================================================================
--  Events
--====================================================================================
RegisterNetEvent("irrp_phone:myPhoneNumber")
AddEventHandler("irrp_phone:myPhoneNumber", function(_myPhoneNumber)
  myPhoneNumber = _myPhoneNumber
  SendNUIMessage({event = 'updateMyPhoneNumber', myPhoneNumber = myPhoneNumber})
end)

RegisterNetEvent("irrp_phone:changePhoneStatus")
AddEventHandler("irrp_phone:changePhoneStatus", function(status)
    isPhoneOff = status
    if isPhoneOff then TriggerEvent('esx_streetlabel:removeGPS') else TriggerEvent('esx_streetlabel:addGPS') end
    if isPhoneOff and menuIsOpen then
        TriggerEvent('irrp_phone:phoneRemoved')
    end
end)

RegisterNetEvent("irrp_phone:contactList")
AddEventHandler("irrp_phone:contactList", function(_contacts)
  SendNUIMessage({event = 'updateContacts', contacts = _contacts})
  contacts = _contacts
end)

RegisterNetEvent("irrp_phone:blockList")
AddEventHandler("irrp_phone:blockList", function(_list)
  SendNUIMessage({event = 'updateBlockList', list = _list})
  blockList = _list
end)

RegisterNetEvent("irrp_phone:allMessage")
AddEventHandler("irrp_phone:allMessage", function(allmessages)
  SendNUIMessage({event = 'updateMessages', messages = allmessages})
  messages = allmessages
end)

RegisterNetEvent("irrp_phone:getBourse")
AddEventHandler("irrp_phone:getBourse", function(bourse)
  SendNUIMessage({event = 'updateBourse', bourse = bourse})
end)

RegisterNetEvent('vSync:updateWeather')
AddEventHandler('vSync:updateWeather', function(NewWeather, newblackout)
  SendNUIMessage({event = 'updateWeather', weather = NewWeather})
end)

local formatDict = {
  police = "Police Department",
  ambulacne = "Emergency Medical Service",
  mecano = "Los Santos Customs",
  taxi = "Downtown Cab Co.",
  weazel = "Weazel News",
  restaurant = "Restaurant"
}
RegisterNetEvent("irrp_phone:receiveMessage")
AddEventHandler("irrp_phone:receiveMessage", function(message, jobData)
  -- SendNUIMessage({event = 'updateMessages', messages = messages})
  SendNUIMessage({event = 'newMessage', message = message})
  table.insert(messages, message)
  if message.owner == 0 --[[and LocalPlayer.state.phoneActive]] then

    if not jobData then
      local contact = getContactFromNumber(message.transmitter)
      phoneNotifiction("New Message", ("~g~%s~w~ texted you"):format((contact and contact.display) or message.transmitter))
    else
      phoneNotifiction("New Message", ("New text form ~g~%s~w~"):format(formatDict[jobData.job] or jobData.job))
    end

    if not jobData or not jobData.silence then
      PlaySoundJS("notification.mp3")
    end
  end
end)

--====================================================================================
--  Function client | Contacts
--====================================================================================
function addContact(display, num) 
--  if num:len() ~= 11 then return ESX.ShowNotification(("Shomareyi ke vared kardid, ~o~%s~w~ ragham nist"):format(11)) end
  local isNumber = tonumber(num)
  if not isNumber then return ESX.ShowNotification("Shoma dar ghesmat ~g~shomare telephone~w~ faghat mitavanid ~o~adad~w~ vared konid!") end
  TriggerServerEvent('irrp_phone:addContact', display, num)
end

function deleteContact(num) 
    TriggerServerEvent('irrp_phone:deleteContact', num)
end
--====================================================================================
--  Function client | Messages
--====================================================================================
function sendMessage(num, message)
  TriggerServerEvent('irrp_phone:sendMessage', num, message)
end

function deleteMessage(msgId)
  TriggerServerEvent('irrp_phone:deleteMessage', msgId)
  for k, v in ipairs(messages) do 
    if v.id == msgId then
      table.remove(messages, k)
      SendNUIMessage({event = 'updateMessages', messages = messages})
      return
    end
  end
end

function deleteMessageContact(num)
  TriggerServerEvent('irrp_phone:deleteMessageNumber', num)
end

function deleteAllMessage()
  TriggerServerEvent('irrp_phone:deleteAllMessage')
end

function setReadMessageNumber(num)
  local messageIDs = {}
  for k, v in ipairs(messages) do 
    if v.transmitter == num then
      table.insert(messageIDs, v.id)
      v.isRead = 1
    end
  end
  
  if #messageIDs > 0 then
    TriggerServerEvent('irrp_phone:setReadMessageNumber', num)
  end
  -- TriggerServerEvent('irrp_phone:setReadMessageNumber', num)
end

function requestAllMessages()
  TriggerServerEvent('irrp_phone:requestAllMessages')
end

function requestAllContact()
  TriggerServerEvent('irrp_phone:requestAllContact')
end

--====================================================================================
--  Function client | Appels
--====================================================================================
local aminCall = false
local inCall = false

RegisterNetEvent("irrp_phone:waitingCall")
AddEventHandler("irrp_phone:waitingCall", function(infoCall, initiator)
  SendNUIMessage({event = 'waitingCall', infoCall = infoCall, initiator = initiator})
  if initiator == true then
    PhonePlayCall()
    if menuIsOpen == false then
      TooglePhone()
    end
  end
end)

RegisterNetEvent("irrp_phone:acceptCall")
AddEventHandler("irrp_phone:acceptCall", function(infoCall, initiator)
  if inCall == false and USE_RTC == false then
    inCall = true
    exports["pma-voice"]:setCallChannel(infoCall.id + 1)
end
  if menuIsOpen == false then 
    TooglePhone()
  end
  PhonePlayCall()
  SendNUIMessage({event = 'acceptCall', infoCall = infoCall, initiator = initiator})
end)

RegisterNetEvent("irrp_phone:rejectCall")
AddEventHandler("irrp_phone:rejectCall", function(infoCall)
  if inCall == true then
    inCall = false
    exports["pma-voice"]:setCallChannel(0)
  end
  local calling = isDoingCall()
  if calling == true then
    PhonePlayText()
  end
  SendNUIMessage({event = 'rejectCall', infoCall = infoCall})
end)

RegisterNetEvent("irrp_phone:historiqueCall")
AddEventHandler("irrp_phone:historiqueCall", function(historique)
  SendNUIMessage({event = 'historiqueCall', historique = historique})
end)


function startCall (phone_number, rtcOffer, extraData)
  print('call dad :P')
  if rtcOffer == nil then
    rtcOffer = ''
  end
  TriggerServerEvent('irrp_phone:startCall', phone_number, rtcOffer, extraData)
end

function acceptCall (infoCall, rtcAnswer)
  TriggerServerEvent('irrp_phone:acceptCall', infoCall, rtcAnswer)
end

function rejectCall(infoCall)
  if infoCall and infoCall.id > 0 then
    TriggerServerEvent('irrp_phone:rejectCall', infoCall)
  else
    TriggerEvent("irrp_phone:rejectCall", {id = -1})
  end
end

function requestHistoriqueCall() 
  TriggerServerEvent('irrp_phone:getHistoriqueCall')
end

function appelsDeleteHistorique (num)
  TriggerServerEvent('irrp_phone:appelsDeleteHistorique', num)
end

function appelsDeleteAllHistorique ()
  TriggerServerEvent('irrp_phone:appelsDeleteAllHistorique')
end
  

--====================================================================================
--  Event NUI - Appels
--====================================================================================

RegisterNUICallback('startCall', function (data, cb)
  startCall(data.numero, data.rtcOffer, data.extraData)
  cb(true)
end)

RegisterNUICallback('acceptCall', function (data, cb)
  acceptCall(data.infoCall, data.rtcAnswer)
  cb(true)
end)
RegisterNUICallback('rejectCall', function (data, cb)
  rejectCall(data.infoCall)
  cb(true)
end)

RegisterNUICallback('notififyUseRTC', function (use, cb)
  USE_RTC = use
  if USE_RTC == true and inCall == true then
    inCall = false
    Citizen.InvokeNative(0xE036A705F989E049)
    if Config.UseTokoVoIP then
--      exports.tokovoip_script:removePlayerFromRadio(TokoVoipID)
      TokoVoipID = nil
    else
      NetworkSetTalkerProximity(2.5)
    end
  end
  cb(true)
end)

RegisterNUICallback('onCandidates', function (data, cb)
  TriggerServerEvent('irrp_phone:candidates', data.id, data.candidates)
  cb(true)
end)

RegisterNetEvent("irrp_phone:candidates")
AddEventHandler("irrp_phone:candidates", function(candidates)
  SendNUIMessage({event = 'candidatesAvailable', candidates = candidates})
end)

RegisterNetEvent('irrp_phone:autoCall')
AddEventHandler('irrp_phone:autoCall', function(number, extraData)
  if number ~= nil then
    SendNUIMessage({ event = "autoStartCall", number = number, extraData = extraData})
  end
end)

RegisterNetEvent('irrp_phone:autoCallNumber')
AddEventHandler('irrp_phone:autoCallNumber', function(data)
  TriggerEvent('irrp_phone:autoCall', data.number)
end)

RegisterNetEvent('irrp_phone:autoAcceptCall')
AddEventHandler('irrp_phone:autoAcceptCall', function(infoCall)
  SendNUIMessage({ event = "autoAcceptCall", infoCall = infoCall})
end)

--====================================================================================
--  Management of NUI events
--==================================================================================== 
RegisterNUICallback('log', function(data, cb)
  print(ESX.dump(data))
  cb(true)
end)
RegisterNUICallback('focus', function(data, cb)
  cb(true)
end)
RegisterNUICallback('blur', function(data, cb)
  cb(true)
end)
RegisterNUICallback('reponseText', function(data, cb)
  local disabled = false
  if useMouse then disabled = true SetNuiFocus(false, false) end

  local limit = data.limit or 255
  local text = data.text or ''

  AddTextEntry('FMMC_MPM_NA', data.title or "Input:")
  DisplayOnscreenKeyboard(1, "FMMC_MPM_NA", "", text, "", "", "", limit)
  while (UpdateOnscreenKeyboard() == 0) do
      DisableAllControlActions(0);
      Wait(0);
  end
  if (GetOnscreenKeyboardResult()) then
      text = GetOnscreenKeyboardResult()
  end
  cb(json.encode({text = text}))

  if disabled then SetNuiFocus(true, true) end
end)

--====================================================================================
--  Event - Messages
--====================================================================================
RegisterNUICallback('getMessages', function(data, cb)
  cb(json.encode(messages))
end)
RegisterNUICallback('sendMessage', function(data, cb)
  if data.message == '%pos%' then
    local myPos = GetEntityCoords(PlayerPedId())
    data.message = 'GPS: ' .. myPos.x .. ', ' .. myPos.y
    data.gpsData = myPos
  end
  TriggerServerEvent('irrp_phone:sendMessage', data.phoneNumber, data.message, data.gpsData)
  cb(true)
end)
RegisterNUICallback('deleteMessage', function(data, cb)
  deleteMessage(data.id)
  cb(true)
end)
RegisterNUICallback('deleteMessageNumber', function (data, cb)
  deleteMessageContact(data.number)
  cb(true)
end)
RegisterNUICallback('deleteAllMessage', function (data, cb)
  deleteAllMessage()
  cb(true)
end)
RegisterNUICallback('setReadMessageNumber', function (data, cb)
  setReadMessageNumber(data.number)
  cb(true)
end)
--====================================================================================
--  Event - Contacts
--====================================================================================
RegisterNUICallback('addContact', function(data, cb) 
  addContact(data.display, data.phoneNumber)
  cb(true)
end)
RegisterNUICallback('updateContact', function(data, cb)
  TriggerServerEvent('irrp_phone:updateContact', data.id, data.display, data.phoneNumber)
  cb(true)
end)
RegisterNUICallback('deleteContact', function(data, cb)
  TriggerServerEvent('irrp_phone:deleteContact', data.id)
  cb(true)
end)
RegisterNUICallback('getContacts', function(data, cb)
  cb(json.encode(contacts))
end)
RegisterNUICallback('getBlockList', function(data, cb)
  cb(json.encode(blockList))
end)
RegisterNUICallback('setGPS', function(data, cb)
  SetNewWaypoint(tonumber(data.x), tonumber(data.y))
  cb(true)
end)
--====================================================================================
--  Event - Block / Unblock number
--====================================================================================
RegisterNUICallback('blockNumber', function(number, cb)
  TriggerServerEvent("irrp_phone:blockNumber", number)
  cb(true)
end)

RegisterNUICallback('unblockNumber', function(number, cb)
  TriggerServerEvent("irrp_phone:unblockNumber", number)
  cb(true)
end)

-- Add security for event (leuit#0100)
RegisterNUICallback('callEvent', function(data, cb)
    if data.data ~= nil then 
      TriggerEvent(data.eventName, data.data)
    else
      TriggerEvent(data.eventName)
    end
  cb(true)
end)
RegisterNUICallback('useMouse', function(um, cb)
  if not um then TriggerEvent('irrp_phone:mouseStatusChanged', false) end
  useMouse = um
  cb(true)
end)
RegisterNUICallback('deleteALL', function(data, cb)
  TriggerServerEvent('irrp_phone:deleteALL')
  cb(true)
end)

function TooglePhone()
  if IsPedArmed(PlayerPedId(), 7) then return ESX.ShowNotification("Dast shoma ~r~por ast~w~ ~o~nemitavanid~w~ goshi dar biyavarid!") end

  menuIsOpen = not menuIsOpen
  SendNUIMessage({show = menuIsOpen})
  if menuIsOpen == true then 
    PhonePlayIn()
    TriggerEvent('irrp_phone:setMenuStatus', true)
  else
    PhonePlayOut()
    TriggerEvent('irrp_phone:setMenuStatus', false)
  end
end

RegisterNUICallback('faketakePhoto', function(data, cb)
  camThread(cb)
end)

RegisterNUICallback('closePhone', function(data, cb)
  menuIsOpen = false
  TriggerEvent('irrp_phone:setMenuStatus', false)
  SendNUIMessage({show = false})
  PhonePlayOut()
  cb(true)
end)

----------------------------------
---------- GESTION APPEL ---------
----------------------------------
RegisterNUICallback('appelsDeleteHistorique', function (data, cb)
  appelsDeleteHistorique(data.numero)
  cb(true)
end)
RegisterNUICallback('appelsDeleteAllHistorique', function (data, cb)
  appelsDeleteAllHistorique(data.infoCall)
  cb(true)
end)

----------------------------------
---------- GESTION VIA WEBRTC ----
----------------------------------
RegisterNetEvent('irrp_phone:phoneRemoved')
AddEventHandler('irrp_phone:phoneRemoved', function()
  if menuIsOpen then
    menuIsOpen = false
    TriggerEvent('irrp_phone:setMenuStatus', false)
    SendNUIMessage({show = false})
    PhonePlayOut()
  end
end)

-- AddEventHandler('onClientResourceStart', function(res)
--   DoScreenFadeIn(300)
--   if res == "gcphone" then
--       TriggerServerEvent('irrp_phone:allUpdate')
--       -- Try again in 2 minutes (Recovers bugged phone numbers)
--       Citizen.Wait(120000)
--       TriggerServerEvent('irrp_phone:allUpdate')
--   end
-- end)


RegisterNUICallback('setIgnoreFocus', function (data, cb)
  ignoreFocus = data.ignoreFocus
  cb(true)
end)

RegisterNUICallback('takePhoto', function(data, cb)
  camThread(cb, data)
end)

function showLoadingPromt(label)
  AddTextEntry("CUSTOMLOADSTR", label)
  Citizen.CreateThread(function()
    BeginTextCommandBusyspinnerOn("CUSTOMLOADSTR")
    EndTextCommandBusyspinnerOn(4)
  end)
end

function getContactFromNumber(number)
  for index, contact in ipairs(contacts) do
    if contact.number == number then
      return contact
    end
  end

  return false
end
RegisterCommand('not', function(source, args)
  phoneNotifiction(subTitle, 'salam')
end)
function phoneNotifiction(subTitle, message)
  ESX.ShowAdvancedNotification("Phone", subTitle, message, "CHAR_CHAT_CALL", 1)
end

function isPhoneOpen()
  return menuIsOpen
end
exports("isPhoneOpen", isPhoneOpen)

function MouseThreadState()
  return threadCreated
end
exports("MouseThreadState", MouseThreadState)

function TakingPhoto()
  return takePhoto
end
exports("TakingPhoto", TakingPhoto)