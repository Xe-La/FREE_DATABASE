const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {

  let mention = message.mentions.members.first();
  let reason = args.join(" ").slice(22)
  if (!reason) return message.channel.send("Merci de spécifier une raison!")

  if(message.member.hasPermission("BAN_MEMBERS"))

  if(mention == undefined){
      message.reply("Membre non mentionné")
  }
  else {
      if(mention.bannable){
          mention.ban();
          message.channel.send(mention.displayName + " a été banni avec succès! Avec la raison : " + reason)
      }
      else {
          message.reply("Impossible de bannir ce membre")
      }
  }
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN;