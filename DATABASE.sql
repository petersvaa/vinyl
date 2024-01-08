CREATE TABLE records(
    id INT AUTO_INCREMENT PRIMARY KEY,
    artist VARCHAR(255),
    album VARCHAR(255) UNIQUE,
    cover VARCHAR(255),
    description TEXT,
    price float(2),
    hook VARCHAR(255) UNIQUE
);

CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_timestamp INT,
    paid BOOLEAN,
    price float(2),

    email VARCHAR(255),
    phone VARCHAR(255),
    address VARCHAR(255),
    name VARCHAR(255),
    surname VARCHAR(255)
);

CREATE TABLE cart_items(
    id INT AUTO_INCREMENT PRIMARY KEY,
    record_id INT,
    order_id INT,
    FOREIGN KEY (order_id) REFERENCES orders(id)
)