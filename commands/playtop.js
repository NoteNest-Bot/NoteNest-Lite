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
const _0xd8e34a=_0x1855;(function(_0x2a9a86,_0xde822b){const _0x1cd234=_0x1855,_0xeb0a5d=_0x2a9a86();while(!![]){try{const _0x4f35c7=-parseInt(_0x1cd234(0x14a))/0x1+parseInt(_0x1cd234(0x14b))/0x2+-parseInt(_0x1cd234(0x147))/0x3+parseInt(_0x1cd234(0x148))/0x4+parseInt(_0x1cd234(0x153))/0x5+parseInt(_0x1cd234(0x13d))/0x6*(-parseInt(_0x1cd234(0x133))/0x7)+-parseInt(_0x1cd234(0x130))/0x8*(-parseInt(_0x1cd234(0x151))/0x9);if(_0x4f35c7===_0xde822b)break;else _0xeb0a5d['push'](_0xeb0a5d['shift']());}catch(_0x4cce67){_0xeb0a5d['push'](_0xeb0a5d['shift']());}}}(_0x6ace,0x81c26));const {GuildMember,ApplicationCommandOptionType}=require(_0xd8e34a(0x136)),{QueryType,useQueue,useMainPlayer}=require(_0xd8e34a(0x140)),{isInVoiceChannel}=require(_0xd8e34a(0x144));function _0x6ace(){const _0xba2c44=['exports','23513fsdgkH','length','search','discord.js','node','user','query','tracks','...','⏱\x20|\x20Loading\x20your\x20','438PTFqko','deferReply','play','discord-player','playlist','The\x20song\x20you\x20want\x20to\x20play','String','../utils/voicechannel','There\x20was\x20an\x20error\x20trying\x20to\x20execute\x20that\x20command:\x20','Could\x20not\x20join\x20your\x20voice\x20channel!','2960613XQYEbc','2007284NLooCg','Play\x20a\x20song\x20before\x20the\x20next\x20in\x20your\x20channel!','575384LxlUWW','373192hmVFNo','followUp','connection','AUTO','insert','options','27mLCVNb','currentTrack','545455FsbnBB','voice','member','4110528CuOnxd','No\x20results\x20were\x20found!'];_0x6ace=function(){return _0xba2c44;};return _0x6ace();}function _0x1855(_0x5f3217,_0x4698f6){const _0x6ace5=_0x6ace();return _0x1855=function(_0x1855c7,_0x28f8e9){_0x1855c7=_0x1855c7-0x130;let _0x549ec4=_0x6ace5[_0x1855c7];return _0x549ec4;},_0x1855(_0x5f3217,_0x4698f6);}module[_0xd8e34a(0x132)]={'name':'playtop','description':_0xd8e34a(0x149),'options':[{'name':_0xd8e34a(0x139),'type':ApplicationCommandOptionType[_0xd8e34a(0x143)],'description':_0xd8e34a(0x142),'required':!![]}],async 'execute'(_0x744d51){const _0x175780=_0xd8e34a;try{const _0x357bca=isInVoiceChannel(_0x744d51);if(!_0x357bca)return;await _0x744d51[_0x175780(0x13e)]();const _0x2523db=useMainPlayer(),_0x1d794b=_0x744d51[_0x175780(0x150)]['getString'](_0x175780(0x139)),_0x55b13f=await _0x2523db[_0x175780(0x135)](_0x1d794b,{'requestedBy':_0x744d51[_0x175780(0x138)],'searchEngine':QueryType[_0x175780(0x14e)]})['catch'](()=>{});if(!_0x55b13f||!_0x55b13f[_0x175780(0x13a)][_0x175780(0x134)])return void _0x744d51[_0x175780(0x14c)]({'content':_0x175780(0x131)});const _0x385118=useQueue(_0x744d51['guild']['id']);try{if(!_0x385118[_0x175780(0x14d)])await _0x385118['connect'](_0x744d51[_0x175780(0x155)][_0x175780(0x154)]['channel']);}catch{return void _0x744d51[_0x175780(0x14c)]({'content':_0x175780(0x146)});}await _0x744d51['followUp']({'content':_0x175780(0x13c)+(_0x55b13f[_0x175780(0x141)]?_0x175780(0x141):'track')+_0x175780(0x13b)}),_0x55b13f[_0x175780(0x141)]?_0x385118['node'][_0x175780(0x14f)](_0x55b13f[_0x175780(0x13a)],0x0):_0x385118[_0x175780(0x137)]['insert'](_0x55b13f[_0x175780(0x13a)][0x0],0x0);if(!_0x385118[_0x175780(0x152)])await _0x2523db[_0x175780(0x13f)]();}catch(_0x597969){console['log'](_0x597969),await _0x744d51[_0x175780(0x14c)]({'content':_0x175780(0x145)+_0x597969['message']});}}};
