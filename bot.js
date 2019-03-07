client.on('message', message => {

      if (message.content.startsWith("السلام عليكم")) {
    let embed = new Discord.RichEmbed() 
    .setDescription(`وعلــيكم الــسلام`) 
    .setColor("#36393e")
    
    message.channel.sendEmbed(embed) 
      }
    })