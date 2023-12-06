require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
      name: 'addcub',
      description: 'Gives the selected user the Basic Cub roles',
      options: [
        {
          name: 'user',
          description: 'Please select a user',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'removeuser',
      description: 'Removes all roles from a user and gives them the Unknown role',
      options: [
        {
          name: 'user',
          description: 'Please select a user',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'cubtosapl',
      description: 'Gives the selected user the Cub APL Roles',
      options: [
        {
          name: 'user',
          description: 'Please select a user',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'cubtopl',
      description: 'Gives the selected user the Cub PL Roles',
      options: [
        {
          name: 'user',
          description: 'Please select a user',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'addscout',
      description: 'Gives the selected user the Basic Scout roles',
      options: [
        {
          name: 'user',
          description: 'Please select a user',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'scouttoapl',
      description: 'Gives the selected user the Scout APL Roles',
      options: [
        {
          name: 'user',
          description: 'Please select a user',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'scouttopl',
      description: 'Gives the selected user the Scout PL Roles',
      options: [
        {
          name: 'user',
          description: 'Please select a user',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'addventurer',
      description: 'Gives the selected user the Basic Venturer Roles',
      options: [
        {
          name: 'user',
          description: 'Please select a user',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'venturertouc',
      description: 'Gives the selected user the Venturer UC Roles',
      options: [
        {
          name: 'user',
          description: 'Please select a user',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'venturertoaul',
      description: 'Gives the selected user the Venturer AUL Roles',
      options: [
        {
          name: 'user',
          description: 'Please select a user',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'venturertoul',
      description: 'Gives the selected user the Venturer UL Roles',
      options: [
        {
          name: 'user',
          description: 'Please select a user',
          type: 6,
          required: true,
        },
      ],
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();