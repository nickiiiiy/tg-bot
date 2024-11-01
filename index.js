// const token=process.env.TOKEN

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TOKEN;

const webAppUrl = "https://ya.ru";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Welcome to the bot", {
      reply_markup: {
        inline_keyboard: [[{ text: "Button 1", web_app: { url: webAppUrl } }]],
      },
    });
  }
});
