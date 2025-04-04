import Course from "../models/Course.js";
import {
  multipleMongooseToObject,
  mongooseToObject,
} from "../../util/mongoose.js";

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

export default new SiteController();
