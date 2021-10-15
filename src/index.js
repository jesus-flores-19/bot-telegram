const Telegraf = require("telegraf").Telegraf;

const bot = new Telegraf("2052372725:AAH7pPB14HfPuuv9PbRe52iUaLfzyQbiQ4Q");


bot.start((ctx) => {
    const mensaje = `<b>Bienvenido</b> al bot de prueba. \n\n¿En que puedo ayudarte, ${ctx.chat.first_name}?`
    ctx.telegram.sendMessage(ctx.chat.id, mensaje, {
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [{ text: "Sin luz en pdv", callback_data: "problema_1" }, ],
                [{ text: "Problema de red", callback_data: "problema_2" }, ],
                [{ text: "Sin personal", callback_data: "problema_3" }, ]
            ]
        }
    })
})

bot.action("problema_1", (ctx) => {
    ctx.reply("Los tecnicos van en camino")
})
bot.action("problema_2", (ctx) => {
    const mensaje = `<b>Problema 2</b> \n\n¿Necesitas un tecnico, ${ctx.chat.first_name}?`
    ctx.telegram.sendMessage(ctx.chat.id, mensaje, {
        parse_mode: "HTML",
        reply_markup: {
            keyboard: [
                [{ text: "Si", callback_data: "Si" }],
                [{ text: "No" }]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    })

})
bot.hears("Si", (ctx) => {
    ctx.reply("Se levanto un reporte, el técnico seria enviado")
})

bot.action("problema_3", (ctx) => {
    ctx.reply("El reporte se ha levantado.\nEn unos minutos nos comunicaremos contigo.")
})
bot.launch()