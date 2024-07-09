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
const _0x477304=_0xee32;(function(_0x305210,_0x558452){const _0x4beb91=_0xee32,_0x505f1a=_0x305210();while(!![]){try{const _0x439687=-parseInt(_0x4beb91(0x132))/0x1+-parseInt(_0x4beb91(0x12d))/0x2+parseInt(_0x4beb91(0x13f))/0x3+parseInt(_0x4beb91(0x13c))/0x4+parseInt(_0x4beb91(0x130))/0x5*(-parseInt(_0x4beb91(0x138))/0x6)+-parseInt(_0x4beb91(0x139))/0x7+parseInt(_0x4beb91(0x133))/0x8;if(_0x439687===_0x558452)break;else _0x505f1a['push'](_0x505f1a['shift']());}catch(_0x15c4b3){_0x505f1a['push'](_0x505f1a['shift']());}}}(_0xc65d,0x3a321));function _0xee32(_0x20ce25,_0x2b38aa){const _0xc65d52=_0xc65d();return _0xee32=function(_0xee322c,_0x5cd116){_0xee322c=_0xee322c-0x129;let _0x18103b=_0xc65d52[_0xee322c];return _0x18103b;},_0xee32(_0x20ce25,_0x2b38aa);}function _0xc65d(){const _0x12feb8=['163180MrYrdZ','getInteger','222468csEBCl','9552328yeJBaz','../utils/voicechannel','discord-player','size','✅\x20|\x20Removed\x20**','48KSyoRm','3254195EzUQaV','currentTrack','❌\x20|\x20Track\x20number\x20greater\x20than\x20queue\x20depth!','508816nHvREY','❌\x20|\x20No\x20music\x20is\x20being\x20played!','tracks','16764YgjjjJ','followUp','**!','discord.js','options','280046UciHih','remove','number'];_0xc65d=function(){return _0x12feb8;};return _0xc65d();}const {GuildMember,ApplicationCommandOptionType}=require(_0x477304(0x12b)),{useQueue}=require(_0x477304(0x135)),{isInVoiceChannel}=require(_0x477304(0x134));module['exports']={'name':_0x477304(0x12e),'description':'remove\x20a\x20song\x20from\x20the\x20queue!','options':[{'name':'number','type':ApplicationCommandOptionType['Integer'],'description':'The\x20queue\x20number\x20you\x20want\x20to\x20remove','required':!![]}],async 'execute'(_0x1ada51){const _0x42b313=_0x477304,_0x79714f=isInVoiceChannel(_0x1ada51);if(!_0x79714f)return;await _0x1ada51['deferReply']();const _0xeebb0d=useQueue(_0x1ada51['guild']['id']);if(!_0xeebb0d||!_0xeebb0d[_0x42b313(0x13a)])return void _0x1ada51[_0x42b313(0x129)]({'content':_0x42b313(0x13d)});const _0x56d899=_0x1ada51[_0x42b313(0x12c)][_0x42b313(0x131)](_0x42b313(0x12f))-0x1;if(_0x56d899>_0xeebb0d[_0x42b313(0x13e)][_0x42b313(0x136)])return void _0x1ada51[_0x42b313(0x129)]({'content':_0x42b313(0x13b)});const _0x14c31b=_0xeebb0d['node'][_0x42b313(0x12e)](_0x56d899);return void _0x1ada51['followUp']({'content':_0x14c31b?_0x42b313(0x137)+_0x14c31b+_0x42b313(0x12a):'❌\x20|\x20Something\x20went\x20wrong!'});}};
