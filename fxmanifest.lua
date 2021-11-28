fx_version 'bodacious'
game 'gta5'

ui_page 'html/index.html'

files {
	'html/index.html',
	'html/static/css/app.css',
	'html/static/js/app.js',
	'html/static/js/manifest.js',
	'html/static/js/vendor.js',

	'html/static/config/config.json',
	
	-- Coque
	'html/static/img/coque/*.png',
	'html/static/img/coque/*.jpg',
	
	-- Background
	'html/static/img/background/*.jpg',
	'html/static/img/background/*.png',
	
	'html/static/img/icons_app/*.png',
	'html/static/img/icons_app/*.jpg',
	
	'html/static/img/app_bank/*.jpg',
	'html/static/img/app_bank/*.png',

	'html/static/img/app_tchat/*.png',
	'html/static/img/app_tchat/*.jpg',

	'html/static/img/twitter/*.png',
	'html/static/img/twitter/*.jpg',
	'html/static/sound/*.ogg',

	'html/static/img/*.png',
	'html/static/img/*.jpg',
	'html/static/img/background/*.webp',
	'html/static/fonts/fontawesome-webfont.ttf',

	'html/static/sound/*.ogg',
	'html/static/sound/*.mp3',
}

client_script {
	'@essentialmode/locale.lua',
	"config.lua",
	"handler/client.lua",
    'locales/*.lua',
	"client/animation.lua",
	"client/client.lua",

	"client/photo.lua",
	-- "client/app_tchat.lua",
	"client/bank.lua",
	-- "client/twitter.lua"
}

server_script {
	'@essentialmode/locale.lua',
	'@mysql-async/lib/MySQL.lua',
	"handler/server.lua",
	'locales/*.lua',
	"config.lua",
	"server/server.lua",

	-- "server/app_tchat.lua",
	-- "server/twitter.lua"
}
