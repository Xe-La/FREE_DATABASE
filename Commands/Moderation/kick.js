const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission(["KICK_MEMBERS"])) return message.reply('Tu n\'as pas la perm de kick')
  const user = message.mentions.users.first();
  const reason = args.splice(1).join(' ');
  user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas")
  return message.channel.send(`L'utilisateur ${user} a été kick avec succès !`)

}

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;