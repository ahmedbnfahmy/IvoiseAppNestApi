import Db from './localDb';

export async function DBConnection() {
  try {
    await Db.mongoose;
    console.log('connected to mongoose database');
  } catch (error) {
    console.error(error);
  }
}
