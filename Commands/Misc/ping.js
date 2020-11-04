const { MessageEmbed } = require('discord.js')
const { MESSAGES } = require('../../util/constants')

module.exports.run = async (client, message, args) => {
  message.delete();

  message.channel.send('. ').then(m => {
    let ping = m.createdTimestamp - message.createdTimestamp;
    let choices = ['Ceci est mon Ping', 'Est-ce OK?', 'J\'espère que ce n\'est pas trop mauvais comme Ping'];
    let response = choices[Math.floor(Math.random() * choices.length)];

    let Pembed = new MessageEmbed()
      .setTitle('PING')
      .setColor('RANDOM')
      .setDescription('Latence de NOM_DE_VOTRE_BOT et de l\'API')
      .addField(`${response}`, [
        `**❯ Latence du BOT: \`${ping}\`**`, 
        `**❯ Latence de l'API: \`${Math.round(client.ws.ping)}ms\`**`
      ])

    message.channel.send(Pembed)
  });
}
module.exports.help = MESSAGES.COMMANDS.MISC.PING;