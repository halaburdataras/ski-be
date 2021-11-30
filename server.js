const { ApolloServer, makeExecutableSchema } = require("apollo-server-express");
const express = require("express");
const { applyMiddleware } = require("graphql-middleware");
const connectDB = require("./config/db");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const permissions = require("./permissions");
const cors = require("cors");
const config = require("config");

(async () => {
  const dbConnection = await connectDB();
})();

const PORT = config.get("port") || 5000;

const schema = applyMiddleware(
  makeExecutableSchema({ typeDefs, resolvers }),
  permissions
);

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://jewelry-fe-git-dev-halaburdataras.vercel.app/",
    ],
  })
);
app.disable("x-powered-by");

const server = new ApolloServer({
  schema,
  formatError: (err) => {
    console.log(err);
  },
  introspection: true,
  cors: { origin: "*" },
});

server.applyMiddleware({
  app,
  bodyParserConfig: {
    limit: "15mb",
  },
});

app.listen(PORT, () =>
  console.log(
    `Apollo server started, port ${PORT}, Graphql path: ${server.graphqlPath}`
  )
);