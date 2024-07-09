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
const _0x1e9251=_0xa692;(function(_0x683bd0,_0x684b58){const _0x5e62dd=_0xa692,_0x4a012e=_0x683bd0();while(!![]){try{const _0x3114b7=parseInt(_0x5e62dd(0x6c))/0x1*(-parseInt(_0x5e62dd(0x85))/0x2)+parseInt(_0x5e62dd(0x7d))/0x3+-parseInt(_0x5e62dd(0x81))/0x4*(-parseInt(_0x5e62dd(0x7b))/0x5)+parseInt(_0x5e62dd(0x7e))/0x6*(-parseInt(_0x5e62dd(0x75))/0x7)+-parseInt(_0x5e62dd(0x79))/0x8+-parseInt(_0x5e62dd(0x83))/0x9*(parseInt(_0x5e62dd(0x87))/0xa)+parseInt(_0x5e62dd(0x6b))/0xb*(parseInt(_0x5e62dd(0x7f))/0xc);if(_0x3114b7===_0x684b58)break;else _0x4a012e['push'](_0x4a012e['shift']());}catch(_0x36ae84){_0x4a012e['push'](_0x4a012e['shift']());}}}(_0x73c6,0x3a82c));const {GuildMember,ApplicationCommandOptionType}=require(_0x1e9251(0x84)),{useQueue}=require('discord-player'),{isInVoiceChannel}=require(_0x1e9251(0x78));function _0x73c6(){const _0x5c1695=['63390VeQzoG','currentTrack','138259uIAbBu','15QnHTFO','move\x20song\x20position\x20in\x20the\x20queue!','❌\x20|\x20Track\x20number\x20greater\x20than\x20queue\x20depth!','followUp','Integer','getInteger','node','track','guild','111349kTabkL','exports','deferReply','../utils/voicechannel','3725880RZYEdB','insert','5wJvBZT','✅\x20|\x20Moved\x20**','1144104VrrXdN','150wgXRfO','936VvMZcQ','The\x20track\x20number\x20you\x20want\x20to\x20move','63004EoIPqO','log','351eplrAT','discord.js','3628XYTIVt','size'];_0x73c6=function(){return _0x5c1695;};return _0x73c6();}function _0xa692(_0x2332ed,_0x23dba4){const _0x73c6a1=_0x73c6();return _0xa692=function(_0xa6925f,_0xb4df2d){_0xa6925f=_0xa6925f-0x6a;let _0x5f58ce=_0x73c6a1[_0xa6925f];return _0x5f58ce;},_0xa692(_0x2332ed,_0x23dba4);}module[_0x1e9251(0x76)]={'name':'move','description':_0x1e9251(0x6d),'options':[{'name':'track','type':ApplicationCommandOptionType['Integer'],'description':_0x1e9251(0x80),'required':!![]},{'name':'position','type':ApplicationCommandOptionType[_0x1e9251(0x70)],'description':'The\x20position\x20to\x20move\x20it\x20to','required':!![]}],async 'execute'(_0x16746d){const _0x32705e=_0x1e9251,_0x28610f=isInVoiceChannel(_0x16746d);if(!_0x28610f)return;await _0x16746d[_0x32705e(0x77)]();const _0x308b73=useQueue(_0x16746d[_0x32705e(0x74)]['id']);if(!_0x308b73||!_0x308b73[_0x32705e(0x6a)])return void _0x16746d[_0x32705e(0x6f)]({'content':'❌\x20|\x20No\x20music\x20is\x20being\x20played!'});const _0x2f1667=[_0x16746d['options'][_0x32705e(0x71)](_0x32705e(0x73))-0x1,_0x16746d['options'][_0x32705e(0x71)]('position')-0x1];if(_0x2f1667[0x0]>_0x308b73['tracks']['size']||_0x2f1667[0x1]>_0x308b73['tracks'][_0x32705e(0x86)])return void _0x16746d[_0x32705e(0x6f)]({'content':_0x32705e(0x6e)});try{const _0x13c9d9=_0x308b73[_0x32705e(0x72)]['remove'](_0x2f1667[0x0]);return _0x308b73['node'][_0x32705e(0x7a)](_0x13c9d9,_0x2f1667[0x1]),void _0x16746d[_0x32705e(0x6f)]({'content':_0x32705e(0x7c)+_0x13c9d9+'**!'});}catch(_0x3c543b){return console[_0x32705e(0x82)](_0x3c543b),void _0x16746d[_0x32705e(0x6f)]({'content':'❌\x20|\x20Something\x20went\x20wrong!'});}}};
