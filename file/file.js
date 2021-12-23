const multer = require("multer");

//file upload===================================================
const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null, './assets/images')
    },
    filename : function(req,file, cb){
        cb(null, Date.now() + file.originalname)
    }
})

// now we need to check the file format
// const filter = function(req, file , cb){
//     if(file.mimetype=='image/png' || file.mimetype=='image/jpeg'){
//         //correct
//     }
//     else{
//         //incorrect format
//         cb(null, false)
//     }
// }

const upload = multer({
    storage : storage,
    //fileFilter : filter
})

module.exports= upload