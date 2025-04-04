import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    });
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Fail connecting!!!", error);  
  }
}

export default connect;
