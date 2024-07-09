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
const _0x407cfa=_0x56d8;(function(_0x4856df,_0x327121){const _0x6800b7=_0x56d8,_0x2acb5e=_0x4856df();while(!![]){try{const _0x406628=-parseInt(_0x6800b7(0x15f))/0x1+-parseInt(_0x6800b7(0x16e))/0x2*(parseInt(_0x6800b7(0x165))/0x3)+-parseInt(_0x6800b7(0x16b))/0x4*(parseInt(_0x6800b7(0x161))/0x5)+parseInt(_0x6800b7(0x16c))/0x6+parseInt(_0x6800b7(0x16f))/0x7+-parseInt(_0x6800b7(0x15b))/0x8+parseInt(_0x6800b7(0x169))/0x9;if(_0x406628===_0x327121)break;else _0x2acb5e['push'](_0x2acb5e['shift']());}catch(_0x2eaf74){_0x2acb5e['push'](_0x2acb5e['shift']());}}}(_0xbe97,0x2aec2));function _0x56d8(_0x545eed,_0x249d6d){const _0xbe971d=_0xbe97();return _0x56d8=function(_0x56d80e,_0x114e78){_0x56d80e=_0x56d80e-0x15b;let _0x41666e=_0xbe971d[_0x56d80e];return _0x41666e;},_0x56d8(_0x545eed,_0x249d6d);}const {GuildMember}=require(_0x407cfa(0x162)),{useQueue}=require(_0x407cfa(0x16d)),{isInVoiceChannel}=require(_0x407cfa(0x15e));function _0xbe97(){const _0x1ed0cb=['discord-player','525982WynaLU','750526SXrEjq','title','832000jFTOGt','progress','exports','../utils/voicechannel','312391ASKrTi','Now\x20Playing','30710djdovD','discord.js','getTimestamp','currentTrack','3AWqIEs','🎶\x20|\x20**','node','followUp','5915565gKMVnz','Get\x20the\x20song\x20that\x20is\x20currently\x20playing.','16pEKGFa','691542ZWYyCq'];_0xbe97=function(){return _0x1ed0cb;};return _0xbe97();}module[_0x407cfa(0x15d)]={'name':'nowplaying','description':_0x407cfa(0x16a),async 'execute'(_0xb922b4){const _0x2b3a48=_0x407cfa,_0x95c130=isInVoiceChannel(_0xb922b4);if(!_0x95c130)return;await _0xb922b4['deferReply']();const _0x22650e=useQueue(_0xb922b4['guild']['id']);if(!_0x22650e||!_0x22650e[_0x2b3a48(0x164)])return void _0xb922b4['followUp']({'content':'❌\x20|\x20No\x20music\x20is\x20being\x20played!'});const _0x1ae842=_0x22650e[_0x2b3a48(0x167)]['createProgressBar'](),_0xf8c443=_0x22650e[_0x2b3a48(0x167)][_0x2b3a48(0x163)]();return void _0xb922b4[_0x2b3a48(0x168)]({'embeds':[{'title':_0x2b3a48(0x160),'description':_0x2b3a48(0x166)+_0x22650e[_0x2b3a48(0x164)][_0x2b3a48(0x170)]+'**!\x20(`'+_0xf8c443[_0x2b3a48(0x15c)]+'%`)','fields':[{'name':'​','value':_0x1ae842}],'color':0xffffff}]});}};
