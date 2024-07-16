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
const {GuildMember, ApplicationCommandOptionType} = require('discord.js');
const {useQueue} = require("discord-player");
const {isInVoiceChannel} = require("../utils/voicechannel");

module.exports = {
    name: 'swap',
    description: 'swap song positions in the queue!',
    options: [
        {
            name: 'track1',
            type: ApplicationCommandOptionType.Integer,
            description: 'The track number you want to swap',
            required: true,
        },
        {
            name: 'track2',
            type: ApplicationCommandOptionType.Integer,
            description: 'The track number you want to swap',
            required: true,
        },
    ],
    async execute(interaction) {
        const inVoiceChannel = isInVoiceChannel(interaction)
        if (!inVoiceChannel) {
            return
        }

        await interaction.deferReply();
        const queue = useQueue(interaction.guild.id);
        if (!queue || !queue.currentTrack) return void interaction.followUp({content: '❌ | No music is being played!'});
        const queueNumbers = [interaction.options.getInteger('track1') - 1, interaction.options.getInteger('track2') - 1];
        // Sort so the lowest number is first for swap logic to work
        queueNumbers.sort(function (a, b) {
            return a - b;
        });
        if (queueNumbers[1] > queue.getSize())
            return void interaction.followUp({content: '❌ | Track number greater than queue depth!'});

        try {
            const track2 = queue.node.remove(queueNumbers[1]); // Remove higher track first to avoid list order issues
            const track1 = queue.node.remove(queueNumbers[0]);
            queue.node.insert(track2, queueNumbers[0]); // Add track in lowest position first to avoid list order issues
            queue.node.insert(track1, queueNumbers[1]);
            return void interaction.followUp({
                content: `✅ | Swapped **${track1}** & **${track2}**!`,
            });
        } catch (error) {
            console.log(error);
            return void interaction.followUp({
                content: '❌ | Something went wrong!',
            });
        }
    },
};
