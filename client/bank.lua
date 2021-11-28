ESX = nil

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Citizen.Wait(0)
    end
end)

RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(xPlayer)
    -- local time = exports.vSync:GetTime()
    -- SendNUIMessage({event = 'UpdateTime', time = time.hour .. ":" .. time.minute})
    TriggerServerEvent('irrp_phone:allUpdate')
    SendNUIMessage({event = 'updateBankbalance', banking = xPlayer.bank})
end)

-- local lastminute = 0
-- AddEventHandler("game:updateTime", function(time)
--     if time.minute ~= lastminute then
--         lastminute = time.minute
--         SendNUIMessage({event = 'UpdateTime', time = time.hour .. ":" .. time.minute})
--     end
-- end)

RegisterNetEvent('irrp_phone:setUiPhone')
AddEventHandler('irrp_phone:setUiPhone', function(amount)
    TriggerServerEvent('irrp_phone:allUpdate')
    SendNUIMessage({event = 'updateBankbalance', banking = amount})
end)

--===============================================
--==         Transfer Event                    ==
--===============================================
AddEventHandler('irrp_phone:transferMoney', function(data)

    ESX.TriggerServerCallback("gcphone:getbank", function(haveMoney)
        if haveMoney then
            TriggerServerEvent('irrp_phone:transferMoney', tonumber(data.id), tonumber(data.amount))
        else
            ESX.ShowNotification('Hade Aghal Mablagh Enteghal Pool 2000$ Ast.')
        end
    end)

end)