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
const _0x1f8e9c=_0xf409;(function(_0xc9e11f,_0x26fcba){const _0x2584b9=_0xf409,_0x1a0aac=_0xc9e11f();while(!![]){try{const _0x9643a0=-parseInt(_0x2584b9(0x148))/0x1+-parseInt(_0x2584b9(0x15c))/0x2*(-parseInt(_0x2584b9(0x145))/0x3)+-parseInt(_0x2584b9(0x157))/0x4+parseInt(_0x2584b9(0x152))/0x5*(parseInt(_0x2584b9(0x151))/0x6)+-parseInt(_0x2584b9(0x15e))/0x7+-parseInt(_0x2584b9(0x143))/0x8*(parseInt(_0x2584b9(0x14a))/0x9)+parseInt(_0x2584b9(0x14f))/0xa*(parseInt(_0x2584b9(0x155))/0xb);if(_0x9643a0===_0x26fcba)break;else _0x1a0aac['push'](_0x1a0aac['shift']());}catch(_0x3e1881){_0x1a0aac['push'](_0x1a0aac['shift']());}}}(_0x59dd,0x46a62));function _0x59dd(){const _0x3f3411=['48VBpeKs','discord-player','1316157QptdTB','exports','../utils/voicechannel','259027Mjxufd','max','786798DPmVie','guild','Integer','volume','followUp','2674330gqUonM','set','1021794XMwaBo','5HdTVsY','getInteger','deferReply','33oHefQY','discord.js','779852avLUya','node','setVolume','Change\x20the\x20volume!','🔊\x20|\x20Volume\x20set\x20to\x20','2acYRoy','conf','1003919dxPvPD'];_0x59dd=function(){return _0x3f3411;};return _0x59dd();}const {ApplicationCommandOptionType}=require(_0x1f8e9c(0x156)),{useQueue}=require(_0x1f8e9c(0x144)),{isInVoiceChannel}=require(_0x1f8e9c(0x147));function _0xf409(_0x334a12,_0x3c51c3){const _0x59dd05=_0x59dd();return _0xf409=function(_0xf40995,_0x4a2cc9){_0xf40995=_0xf40995-0x143;let _0x1640d9=_0x59dd05[_0xf40995];return _0x1640d9;},_0xf409(_0x334a12,_0x3c51c3);}module[_0x1f8e9c(0x146)]={'name':_0x1f8e9c(0x14d),'description':_0x1f8e9c(0x15a),'options':[{'name':_0x1f8e9c(0x14d),'type':ApplicationCommandOptionType[_0x1f8e9c(0x14c)],'description':'Number\x20between\x200-200','required':!![]}],async 'execute'(_0x1c74e6){const _0x1217fd=_0x1f8e9c,{default:_0x3fc982}=await import(_0x1217fd(0x15d));await _0x1c74e6[_0x1217fd(0x154)]();let _0x1110da=_0x1c74e6['options'][_0x1217fd(0x153)]('volume');_0x1110da=Math[_0x1217fd(0x149)](0x0,_0x1110da),_0x1110da=Math['min'](0xc8,_0x1110da);const _0x50766f=new _0x3fc982({'projectName':'volume'});_0x50766f[_0x1217fd(0x150)]('volume',_0x1110da);const _0x969c54=useQueue(_0x1c74e6[_0x1217fd(0x14b)]['id']),_0x1314d8=isInVoiceChannel(_0x1c74e6);if(_0x1314d8&&_0x969c54&&_0x969c54['currentTrack'])_0x969c54[_0x1217fd(0x158)][_0x1217fd(0x159)](_0x1110da);return void _0x1c74e6[_0x1217fd(0x14e)]({'content':_0x1217fd(0x15b)+_0x1110da+'!'});}};
