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
const _0xf35e56=_0x5163;function _0x5163(_0x269db3,_0x380300){const _0x5b0568=_0x5b05();return _0x5163=function(_0x5163ea,_0xefbb5c){_0x5163ea=_0x5163ea-0x1c3;let _0x5bdeec=_0x5b0568[_0x5163ea];return _0x5bdeec;},_0x5163(_0x269db3,_0x380300);}(function(_0x468b15,_0xf6aa55){const _0x4af9f7=_0x5163,_0x3334d6=_0x468b15();while(!![]){try{const _0x17d289=parseInt(_0x4af9f7(0x1e2))/0x1+parseInt(_0x4af9f7(0x1dd))/0x2*(-parseInt(_0x4af9f7(0x1c3))/0x3)+-parseInt(_0x4af9f7(0x1cf))/0x4+parseInt(_0x4af9f7(0x1c6))/0x5*(parseInt(_0x4af9f7(0x1d5))/0x6)+-parseInt(_0x4af9f7(0x1e1))/0x7+parseInt(_0x4af9f7(0x1da))/0x8*(parseInt(_0x4af9f7(0x1dc))/0x9)+parseInt(_0x4af9f7(0x1d7))/0xa*(-parseInt(_0x4af9f7(0x1c5))/0xb);if(_0x17d289===_0xf6aa55)break;else _0x3334d6['push'](_0x3334d6['shift']());}catch(_0x57ec4f){_0x3334d6['push'](_0x3334d6['shift']());}}}(_0x5b05,0x4092c));const {ApplicationCommandOptionType}=require(_0xf35e56(0x1db)),{useMainPlayer}=require('discord-player'),{isInVoiceChannel}=require(_0xf35e56(0x1d6));module[_0xf35e56(0x1e3)]={'name':_0xf35e56(0x1cc),'description':_0xf35e56(0x1c8),'options':[{'name':_0xf35e56(0x1d0),'type':ApplicationCommandOptionType[_0xf35e56(0x1ca)],'description':_0xf35e56(0x1c9),'required':!![]}],async 'execute'(_0x5f0fb6){const _0x236c68=_0xf35e56,{default:_0x4403ec}=await import(_0x236c68(0x1ce));try{const _0x14b5b3=isInVoiceChannel(_0x5f0fb6);if(!_0x14b5b3)return;await _0x5f0fb6[_0x236c68(0x1cd)]();const _0x1dc329=useMainPlayer(),_0x3205ec=_0x5f0fb6['options']['getString']('query'),_0x4725f3=await _0x1dc329[_0x236c68(0x1d9)](_0x3205ec);if(!_0x4725f3['hasTracks']())return void _0x5f0fb6[_0x236c68(0x1e4)]({'content':'No\x20results\x20were\x20found!'});try{const _0x49fdd0=new _0x4403ec({'projectName':_0x236c68(0x1e8)});await _0x1dc329[_0x236c68(0x1cc)](_0x5f0fb6[_0x236c68(0x1e7)][_0x236c68(0x1d8)][_0x236c68(0x1d2)]['id'],_0x4725f3,{'nodeOptions':{'metadata':{'channel':_0x5f0fb6['channel'],'client':_0x5f0fb6[_0x236c68(0x1e6)]?.[_0x236c68(0x1e5)]['me'],'requestedBy':_0x5f0fb6['user'][_0x236c68(0x1e0)]},'leaveOnEmptyCooldown':0x493e0,'leaveOnEmpty':!![],'leaveOnEnd':![],'bufferingTimeout':0x0,'volume':_0x49fdd0['get'](_0x236c68(0x1e8))||0xa}}),await _0x5f0fb6[_0x236c68(0x1e4)]({'content':_0x236c68(0x1cb)+(_0x4725f3[_0x236c68(0x1df)]?'playlist':_0x236c68(0x1d4))+_0x236c68(0x1d3)});}catch(_0x3f2bf8){return await _0x5f0fb6[_0x236c68(0x1de)]({'content':_0x236c68(0x1d1)}),console['log'](_0x3f2bf8);}}catch(_0x50db74){await _0x5f0fb6[_0x236c68(0x1c7)]({'content':'There\x20was\x20an\x20error\x20trying\x20to\x20execute\x20that\x20command:\x20'+_0x50db74[_0x236c68(0x1c4)]});}}};function _0x5b05(){const _0x4269ed=['1131704zcRDnw','380964vKzGfn','exports','followUp','members','guild','member','volume','24528ydllnn','message','4074785WDodaT','977475JnNkEK','reply','Play\x20a\x20song\x20in\x20your\x20channel!','The\x20song\x20you\x20want\x20to\x20play','String','⏱\x20|\x20Loading\x20your\x20','play','deferReply','conf','136460WDsFVv','query','An\x20error\x20has\x20occurred!','channel','...','track','12BOqtDv','../utils/voicechannel','10zCKuHO','voice','search','8NNnftr','discord.js','2074104bQffDV','42CeOGqN','editReply','playlist','username'];_0x5b05=function(){return _0x4269ed;};return _0x5b05();}
