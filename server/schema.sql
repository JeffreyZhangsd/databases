/*
 We need something to reset our database so we can execute this file again
 DROP
 */

DROP DATABASE chat;

CREATE DATABASE chat;
/* Create's database and opens it */

USE chat;

CREATE TABLE users (
  id INT NOT NULL,
  username VARCHAR(20),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INT NOT NULL,
  words VARCHAR(255),
  user_id INT NOT NULL,
  roomname INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);


/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.

 */

