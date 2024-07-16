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
    name: 'move',
    description: 'move song position in the queue!',
    options: [
        {
            name: 'track',
            type: ApplicationCommandOptionType.Integer,
            description: 'The track number you want to move',
            required: true,
        },
        {
            name: 'position',
            type: ApplicationCommandOptionType.Integer,
            description: 'The position to move it to',
            required: true,
        },
    ],
    async execute(interaction) {
        const inVoiceChannel = isInVoiceChannel(interaction)
        if (!inVoiceChannel) {
            return
        }

        await interaction.deferReply();
        const queue = useQueue(interaction.guild.id)

        if (!queue || !queue.currentTrack)
            return void interaction.followUp({content: '❌ | No music is being played!'});

        const queueNumbers = [interaction.options.getInteger('track') - 1, interaction.options.getInteger('position') - 1];

        if (queueNumbers[0] > queue.tracks.size || queueNumbers[1] > queue.tracks.size)
            return void interaction.followUp({content: '❌ | Track number greater than queue depth!'});

        try {
            const track = queue.node.remove(queueNumbers[0]);
            queue.node.insert(track, queueNumbers[1]);
            return void interaction.followUp({
                content: `✅ | Moved **${track}**!`,
            });
        } catch (error) {
            console.log(error);
            return void interaction.followUp({
                content: '❌ | Something went wrong!',
            });
        }
    },
};
