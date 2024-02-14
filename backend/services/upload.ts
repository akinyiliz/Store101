import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

export default upload;
