const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const server = express();
// const PORT = process.env.PORT || 5000;
const PORT = 5000;

server.use(cors());

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

server.use(express.static('build'));

server.listen(PORT, error => {
  error ? console.log(error) : console.log(`server port: ${PORT}`)
  }
);