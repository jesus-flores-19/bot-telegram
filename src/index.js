const Telegraf = require("telegraf").Telegraf;

const bot = new Telegraf("2052372725:AAH7pPB14HfPuuv9PbRe52iUaLfzyQbiQ4Q");

bot.start((ctx) => {
    ctx.reply("Bienvenido")
})

bot.launch()