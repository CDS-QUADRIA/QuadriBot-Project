// require the discord.js module
const Discord = require('discord.js');

// require the config file with the 2 attributes prefix and token
const { prefix, token } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  console.log(message.content);
  if (message.content.startsWith(`${prefix}jp`)) {
	// send back "Apéro!" to the channel the message was sent in
	message.channel.send('Apéro?');
}
else if (message.content === `${prefix}fp`) {
	message.channel.send(`Force\nEt\nPastis !`);
}
	else if (message.content === `${prefix}serveur`) {
	message.channel.send(`Ce serveur s'appelle: ${message.guild.name}
	\nTotal de membres: ${message.guild.memberCount}
	\nCréé le: ${message.guild.createdAt}, par ${message.guild.owner}, dans la région suivante : ${message.guild.region}`);
}
	else if (message.content === `${prefix}user-info`) {
	message.channel.send(`Ton nom d'utilisateur: ${message.author.username}\nTon ID: ${message.author.id}`);
}

});

// login to Discord with your app's token
client.login(token);
