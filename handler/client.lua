RegisterNetEvent('esx_addons_irrp_phone:call')
AddEventHandler('esx_addons_irrp_phone:call', function(message, number)
  local playerPed   = GetPlayerPed(-1)
  local coords      = GetEntityCoords(playerPed)
  --local message     = data.message
  --local number      = data.number
  if message == nil then
    DisplayOnscreenKeyboard(1, "FMMC_MPM_NA", "", "", "", "", "", 200)
    while (UpdateOnscreenKeyboard() == 0) do
      DisableAllControlActions(0);
      Wait(0);
    end
    if (GetOnscreenKeyboardResult()) then
      message =  GetOnscreenKeyboardResult()
    end
  end
  if message ~= nil and message ~= "" then
    TriggerServerEvent('esx_addons_gcpirrphone:startCairrpll', number, message, {
      x = coords.x,
      y = coords.y,
      z = coords.z
    })
  end
end)
