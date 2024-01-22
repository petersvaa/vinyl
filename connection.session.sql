--@block
CREATE TABLE records(
    id INT AUTO_INCREMENT PRIMARY KEY,
    artist VARCHAR(255),
    album VARCHAR(255) UNIQUE,
    cover VARCHAR(255),
    description TEXT,
    price float(2),
    hook VARCHAR(255) UNIQUE
);

--@block
SELECT * FROM records;

--@block
UPDATE records
SET artist = 'AC/DC',
album = 'Back in Black',
price = '27.99',
description = 'Album od austrálskej hard-rockovej skupiny AC/DC.'

WHERE id = 28;

--@block
CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_timestamp INT,
    paid BOOLEAN,
    price float(2),

    email VARCHAR(255),
    phone VARCHAR(255),
    name VARCHAR(255),
    surname VARCHAR(255)
    street VARCHAR(255),
    city VARCHAR(255),
    postal_code VARCHAR(255),
);
--@block
ALTER TABLE orders
ADD postal_code VARCHAR(255);

--@block
DROP TABLE orders;

--@block
SELECT * FROM orders;

--@block
CREATE TABLE cart_items(
    id INT AUTO_INCREMENT PRIMARY KEY,
    record_id INT,
    order_id INT,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (record_id) REFERENCES records(id)
);

--@block
DELETE FROM cart_items;
DELETE FROM orders;
DELETE FROM records;