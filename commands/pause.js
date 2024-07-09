/*
Discord Sopport https://dsc.gg/EchoScriptors
MIT License

Copyright (c) 2023 MonsterBunny

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/
const _0x18ac6a=_0x3fb0;(function(_0x38b2ac,_0x5bdb6e){const _0xd33b91=_0x3fb0,_0x423d71=_0x38b2ac();while(!![]){try{const _0x1e1d57=-parseInt(_0xd33b91(0x12d))/0x1+parseInt(_0xd33b91(0x13c))/0x2+parseInt(_0xd33b91(0x12c))/0x3*(parseInt(_0xd33b91(0x12f))/0x4)+parseInt(_0xd33b91(0x13d))/0x5+-parseInt(_0xd33b91(0x12e))/0x6+parseInt(_0xd33b91(0x138))/0x7+parseInt(_0xd33b91(0x139))/0x8;if(_0x1e1d57===_0x5bdb6e)break;else _0x423d71['push'](_0x423d71['shift']());}catch(_0x33ad72){_0x423d71['push'](_0x423d71['shift']());}}}(_0x47b4,0xa559a));function _0x47b4(){const _0x45e98e=['pause','guild','followUp','deferReply','❌\x20|\x20Something\x20went\x20wrong!','553539lVmiEN','10984392KHrXBe','currentTrack','exports','431892VfjtVZ','2195760DvrZcm','discord.js','node','56853bjbcoy','1002819HyFsmD','7793262ehKHII','184TYjlnN','../utils/voicechannel','⏸\x20|\x20Paused!','Pause\x20current\x20song!'];_0x47b4=function(){return _0x45e98e;};return _0x47b4();}const {GuildMember}=require(_0x18ac6a(0x13e)),{useQueue}=require('discord-player'),{isInVoiceChannel}=require(_0x18ac6a(0x130));function _0x3fb0(_0x50c734,_0x5a4813){const _0x47b46f=_0x47b4();return _0x3fb0=function(_0x3fb0ba,_0x5a609a){_0x3fb0ba=_0x3fb0ba-0x12c;let _0xaa8c54=_0x47b46f[_0x3fb0ba];return _0xaa8c54;},_0x3fb0(_0x50c734,_0x5a4813);}module[_0x18ac6a(0x13b)]={'name':_0x18ac6a(0x133),'description':_0x18ac6a(0x132),async 'execute'(_0x14ebd6){const _0x52530f=_0x18ac6a,_0x33444a=isInVoiceChannel(_0x14ebd6);if(!_0x33444a)return;await _0x14ebd6[_0x52530f(0x136)]();const _0x181069=useQueue(_0x14ebd6[_0x52530f(0x134)]['id']);if(!_0x181069||!_0x181069[_0x52530f(0x13a)])return void _0x14ebd6[_0x52530f(0x135)]({'content':'❌\x20|\x20No\x20music\x20is\x20being\x20played!'});const _0x3fbc3b=_0x181069[_0x52530f(0x13f)]['pause']();return void _0x14ebd6[_0x52530f(0x135)]({'content':_0x3fbc3b?_0x52530f(0x131):_0x52530f(0x137)});}};
