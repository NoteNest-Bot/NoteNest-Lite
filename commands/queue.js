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
const _0x39eb18=_0x5c85;function _0x5c85(_0x15dae9,_0x5265f7){const _0x3e9649=_0x3e96();return _0x5c85=function(_0x5c8574,_0x357de8){_0x5c8574=_0x5c8574-0x1e6;let _0x3e6343=_0x3e9649[_0x5c8574];return _0x3e6343;},_0x5c85(_0x15dae9,_0x5265f7);}(function(_0x500530,_0x123ad9){const _0x15f617=_0x5c85,_0x40ab7a=_0x500530();while(!![]){try{const _0x5f144e=-parseInt(_0x15f617(0x1ee))/0x1+-parseInt(_0x15f617(0x1f0))/0x2+parseInt(_0x15f617(0x1f1))/0x3+-parseInt(_0x15f617(0x1fb))/0x4+-parseInt(_0x15f617(0x1f3))/0x5*(-parseInt(_0x15f617(0x1ef))/0x6)+-parseInt(_0x15f617(0x1fd))/0x7+parseInt(_0x15f617(0x1eb))/0x8;if(_0x5f144e===_0x123ad9)break;else _0x40ab7a['push'](_0x40ab7a['shift']());}catch(_0x1736cf){_0x40ab7a['push'](_0x40ab7a['shift']());}}}(_0x3e96,0x4980a));const {GuildMember}=require('discord.js'),{useQueue}=require(_0x39eb18(0x1e7)),{isInVoiceChannel}=require(_0x39eb18(0x1f6));function _0x3e96(){const _0xe33c34=['\x20-\x20','...','../utils/voicechannel','Now\x20Playing\x20🎶\x20|\x20\x20**','author','guild','length','856340qHeHIK','currentTrack','1813602AXXtIg','View\x20the\x20queue\x20of\x20current\x20songs!','discord-player','reply','There\x20are\x20no\x20songs\x20in\x20the\x20queue!','data','9001032oGTuVf','slice','forEach','310033mJqEvE','697350EqfXZy','632416jPzDDL','128697HKJANw','title','10gawWPg'];_0x3e96=function(){return _0xe33c34;};return _0x3e96();}module['exports']={'name':'queue','description':_0x39eb18(0x1e6),async 'execute'(_0x48236b){const _0x2945dc=_0x39eb18,_0x1e653b=isInVoiceChannel(_0x48236b);if(!_0x1e653b)return;const _0x145d2b=useQueue(_0x48236b[_0x2945dc(0x1f9)]['id']);if(_0x145d2b!=null){const _0x3061b2=(_0x4f63f2,_0x44146c)=>_0x4f63f2[_0x2945dc(0x1fa)]>_0x44146c?_0x4f63f2[_0x2945dc(0x1ec)](0x0,_0x44146c-0x3)+_0x2945dc(0x1f5):_0x4f63f2;let _0x4631f9='🎶\x20|\x20\x20**Upcoming\x20Songs:**\x0a';return _0x145d2b['tracks'][_0x2945dc(0x1ea)][_0x2945dc(0x1ed)]((_0x4fe83f,_0x310bdc)=>{const _0x1466c1=_0x2945dc;_0x4631f9+=_0x310bdc+0x1+'.\x20'+_0x4fe83f[_0x1466c1(0x1f2)]+_0x1466c1(0x1f4)+_0x4fe83f[_0x1466c1(0x1f8)]+'\x0a';}),void _0x48236b['reply']({'embeds':[{'title':_0x2945dc(0x1f7)+_0x145d2b[_0x2945dc(0x1fc)][_0x2945dc(0x1f2)]+'**','description':_0x3061b2(_0x4631f9,0xfff)}]});}else return void _0x48236b[_0x2945dc(0x1e8)]({'content':_0x2945dc(0x1e9)});}};
