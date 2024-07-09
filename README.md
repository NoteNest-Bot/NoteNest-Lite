<a href="https://discord.gg/E4VbGF8KR2">
    <img src="https://img.shields.io/discord/811542332678996008?color=7289DA&label=Support&logo=discord&style=for-the-badge" alt="Discord">
</a>
# NoteNest-Music-bot

A simple and powerful Discord music bot built using `discord.js` and `discord-player`.

## Features

- Play music from YouTube and other sources
- Queue management (add, remove, view, shuffle, move tracks)
- Loop modes (off, track, queue, autoplay)
- Pause, resume, and skip tracks
- Automatic disconnection on empty voice channel
- Error handling and informative messages

## Prerequisites

- [Node.js](https://nodejs.org/) v16.9.0 or higher
- [ffmpeg](https://www.ffmpeg.org/download.html)
- A Discord bot token. You can get one by creating a new application in the [Discord Developer Portal](https://discord.com/developers/applications)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/NoteNest-Bot/NoteNest-Music-bot.git
    cd disbot
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your bot token:
    ```env
    TOKEN=your-bot-token
    ```

4. Customize the bot activity in `config.json`:
    ```json
    {
        "activityType": "0", // 0: Playing, 1: Streaming, 2: Listening, 3: Watching, 5: Competing
        "activity": "Music"
    }
    ```

## Running the Bot

Start the bot with the following command:
```sh
node index.js
```
## Commands

### Music Commands

- `/play [query]` - Play a song in your channel
- `/playtop [query]` - Play a song before the next in your channel
- `/pause` - Pause the current song
- `/resume` - Resume the current song
- `/skip` - Skip the current song
- `/stop` - Stop the music and clear the queue
- `/queue` - View the current song queue
- `/nowplaying` - Get the song that is currently playing
- `/shuffle` - Shuffle the song queue
- `/remove [number]` - Remove a song from the queue
- `/move [track] [position]` - Move a song to a different position in the queue
- `/loop [mode]` - Set the loop mode (off, track, queue, autoplay)

### Utility Commands

- `/help` - List all available commands
- `/purge [num]` - Delete the last messages in all chats

### Moderation Commands

- `/ban [user]` - Ban a user

### After deploying the bot, add the bot to your server
### Install your bot's Slash commands using the !install directive
## info
✅ Easy-to-use
✅ Stable
✅ Slash Commands
❎ Open Source
✅ Good music commands
