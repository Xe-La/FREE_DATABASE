const { MessageEmbed } = require('discord.js');
const { PREFIX } = require('../../config');
const { readdirSync } = require('fs')
const categoryList = readdirSync('./commands')
const { MESSAGES } = require('../../util/constants')

module.exports.run = async (client, message, args) => {
  if (!args.length) {
    message.delete();

    const embed = new MessageEmbed()
      .setTitle('**NOM_DE_VOTRE_BOT**')
      .setColor('#252525')
      .addField('__Liste de commandes__', `**Une liste de toutes les sous-catégories disponibles et leurs commandes.**\n**Pour plus d'informations sur une commande, tapez** ${PREFIX}help <command_name>.`)

    for (const category of categoryList) {
      embed.addField(
        `__${category}__`,
        `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
      );
    };

    return message.channel.send(embed)
  } else {
    message.delete();

    const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]))

    const Xembed = new MessageEmbed()
      .setTitle(`**\`${command.help.name}\`**`)
      .setColor('#252525')
      .addField("Description", `**${command.help.description}** (**__cooldown:__** ${command.help.cooldown} **secondes**)`)
      .addField("Utilisation", command.help.usage ? `${PREFIX}${command.help.name} ${command.help.usage}` : `${PREFIX}${command.help.name}`, true)

    if (command.help.aliases.length > 1 ) Xembed.addField("Alias", `\`${command.help.aliases.join(', ')}\``, true)

    return message.channel.send(Xembed)
  }
};
module.exports.help = MESSAGES.COMMANDS.MISC.HELP;