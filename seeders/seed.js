const sequelize = require('../models');

const seedData = async () => {
  try {
    await sequelize.sync({ force: true }); // Resets the DB
    console.log('Database synced and seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
