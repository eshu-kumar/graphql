import { Friends, Series } from "../db/dbConnector.js";
export const resolvers = {
  Query: {
    getFriends: (root, args, context) => {
      console.log("req header in getfriends resolver", context.req.headers);
      console.log("req body in getfriends resolver", context.req.body);
      // console.log("args and root in resolver getfreinds", args, root);
      return new Promise((resolve, reject) => {
        Friends.find((err, friends) => {
          //console.log("friends", friends);
          if (err) reject(err);
          else resolve(friends);
        });
      });
    },
    getSeries: (root) => {
      return new Promise((resolve, reject) => {
        Series.find((err, series) => {
          if (err) reject(err);
          else resolve(series);
        });
      });
    },
    findAFriend: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Friends.findOne({ _id: id }, (err, friend) => {
          if (err) reject(err);
          else resolve(friend);
        });
      });
    },
    findASeries: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Series.findOne({ _id: id }, (err, series) => {
          if (err) reject(err);
          else resolve(series);
        });
      });
    },
  },
  Mutation: {
    addFriend: (root, { friend }, context) => {
      console.log("req header in addfriend resolver", context.req.headers);
      console.log("req body in addfriend resolver", context.req.body);
      //console.log("friend is ", friend);
      const { ...rest } = friend;
      console.log({ ...rest });
      const newFriend = new Friends({ ...rest });
      return new Promise((resolve, reject) => {
        newFriend.save((err, friend) => {
          if (err) {
            console.log("err is", err);
            reject(err);
          } else {
            //console.log("friend is ", friend);
            resolve(friend);
          }
        });
      });
    },

    addSeries: (root, { series }) => {
      console.log("series is", series);
      const { ...rest } = series;
      const newSeries = new Series({
        ...rest,
      });

      return new Promise((resolve, reject) => {
        newSeries.save((err, series) => {
          if (err) reject(err);
          resolve(series);
        });
      });
    },
  },
};
