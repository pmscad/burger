DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
burger_name VARCHAR
    (30) NOT NULL,
devoured boolean NOT NULL,
PRIMARY KEY
    (id)
);
