CREATE DATABASE cows;

USE cows;

CREATE TABLE cows (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cow_name VARCHAR(40) NOT NULL,
  cow_description VARCHAR(255) NOT NULL
);
