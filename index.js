
const bodyParser = require('body-parser');
server.use(bodyParser.json());

const morgan = require('morgan');
server.use(morgan('dev'));
const apiRouter = require('./api');
server.use('/api', apiRouter);