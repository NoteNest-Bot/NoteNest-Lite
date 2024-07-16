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

module.exports = {
    name: 'ban',
    description: 'Ban a player',
    options: [
        {
            name: 'user',
            type: ApplicationCommandOptionType.User,
            description: 'The user you want to ban',
            required: true,
        },
    ],
    execute(interaction, client) {
        const member = interaction.options.getUser('user');

        if (!member) {
            return interaction.reply('You need to mention the member you want to ban him');
        }

        if (!interaction.member.permissions.has('BAN_MEMBERS')) {
            return interaction.reply("I can't ban this user.");
        }

        const userinfo = client.users.cache.getMember(member);

        return interaction.guild.members
            .ban(member)
            .then(() => {
                interaction.reply({
                    content: `${userinfo.username} was banned.`,
                    ephemeral: true,
                });
            })
            .catch(error =>
                interaction.reply({
                    content: `Sorry, an error occured.`,
                    ephemeral: true,
                }),
            );
    },
};
