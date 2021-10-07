// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"QUpdate","status":true,"description":"<QUpdate>\r\nChecks QPlugins for updates","parameters":{}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QPlus","status":true,"description":"<QPlus> (Should go above all Q Plugins)\r\nSome small changes to MV for easier plugin development.","parameters":{"Quick Test":"true","Default Enabled Switches":"[]"}},
{"name":"QInput","status":true,"description":"<QInput>\r\nAdds additional keys to Input class, and allows remapping keys.","parameters":{"Threshold":"0.5","Input Remap":"","Ok":"[\"#enter\", \"#space\", \"$A\"]","Escape / Cancel":"[\"#esc\", \"$B\"]","Menu":"[\"#esc\", \"$Y\", \"$start\"]","Shift":"[\"#shift\", \"$R3\"]","Control":"[\"#ctrl\", \"$L3\"]","Tab":"[\"#tab\", \"$X\"]","Pageup":"[]","Pagedown":"[]","Left":"[\"#a\", \"$LEFT\"]","Right":"[\"#d\", \"$RIGHT\"]","Up":"[\"#w\", \"$UP\"]","Down":"[\"#s\", \"$DOWN\"]","Debug":"[\"#f9\", \"$SELECT\"]","ControlKeys Remap":"","FPS":"f2","Streched":"f3","FullScreen":"f4","Restart":"f5","Console":"f8"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QMovement","status":true,"description":"<QMovement>\r\nMore control over character movement","parameters":{"Main Settings":"","Grid":"1","Tile Size":"48","Off Grid":"true","Optional Settings":"","Smart Move":"2","Mid Pass":"false","Move on click":"true","Diagonal":"true","Diagonal Speed":"0","Colliders":"","Player Collider":"{\"Type\":\"circle\",\"Width\":\"36\",\"Height\":\"48\",\"Offset X\":\"6\",\"Offset Y\":\"0\"}","Event Collider":"{\"Type\":\"box\",\"Width\":\"36\",\"Height\":\"24\",\"Offset X\":\"6\",\"Offset Y\":\"24\"}","Presets":"[]","Debug Settings":"","Show Colliders":"false"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QABS","status":true,"description":"<QABS>\r\nAction Battle System for QMovement","parameters":{"Attack Settings":"","Quick Target":"false","Lock when Targeting":"true","Aim with Mouse":"true","Aim with Analog":"true","Move Resistance Rate Stat":"xparam(1)","Loot Settings":"","Loot Decay":"600","AoE Loot":"true","Loot Touch Trigger":"true","Gold Icon":"314","Level Animation":"52","Enemy AI":"","AI Default Sight Range":"240","AI Action Wait":"30","AI Uses QSight":"true","AI uses QPathfind":"true","Default Skills":"[\"{\\\"Keyboard Input\\\":\\\"mouse1\\\",\\\"Gamepad Input\\\":\\\"$R2\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"1\\\"}\",\"{\\\"Keyboard Input\\\":\\\"mouse2\\\",\\\"Gamepad Input\\\":\\\"$L2\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"7\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#shift\\\",\\\"Gamepad Input\\\":\\\"$R3\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"0\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#q\\\",\\\"Gamepad Input\\\":\\\"$L1\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"9\\\"}\",\"{\\\"Keyboard Input\\\":\\\"#e\\\",\\\"Gamepad Input\\\":\\\"$R1\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"11\\\"}\"]"}},
{"name":"QABS+Gauges","status":true,"description":"<QABSGauges>\r\nQABS Addon: Adds hp gauges to enemies","parameters":{"Gauge Configs":"","Gauge Width":"48","Gauge Height":"4","Boss Gauge Width":"480","Boss Gauge Height":"16","Gauge Default OX":"0","Gauge Default OY":"-48","Boss Gauge Default OX":"0","Boss Gauge Default OY":"24","Gauge Colors":"","Gauge Background Color":"#202040","Gauge Inbetween Color":"#ffffff","Gauge HP Color 1":"#e08040","Gauge HP Color 2":"#f0c040","Gauge Text":"","Text Font":"GameFont","Font Size":"14","Font Color":"#ffffff","Boss Text Font":"GameFont","Boss Font Size":"18","Boss Font Color":"#ffffff"}},
{"name":"QABS+Skillbar","status":true,"description":"<QABSSkillbar>\r\nQABS Addon: Adds a skillbar","parameters":{"Show Unassigned Keys":"false","Default visibility":"true"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QPathfind","status":true,"description":"<QPathfind>\r\nA* Pathfinding algorithm","parameters":{"Diagonals":"false","Any Angle":"true","Intervals":"200","Smart Wait":"60","Dash on Mouse":"false"}},
{"name":"QSight","status":true,"description":"<QSight>\r\nReal time line of sight","parameters":{"See Through Terrain":"[]","Show":"true"}},
{"name":"QPopup","status":true,"description":"<QPopup>\r\nLets you create popups in the map or on screen","parameters":{"Presets":"[]"}},
{"name":"QSprite","status":true,"description":"<QSprite>\nLets you configure Spritesheets","parameters":{"File Name Identifier":"%{config}-","Random Idle Interval":"","Use New Adjust":"true"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"SRD_TimedAttackCore","status":true,"description":"Adds a system which forces the user to time certain inputs to preform actions during battle.","parameters":{"Enable Touch?":"true","Default Source":"None","== Window Options ==":"","X Alignment":"Center","Y Alignment":"Top","X Offset":"0","Y Offset":"0","Window Width":"Graphics.width","Window Height":"this.fittingHeight(3)","== Default Props. ==":"","Sound Effect":"Sword2","Cursor Image":"","Background Image":"DefaultBackground","Window Opacity":"255","Target Location":"Graphics.width / 2","Repeat Type":"None","Speed":"10","Main Color":"#FFFFFF","Shape":"Rectangle","Width":"24","Outline Color":"#000000","Outline Size":"3","Direction":"Right","Flash Rate":"8"}},
{"name":"SRD_HUDMaker","status":true,"description":"Allows developers to create their own map-based HUD through an in-game GUI window!","parameters":{"Active Updating":"false","Show During Events":"transparent","Map Global Condition":"","Battle Global Condition":"","Disable Delete Key":"true"}}
];
