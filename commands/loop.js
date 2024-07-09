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
const _0x318650=_0x2955;(function(_0x37cd03,_0x3ea229){const _0x166141=_0x2955,_0x42bd66=_0x37cd03();while(!![]){try{const _0x901235=-parseInt(_0x166141(0xf9))/0x1*(-parseInt(_0x166141(0xf3))/0x2)+-parseInt(_0x166141(0xfc))/0x3*(-parseInt(_0x166141(0xf5))/0x4)+parseInt(_0x166141(0xf4))/0x5+parseInt(_0x166141(0xee))/0x6*(parseInt(_0x166141(0xe5))/0x7)+-parseInt(_0x166141(0xfb))/0x8*(-parseInt(_0x166141(0xec))/0x9)+-parseInt(_0x166141(0xea))/0xa+-parseInt(_0x166141(0xf0))/0xb;if(_0x901235===_0x3ea229)break;else _0x42bd66['push'](_0x42bd66['shift']());}catch(_0x3961cf){_0x42bd66['push'](_0x42bd66['shift']());}}}(_0x46e6,0x34385));function _0x46e6(){const _0x38ad25=['followUp','Off','Loop\x20type','discord.js','mode','7GNRjGf','message','There\x20was\x20an\x20error\x20trying\x20to\x20execute\x20that\x20command:\x20','Queue','OFF','3764360UorKqX','TRACK','9RmBqzI','Autoplay','1203414BvwxvB','../utils/voicechannel','3547599bCQQVM','deferReply','❌\x20|\x20No\x20music\x20is\x20being\x20played!','256RBHJCY','216045TqSpfX','1234780EzCpUP','currentTrack','setRepeatMode','exports','2656jqdgrW','log','163176RnAGOG','3iWEXAf','AUTOPLAY','QUEUE','options','loop'];_0x46e6=function(){return _0x38ad25;};return _0x46e6();}function _0x2955(_0x15e4f6,_0x49504d){const _0x46e6d3=_0x46e6();return _0x2955=function(_0x29556e,_0x2e4984){_0x29556e=_0x29556e-0xe4;let _0x15b758=_0x46e6d3[_0x29556e];return _0x15b758;},_0x2955(_0x15e4f6,_0x49504d);}const {GuildMember,ApplicationCommandOptionType}=require(_0x318650(0x104)),{QueueRepeatMode,useQueue}=require('discord-player'),{isInVoiceChannel}=require(_0x318650(0xef));module[_0x318650(0xf8)]={'name':_0x318650(0x100),'description':'Sets\x20loop\x20mode','options':[{'name':'mode','type':ApplicationCommandOptionType['Integer'],'description':_0x318650(0x103),'required':!![],'choices':[{'name':_0x318650(0x102),'value':QueueRepeatMode[_0x318650(0xe9)]},{'name':'Track','value':QueueRepeatMode[_0x318650(0xeb)]},{'name':_0x318650(0xe8),'value':QueueRepeatMode['QUEUE']},{'name':_0x318650(0xed),'value':QueueRepeatMode[_0x318650(0xfd)]}]}],async 'execute'(_0x158c35){const _0x35a745=_0x318650;try{const _0x25c74d=isInVoiceChannel(_0x158c35);if(!_0x25c74d)return;await _0x158c35[_0x35a745(0xf1)]();const _0x11d1b7=useQueue(_0x158c35['guild']['id']);if(!_0x11d1b7||!_0x11d1b7[_0x35a745(0xf6)])return void _0x158c35[_0x35a745(0x101)]({'content':_0x35a745(0xf2)});const _0x339b63=_0x158c35[_0x35a745(0xff)]['getInteger'](_0x35a745(0xe4));_0x11d1b7[_0x35a745(0xf7)](_0x339b63);const _0x2f0455=_0x339b63===QueueRepeatMode[_0x35a745(0xeb)]?'🔂':_0x339b63===QueueRepeatMode[_0x35a745(0xfe)]?'🔁':'▶';return void _0x158c35['followUp']({'content':_0x2f0455+'\x20|\x20Updated\x20loop\x20mode!'});}catch(_0x4649da){return console[_0x35a745(0xfa)](_0x4649da),void _0x158c35[_0x35a745(0x101)]({'content':_0x35a745(0xe7)+_0x4649da[_0x35a745(0xe6)]});}}};
