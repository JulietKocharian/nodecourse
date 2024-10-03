const userRouter = require('./src/user-router');
const Application = require('./framework/Application');

const jsonParser = require('./framework/parseJson');
const parsedUrl = require('./framework/parseUrl');
const mongoose = require('mongoose');

const app = new Application();

const PORT = process.env.PORT || 5000;

app.use(jsonParser);
app.use(parsedUrl('http://localhost:5000'));

app.addRouter(userRouter);

const start = async () => {
    try {
        // q7fy1gW0FB5eCa5R
        await mongoose.connect('mongodb+srv://julietakocharyan82:q7fy1gW0FB5eCa5R@cluster0.mgrlf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        app.listen(PORT, () => { console.log(`Server started at port:${PORT}`) });
    } catch (err) {
        console.log(err);
    }
}

start();
