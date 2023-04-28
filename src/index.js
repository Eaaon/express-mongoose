import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
// const User = require('./model/User');
// const Thread = require('./model/Thread');
// const Comment = require('./model/Comment');	
// import userAPIs from './api/users.js';
// import threadAPIs from './api/threads.js';

const DB = 'mongodb://localhost:27017/bbs';

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUn ifiedTopology: true
})
.then(() => {
	console.log('Connected to MongoDB...')
	const app = express();
    app.use(bodyParser.json());
    app.listen(3000);
})
.catch(err => console.error('Could not connect to MongoDB...', err));