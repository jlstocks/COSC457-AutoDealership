-- Insert Engines
INSERT INTO Engine (EngineType, Displacement, Cylinders, Horsepower, FuelType, Transmission) 
VALUES ('I4 Turbo', '2.0L', '4', 252, 'Gasoline', 'Automatic');

INSERT INTO Engine (EngineType, Displacement, Cylinders, Horsepower, FuelType, Transmission) 
VALUES ('V6', '3.5L', '6', 290, 'Gasoline', 'Automatic');

INSERT INTO Engine (EngineType, Displacement, Cylinders, Horsepower, FuelType, Transmission) 
VALUES ('Hybrid', '1.8L', '4', 121, 'Hybrid', 'CVT');

-- Insert Store Locations
INSERT INTO StoreLocation (LocationName, Address, City, State, ZIP, Phone, OpeningDate, ManagerID) 
VALUES ('Towson Dealership', '123 York Road', 'Towson', 'MD', '21252', '123-456-7890', '2023-06-15', 1);

INSERT INTO StoreLocation (LocationName, Address, City, State, ZIP, Phone, OpeningDate, ManagerID) 
VALUES ('College Park Motors', '789 University Blvd', 'College Park', 'MD', '20742', '987-654-3210', '2024-02-10', 2);

INSERT INTO StoreLocation (LocationName, Address, City, State, ZIP, Phone, OpeningDate, ManagerID) 
VALUES ('Catonsville Auto', '456 Frederick Road', 'Catonsville', 'MD', '21228', '456-123-7890', '2024-05-01', 3);

-- Insert Employees
INSERT INTO Employee (FName, LName, Email, Phone, Address, City, State, Zip, SSN, HireDate, TermDate, Salary, CommissionRate) 
VALUES ('Jackson', 'Stockstill', 'jstock@dealership.com', '000-000-1234', '100 Main St', 'Towson', 'MD', '21252', '123-45-6789', '2022-01-15', NULL, 65000, 5);

INSERT INTO Employee (FName, LName, Email, Phone, Address, City, State, Zip, SSN, HireDate, TermDate, Salary, CommissionRate) 
VALUES ('Xavier', 'Jackson', 'xjacks@dealership.com', '111-111-3333', '200 College Ave', 'College Park', 'MD', '20742', '234-56-7890', '2022-03-20', NULL, 68000, 5);

INSERT INTO Employee (FName, LName, Email, Phone, Address, City, State, Zip, SSN, HireDate, TermDate, Salary, CommissionRate) 
VALUES ('John', 'Smith', 'jsmith@dealership.com', '222-172-29102', '300 Street St', 'Catonsville', 'MD', '21228', '345-67-8901', '2022-07-05', NULL, 62000, 5);

INSERT INTO Employee (FName, LName, Email, Phone, Address, City, State, Zip, SSN, HireDate, TermDate, Salary, CommissionRate) 
VALUES ('Lisa', 'Simpson', 'lsimpson@dealership.com', '455-212-2312', '400 Springfield Ave', 'Towson', 'MD', '21252', '456-78-9012', '2023-02-10', NULL, 45000, 3);

INSERT INTO Employee (FName, LName, Email, Phone, Address, City, State, Zip, SSN, HireDate, TermDate, Salary, CommissionRate) 
VALUES ('Joe', 'Joseph', 'jj@dealership.com', '333-333-1821', '500 Joe St', 'Joe Park', 'MD', '20742', '567-89-0123', '2023-05-15', NULL, 42000, 3);

-- Insert Features
INSERT INTO Feature (FeatureName, Description) 
VALUES ('Sunroof', 'Power sliding sunroof with tilt function');

INSERT INTO Feature (FeatureName, Description) 
VALUES ('Navigation', 'Built-in GPS navigation system');

INSERT INTO Feature (FeatureName, Description) 
VALUES ('Bluetooth', 'Wireless connectivity for phone and audio');

INSERT INTO Feature (FeatureName, Description) 
VALUES ('Heated Seats', 'Front heated seats with multiple heat settings');

INSERT INTO Feature (FeatureName, Description) 
VALUES ('Backup Camera', 'Rear camera with parking guidelines');

-- Insert Vehicles
INSERT INTO Vehicle (VIN, Make, Model, Year, Color, Mileage, NewUsed, PurchasePrice, SalePrice, Status, DateAcquired, EngineID, LocationID) 
VALUES ('JH4KA7650PC003125', 'Honda', 'Accord', 2023, 'Black', 15, 'New', 28000, 27500, 'Available', '2024-12-01', 1, 1);

INSERT INTO Vehicle (VIN, Make, Model, Year, Color, Mileage, NewUsed, PurchasePrice, SalePrice, Status, DateAcquired, EngineID, LocationID) 
VALUES ('5TFEY5F12KX247245', 'Toyota', 'Camry', 2024, 'White', 8, 'New', 26500, 25800, 'Available', '2025-01-15', 3, 2);

INSERT INTO Vehicle (VIN, Make, Model, Year, Color, Mileage, NewUsed, PurchasePrice, SalePrice, Status, DateAcquired, EngineID, LocationID) 
VALUES ('1N4AL3AP8JC231782', 'Nissan', 'Altima', 2022, 'Blue', 12500, 'Used', 18500, 17900, 'Available', '2025-02-28', 1, 3);

INSERT INTO Vehicle (VIN, Make, Model, Year, Color, Mileage, NewUsed, PurchasePrice, SalePrice, Status, DateAcquired, EngineID, LocationID) 
VALUES ('JTJBARBZ6K2151661', 'Lexus', 'RX 350', 2023, 'Silver', 9800, 'Used', 39000, 37500, 'Available', '2025-03-10', 2, 1);

-- Insert Vehicle Features
INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (1, 1);
INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (1, 3);
INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (1, 5);
INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (2, 2);
INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (2, 3);
INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (2, 4);
INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (3, 3);
INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (3, 5);
INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (4, 1);
INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (4, 2);
INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (4, 3);
INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (4, 4);
INSERT INTO Vehicle_Feature (VehicleID, FeatureID) VALUES (4, 5);

-- Insert Customers
INSERT INTO Customer (FName, LName, Email, Phone, Address, City, State, Zip, DOB, DriverLicenseNumber, JoinedDate, PreferredContact) 
VALUES ('Shohei', 'Ohtani', 'shohei@email.com', '888-999-0000', '150 Dodgers Ave', 'Los Angeles', 'CA', '01020', '1997-06-12', 'G123456789', '2025-01-05', 'Email');

INSERT INTO Customer (FName, LName, Email, Phone, Address, City, State, Zip, DOB, DriverLicenseNumber, JoinedDate, PreferredContact) 
VALUES ('Max', 'Verstappen', 'max@email.com', '888-111-7261', '250 Red Bull Dr', 'New York City', 'NY', '01291', '1999-03-25', 'W987654321', '2025-02-10', 'Text');

-- Insert Services
INSERT INTO Service (CustomerID, VehicleID, ServiceDate, ServiceType, Description, Cost, Status, EmployeeID) 
VALUES (1, 3, '2025-04-15', 'Oil Change', 'Regular oil change and filter replacement', 75, 'Scheduled', 4);

INSERT INTO Service (CustomerID, VehicleID, ServiceDate, ServiceType, Description, Cost, Status, EmployeeID) 
VALUES (2, 4, '2025-04-20', 'Brake Service', 'Front brake pad replacement', 350, 'In Progress', 5);

-- Insert Sales
INSERT INTO Sale (VehicleID, CustomerID, EmployeeID, SaleDate, SalePrice, TaxAmount, TotalAmount) 
VALUES (3, 1, 1, '2025-03-15', 17900, 1074, 18974);

INSERT INTO Sale (VehicleID, CustomerID, EmployeeID, SaleDate, SalePrice, TaxAmount, TotalAmount) 
VALUES (4, 2, 2, '2025-03-28', 37500, 2250, 39750);

-- Insert Payments
INSERT INTO Payment (SaleID, PaymentDate, Amount, PaymentMethod, TransactionReference, Status) 
VALUES (1, '2025-03-15', 18974, 'Credit Card', 'DEF12392', 'Completed');

INSERT INTO Payment (SaleID, PaymentDate, Amount, PaymentMethod, TransactionReference, Status) 
VALUES (2, '2025-03-28', 39750, 'Financing', 'ABC123876', 'Completed');

-- Insert Service History
INSERT INTO ServiceHistory (VehicleID, ServiceID, Notes, Mileage, Documentation) 
VALUES (3, 1, 'Performed regular maintenance', 12650, 'Maintenance completed as scheduled');

INSERT INTO ServiceHistory (VehicleID, ServiceID, Notes, Mileage, Documentation) 
VALUES (4, 2, 'Front brake pads replaced', 10100, 'Maintenance completed as scheduled');