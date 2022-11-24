const { response, request } = require('express');
const express = require('express');
const formidableMiddelware = require('formidable');
const req = require('express/lib/request');
const cloudinaryConfig = require('./config/cloudinary');
const postRouter = require('./router/post.router');
const carRouter = require('./router/car.router');
const userRouter = require('./router/user.router');
const productRouter = require('./router/product.router');
const authToken = require('./middleware/auth_token');
const PORT = 8001 || process.env.PORT;

const app = express();

app.use(express.json());

// set view engine
app.set('view engine', 'ejs')
app.use(postRouter);
app.use(carRouter);
app.use(productRouter);
app.use(userRouter);

// const users = [
//     {name: "blabla", city: "jakarta"},
//     {name: "blibla", city: "bekasi"}];

// app.get("/", (request, response)  => {
//     // response.json({message: "Index"});
//     response.render('index', {
//         name: request.query.name
//     })
// })



// app.get("/api/users", authToken, (request, response) => {
//     response.json({data: users})
// })

// app.get("/api/users/:id", (request, response) => {
//     response.json({message: "user by id"})
// })

// app.post("/api/users", (request, response) => {
//     response.json({message: "Create User"})
// })

// app.put("/api/users/:id", (request, response) => {
//     response.json({message: "Update User"})
// })

// app.delete("/api/users/:id", (request, response) => {
//     response.json({message: "Delete User"})
// })

// app.post("/upload", (request, response) => {
//     const form = formidableMiddelware({});
//     let uploadedFiles = '';

//     form.parse(request, (err, fields, files) => {
//         if(err) {
//             nextTick(err);
//             return;
//         }

//         console.log(files.files.filepath);
//     console.log(fields.name);

//     cloudinaryConfig.uploader.upload(files.files.filepath, function(err, result) {
//         if(err) {
//             next(err);
//             return;
//         }

//         uploadedFiles = result.secure_url;
//         console.log(result);
//         response.json({message: "upload success", body: result.secure_url});
//         })
//     });
// })

    

app.listen(PORT, () => {
    console.log(`App running at localhost:${PORT}`);
});

// studycase

// app.get("/api/product", (request, response) => {
//     response.json({message: "ini GET"})
// })

// app.post("/api/product", (request, response) => {
//     response.json({message: "ini POST"})
// })

// app.put("/api/product", (request, response) => {
//     response.json({message: "ini PUT"})
// })

// app.delete("/api/product", (request, response) => {
//     response.json({message: "ini DELETE"})
// })

