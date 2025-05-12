# AutoDealers
Database Project for COSC457: Database Management Systems.


## Necessary Software/Programs
Our database project uses the following software to run. 
Testing for the database was done using MySQL Server and MySQL Workbench. MySQL Workbench was used during testing to view data being added to the database. Alternatively, MariaDB is compatible but has not been tested.
- [Download Node.js](https://nodejs.org/en/download)
- [Download MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- [Download MySQL Community Workbench](https://dev.mysql.com/downloads/workbench/)
- [Download Google Chrome](https://www.google.com/intl/en_uk/chrome/)

Additionally, Git will allow for easy cloning of this repository but is not required to run.
- [Download Git](https://git-scm.com/downloads)


## Installation
1. Clone the repository using git and navigate into directory,
```
git clone 
d
```
or curl the repository to a desired directory and unzip the contents.
```
curl -L -o repository.zip 
unzip repository.zip
cd 
```
2. Install the required packages.
```
npm install
```
3. Configure the database using the commandline,
```
mysql -u *username* -p < db/schema.sql
mysql -u *username* -p < db/seed.sql
```
or by using an instance of MySQL Workbench connected to your local MySQL Server. Run the `db/init.sql`, `db/schema.sql`, and `db/seed.sql` scripts inside the MySQL Workbench GUI to initialize and populate the database with sample data.

4. Reconfigure the server.js authentication with the following information. The application can be hosted and tested locally.
```
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: '*username*',
  password: '*password*',
  database: 'Dealership'
});
```

## Running the Application
1. Start the server.
```
node server.js
```
2. Access the application via web browser of choice. Application is hosted on 3000 by default but may be defined in the .env configuration.
```
http://localhost:3000
```