# memes-bot
A simple discord bot who can be called with a command to join the current vocal channel and play a sound

There is only French 🇫🇷 samples yet.

## How to use locally

### Step 1, install dependencies
*I assume you have already node and npm installed*

To stream a sound on a discord channel, you need **ffmpeg** installed.

You can follow this link : https://www.ffmpeg.org/download.html

For Mac users, you can simply use Homebrew 🍺

    $ brew install ffmpeg
Then you can install npm dependencies

    $ npm install

### Step2, create a Discord bot

Create a Discord app here : https://discordapp.com/developers/applications/me

Fill the input with your bot informations you want, then you can click on the **Create app** button.

We are almost done ! To enable the bot to write and join vocal channel, you need to click on the **Create a bot user** button.

Get your Client Secret, and paste it in the index.js file

    12. bot.login('YOUR_CLIENT_SECRET')

To setup Bot permissions, follow this link : https://discordapi.com/permissions.html

Check what you need, fill you Client Token then click on the generated link to add your bot on your Discord Server.

### Step 3, launch the bot

Open your terminal, go in your Bot folder then simply type

    node index.js
