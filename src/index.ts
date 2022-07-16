import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
});

client.on('ready', () => {
	console.log("Jeremy is already landing to the field.");
});

client.on('messageCreate', message => {
	if(message.content.toLowerCase() === "hello jeremy") {
		message.reply({
			content: "Hey! Lebranc. I\'m Jeremy!!"
		});
	}
});

client.login(process.env.TOKEN); 