const multer = require("multer");
const path =  require("path")


const excelFilter = (req, file, cb) => {
  if (
    file.mimetype.includes("excel") ||
    file.mimetype.includes("spreadsheetml")
  ) {
    cb(null, true);
  } else {
    cb("Please upload only excel file.", false);
    return next(new ErrorHandler("No access granted", 403))
  }
};


const __basedir = path.resolve();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: excelFilter });
module.exports = uploadFile;