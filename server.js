import Express  from "express";
const port = 3001;
const app = Express();
app.use(Express.json());
import posts from "./posts.js";

const DB_URL = "mongodb+srv://root:root@cluster0.ns55i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

import Mongoose from "mongoose";
import router from "./router.js";


//////////////////////////////////////////////////////////   SERVER   ///////////////////////////////////////////////////////////////
app.use('/api', router);







/////////////////////////////////////////////////////////////////    START  APP ////////////////////////////////////////////////////////
async function StartApp(){
   try{
      await Mongoose.connect(DB_URL,);

      app.listen(port, () => console.log("server connected"));

   }
   catch (e) {
      console.log(e);
   }
}
StartApp();
