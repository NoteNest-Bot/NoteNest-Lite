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

const _0x2b803b=_0x57b8;(function(_0x78d867,_0x118a4c){const _0x3beef3=_0x57b8,_0x3c1a8f=_0x78d867();while(!![]){try{const _0x28bdee=-parseInt(_0x3beef3(0x1a4))/0x1+-parseInt(_0x3beef3(0x19d))/0x2+-parseInt(_0x3beef3(0x197))/0x3+-parseInt(_0x3beef3(0x193))/0x4+-parseInt(_0x3beef3(0x1a3))/0x5*(-parseInt(_0x3beef3(0x19e))/0x6)+-parseInt(_0x3beef3(0x192))/0x7+parseInt(_0x3beef3(0x19a))/0x8*(parseInt(_0x3beef3(0x190))/0x9);if(_0x28bdee===_0x118a4c)break;else _0x3c1a8f['push'](_0x3c1a8f['shift']());}catch(_0x2d1bca){_0x3c1a8f['push'](_0x3c1a8f['shift']());}}}(_0xabab,0xd22fc));function _0xabab(){const _0x4870a9=['579995fYsakm','508869qRjLlL','75258aAFISU','followUp','171717mLsrEK','4049468ndasvf','../utils/voicechannel','stop','exports','583725oBmzvu','currentTrack','deferReply','1432dCAipI','node','guild','1039036cdagAt','84QmxOGN','discord-player','Stop\x20all\x20songs\x20in\x20the\x20queue!','❌\x20|\x20No\x20music\x20is\x20being\x20played!','discord.js'];_0xabab=function(){return _0x4870a9;};return _0xabab();}function _0x57b8(_0x34e425,_0xfb97ca){const _0xababb3=_0xabab();return _0x57b8=function(_0x57b832,_0x2e4a09){_0x57b832=_0x57b832-0x190;let _0x5d77b1=_0xababb3[_0x57b832];return _0x5d77b1;},_0x57b8(_0x34e425,_0xfb97ca);}const {GuildMember}=require(_0x2b803b(0x1a2)),{useQueue}=require(_0x2b803b(0x19f)),{isInVoiceChannel}=require(_0x2b803b(0x194));module[_0x2b803b(0x196)]={'name':_0x2b803b(0x195),'description':_0x2b803b(0x1a0),async 'execute'(_0x333124){const _0x361521=_0x2b803b,_0x1e521a=isInVoiceChannel(_0x333124);if(!_0x1e521a)return;await _0x333124[_0x361521(0x199)]();const _0x5abce8=useQueue(_0x333124[_0x361521(0x19c)]['id']);if(!_0x5abce8||!_0x5abce8[_0x361521(0x198)])return void _0x333124[_0x361521(0x191)]({'content':_0x361521(0x1a1)});return _0x5abce8[_0x361521(0x19b)][_0x361521(0x195)](),void _0x333124[_0x361521(0x191)]({'content':'🛑\x20|\x20Stopped\x20the\x20player!'});}};
