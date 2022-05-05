require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client()
const realmsBuffHook = new Discord.WebhookClient(process.env.BUFF_WEBHOOK_ID, process.env.BUFF_WEBHOOK_TOKEN);
// make get request @ the webhook url to get id and token



bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", msg => {
  // 520163873022672906 Dr Broadcast
  if (msg.channel.id === process.env.DR_CHANNEL_ID) {
    // channel to scrape messages
    let content = msg.content ? msg.content : { embed: [msg.embeds[0]] };

    if (/buff/i.test(content)) realmsBuffHook.send(content);

  }
});


bot.login(process.env.DISCORD_TOKEN);


