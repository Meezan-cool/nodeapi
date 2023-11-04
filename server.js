import { app } from "./app.js";
import { connectDB } from "./data/database.js";

// NODE_ENV = Development
// MONGO_URI = mongodb://127.0.0.1:27017
// Connecting to database
connectDB()

app.listen(process.env.PORT, () => {
    console.log(`Server is Working on ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
  });
  