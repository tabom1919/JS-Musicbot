const config = require('./config.js')
const prefix = config.prefix

const discord = require('discord.js')
const bot = new discord.Client()
bot.commands = new Map()

require('fs').readdir('./commands/', (err,files) => {
  if (err) console.error("[STARTUP] Error Loading Commands.");

  files.filter(f => f.split(".").pop() === 'js').forEach((f,i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`))
  })
})

bot.on()

//bot.login(config.token)