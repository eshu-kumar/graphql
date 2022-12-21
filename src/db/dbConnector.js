import mongoose from "mongoose";
import { environment } from "../config/config.js";
import { friendSchema } from "./schema/friendSchema.js";
import { seriesSchema } from "./schema/seriesSchema.js";
const env = process.env.NODE_ENV || "development";
const mongoDbUrl = process.env.MONGO_DB_URL;
/**
 * Mongoose Connection
 **/
mongoose.set("strictQuery", false);
mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to DB");
});

const Friends = mongoose.model("Friends", friendSchema);
const Series = mongoose.model("Series", seriesSchema);

export { Friends, Series };
