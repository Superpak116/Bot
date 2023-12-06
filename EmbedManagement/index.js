require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
  {
    name: 'embed',
    description: 'Choose an embed option',
    options: [
      {
        name: 'option',
        type: 'STRING',
        description: 'Select an embed option',
        required: true,
        choices: [
          { name: 'one', value: 'embedone' },
          { name: 'two', value: 'embedtwo' },
        ],
      },
    ],
  },
];

const rest = new REST({ version: '9' }).setToken('YOUR_BOT_TOKEN');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

const allowedRoles = [
    '1149950420039503943',
    '1149950346534322217',
    '1149950285385568318',
    '1149950238870736926',
];
  
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
  
    const { commandName, options, guild, member } = interaction;
  
    if (commandName === 'embed') {
      const hasPermission = member.roles.cache.some((role) => allowedRoles.includes(role.id));
  
      if (!hasPermission) {
        await interaction.reply('You do not have permission to use this command.');
        return;
      }
  
      const selectedOption = options.getString('option');
  
      switch (selectedOption) {
        case 'one':
          await interaction.reply('embedone');
          break;
        case 'two':
          await interaction.reply('embedtwo');
          break;
        default:
          await interaction.reply('Invalid option');
      }
    }
});

client.login(process.env.TOKEN);
