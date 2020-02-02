const graphql = require('graphql');
const uuid = require("uuid/v4");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

let listComment = [
  { id: '1', nameAuthor: "Crime", title: "Pulp Fiction", like: true },
  { id: '2', nameAuthor: "Sci-Fi", title: "1984", like: false },
  { id: '3', nameAuthor: "Sci-Fi-Triller", title: "V for vendetta", like: true },
  { id: '4', nameAuthor: "Crime-Comedy", title: "Snatch", like: false }
];

const ListCommentType = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    id: { type: GraphQLID },
    nameAuthor: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    like: { type: GraphQLBoolean },
  })
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    listComment: {
      type: new GraphQLList(ListCommentType),
      resolve(parent, args) {
        return listComment;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addComment: {
      type: ListCommentType,
      args: {
        nameAuthor: { type: new GraphQLNonNull (GraphQLString) },
        title: { type: new GraphQLNonNull (GraphQLString) }
      },
      resolve(parent, args) {
        listComment.push({
          id: uuid(),
          nameAuthor: args.nameAuthor,
          title: args.title,
          like: false,
        });
      }
    },
    changeLike: {
      type: ListCommentType,
      args: {
        id: { type: new GraphQLNonNull (GraphQLID) }
      },
      resolve(parent, args) {
        listComment = listComment.map(comment =>
          comment.id.toString() !== args.id
            ? comment
            : {
                ...comment,
                like: !comment.like
              }
        );
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
