CREATE TABLE records(
    id INT AUTO_INCREMENT PRIMARY KEY,
    artist VARCHAR(255), -- umelec
    album VARCHAR(255) UNIQUE, -- album
    cover VARCHAR(255), -- obrazok
    description TEXT, -- popis
    price float(2), -- cena
    hook VARCHAR(255) UNIQUE -- odkaz
);

CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_timestamp INT, -- cas vytvorenia
    paid BOOLEAN, -- zaplatene
    price float(2), -- cena

    email VARCHAR(255), -- email
    phone VARCHAR(255), -- tel cislo
    name VARCHAR(255), -- meno
    surname VARCHAR(255), -- priezvisko
    street VARCHAR(255), -- ulica a cislo
    city VARCHAR(255), -- mesto
    postal_code VARCHAR(255) -- psc
);

CREATE TABLE cart_items(
    id INT AUTO_INCREMENT PRIMARY KEY,
    record_id INT, -- id produktu
    order_id INT, -- id objednavky
    -- odkaz na objednavku
    FOREIGN KEY (order_id) REFERENCES orders(id),
    -- odkaz na produkt
    FOREIGN KEY (record_id) REFERENCES records(id)
);