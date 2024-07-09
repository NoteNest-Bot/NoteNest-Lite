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
const _0x169c0c=_0x1526;function _0x1526(_0x51a94f,_0x5db652){const _0x487c60=_0x487c();return _0x1526=function(_0x1526da,_0x185e85){_0x1526da=_0x1526da-0x1e5;let _0x4b6011=_0x487c60[_0x1526da];return _0x4b6011;},_0x1526(_0x51a94f,_0x5db652);}(function(_0x592ffd,_0xb5183e){const _0x482244=_0x1526,_0x5d60ff=_0x592ffd();while(!![]){try{const _0x43c65a=parseInt(_0x482244(0x1f2))/0x1+-parseInt(_0x482244(0x1f0))/0x2*(parseInt(_0x482244(0x1eb))/0x3)+-parseInt(_0x482244(0x1f7))/0x4*(-parseInt(_0x482244(0x1ea))/0x5)+-parseInt(_0x482244(0x1fa))/0x6+-parseInt(_0x482244(0x1ee))/0x7+parseInt(_0x482244(0x1f3))/0x8*(parseInt(_0x482244(0x1f5))/0x9)+-parseInt(_0x482244(0x1ef))/0xa*(-parseInt(_0x482244(0x1f1))/0xb);if(_0x43c65a===_0xb5183e)break;else _0x5d60ff['push'](_0x5d60ff['shift']());}catch(_0x58369e){_0x5d60ff['push'](_0x5d60ff['shift']());}}}(_0x487c,0x2c422));const {GuildMember}=require(_0x169c0c(0x1ed)),{useQueue}=require(_0x169c0c(0x1ec)),{isInVoiceChannel}=require(_0x169c0c(0x1f8));function _0x487c(){const _0x5d7963=['43758hUxNjx','currentTrack','4132QOHvSi','../utils/voicechannel','followUp','1912800XhRxsO','Skip\x20a\x20song!','**!','exports','deferReply','❌\x20|\x20Something\x20went\x20wrong!','skip','1600rYyDNW','183sYwiIq','discord-player','discord.js','865291iUXdMB','410MHGUGZ','10620PgZzlx','17523QSZrRC','352390xPEMGB','328PmlVSg','✅\x20|\x20Skipped\x20**'];_0x487c=function(){return _0x5d7963;};return _0x487c();}module[_0x169c0c(0x1e6)]={'name':'skip','description':_0x169c0c(0x1fb),async 'execute'(_0xf7d97e){const _0x634bd2=_0x169c0c,_0x3ea161=isInVoiceChannel(_0xf7d97e);if(!_0x3ea161)return;await _0xf7d97e[_0x634bd2(0x1e7)]();const _0x18adfc=useQueue(_0xf7d97e['guild']['id']);if(!_0x18adfc||!_0x18adfc[_0x634bd2(0x1f6)])return void _0xf7d97e[_0x634bd2(0x1f9)]({'content':'❌\x20|\x20No\x20music\x20is\x20being\x20played!'});const _0x13b15c=_0x18adfc[_0x634bd2(0x1f6)],_0x29c20b=_0x18adfc['node'][_0x634bd2(0x1e9)]();return void _0xf7d97e[_0x634bd2(0x1f9)]({'content':_0x29c20b?_0x634bd2(0x1f4)+_0x13b15c+_0x634bd2(0x1e5):_0x634bd2(0x1e8)});}};

