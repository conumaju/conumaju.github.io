import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function writeUser(username, dbSettings) {
    console.log(`touched username ${username}`);
    const db = await open(dbSettings)
    await db.exec('CREATE TABLE IF NOT EXISTS user (name)');
    await db.exec(`INSERT INTO user VALUES ("${username}")`);
    const result = await db.each('SELECT * FROM user', (err) => {
        console.log('writeuser', err);
    });
    console.log('Expected result', result);
    return result;
  }
  
//export default writeUser;

async function writeForm(user_name, zip, interests, dbSettings) {
    console.log('writing form data to database');
    const db = await open(dbSettings)
    await db.exec('CREATE TABLE IF NOT EXISTS form_data (name varchar(255), zip_code int, interests text)');
    await db.exec(`INSERT INTO form_data VALUES ("${user_name}", ${zip}, "${interests}")`);
    const result = await db.all('SELECT * FROM form_data', (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach((row) => {
        console.log(row);
      });
    });
    return result;
  }
export default writeForm;
