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
const _0x3803cc=_0x319c;(function(_0x5643c8,_0x276419){const _0x105abd=_0x319c,_0x55aca7=_0x5643c8();while(!![]){try{const _0x23cadd=parseInt(_0x105abd(0x178))/0x1*(parseInt(_0x105abd(0x176))/0x2)+-parseInt(_0x105abd(0x177))/0x3*(parseInt(_0x105abd(0x16c))/0x4)+-parseInt(_0x105abd(0x170))/0x5+parseInt(_0x105abd(0x188))/0x6*(parseInt(_0x105abd(0x174))/0x7)+parseInt(_0x105abd(0x17d))/0x8+parseInt(_0x105abd(0x17e))/0x9+-parseInt(_0x105abd(0x182))/0xa*(-parseInt(_0x105abd(0x173))/0xb);if(_0x23cadd===_0x276419)break;else _0x55aca7['push'](_0x55aca7['shift']());}catch(_0x4b047a){_0x55aca7['push'](_0x55aca7['shift']());}}}(_0x3395,0x83fe3));const {GuildMember,ApplicationCommandOptionType}=require(_0x3803cc(0x172)),{useQueue}=require('discord-player'),{isInVoiceChannel}=require(_0x3803cc(0x181));module['exports']={'name':_0x3803cc(0x16e),'description':'swap\x20song\x20positions\x20in\x20the\x20queue!','options':[{'name':_0x3803cc(0x17c),'type':ApplicationCommandOptionType[_0x3803cc(0x189)],'description':_0x3803cc(0x183),'required':!![]},{'name':_0x3803cc(0x184),'type':ApplicationCommandOptionType[_0x3803cc(0x189)],'description':'The\x20track\x20number\x20you\x20want\x20to\x20swap','required':!![]}],async 'execute'(_0xf1e350){const _0x1c555f=_0x3803cc,_0x493137=isInVoiceChannel(_0xf1e350);if(!_0x493137)return;await _0xf1e350[_0x1c555f(0x17f)]();const _0x1712e7=useQueue(_0xf1e350[_0x1c555f(0x186)]['id']);if(!_0x1712e7||!_0x1712e7[_0x1c555f(0x17b)])return void _0xf1e350[_0x1c555f(0x16b)]({'content':_0x1c555f(0x16a)});const _0x29d826=[_0xf1e350[_0x1c555f(0x17a)][_0x1c555f(0x185)](_0x1c555f(0x17c))-0x1,_0xf1e350[_0x1c555f(0x17a)]['getInteger']('track2')-0x1];_0x29d826[_0x1c555f(0x16f)](function(_0x2f8500,_0x343529){return _0x2f8500-_0x343529;});if(_0x29d826[0x1]>_0x1712e7['getSize']())return void _0xf1e350[_0x1c555f(0x16b)]({'content':_0x1c555f(0x175)});try{const _0x2fa8a7=_0x1712e7[_0x1c555f(0x179)][_0x1c555f(0x16d)](_0x29d826[0x1]),_0x1f91ac=_0x1712e7[_0x1c555f(0x179)][_0x1c555f(0x16d)](_0x29d826[0x0]);return _0x1712e7[_0x1c555f(0x179)]['insert'](_0x2fa8a7,_0x29d826[0x0]),_0x1712e7[_0x1c555f(0x179)]['insert'](_0x1f91ac,_0x29d826[0x1]),void _0xf1e350['followUp']({'content':'✅\x20|\x20Swapped\x20**'+_0x1f91ac+_0x1c555f(0x171)+_0x2fa8a7+_0x1c555f(0x180)});}catch(_0x5e50bf){return console[_0x1c555f(0x18a)](_0x5e50bf),void _0xf1e350[_0x1c555f(0x16b)]({'content':_0x1c555f(0x187)});}}};function _0x319c(_0x28f2d0,_0x5c5ecf){const _0x33955b=_0x3395();return _0x319c=function(_0x319c06,_0x94ad4d){_0x319c06=_0x319c06-0x16a;let _0x11d634=_0x33955b[_0x319c06];return _0x11d634;},_0x319c(_0x28f2d0,_0x5c5ecf);}function _0x3395(){const _0x3e0319=['11aJvpOL','297591FfKYAw','❌\x20|\x20Track\x20number\x20greater\x20than\x20queue\x20depth!','22ISrmpU','108486llTZfe','16777welEXT','node','options','currentTrack','track1','5468512gRGphO','9013599qpYijp','deferReply','**!','../utils/voicechannel','3075940mxnJty','The\x20track\x20number\x20you\x20want\x20to\x20swap','track2','getInteger','guild','❌\x20|\x20Something\x20went\x20wrong!','54xifDUT','Integer','log','❌\x20|\x20No\x20music\x20is\x20being\x20played!','followUp','108XLiAad','remove','swap','sort','5214080jmIvEp','**\x20&\x20**','discord.js'];_0x3395=function(){return _0x3e0319;};return _0x3395();}
