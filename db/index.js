const { Client } = require('pg'); // imports the pg module

// supply the db name and location of the database
const client = new Client('postgres://localhost:5432/juicebox-dev');

module.exports = {
  client,
}

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT id, username 
    FROM users;
  `);

  return rows;
}

// and export them
module.exports = {
  client,
  getAllUsers,
}

async function createUser({ username, password }) {
  try {
    const result = await client.query(`

    `);

    return result
  } catch (error) {
    throw error;
  }
}