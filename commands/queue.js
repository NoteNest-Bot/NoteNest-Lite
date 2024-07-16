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
const {GuildMember} = require('discord.js');
const {useQueue} = require("discord-player");
const {isInVoiceChannel} = require("../utils/voicechannel");

module.exports = {
    name: 'queue',
    description: 'View the queue of current songs!',
    async execute(interaction) {
        const inVoiceChannel = isInVoiceChannel(interaction)
        if (!inVoiceChannel) {
            return
        }

        const queue = useQueue(interaction.guild.id)
        if (queue != null) {
            const trimString = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
            
            let queueStr = `🎶 |  **Upcoming Songs:**\n`

            // Build queue list
            queue.tracks.data.forEach((track, index) => {
            queueStr += `${index + 1}. ${track.title} - ${track.author}\n`;
            });

            return void interaction.reply({
                embeds: [
                    {
                        title: `Now Playing 🎶 |  **${queue.currentTrack.title}**`,
                        description: trimString(queueStr, 4095),
                    }
                ]
            })
        } else {
            return void interaction.reply({
                content: 'There are no songs in the queue!'
            })
        }
    }
}
