const { MessageEmbed } = require('discord.js');

    const embedMsg = (channel, color, title, av_desc, desc) =>{
    const ch = client.channels.cache.find(ch => ch.id === channel)

    ch.send({
        embed:{
            color: `0x${color}`,
            title: `${client.user.username} | ${title}`,
            thumbnail:{
                url: message.author.displayAvatarURL()
            },
            description: `${av_desc}\n\n${desc}`,
            timestamp: new Date(),
            footer:{
                text: `${client.user.username}`,
                icon_url: client.user.displayAvatarURL()
            }
        }
    });
}

module.exports = { embedMsg }
