DROP DATABASE IF EXISTS movielist;

CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies (
  id INT AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  watched BOOLEAN,
  PRIMARY KEY (id)
);