var express = require('express');
var mysql = require('mysql2');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: 'Dealership'
});

// database connection
db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Connected to MySQL database');
});
//
// locations endpoint
//
app.get('/api/locations', (req, res) => {
  db.query('SELECT * FROM StoreLocation', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

//post to locations
app.post('/api/locations', (req, res) => {
  console.log('POST /api/locations triggered');
  console.log(req.body);

  const {
    LocationName, Address, City, State, ZIP, Phone, OpeningDate, ManagerID
  } = req.body;

  const sql = `
    INSERT INTO StoreLocation
    (LocationName, Address, City, State, ZIP, Phone, OpeningDate, ManagerID)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

// query locations
  db.query(sql, [LocationName, Address, City, State, ZIP, Phone, OpeningDate, ManagerID], (err, result) => {
    if (err) {
      console.error('DB Insert Error:', err);
      return res.status(500).send(err);
    }
    console.log('Location inserted with ID:', result.insertId);
    res.status(201).json({ message: 'Location added', id: result.insertId });
  });
});

//
// employees endpoint
//
app.get('/api/employees', (req, res) => {
  db.query('SELECT * FROM Employee', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

//post to employees
app.post('/api/employees', (req, res) => {
  console.log('POST /api/employees triggered');
  console.log(req.body);

  const {
    EmployeeID, FName, Lname, Name, Email, Phone, Address, City, State, Zip, SSN, HireDate, TermDate, Salary, CommissionRate
  } = req.body;

  const sql = `
    INSERT INTO Employee
    (EmployeeID, FName, Lname, Name, Email, Phone, Address, City, State, ZIP, SSN, HireDate, TermDate, Salary, CommissionRate)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

// query employees
  db.query(sql, [EmployeeID, FName, LName, Name, Email, Phone, Address, City, State, Zip, SSN, HireDate, TermDate, Salary, CommissionRate], (err, result) => {
    if (err) {
      console.error('DB Insert Error:', err);
      return res.status(500).send(err);
    }
    console.log('Employee Data inserted with ID:', result.insertId);
    res.status(201).json({ message: 'Employee data added', id: result.insertId });
  });
});

//
// customers endpoint
//
app.get('/api/customers', (req, res) => {
  db.query('SELECT * FROM Customer', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

//post to customers
app.post('/api/customers', (req, res) => {
  console.log('POST /api/customers triggered');
  console.log(req.body);

  const {
    CustomerID, FName, LName, Name, Email, Phone, Address, City, State, Zip, DOB, DriverLicenseNumber, JoinedDate, PreferredContact
  } = req.body;

  const sql = `
    INSERT INTO Customer
    (CustomerID, FName, LName, Name, Email, Phone, Address, City, State, Zip, DOB, DriverLicenseNumber, JoinedDate, PreferredContact)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

// query customers
  db.query(sql, [CustomerID, FName, LName, Name, Email, Phone, Address, City, State, Zip, DOB, DriverLicenseNumber, JoinedDate, PreferredContact], (err, result) => {
    if (err) {
      console.error('DB Insert Error:', err);
      return res.status(500).send(err);
    }
    console.log('Customer Data inserted with ID:', result.insertId);
    res.status(201).json({ message: 'Customer data added', id: result.insertId });
  });
});

//
// vehicles endpoint
//
app.get('/api/vehicles', (req, res) => {
  db.query('SELECT * FROM Vehicle', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

//post to vehicles
app.post('/api/vehicles', (req, res) => {
  console.log('POST /api/vehicles triggered');
  console.log(req.body);

  const {
    VehicleID, VIN, Make, Mode, Year, Color, Mileage, NewUser, PurchasePrice, SalePrice, Status, DateAcquired, EngineID, LocationID
  } = req.body;

  const sql = `
    INSERT INTO Vehicle
    (VehicleID, VIN, Make, Mode, Year, Color, Mileage, NewUser, PurchasePrice, SalePrice, Status, DateAcquired, EngineID, LocationID)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

// query vehicles
  db.query(sql, [VehicleID, VIN, Make, Mode, Year, Color, Mileage, NewUser, PurchasePrice, SalePrice, Status, DateAcquired, EngineID, LocationID], (err, result) => {
    if (err) {
      console.error('DB Insert Error:', err);
      return res.status(500).send(err);
    }
    console.log('Vehicle Data inserted with ID:', result.insertId);
    res.status(201).json({ message: 'Vehicle data added', id: result.insertId });
  });
});

//
// services endpoint
//
app.get('/api/services', (req, res) => {
  db.query('SELECT * FROM Service', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

//post to services
app.post('/api/services', (req, res) => {
  console.log('POST /api/services triggered');
  console.log(req.body);

  const {
    ServiceID, CustomerID, VehicleID, ServiceDate, ServiceType, Description, Cost, Status, EmployeeID
  } = req.body;

  const sql = `
    INSERT INTO Service
    (ServiceID, CustomerID, VehicleID, ServiceDate, ServiceType, Description, Cost, Status, EmployeeID)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

// query services
  db.query(sql, [ServiceID, CustomerID, VehicleID, ServiceDate, ServiceType, Description, Cost, Status, EmployeeID], (err, result) => {
    if (err) {
      console.error('DB Insert Error:', err);
      return res.status(500).send(err);
    }
    console.log('Service Data inserted with ID:', result.insertId);
    res.status(201).json({ message: 'Service data added', id: result.insertId });
  });
});

//
// connection
//
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

