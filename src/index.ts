import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
});

// Add Event When Client is ready.
client.on('ready', () => {
	console.log("Jeremy is already landing to the field.");
});

// Add Event when client is responding to a message.
client.on('messageCreate', message => {
	if(message.content.toLowerCase() === "hello jeremy") {
		message.reply({
			content: "Hey! Lebranc. I\'m Jeremy!!"
		});
	}
});

// Login with Token. 
client.login(process.env.TOKEN); 