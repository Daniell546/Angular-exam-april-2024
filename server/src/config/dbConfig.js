// const mongoose = require('mongoose');
// const uri = 'mongodb://127.0.0.1:27017/project_defence'

// async function dbConnect() {
//     await mongoose.connect(uri);
// }

// module.exports = dbConnect;

const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
  return mongoose.connect(config.dbURL);
};
