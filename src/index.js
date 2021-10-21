const { Telegraf, Markup } = require("telegraf");
const loginjs = require("./logis");

const bot = new Telegraf("2065795954:AAEwxaQybxKRIrWPqpFCO_iUYumKwi5_5xo");
let sesion = false

bot.start((ctx) => {
    if (sesion) {
        ctx.reply("huevos")
    } else {
        const mensaje = `<b>Bienvenido</b> al bot de prueba. \n\n¿Ya iniciaste sesión, ${ctx.chat.first_name}?`
        ctx.telegram.sendMessage(ctx.chat.id, mensaje, {
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Login", callback_data: "login" }, ],
                ]
            }
        })
    }
})

bot.action("login", (ctx) => {
    ctx.answerCbQuery()
    ctx.reply("Ingrese el usuario:")

    bot.on("text", (ctx) => {
        let mensaje = ctx.message.text.toLowerCase()
        if (mensaje === "lol") {
            ctx.reply("Bienvenido, pana. \n /start")
        } else {
            ctx.reply("Ingrese correctamente el usuario.")
        }
    })
})

// bot.hears("Si", (ctx) => {
//     ctx.reply("Se levanto un reporte, el técnico seria enviado")
// })
bot.launch()