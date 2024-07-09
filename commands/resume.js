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
const _0x3bc160=_0x3182;(function(_0x54db26,_0x3f7ff4){const _0x25afab=_0x3182,_0x42b59b=_0x54db26();while(!![]){try{const _0x48fd5d=-parseInt(_0x25afab(0x1f5))/0x1*(-parseInt(_0x25afab(0x1fc))/0x2)+-parseInt(_0x25afab(0x1f3))/0x3*(-parseInt(_0x25afab(0x1ff))/0x4)+parseInt(_0x25afab(0x1f6))/0x5*(-parseInt(_0x25afab(0x201))/0x6)+-parseInt(_0x25afab(0x1fd))/0x7*(parseInt(_0x25afab(0x1ef))/0x8)+parseInt(_0x25afab(0x203))/0x9+parseInt(_0x25afab(0x1ed))/0xa*(-parseInt(_0x25afab(0x1f9))/0xb)+parseInt(_0x25afab(0x1ee))/0xc;if(_0x48fd5d===_0x3f7ff4)break;else _0x42b59b['push'](_0x42b59b['shift']());}catch(_0x36bed4){_0x42b59b['push'](_0x42b59b['shift']());}}}(_0x1695,0x278b6));const {useQueue}=require(_0x3bc160(0x1fa)),{isInVoiceChannel}=require('../utils/voicechannel');function _0x3182(_0x1ec6e8,_0x11d2ad){const _0x169591=_0x1695();return _0x3182=function(_0x318277,_0x152f96){_0x318277=_0x318277-0x1ed;let _0x47d403=_0x169591[_0x318277];return _0x47d403;},_0x3182(_0x1ec6e8,_0x11d2ad);}module['exports']={'name':'resume','description':_0x3bc160(0x200),async 'execute'(_0x47962e){const _0x5d3b4c=_0x3bc160,_0x514daa=isInVoiceChannel(_0x47962e);if(!_0x514daa)return;await _0x47962e[_0x5d3b4c(0x1fe)]();const _0xd04d7=useQueue(_0x47962e[_0x5d3b4c(0x202)]['id']);if(!_0xd04d7||!_0xd04d7[_0x5d3b4c(0x1f7)])return void _0x47962e['followUp']({'content':_0x5d3b4c(0x1f2)});const _0x4a76df=_0xd04d7[_0x5d3b4c(0x1fb)][_0x5d3b4c(0x1f8)]();return void _0x47962e[_0x5d3b4c(0x1f1)]({'content':_0x4a76df?_0x5d3b4c(0x1f0):_0x5d3b4c(0x1f4)});}};function _0x1695(){const _0xa3a2aa=['14696ZDcFPH','▶\x20|\x20Resumed!','followUp','❌\x20|\x20No\x20music\x20is\x20being\x20played!','42QZiDwi','❌\x20|\x20Something\x20went\x20wrong!','491YPJnbW','40995fAcOTq','currentTrack','resume','156167XwzFIO','discord-player','node','1262znucLb','777FlYIFe','deferReply','32092xWQGDN','Resume\x20current\x20song!','144NqdJyw','guild','1545444TEeYeB','140MgQEXX','2010672GvRxXP'];_0x1695=function(){return _0xa3a2aa;};return _0x1695();}
