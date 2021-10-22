const { Telegraf, Markup } = require("telegraf");
const loginjs = require("./logis");

const bot = new Telegraf("2065795954:AAEwxaQybxKRIrWPqpFCO_iUYumKwi5_5xo");

///////////////////////////////////////////////////////////////////////////////////////////////////
//////// Variables globales
///////////////////////////////////////////////////////////////////////////////////////////////////

let sesion = false

let escucharLogin = false;
let escucharContacto = false;
// let escuchar2 = false;

///////////////////////////////////////////////////////////////////////////////////////////////////

bot.start((ctx) => {
    if (sesion) {
        ctx.reply("menu")
    } else {
        const mensaje = `<b>Bienvenido</b> al bot de prueba. \n\n¿En que puedo ayudarte, ${ctx.chat.first_name}?`
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

bot.launch()