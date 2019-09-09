const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    console.log(``)
    res.status(200).json({
        status: 200,
        message: "welcome to this test setup, new test info",
        test: `Random environment variabble: ${process.env.NAME}`,
        test2: `random environment variable: ${process.env.TYPE}`,
        postgres: `Database Url from env: ${process.env.DATABASE_URL}`,
        DatabaseName: `Databse name from postgres: ${process.env.DATABASE_NAME}`,
        AppName: `${process.env.HEROKU_APP_NAME}`,
        ParentAppName: `${process.env.HEROKU_PARENT_APP_NAME}`
    });
});

app.listen(PORT, () => {
    console.log(`
    This setup app is now running on ${PORT}
    Database Url from env: ${process.env.DATABASE_URL}
    Random environment variabble: ${process.env.NAME}
    Another random environment variable: ${process.env.TYPE}
    App name: ${process.env.HEROKU_APP_NAME}
    Parent app name: ${process.env.HEROKU_PARENT_APP_NAME}
    `)
})