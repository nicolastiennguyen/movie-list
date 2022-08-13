DROP DATABASE movielist;

CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies (
  id INT AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  watched BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);