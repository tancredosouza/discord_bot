const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// Import discord.js and create the client
const Discord = require("discord.js");
const client = new Discord.Client();

let record = 0;
let count = 1;

// Register an event so that when the bot is ready, it will log a messsage to the terminal
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Register an event to handle incoming messages
client.on("message", async (msg) => {
  // Check if the message starts with '!hello' and respond with 'world!' if it does.
  if (msg.content.startsWith("!startcounting")) {
    msg.channel.send("Estou contando! 😏");
    console.log("started counting");
    var interval = setInterval(function () {
      msg.channel.send("🗓 Tabelinha do Fermix falando mal da Zelda 💖💜");
      msg.channel.send(`O Fermix não xinga a Zelda há ${count} dias!`);
      count = count + 1;
    }, 10 * 1000);
  }

  if (msg.content.startsWith("!reset")) {
    record = Math.max(record, count);
    count = 0;
    msg.channel.send("👺 Hoje o Fermix xingou a Zelda! 🤦🏻‍♀️");
    msg.channel.send(`Nosso recorde é de ${record} dias. 🏆`);
  }
});

// client.login logs the bot in and sets it up for use. You'll enter your token here.
client.login(process.env.DISCORD_TOKEN);
