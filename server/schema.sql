/*
 We need something to reset our database so we can execute this file again
 DROP
 */

DROP DATABASE chat;

CREATE DATABASE chat;
/* Create's database and opens it */

USE chat;

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  words VARCHAR(255) NOT NULL,
  usersId INT NOT NULL,
  roomname VARCHAR(30),
  PRIMARY KEY(id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY(id)
);



/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.

 */

