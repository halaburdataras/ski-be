const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
const express = require('express');
const { applyMiddleware } = require('graphql-middleware');
const cors = require('cors');

const connectDB = require('./config/db');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const permissions = require('./permissions');

(async () => {
  await connectDB();
})();

const schema = applyMiddleware(
  makeExecutableSchema({ typeDefs, resolvers }),
  permissions
);

const server = new ApolloServer({
  schema,
  formatError: (err) => {
    console.error(err);
  },
  introspection: true,
  cors: { origin: '*' },
});

const app = express();
app.options('*', cors());

server.applyMiddleware({
  app,
  bodyParserConfig: {
    limit: '15mb',
  },
});

app.listen(process.env.PORT || 5000, () =>
  console.info(
    `Apollo server started, port ${process.env.PORT}, Graphql path: ${server.graphqlPath}`
  )
);
