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
const {QueueRepeatMode, useQueue} = require('discord-player');
const {isInVoiceChannel} = require("../utils/voicechannel");

module.exports = {
    name: 'loop',
    description: 'Sets loop mode',
    options: [
        {
            name: 'mode',
            type: ApplicationCommandOptionType.Integer,
            description: 'Loop type',
            required: true,
            choices: [
                {
                    name: 'Off',
                    value: QueueRepeatMode.OFF,
                },
                {
                    name: 'Track',
                    value: QueueRepeatMode.TRACK,
                },
                {
                    name: 'Queue',
                    value: QueueRepeatMode.QUEUE,
                },
                {
                    name: 'Autoplay',
                    value: QueueRepeatMode.AUTOPLAY,
                },
            ],
        },
    ],
    async execute(interaction) {
        try {
            const inVoiceChannel = isInVoiceChannel(interaction)
            if (!inVoiceChannel) {
                return
            }

            await interaction.deferReply();

            const queue = useQueue(interaction.guild.id)
            if (!queue || !queue.currentTrack) {
                return void interaction.followUp({content: '❌ | No music is being played!'});
            }

            const loopMode = interaction.options.getInteger('mode');
            queue.setRepeatMode(loopMode);
            const mode = loopMode === QueueRepeatMode.TRACK ? '🔂' : loopMode === QueueRepeatMode.QUEUE ? '🔁' : '▶';

            return void interaction.followUp({
                content: `${mode} | Updated loop mode!`,
            });
        } catch (error) {
            console.log(error);
            return void interaction.followUp({
                content: 'There was an error trying to execute that command: ' + error.message,
            });
        }
    },
};
