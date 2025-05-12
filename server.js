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
  host: '127.0.0.1',
  user: 'root',
  password: 'password1!',
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
    EmployeeID, FName, LName, Email, Phone, Address, City, State, Zip, SSN, HireDate, TermDate, Salary, CommissionRate
  } = req.body;

  const sql = `
    INSERT INTO Employee
    (EmployeeID, FName, LName, Email, Phone, Address, City, State, ZIP, SSN, HireDate, TermDate, Salary, CommissionRate)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

// query employees
  db.query(sql, [EmployeeID, FName, LName, Email, Phone, Address, City, State, Zip, SSN, HireDate, TermDate, Salary, CommissionRate], (err, result) => {
    if (err) {
      console.error('DB Insert Error:', err);
      return res.status(500).send(err);
    }
    console.log('Employee Data inserted with ID:', result.insertId);
    res.status(201).json({ message: 'Employee data added', id: result.insertId });
  });
});

//employee lookup
app.get('/api/employee/:id', (req, res) => {
  const employeeID = req.params.id;
  db.query('SELECT * FROM Employee WHERE EmployeeID = ?', [employeeID], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send('Not found');
    res.json(results[0]);
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
    FName, LName, Email, Phone, Address, City, State, Zip, DOB, DriverLicenseNumber, JoinedDate, PreferredContact
  } = req.body;

  const sql = `
    INSERT INTO Customer
    (FName, LName, Email, Phone, Address, City, State, Zip, DOB, DriverLicenseNumber, JoinedDate, PreferredContact)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

// query customers
  db.query(sql, [FName, LName, Email, Phone, Address, City, State, Zip, DOB, DriverLicenseNumber, JoinedDate, PreferredContact], (err, result) => {
    if (err) {
      console.error('DB Insert Error:', err);
      return res.status(500).send(err);
    }
    console.log('Customer Data inserted with ID:', result.insertId);
    res.status(201).json({ message: 'Customer data added', id: result.insertId });
  });
});

//customer lookup
app.get('/api/customers/:id', (req, res) => {
  const customerId = req.params.id;
  db.query('SELECT * FROM Customer WHERE CustomerID = ?', [customerId], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send('Not found');
    res.json(results[0]);
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
    VehicleID, VIN, Make, Model, Year, Color, Mileage, NewUsed, PurchasePrice, SalePrice, Status, DateAcquired, EngineID, LocationID
  } = req.body;

  const sql = `
    INSERT INTO Vehicle
    (VehicleID, VIN, Make, Model, Year, Color, Mileage, NewUsed, PurchasePrice, SalePrice, Status, DateAcquired, EngineID, LocationID)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

// query vehicles
  db.query(sql, [VehicleID, VIN, Make, Model, Year, Color, Mileage, NewUsed, PurchasePrice, SalePrice, Status, DateAcquired, EngineID, LocationID], (err, result) => {
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
    (CustomerID, VehicleID, ServiceDate, ServiceType, Description, Cost, Status, EmployeeID)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

// query services
  db.query(sql, [CustomerID, VehicleID, ServiceDate, ServiceType, Description, Cost, Status, EmployeeID], (err, result) => {
    if (err) {
      console.error('DB Insert Error:', err);
      return res.status(500).send(err);
    }
    console.log('Service Data inserted with ID:', result.insertId);
    res.status(201).json({ message: 'Service data added', id: result.insertId });
  });
});

app.put('/api/services/:id', (req, res) => {
  const serviceId = req.params.id;
  const { Status } = req.body;

  const query = `
    UPDATE Service 
    SET Status = ? 
    WHERE ServiceID = ?
  `;

  db.query(query, [Status, serviceId], (err, result) => {
    if (err) {
      console.error('DB Update Error:', err);
      res.status(500).json({ error: 'Failed to update service status' });
    } else {
      res.json({ message: 'Service status updated' });
    }
  });
});
//
// connection
//
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


//vehicle lookup
app.get('/api/vehicle/vin/:vin/details', (req, res) => {
  const vin = req.params.vin;

  const sql = `
    SELECT 
      v.VehicleID, v.VIN, v.Make, v.Model, v.Year, v.Color, v.Status,
      e.EngineType, e.Displacement, e.Cylinders, e.Horsepower, e.FuelType, e.Transmission,
      c.FName AS CustomerFirstName, c.LName AS CustomerLastName,
      s.ServiceDate, s.ServiceType, s.Description, s.Status AS ServiceStatus,
      f.FeatureName
    FROM Vehicle v
    LEFT JOIN Engine e ON v.EngineID = e.EngineID
    LEFT JOIN Sale sa ON v.VehicleID = sa.VehicleID
    LEFT JOIN Customer c ON sa.CustomerID = c.CustomerID
    LEFT JOIN Service s ON v.VehicleID = s.VehicleID
    LEFT JOIN Vehicle_Feature vf ON v.VehicleID = vf.VehicleID
    LEFT JOIN Feature f ON vf.FeatureID = f.FeatureID
    WHERE v.VIN = ?
  `;

  db.query(sql, [vin], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

//engines
app.get('/api/engines', (req, res) => {
  db.query('SELECT * FROM Engine', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post('/api/engines', (req, res) => {
  const { EngineType, Displacement, Cylinders, Horsepower, FuelType, Transmission } = req.body;
  const sql = `
    INSERT INTO Engine
    (EngineType, Displacement, Cylinders, Horsepower, FuelType, Transmission)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [EngineType, Displacement, Cylinders, Horsepower, FuelType, Transmission], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ message: 'Engine added', id: result.insertId });
  });
});

//feature

// Get all features (for dropdown)
app.get('/api/features', (req, res) => {
  db.query('SELECT * FROM Feature', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Get a specific feature by ID
app.get('/api/feature/:id', (req, res) => {
  db.query('SELECT * FROM Feature WHERE FeatureID = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send('Feature not found');
    res.json(results[0]);
  });
});

app.post('/api/features', (req, res) => {
  const { FeatureName, Description } = req.body;
  db.query(
    'INSERT INTO Feature (FeatureName, Description) VALUES (?, ?)',
    [FeatureName, Description],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ message: 'Feature added', id: result.insertId });
    }
  );
});


// Update a feature
app.put('/api/feature/:id', (req, res) => {
  const { FeatureName, Description } = req.body;
  db.query(
    'UPDATE Feature SET FeatureName = ?, Description = ? WHERE FeatureID = ?',
    [FeatureName, Description, req.params.id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Feature updated successfully' });
    }
  );
});

app.post('/api/vehicle_features', (req, res) => {
  const { VehicleID, FeatureID } = req.body;
  db.query(
    'INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (?, ?)',
    [VehicleID, FeatureID],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ message: 'Feature linked to vehicle' });
    }
  );
});

//
// sales endpoint
//
app.get('/api/sales', (req, res) => {
  db.query('SELECT * FROM Sale ORDER BY SaleDate DESC', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.get('/api/sales/:id', (req, res) => {
  const saleId = req.params.id;
  db.query('SELECT * FROM Sale WHERE SaleID = ?', [saleId], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send('Sale not found');
    res.json(results[0]);
  });
});

app.post('/api/sales', (req, res) => {
  console.log('POST /api/sales triggered');
  console.log(req.body);

  const {
    VehicleID, CustomerID, EmployeeID, SaleDate, SalePrice, TaxAmount, TotalAmount
  } = req.body;

  const sql = `
    INSERT INTO Sale
    (VehicleID, CustomerID, EmployeeID, SaleDate, SalePrice, TaxAmount, TotalAmount)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [VehicleID, CustomerID, EmployeeID, SaleDate, SalePrice, TaxAmount, TotalAmount], (err, result) => {
    if (err) {
      console.error('DB Insert Error:', err);
      return res.status(500).send(err);
    }
    console.log('Sale recorded with ID:', result.insertId);
    res.status(201).json({ message: 'Sale recorded', id: result.insertId });
  });
});

//
// payments endpoint
//
app.get('/api/payments', (req, res) => {
  db.query('SELECT * FROM Payment', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.get('/api/payments/sale/:saleId', (req, res) => {
  const saleId = req.params.saleId;
  db.query('SELECT * FROM Payment WHERE SaleID = ?', [saleId], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post('/api/payments', (req, res) => {
  console.log('POST /api/payments triggered');
  console.log(req.body);

  const {
    SaleID, PaymentDate, Amount, PaymentMethod, TransactionReference, Status
  } = req.body;

  const sql = `
    INSERT INTO Payment
    (SaleID, PaymentDate, Amount, PaymentMethod, TransactionReference, Status)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [SaleID, PaymentDate, Amount, PaymentMethod, TransactionReference, Status], (err, result) => {
    if (err) {
      console.error('DB Insert Error:', err);
      return res.status(500).send(err);
    }
    console.log('Payment recorded with ID:', result.insertId);
    res.status(201).json({ message: 'Payment recorded', id: result.insertId });
  });
});

//
// update vehicle route
//
app.get('/api/vehicles/available', (req, res) => {
  db.query('SELECT * FROM Vehicle WHERE Status = "Available"', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});
app.get('/api/vehicles/:id', (req, res) => {
  const vehicleId = req.params.id;
  db.query('SELECT * FROM Vehicle WHERE VehicleID = ?', [vehicleId], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send('Vehicle not found');
    res.json(results[0]);
  });
});
app.put('/api/vehicles/:id/status', (req, res) => {
  const vehicleId = req.params.id;
  const { Status } = req.body;

  const sql = `
    UPDATE Vehicle 
    SET Status = ? 
    WHERE VehicleID = ?
  `;

  db.query(sql, [Status, vehicleId], (err, result) => {
    if (err) {
      console.error('DB Update Error:', err);
      return res.status(500).send(err);
    }
    console.log(`Vehicle ${vehicleId} status updated to: ${Status}`);
    res.json({ message: 'Vehicle status updated successfully' });
  });
});