require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

function checkRoles(userRoles) {
    return allowedRoles.some((allowedRole) => userRoles.has(allowedRole));
}

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);

  client.user.setUsername('Chief Scout James');
  client.user.setAvatar('https://scouts.com.au/wp-content/uploads/2021/11/Scouts-Australia-Logo.jpg');
  client.user.setStatus('dnd');
});

const allowedRoles = [
    '1149950420039503943',
    '1149950346534322217',
    '1149950285385568318',
    '1149950238870736926',
    '1149950758163320862',
];

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
  
    const { commandName, options } = interaction;
  
    if (commandName === 'addcub') {
      handleRoleUpdate(interaction, '1180323893857239131', '1149951272468885504');
    }
  
    if (commandName === 'removeuser') {
      handleRoleUpdate(interaction, '1179935988882096188');
    }
  
    if (commandName === 'cubtoapl') {
      handleRoleUpdate(interaction, '1180323893857239131 ', '1149951272468885504', '1180323913914384457', '1149951153166102599');
    }
  
    if (commandName === 'cubtopl') {
      handleRoleUpdate(interaction, '1180323893857239131 ', '1149951272468885504', '1180323913914384457', '1149951153166102599', '1149950799879884880');
    }
  
    if (commandName === 'addscout') {
      handleRoleUpdate(interaction, '1180323890401136682', '1149951272468885504');
    }
  
    if (commandName === 'scouttoapl') {
      handleRoleUpdate(interaction, '1180323890401136682', '1149951272468885504', '1180323912186331227', '1149951153166102599');
    }
  
    if (commandName === 'scouttopl') {
      handleRoleUpdate(interaction, '1180323890401136682', '1149951272468885504', '1180323912186331227', '1149951153166102599', '1149950799879884880');
    }
  
    if (commandName === 'addventurer') {
      handleRoleUpdate(interaction, '1180322973232668722', '1149951272468885504');
    }
  
    if (commandName === 'venturertouc') {
      handleRoleUpdate(interaction, '1180322973232668722', '1149951272468885504', '1180322948154933278', '1149951153166102599');
    }
  
    if (commandName === 'venturertoaul') {
      handleRoleUpdate(interaction, '1180322973232668722', '1149951272468885504', '1180322948154933278', '1149951153166102599', '1149950799879884880');
    }
  
    if (commandName === 'venturertoul') {
      handleRoleUpdate(interaction, '1180322973232668722', '1149951272468885504', '1180322948154933278', '1149951153166102599', '1149950799879884880', '1149950758163320862');
    }
});

async function handleRoleUpdate(interaction, ...rolesToAdd) {
    const member = interaction.member;
    if (!checkRoles(member.roles.cache)) {
      await interaction.reply('You do not have the required roles to use this command.');
      return;
    }
  
    const targetUser = interaction.options.getUser('user');
    if (!targetUser) {
      await interaction.reply('Please mention a user to update roles.');
      return;
    }
  
    const targetMember = interaction.guild.members.cache.get(targetUser.id);
    if (!targetMember) {
      await interaction.reply('User not found in the server.');
      return;
    }
  
    await targetMember.roles.set(rolesToAdd);
    await interaction.reply('Roles updated successfully.');
}  

client.login(process.env.TOKEN);