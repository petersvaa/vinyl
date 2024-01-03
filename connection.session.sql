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
SET hook = 'metallica-ride-the-lightning'
WHERE id = 4;

--@block
CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_timestamp INT,
    paid BOOLEAN,
    price float(2)
)

--@block
ALTER TABLE orders
DROP COLUMN cart

--@block
SELECT * FROM orders;

--@block
CREATE TABLE cart_items(
    id INT AUTO_INCREMENT PRIMARY KEY,
    record_id INT,
    order_id INT,
    FOREIGN KEY (order_id) REFERENCES orders(id)
)

--@block
DROP TABLE cart_items;

--@block
SELECT * FROM cart_items;
