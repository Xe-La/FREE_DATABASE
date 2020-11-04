//////////////////////////////////////////////////////////////////////////////
// CONSTANTS (A NE PAS MODIFIER A PART SI VOUS FAITES DE NOUVELLES COMMANDES)
//////////////////////////////////////////////////////////////////////////////
const MESSAGES = {
  COMMANDS: {
    MISC: {
      HELP: {
        name: "help",
        aliases: ["halp", "aide"],
        category: 'misc',
        description: "Renvoie une liste de commandes",
        cooldown: 2,
        usage: "[nom de la commande]",
        permissions: false,
        args: false
      },
      PING: {
        name: "ping",
        aliases: ["p"],
        category: 'misc',
        description: 'Renvoie la latence du BOT',
        cooldown: 10,
        usage: "",
        permissions: false,
        args: false
      }
    },
    MODERATION: {
      BAN: {
        name: "ban",
        aliases: ["b"],
        category: 'moderation',
        description: "Ban un utilisateur",
        cooldown: 5,
        usage: "<mention de l'utilisateur> [raison du ban]",
        permissions: false,
        args: true
      },
      KICK: {
        name: "kick",
        aliases: ["k"],
        category: 'moderation',
        description: "Kick un utilisateur",
        cooldown: 5,
        usage: "<mention de l'utilisateur>",
        permissions: false,
        args: true
      }
    }
  }
}