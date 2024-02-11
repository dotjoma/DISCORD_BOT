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
    name: "Paciano's",
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
  apiKey: process.env.API_KEY,
})

const openai = new OpenAIApi(configuration);

client.on('messageCreate', async (message) => {
  try{
  if (message.author.bot) return;
  if (message.channel.id !== process.env.CHANNEL_ID) return;
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

client.on('messageDelete', (message) => {
  const deletelogs = "1205499971843919922";
  const exampleEmbed = new EmbedBuilder()
  .setColor('Red')
  .setTitle(`**Message deleted in #${message.channel.name}**`)
  .setAuthor({ name: `${message.author.username} || ${message.author.displayName}`, iconURL: message.author.displayAvatarURL() })
  .setDescription(`${message.content}`)
  .setTimestamp()
  .setFooter({ text: `Message ID: ${message.id}` });

  if (message.author.bot) { return; }
  const channel = message.guild.channels.cache.get(deletelogs);
  channel.send({ embeds: [exampleEmbed] });
})


client.on('messageUpdate', async (oldMessage, newMessage) => {
  const editlogs = "1205499971843919922";
  const exampleEmbed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle(`**Message edited in #${oldMessage.channel.name}**`)
  .setAuthor({ name: `${oldMessage.author.username} || ${oldMessage.author.displayName}`, iconURL: oldMessage.author.displayAvatarURL() })
  .setDescription(`**Before: **${oldMessage.content}\n**+After: **${newMessage.content}`)
  .setTimestamp()
  .setFooter({ text: `Message ID: ${oldMessage.id}` });

  if (oldMessage.author.bot) { return; }
  const channel = oldMessage.guild.channels.cache.get(editlogs);
  channel.send({ embeds: [exampleEmbed] });
})


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

client.login(process.env.token);
/*client.login('TOKEN');*/
keepAlive();
