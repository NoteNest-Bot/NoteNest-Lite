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
const _0x2089ae=_0x4d59;(function(_0x3fed2b,_0x43dd2e){const _0x471123=_0x4d59,_0x24d51d=_0x3fed2b();while(!![]){try{const _0x2401de=-parseInt(_0x471123(0x1de))/0x1+parseInt(_0x471123(0x1d6))/0x2+parseInt(_0x471123(0x1d5))/0x3+-parseInt(_0x471123(0x1e9))/0x4+parseInt(_0x471123(0x1dc))/0x5*(-parseInt(_0x471123(0x1e0))/0x6)+-parseInt(_0x471123(0x1e2))/0x7+parseInt(_0x471123(0x1df))/0x8;if(_0x2401de===_0x43dd2e)break;else _0x24d51d['push'](_0x24d51d['shift']());}catch(_0x53954d){_0x24d51d['push'](_0x24d51d['shift']());}}}(_0x365c,0x544f0));function _0x365c(){const _0x1a7361=['discord-player','slice','2658116yelvoh','followUp','Now\x20Playing','398730VFgolM','926050PQyUgW','shuffle','title','guild','...','length','15gwQmIf','tracks','34827XEwNpI','10798424CjjLSm','1181514ipKraR','../utils/voicechannel','2172079NCRBOc','shuffle\x20the\x20queue!','**!\x20\x0a\x20🎶\x20|\x20','❌\x20|\x20No\x20music\x20is\x20being\x20played!','currentTrack'];_0x365c=function(){return _0x1a7361;};return _0x365c();}function _0x4d59(_0xdeb2a3,_0x4366d4){const _0x365cc1=_0x365c();return _0x4d59=function(_0x4d595c,_0x5bd81b){_0x4d595c=_0x4d595c-0x1d5;let _0x24852d=_0x365cc1[_0x4d595c];return _0x24852d;},_0x4d59(_0xdeb2a3,_0x4366d4);}const {GuildMember}=require('discord.js'),{useQueue}=require(_0x2089ae(0x1e7)),{isInVoiceChannel}=require(_0x2089ae(0x1e1));module['exports']={'name':_0x2089ae(0x1d7),'description':_0x2089ae(0x1e3),async 'execute'(_0x517ac1){const _0x4e1251=_0x2089ae,_0x5e3259=isInVoiceChannel(_0x517ac1);if(!_0x5e3259)return;await _0x517ac1['deferReply']();const _0x320fe5=useQueue(_0x517ac1[_0x4e1251(0x1d9)]['id']);if(!_0x320fe5||!_0x320fe5[_0x4e1251(0x1e6)])return void _0x517ac1[_0x4e1251(0x1ea)]({'content':_0x4e1251(0x1e5)});try{_0x320fe5[_0x4e1251(0x1dd)][_0x4e1251(0x1d7)]();const _0x2dd1ca=(_0x51fa18,_0x2eb52b)=>_0x51fa18[_0x4e1251(0x1db)]>_0x2eb52b?_0x51fa18[_0x4e1251(0x1e8)](0x0,_0x2eb52b-0x3)+_0x4e1251(0x1da):_0x51fa18;return void _0x517ac1['followUp']({'embeds':[{'title':_0x4e1251(0x1eb),'description':_0x2dd1ca('The\x20Current\x20song\x20playing\x20is\x20🎶\x20|\x20**'+_0x320fe5[_0x4e1251(0x1e6)][_0x4e1251(0x1d8)]+_0x4e1251(0x1e4)+_0x320fe5+'!\x20',0xfff)}]});}catch(_0x15bbae){return console['log'](_0x15bbae),void _0x517ac1[_0x4e1251(0x1ea)]({'content':'❌\x20|\x20Something\x20went\x20wrong!'});}}};
