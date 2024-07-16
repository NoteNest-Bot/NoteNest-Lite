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
const {ApplicationCommandOptionType} = require('discord.js');
const {useQueue} = require('discord-player');
const {isInVoiceChannel} = require('../utils/voicechannel');

module.exports = {
    name: 'volume',
    description: 'Change the volume!',
    options: [
        {
            name: 'volume',
            type: ApplicationCommandOptionType.Integer,
            description: 'Number between 0-200',
            required: true,
        },
    ],
    async execute(interaction) {
        const {default: Conf} = await import('conf');

        await interaction.deferReply();

        let volume = interaction.options.getInteger('volume');
        volume = Math.max(0, volume);
        volume = Math.min(200, volume);

        // Set the general volume (persisted)
        const config = new Conf({projectName: 'volume'});
        config.set('volume', volume);

        // Set the volume of the current queue
        const queue = useQueue(interaction.guild.id);
        const inVoiceChannel = isInVoiceChannel(interaction);
        if (inVoiceChannel && queue && queue.currentTrack) queue.node.setVolume(volume);

        return void interaction.followUp({
            content: `🔊 | Volume set to ${volume}!`,
        });
    },
};
