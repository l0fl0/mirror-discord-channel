require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client()

// make get request @ the webhook url to get id and token
const realmsHook = new Discord.WebhookClient(process.env.WEBHOOK_ID, process.env.WEBHOOK_TOKEN);


bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", msg => {
  // channel to scrape messages
  if (msg.channel.id === process.env.DR_CHANNEL_ID) {
    let content = msg.content ? msg.content : { embed: [msg.embeds[0]] };
    console.log(content);

    if (/buff/i.test(content)) realmsHook.send("@everyone " + content)

    else if (/conquest/i.test(content) && /beginning/i.test(content)) realmsHook.send("@everyone " + content)

    else realmsHook.send(content);

  }
});

bot.login(process.env.ACCOUNT_TOKEN);