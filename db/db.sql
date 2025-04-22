#Initialize Engine Table
CREATE TABLE Engine (
    EngineID INT PRIMARY KEY,
    EngineType VARCHAR(30),
    Displacement VARCHAR(20),
    Cylinders VARCHAR(10),
    Horsepower INT,
    FuelType VARCHAR(20),
    Transmission VARCHAR(30)
);

#Initialize Store Location Table
CREATE TABLE StoreLocation (
    LocationID INT PRIMARY KEY,
    LocationName VARCHAR(50),
    Address VARCHAR(100),
    City VARCHAR(30),
    State VARCHAR(20),
    ZIP VARCHAR(10),
    Phone VARCHAR(15),
    OpeningDate DATE,
    ManagerID INT
);

#Initialize Vehicle Table
CREATE TABLE Vehicle (
    VehicleID INT PRIMARY KEY,
    VIN VARCHAR(17),
    Make VARCHAR(30),
    Model VARCHAR(30),
    Year INT,
    Color VARCHAR(20),
    Mileage INT,
    NewUsed VARCHAR(5),
    PurchasePrice INT,
    SalePrice INT,
    Status VARCHAR(15),
    DateAcquired DATE,
    EngineID INT,
    LocationID INT,
    FOREIGN KEY (EngineID) REFERENCES Engine(EngineID),
    FOREIGN KEY (LocationID) REFERENCES StoreLocation(LocationID)
);

#Initialize Customer Table
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    FName VARCHAR(30),
    LName VARCHAR(30),
    Name VARCHAR(60),
    Email VARCHAR(50),
    Phone VARCHAR(15),
    Address VARCHAR(100),
    DOB DATE,
    DriverLicenseNumber VARCHAR(20),
    JoinedDate DATE,
    PreferredContact VARCHAR(10)
);

#Initialize Employee Table
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    FName VARCHAR(30),
    LName VARCHAR(30),
    Name VARCHAR(60),
    Email VARCHAR(50),
    Phone VARCHAR(15),
    Address VARCHAR(100),
    City VARCHAR(30),
    State VARCHAR(20),
    Zip VARCHAR(10),
    SSN VARCHAR(11),
    HireDate DATE,
    TermDate DATE,
    Salary INT,
    CommissionRate INT
);

#Initialize Sale Table
CREATE TABLE Sale (
    SaleID INT PRIMARY KEY,
    VehicleID INT,
    CustomerID INT,
    EmployeeID INT,
    SaleDate DATE,
    SalePrice INT,
    TaxAmount INT,
    TotalAmount INT,
    FOREIGN KEY (VehicleID) REFERENCES Vehicle(VehicleID),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);

#Initialize Payment Table
CREATE TABLE Payment (
    PaymentID INT PRIMARY KEY,
    SaleID INT,
    PaymentDate DATE,
    Amount INT,
    PaymentMethod VARCHAR(30),
    TransactionReference VARCHAR(50),
    Status VARCHAR(15),
    FOREIGN KEY (SaleID) REFERENCES Sale(SaleID)
);

#Initialize Service Table
CREATE TABLE Service (
    ServiceID INT PRIMARY KEY,
    CustomerID INT,
    VehicleID INT,
    ServiceDate DATE,
    ServiceType VARCHAR(50),
    Description VARCHAR(255),
    Cost INT,
    Status VARCHAR(15),
    EmployeeID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (VehicleID) REFERENCES Vehicle(VehicleID),
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);

#Initialize Feature Table
CREATE TABLE Feature (
    FeatureID INT PRIMARY KEY,
    FeatureName VARCHAR(50),
    Description VARCHAR(255)
);

#Initialize Vehicle_Feature Relationship Table
CREATE TABLE Vehicle_Feature (
    VehicleID INT,
    FeatureID INT,
    PRIMARY KEY (VehicleID, FeatureID),
    FOREIGN KEY (VehicleID) REFERENCES Vehicle(VehicleID),
    FOREIGN KEY (FeatureID) REFERENCES Feature(FeatureID)
);

#Initialize ServiceHistory Table
CREATE TABLE ServiceHistory (
    ServiceHistoryID INT PRIMARY KEY,
    VehicleID INT,
    ServiceID INT,
    Notes VARCHAR(255),
    Mileage INT,
    Documentation VARCHAR(255),
    FOREIGN KEY (VehicleID) REFERENCES Vehicle(VehicleID),
    FOREIGN KEY (ServiceID) REFERENCES Service(ServiceID)
);