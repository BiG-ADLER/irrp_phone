phone = false
phoneId = 0

frontCam = false

function CellFrontCamActivate(activate)
	return Citizen.InvokeNative(0x2491A93618B7D838, activate)
end

function camThread(cb, data)
  if takePhoto then return cb(json.encode({ url = nil })) end
  local wasUsingMouse = false

  if useMouse then
	wasUsingMouse = true
	useMouse = false
  else
	SetNuiFocus(false, false)
  end

  -- go into rockstar phone
  CreateMobilePhone(1)
  CellCamActivate(true, true)

  -- Change values
  local disableAction = false
--   local runLast = true
 --   local canceld = false
  takePhoto = true
  TriggerEvent("status:togglePhone", false)

  while takePhoto do
    Citizen.Wait(5)
	if IsControlJustPressed(1, 27) and not disableAction then -- Toogle Mode
		frontCam = not frontCam
		CellFrontCamActivate(frontCam)
    elseif IsControlJustPressed(1, 177) and not disableAction then -- CANCEL
		-- Destroy Phone
		DestroyMobilePhone()
		CellCamActivate(false, false)

		-- Modify Variables
		takePhoto = false
		-- canceld = true
		if wasUsingMouse then wasUsingMouse = false useMouse = true end
		runForce()

		cb(json.encode({ url = nil }))
		break
    elseif IsControlJustPressed(1, 176) and not disableAction and data then -- TAKE.. PIC
		disableAction = true
		-- runLast = false
		showLoadingPromt("Uploading Image...")
	    exports['screenshot-basic']:requestScreenshotUpload(data.url, data.field, {encoding = 'webp', quality = 0.35}, function(url)
			-- Destory rockstart camera
			DestroyMobilePhone()
			CellCamActivate(false, false)

			-- Remove loading and state shit
			takePhoto = false
			RemoveLoadingPrompt()

			-- Open phone and get ready to show image which sent atuomatically
			if wasUsingMouse then wasUsingMouse = false useMouse = true end
			runForce()

			-- return image
			cb(json.encode({ url = url }))
        end)

      break
	end

    if not disableAction then
      HideHudComponentThisFrame(7)
      HideHudComponentThisFrame(8)
      HideHudComponentThisFrame(9)
      HideHudComponentThisFrame(6)
      HideHudComponentThisFrame(19)
      HideHudAndRadarThisFrame()
    end
		
  end
   -- Loop Ended

	-- if canceld or wasUsingMouse and runLast then
	-- 	if wasUsingMouse then
	-- 		useMouse = true
	-- 	end
	-- 	menuIsOpen = false
	-- 	TooglePhone()
	-- end

end

function runForce()
	menuIsOpen = false
	TooglePhone()
	PhonePlayAnim('text', false, true)
	TriggerEvent("status:togglePhone", true)
end