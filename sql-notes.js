// Setting up SQL

// -   npm i sequelize pg pg-hstore
// -   npm i --save-dev sequelize-cli
// -   npx sequelize-cli init

// ElephantSQL

// - Create new instance
// - Name your file
// - Select Region
// - Keep at default
// - Click review (Make sure it's free)
// - Click instance
// - Click on name of instance to open up detail to put in config.json

// Go back to terminal and type in code .

// - In terminal go to config.json
// - Change: "development in config.json"
// - password: with password from ElephantSQL (make sure it's in quotation)
// - database: "user & default database"
// - host: with server in ElephantSQL without the ( )
// - dialect: postgres ( Will always be postgres as long as you're working with postgres

// -   npx sequelize-cli model:generate --name Pets --attributes name:string,breed:string
// -   npx sequelize-cli db:migrate
