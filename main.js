const Discord = require('discord.js');
const api = require("imageapi.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`I am ready!`);
 
    client.user.setActivity(`Hello!`);
});
 
client.on('message', async msg => {
  if (msg.content === PREFIX + 'meme') {
    let subreddits = [
    
      "memes",
      "meme",
      "dankmeme",
      "dankmemes",
      "Photoshopbattles",
      "me2irl",
      "relatable",
      "comedycemetary",
      "memeeconomy",
      "pewdiepiesubmissions",
      "terriblefacebookmemes",
      "prequelmemes",
      "AdviceAnimals"
    ];
    let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
    let img = await api(subreddit)
    const Embed = new Discord.MessageEmbed()
    .setTitle(`A meme from ${subreddit}`)
    .setURL(`https://www.reddit.com/${subreddit}`)
    .setColor('RANDOM')
    .setImage(img)
    msg.channel.send(Embed)
  }
});

client.on('message', message => {
  if (message.content.startsWith(PREFIX + 'ping')) {
    message.reply(`Pong!`);
  }
}); 

client.on('message', message => {
  if (message.content.startsWith(PREFIX + 'goal')) {
    message.reply('GOOOOOOOOAAAAAAAAAALLLLLLLL!');
  }
});

client.on('message', message => {
  if(message.content.startsWith(PREFIX + 'latency')) {
    message.reply('Idk how lol! :)');
  }
});

let PREFIX = '!'

client.login('BOT TOKEN');
