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
require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');
const Client = require('./client/Client');
const config = require('./config.json');
const {Player} = require('discord-player');

const client = new Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

console.log(client.commands);

const player = new Player(client);

player.extractors.loadDefault().then(r => console.log('Extractors loaded successfully'));

player.events.on('audioTrackAdd', (queue, song) => {
    queue.metadata.channel.send(`🎶 | Song **${song.title}** added to the queue!`);
});

player.events.on('playerStart', (queue, track) => {
    queue.metadata.channel.send(`▶ | Started playing: **${track.title}**!`);
});

player.events.on('audioTracksAdd', (queue, track) => {
    queue.metadata.channel.send(`🎶 | Tracks have been queued!`);
});

player.events.on('disconnect', queue => {
    queue.metadata.channel.send('❌ | I was manually disconnected from the voice channel, clearing queue!');
});

player.events.on('emptyChannel', queue => {
    queue.metadata.channel.send('❌ | Nobody is in the voice channel, leaving...');
});

player.events.on('emptyQueue', queue => {
    queue.metadata.channel.send('✅ | Queue finished!');
    // Delete queue and disconnect from voice channel
    queue.delete();
});

player.events.on('error', (queue, error) => {
    console.log(`[${queue.guild.name}] Error emitted from the connection: ${error.message}`);
});

client.on('ready', function () {
    console.log('Ready!');
    client.user.presence.set({
        activities: [{name: config.activity, type: Number(config.activityType)}],
        status: Discord.Status.Ready,
    });
});

client.once('reconnecting', () => {
    console.log('Reconnecting!');
});

client.once('disconnect', () => {
    console.log('Disconnect!');
});

client.on('messageCreate', async message => {
    if (message.author.bot || !message.guild) return;
    if (!client.application?.owner) await client.application?.fetch();

    if (message.content === '!install' && message.author.id === client.application?.owner?.id) {
        await message.guild.commands
            .set(client.commands)
            .then(() => {
                message.reply('Deployed!');
            })
            .catch(err => {
                message.reply('Could not deploy commands! Make sure the bot has the application.commands permission!');
                console.error(err);
            });
    }
});

client.on('interactionCreate', async interaction => {
    const command = client.commands.get(interaction.commandName.toLowerCase());

    try {
        if (interaction.commandName == 'ban' || interaction.commandName == 'userinfo') {
            command.execute(interaction, client);
        } else {
            command.execute(interaction);
        }
    } catch (error) {
        console.error(error);
        await interaction.followUp({
            content: 'There was an error trying to execute that command!',
        });
    }
});

client.login(process.env.TOKEN);
