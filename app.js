require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client()

// make get request @ the webhook url to get id and token
const realmsBuffHook = new Discord.WebhookClient(process.env.BUFF_WEBHOOK_ID, process.env.BUFF_WEBHOOK_TOKEN);


bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", msg => {
  // channel to scrape messages
  if (msg.channel.id === process.env.DR_CHANNEL_ID) {
    let content = msg.content ? msg.content : { embed: [msg.embeds[0]] };

    if (/buff/i.test(content)) realmsBuffHook.send(content);
  }
});

bot.login(process.env.DISCORD_TOKEN);


