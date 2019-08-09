// const { GraphQLServer } = require('graphql-yoga');
// const MongoClient = require('mongodb').MongoClient;

// const url = "mongodb://localhost:27017/paticipations"

// // 1
// let links = [{
//     id: 'link-0',
//     url: 'www.howtographql.com',
//     description: 'Fullstack tutorial for GraphQL'
// }]

// let idCount = links.length
// const resolvers = {
//     Query: {
//         info: () => `This is the API of a Hackernews Clone`,
//         feed: () => links,
//         link: (parent, args) => {

//         },
//     },
//     Mutation: {
//         // 2
//         post: (parent, args) => {
//             const link = {
//                 id: `link-${idCount++}`,
//                 description: args.description,
//                 url: args.url,
//             }
//             links.push(link)
//             return link
//         },
//         updateLink: (parent, args) => {
//             const link = {
//                 id: `link-${idCount++}`,
//                 description: args.description,
//                 url: args.url,
//             }
//             links.push(link)
//             return link
//         },
//         deleteLink: (parent, args) => {
//             const link = {
//                 id: `link-${idCount++}`,
//                 description: args.description,
//                 url: args.url,
//             }
//             links.push(link)
//             return link
//         }
//     },
// }

// // 3
// const server = new GraphQLServer({
//     typeDefs: "./graphql/schema.graphql",
//     resolvers,
// });

// MongoClient.connect(url, (err, client) => {
//     if (err) throw new Error("Error during connect to the database!");
//     db = client.db("paticipations");

//     server.start(() => console.log(`Server is running on http://localhost:4000`));
// })


import { GraphQLServer } from 'graphql-yoga';
import { startDB, models } from './db';
import resolvers from './graphql/resolvers';

const db = startDB({
  db: 'employees',
  url: 'mongodb:27017'
})

const context = {
  models,
  db,
};

const Server = new GraphQLServer({
  typeDefs: `${__dirname}/graphql/schema.graphql`,
  resolvers,
  context,
});

// options
const opts = {
  port: 4000,
};


Server.start(opts, () => {
  console.log(`Server is running on http://localhost:${opts.port}`);
});
