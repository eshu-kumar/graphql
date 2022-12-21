const mongoose = require("mongoose");
const { environment } = require("../config/config");
const { friendSchema } = require("./schema/friendSchema.js");
const { seriesSchema } = require("./schema/seriesSchema.js");
const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
 **/

mongoose.connect(
  "mongodb+srv://eshukumar:eshu1234@cluster0.e7eqwiu.mongodb.net/graphql?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

let db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to DB");
});

const Friends = mongoose.model("Friends", friendSchema);
const Series = mongoose.model("Series", seriesSchema);

export { Friends, Series };
