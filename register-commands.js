require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
      name: 'addcub',
      description: 'Add Cub role to a user',
      options: [
        {
          name: 'user',
          description: 'The user to add the Cub role to',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'removeuser',
      description: 'Remove Cub role from a user',
      options: [
        {
          name: 'user',
          description: 'The user to remove the Cub role from',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'cubtoscout',
      description: 'Convert user from Cub to Scout',
      options: [
        {
          name: 'user',
          description: 'The user to convert from Cub to Scout',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'cubtoapl',
      description: 'Convert user from Cub to APL',
      options: [
        {
          name: 'user',
          description: 'The user to convert from Cub to APL',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'cubtopl',
      description: 'Convert user from Cub to PL',
      options: [
        {
          name: 'user',
          description: 'The user to convert from Cub to PL',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'addscout',
      description: 'Add Scout role to a user',
      options: [
        {
          name: 'user',
          description: 'The user to add the Scout role to',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'scouttoventurer',
      description: 'Convert user from Scout to Venturer',
      options: [
        {
          name: 'user',
          description: 'The user to convert from Scout to Venturer',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'scouttoapl',
      description: 'Convert user from Scout to APL',
      options: [
        {
          name: 'user',
          description: 'The user to convert from Scout to APL',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'scouttopl',
      description: 'Convert user from Scout to PL',
      options: [
        {
          name: 'user',
          description: 'The user to convert from Scout to PL',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'addventurer',
      description: 'Add Venturer role to a user',
      options: [
        {
          name: 'user',
          description: 'The user to add the Venturer role to',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'venturertouc',
      description: 'Convert user from Venturer to UC',
      options: [
        {
          name: 'user',
          description: 'The user to convert from Venturer to UC',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'venturertoaul',
      description: 'Convert user from Venturer to AUL',
      options: [
        {
          name: 'user',
          description: 'The user to convert from Venturer to AUL',
          type: 6,
          required: true,
        },
      ],
    },
    {
      name: 'venturertoul',
      description: 'Convert user from Venturer to UL',
      options: [
        {
          name: 'user',
          description: 'The user to convert from Venturer to UL',
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