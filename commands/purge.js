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
module.exports = {
    name: 'purge',
    description: 'Delete the last messages in all chats.',
    options: [
        {
            name: 'num',
            type: 4, //'INTEGER' Type
            description: 'The number of messages you want to delete. (max 100)',
            required: true,
        },
    ],
    async execute(interaction) {
        const deleteCount = interaction.options.get('num').value;

        if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
            return void interaction.reply({
                content: `Please provide a number between 2 and 100 for the number of messages to delete`,
                ephemeral: true,
            });
        }

        const fetched = await interaction.channel.messages.fetch({
            limit: deleteCount,
        });

        interaction.channel
            .bulkDelete(fetched)
            .then(() => {
                interaction.reply({
                    content: `Succesfully deleted messages`,
                    ephemeral: true,
                });
            })
            .catch(error => {
                interaction.reply({
                    content: `Couldn't delete messages because of: ${error}`,
                    ephemeral: true,
                });
            });
    },
};
