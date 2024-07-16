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
const {QueryType, useQueue, useMainPlayer} = require('discord-player');
const {isInVoiceChannel} = require("../utils/voicechannel");

module.exports = {
    name: 'playtop',
    description: 'Play a song before the next in your channel!',
    options: [
        {
            name: 'query',
            type: ApplicationCommandOptionType.String,
            description: 'The song you want to play',
            required: true,
        },
    ],
    async execute(interaction) {
        try {
            const inVoiceChannel = isInVoiceChannel(interaction)
            if (!inVoiceChannel) {
                return
            }

            await interaction.deferReply();

            const player = useMainPlayer()
            const query = interaction.options.getString('query');
            const searchResult = await player
                .search(query, {
                    requestedBy: interaction.user,
                    searchEngine: QueryType.AUTO,
                })
                .catch(() => {
                });
            if (!searchResult || !searchResult.tracks.length)
                return void interaction.followUp({content: 'No results were found!'});

            const queue = useQueue(interaction.guild.id)

            try {
                if (!queue.connection) await queue.connect(interaction.member.voice.channel);
            } catch {
                return void interaction.followUp({
                    content: 'Could not join your voice channel!',
                });
            }

            await interaction.followUp({
                content: `⏱ | Loading your ${searchResult.playlist ? 'playlist' : 'track'}...`,
            });
            searchResult.playlist ? queue.node.insert(searchResult.tracks, 0) : queue.node.insert(searchResult.tracks[0], 0);
            if (!queue.currentTrack) await player.play();
        } catch (error) {
            console.log(error);
            await interaction.followUp({
                content: 'There was an error trying to execute that command: ' + error.message,
            });
        }
    },
};
