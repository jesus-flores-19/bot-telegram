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

bot.action("login", (ctx) => {
    ctx.answerCbQuery()
    ctx.telegram.sendMessage(ctx.chat.id, "Ingrese el usuario")
    escucharLogin = true;
})

bot.command("borrar", (ctx) => {
    console.log("hola");
})



///////////////////////////////////////////////////////////////////////////////////////////////////
//////////   BOT.ON
///////////////////////////////////////////////////////////////////////////////////////////////////

bot.on("text", (ctx) => {
    ///////////////////////////////////////////
    // Login
    ///////////////////////////////////////////
    if (escucharLogin) {
        console.log("Escuchando - sesion Login");
        const texto = ctx.message.text.toLowerCase();
        if (texto === "jesus") {
            ctx.reply("Bienvenido usuario.")

            escucharLogin = false
            ctx.telegram.sendMessage(ctx.chat.id, "Ingrese su numero telefonico: ", {
                reply_markup: {
                    keyboard: [
                        [{ text: "Enviar mi contacto", request_contact: true }]
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true
                }
            })
            escucharContacto = true
            return
        } else {
            ctx.reply("Usuario incorrecto")
            return
        }
    }
    if (escucharContacto) {
        ctx.reply("Agrega el contacto, hijo de la verga")
        return
    }
})



bot.launch()