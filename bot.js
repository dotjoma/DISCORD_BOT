TOKEN = 'MTEyODU3NDE1Njg4ODM0NjYyNA.G8bOQn.GOYC1ad73umUSKbJe3ljO5E-_W5Zuim8FANQfM';
API_KEY = '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';
CHANNEL_ID = '1135917053044338688'; // Chat gpt channel

require('dotenv').config();
const fs = require('fs');
const path = require('node:path');
const keepAlive = require('./server');
const { Client, Collection, GatewayIntentBits, IntentsBitField, EmbedBuilder, ActivityType, Discord, MessageEmbed, Message, Events, SlashCommandBuilder, Permissions, PermissionsBitField } = require("discord.js");

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping
  ],
});

let status = [
  {
    name: 'Ang Probinsyano',
    type: ActivityType.Watching,
  },
  {
    name: 'EL Paciano',
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/watch?v=cnbGYRbrgVE',
  },
  {
    name: 'Paciano on top!',
    type: ActivityType.Listening,
  },
]


client.on('ready', (c) => {
  console.log(`☑️ ${c.user.tag} is online.`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 3000);
});

const { OpenAIApi, Configuration } = require('openai');
const configuration = new Configuration({ 
  apiKey: API_KEY,
})

const openai = new OpenAIApi(configuration);

client.on('messageCreate', async (message) => {
  try{
  if (message.author.bot) return;
  if (message.channel.id !== CHANNEL_ID) return;
  if (message.content.startsWith('!')) return;
    
    if (message.content.length >= 1901){
      return message.reply('I can`t send more than 2000 characters, sorry.');
}

  let conversationLog = [{ role: 'system', content: "You are a friendly bot." }];

  conversationLog.push({
    role: 'user',
    content: message.content,
  });

  await message.channel.sendTyping();

  const result = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: conversationLog,
  })
  //message.reply(result.data.choices[0].message);
    
const embed = new EmbedBuilder()
      .setTitle(`Answer to (( ${message.author} ))`)
  //.setDescription(result.data.choices[0].message)
  .setImage(message.author.avatarURL())
//.setThumbnail(message.author.avatarURL())
      .setColor('White');

    message.reply({ embeds: [embed] });
    message.channel.send(result.data.choices[0].message);
    
  } catch(error){ 
    console.log(error);
  }
});

client.on('messageCreate', (message) => {
  if (message.author.bot) { return; }
  console.log(message.author.username, ':', message.content)
  if (message.content === '.') { message.reply('...'); }


  
  if (message.content === 'fuck you' ||
      message.content === 'Fkyou'||
      message.content === 'fkyou'||
      message.content === 'Fku'||
      message.content === 'Pakyu'||
      message.content === 'Pakyu ka'||
      message.content === 'pakyu ka'||
      message.content === 'PAKYU KA'||
      message.content === 'pakyu'||
      message.content === 'PAKYU'||
      message.content === 'fku'||
      message.content === 'Fk u'||
      message.content === 'fk u'||
       message.content === 'Fuckyou'||
      message.content === 'fuckyou'||
      message.content === 'FUCKYOU'||
      message.content === 'Fuck you' || 
      message.content === 'FUCK YOU') {
    const embed = new EmbedBuilder()
      .setTitle('**ƒυ¢к уσυ тσσ!!!**')
      .setImage('https://media.discordapp.net/attachments/1133308060471922769/1133718647534260264/fkyoutoo.gif')
      .setColor('White');

    message.reply({ embeds: [embed] });
    //message.react('😂');
  }


    if (message.content === 'gang sign' ||
        message.content === 'GANG SIGN' ||
        message.content === 'GANG SIGNS' ||
        message.content === 'Gang signs' ||
        message.content === 'gang signs' ||
      message.content === 'Gang sign') {
    const embed = new EmbedBuilder()
      .setTitle(`**✷✷𝙩𝙝𝙧𝙤𝙬 𝙨𝙤𝙢𝙚 𝙜𝙖𝙣𝙜 𝙨𝙞𝙜𝙣𝙨 [ 𝙀𝙇 𝙋𝙖𝙘𝙞𝙖𝙣𝙤 ] (( ${message.author.username} ))✷✷**`)
      .setImage('https://cdn.discordapp.com/attachments/1133308060471922769/1133721905371828354/gangsigns.gif')
      .setColor('White');

    message.reply({ embeds: [embed] });
    message.react('🤍');
  }

      if (message.content === 'hello' ||
          message.content === 'HELLO' ||
          message.content === 'Hi' ||
          message.content === 'hi' ||
          message.content === 'HI' ||
          message.content === 'Sup' ||
          message.content === 'sup' ||
          message.content === 'SUP' ||
          message.content === 'Wassup' ||
          message.content === 'wassup' ||
          message.content === 'Nice' ||
          message.content === 'nice' ||
          message.content === 'NICE' ||
          message.content === 'Nc' ||
          message.content === 'nc' ||
          message.content === 'NC' ||
          message.content === 'Wait' ||
          message.content === 'wait' ||
          message.content === 'WAIT' ||
          message.content === 'Waits' ||
          message.content === 'waits' ||
          message.content === 'WAITS' ||
          message.content === 'g' ||
          message.content === 'G' ||
          message.content === 'gg' ||
          message.content === 'GG' ||
          message.content === 'Gg' ||
          message.content === 'ggg' ||
          message.content === 'Ggg' ||
          message.content === 'ggs' ||
          message.content === 'Ggs' ||
          message.content === 'yo' ||
          message.content === 'Yo' ||
          message.content === 'Hello') {
        
      message.react('🤍');
  }

        if (message.content === 'Ha' ||
            message.content === 'HA' ||
            message.content === 'ha?' ||
            message.content === 'Ha?' ||
            message.content === 'HA?' ||
            message.content === 'HA??' ||
            message.content === 'Ha??' ||
            message.content === 'ha??' ||
            message.content === 'HA???' ||
            message.content === 'Ha???' ||
            message.content === 'ha???' ||
            message.content === 'ha') {

            message.reply('Hakdog');
            message.react('🌭');
  }

        if (message.content === 'Haha' ||
            message.content === 'haha' ||           
            message.content === 'Hahaha' ||
            message.content === 'hahaha' ||
            message.content === 'HAHAHA' ||
            message.content === 'Hahahaha' ||
            message.content === 'hahahaha' ||
            message.content === 'HAHAHAHA' ||
            message.content === 'Hahahahaha' ||
            message.content === 'hahahahaha' ||
            message.content === 'HAHAHAHAHA' ||
            message.content === 'Hahahahahaha' ||
            message.content === 'hahahahahaha' ||
            message.content === 'HAHAHAHAHAHA' ||
            message.content === 'Hahahahahahaha' ||
            message.content === 'hahahahahahaha' ||
            message.content === 'HAHAHAHAHAHAHA' ||   
            message.content === 'Baliw' ||
            message.content === 'baliw' ||
            message.content === 'BALIW' ||
            message.content === 'amp' ||
            message.content === 'Amp' ||
            message.content === 'AMP' ||
            message.content === 'oo' ||
            message.content === 'Oo' ||
            message.content === 'luh' ||
            message.content === 'Luh' ||
            message.content === 'Lah' ||
           message.content === 'lah' ||
            message.content === 'luhh' ||
            message.content === 'Luhh' ||
            message.content === 'lahh' ||
            message.content === 'Lahh' ||
            message.content === 'namo' ||
            message.content === 'Namo' ||
            message.content === 'Inamo' ||
            message.content === 'inamo' ||
            message.content === 'Tanga' ||
            message.content === 'tanga' ||
            message.content === 'TANGA' ||
            message.content === 'bobo' ||
            message.content === 'Bobo' ||
            message.content === 'BOBO' ||
            message.content === 'Bubu' ||
            message.content === 'bubu' ||
            message.content === 'BUBU' ||
            message.content === 'vovo' ||
            message.content === 'Vovo' ||
            message.content === 'VOVO' ||
            message.content === 'bb' ||
            message.content === 'Bb' ||
            message.content === 'vuvu' ||
            message.content === 'Vuvu' ||
            message.content === 'VUVU' ||
            message.content === 'awit' ||
            message.content === 'Awit' ||
            message.content === 'AWIT' ||
            message.content === 'Awits' ||
            message.content === 'awits' ||
            message.content === 'AWITS' ||
            message.content === 'lol' ||
            message.content === 'Lol' ||
            message.content === 'LOL' ||
            message.content === 'tangina' ||
            message.content === 'Tangina' ||
            message.content === 'TANGINA' ||
            message.content === 'Tanginamo' ||
            message.content === 'tanginamo' ||
            message.content === 'TANGINAMO' ||
            message.content === 'Gago' ||
            message.content === 'Taena' ||
            message.content === 'taena' ||
            message.content === 'TAENA' ||
            message.content === 'gago' ||
            message.content === 'GAGO' ||
            message.content === 'Gagoo' ||
            message.content === 'gagoo' ||
            message.content === 'GAGOO' ||
            message.content === 'Gagooo' ||
            message.content === 'gagooo' ||
            message.content === 'GAGOOO' ||
            message.content === 'Burat' ||
            message.content === 'burat' ||
            message.content === 'BURAT' ||
            message.content === 'HAHA') {
            //message.react('😂');
  }
  

        if (message.content === 'Imy' ||
            message.content === 'Imiss' ||
            message.content === 'imiss' ||
            message.content === 'Missyou' ||
            message.content === 'missyou' ||
            message.content === 'Missu' ||
            message.content === 'missu' ||
            message.content === 'i miss' ||
            message.content === 'I miss' ||
            message.content === 'I miss you' ||
            message.content === 'i miss you' ||
            message.content === 'I miss her' ||
            message.content === 'i miss her' ||
            message.content === 'I miss him' ||
            message.content === 'i miss him' ||
            message.content === 'imy') {


            message.react('😢');
  }

          if (message.content === 'angas' ||
            message.content === 'Angas' ||
            message.content === 'ANGAS' ||
            message.content === 'shesh' ||
            message.content === 'Shesh' ||
            message.content === 'sheesh' ||
            message.content === 'Sheesh' ||
              message.content === 'SHEESH' ||
              message.content === 'Ses' ||
              message.content === 'ses' ||
              message.content === 'SES' ||
              message.content === 'Sheshh' ||
              message.content === 'sheshh' ||
              message.content === 'SHESHH' ||
              message.content === 'Sheeshh' ||
              message.content === 'sheeshh' ||
              message.content === 'SHEESHH' ||
              message.content === 'Maangas' ||
              message.content === 'maangas' ||
              message.content === 'MAANGAS' ||
              message.content === 'postura' ||
              message.content === 'Postura' ||
              message.content === 'POSTURA' ||
            message.content === 'SHESH') {
            message.react('🔥');
  }










  
  if (message.content === 'revshit' || message.content === 'Revshit' || message.content === 'REVSHIT') {
    const revshitembed = new EmbedBuilder()
      .setTitle('**𝙎𝘼 𝙉𝙂𝘼𝙇𝘼𝙉 𝙉𝙂 𝙍𝙀𝙑𝙎𝙃𝙄𝙏, 𝘼𝙈𝙀𝙉!**')
      .setImage('https://cdn.discordapp.com/attachments/1017467133027946526/1130016057772482590/Revshit.gif')
      .setColor('White');

    message.channel.send({ embeds: [revshitembed] });
  }

  if (message.content === 'paciano' || message.content === 'Paciano' || message.content === 'PACIANO') {
    const pacianoembed = new EmbedBuilder()
      .setTitle('**𝘼𝙍𝙍𝙄𝘽𝘼 𝙋𝘼𝘾𝙄𝘼𝙉𝙊!!**')
      .setImage('https://media.discordapp.net/attachments/1125308060190130206/1128582985076199465/received_290408716813873.gif')
      .setColor('White');

    message.channel.send({ embeds: [pacianoembed] });
  }

  if (message.content === 'policy') {
    const policyembed = new EmbedBuilder()
      .setTitle('**DISCORD POLICY**')
      .setDescription('```✶ 𝐃𝐎𝐍`𝐓 𝐒𝐍𝐈𝐓𝐂𝐇! 𝐊𝐔𝐍𝐆 𝐀𝐘𝐀𝐖 𝐌𝐎𝐍𝐆 𝐒𝐀𝐌𝐀𝐈𝐍\n✶ 𝐃𝐀𝐏𝐀𝐓 𝐀𝐑𝐀𝐖 𝐀𝐑𝐀𝐖 𝐊𝐀 𝐍𝐀𝐆 𝐉𝐀𝐉𝐀𝐁𝐎𝐋 \n✶ 𝐃𝐀𝐏𝐀𝐓 𝐊𝐀 𝐁𝐔𝐌𝐈𝐋𝐈 𝐒𝐀 𝐒𝐇𝐎𝐏! \n✶ 𝐃𝐀𝐏𝐀𝐓 𝐆𝐀𝐑𝐀𝐏𝐀𝐋 𝐊𝐀!\n✶ 𝐁𝐀𝐖𝐀𝐋 𝐈𝐘𝐀𝐊𝐈𝐍 𝐃𝐈𝐓𝐎!```')
      .setImage('https://media.discordapp.net/attachments/1125308060190130206/1128582985076199465/received_290408716813873.gif')
      .setColor('White');

    message.channel.send({ embeds: [policyembed] });
  }

});

client.on('guildMemberAdd', (member) => {
  const welcomechannelId = "1028875803271897118";
  const exampleEmbed = new EmbedBuilder()
    .setColor('White')
    .setTitle('**Welcome to the Familia Vato!!**')
    //.setAuthor({ name: '', iconURL: '' })
    .setDescription(`<@${member.id}> **Lo que ves o escuchas es solo para ti.**\nDon't snitch!!!`)
    .setThumbnail(member.user.avatarURL())
    .setImage('https://media.discordapp.net/attachments/1125308060190130206/1128582985076199465/received_290408716813873.gif')
    .setTimestamp()
  //.setFooter({ text: 'Some footer text here'/*, iconURL: ''*/ });

  const channel = member.guild.channels.cache.get(welcomechannelId);
  channel.send({ embeds: [exampleEmbed] });
});

client.on('guildMemberRemove', (member) => {
  const goodbyechannelId = "1028876034319331429";
  const exampleEmbed = new EmbedBuilder()
    .setColor('White')
    .setTitle('**Goodluck to your new journey**')
    .setDescription(`<@${member.id}> **Once a Paciano Always a Paciano!!!**`)
    .setThumbnail(member.user.avatarURL())
    .setImage('https://media.discordapp.net/attachments/1125308060190130206/1128582985076199465/received_290408716813873.gif')
    .setTimestamp()

  const channel = member.guild.channels.cache.get(goodbyechannelId);
  channel.send({ embeds: [exampleEmbed] });
});

client.login(TOKEN);
keepAlive();


