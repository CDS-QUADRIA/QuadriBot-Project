const Discord = require('discord.js');
// require the config file with the 2 attributes prefix and token
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.once('ready', () => {
	console.log('Bot chargé');
});
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		message.channel.send(`First argument: ${args[0]}`);
	}
	if (command === 'jp'){
		return message.channel.send('> JP : :beers: Apéro? :champagne_glass: \n  https://cdn.discordapp.com/attachments/690189290281500681/694145170618187808/costume-pastis-man-deguisement-adulte.png');
	}
	if (command === 'fp'){
		return message.channel.send(` :zap: Force :zap: \n          Et\n :champagne: Pastis ! :champagne: \nhttps://cdn.discordapp.com/attachments/690189290281500681/694145662937202708/image.png`);
		}
		if (command === 'serveur'){
			return message.reply(`Ce serveur s'appelle : ${message.guild.name}
			\nTotal de membres: ${message.guild.memberCount}
			\nCréé le: ${message.guild.createdAt}, par ${message.guild.owner}, dans la région suivante : ${message.guild.region}`);
		}
		if (command === 'user-info'){
			return message.reply(` :man_technologist: Ton nom d'utilisateur: ${message.author.username}\n :id: Ton ID : ${message.author.id}`);
		}
		else if (command === 'insulte') {
			if (!message.mentions.users.size) {
				return message.reply(" :face_with_symbols_over_mouth: Hey, tu ne m'as pas dis qui insulter, connard! :face_with_symbols_over_mouth: ");
			}
			const taggedUser = message.mentions.users.first();
			message.channel.send(`Tu parlais de la mère de ${taggedUser.username}, ${message.author}?`);
		}
		else if (command === 'avatar') {
			if (!message.mentions.users.size) {
				return message.reply(`voici l'url de ton avatar : ${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);
			}
			const avatarList = message.mentions.users.map(user => {
				return `L'avatar de ${user.username} : ${user.displayAvatarURL({ format: "png", dynamic: true })}`;
			});
			message.channel.send(avatarList);
		}
	}
);
// login to Discord with your app's token
client.login(token);
