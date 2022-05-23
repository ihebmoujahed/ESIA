DROP DATABASE IF EXISTS ESIA;

CREATE DATABASE ESIA;

USE ESIA;

CREATE TABLE Users (
  id_User int NOT NULL AUTO_INCREMENT,
  first_name varchar(350) NOT NULL,
  last_name varchar(350) NOT NULL, 
  birthday varchar (10),
  card_id int(20) NOT NULL,
  leveleducation varchar(100) NOT NULL,
  etude_level varchar(200) NOT NULL,
  place varchar(50) NOT NULL,
  image_user varchar(900) NOT NULL,
  PRIMARY KEY (id_User)
);
CREATE TABLE Payment (
  id_payment int NOT NULL AUTO_INCREMENT,
  id_User int NOT NULL,
  student varchar(50) NOT NULL,
  dbt varchar(300),
  price int(20), 
  month varchar(40),
  FOREIGN KEY (id_User) REFERENCES Users (id_User),
  PRIMARY KEY (id_payment)
);

CREATE TABLE Teacher (
  id_Teacher int NOT NULL AUTO_INCREMENT,
  first_name varchar(350) NOT NULL,
  last_name varchar(350) NOT NULL,
  Payment varchar(20),
  birthday varchar (10),
  card_id int(20) NOT NULL,
  Etude varchar(100) NOT NULL,
  place varchar(50) NOT NULL,
  image_user varchar(900) NOT NULL,
    PRIMARY KEY (id_Teacher)

);
CREATE TABLE PaymentTeacher (
  id_paymentteacher int NOT NULL AUTO_INCREMENT,
  id_Teacher int NOT NULL,
  student varchar(50) NOT NULL,
  dbt varchar(300),
  price int(20), 
  month varchar(40),
  FOREIGN KEY (id_Teacher) REFERENCES Teacher (id_Teacher),
  PRIMARY KEY (id_paymentteacher)
);
/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/