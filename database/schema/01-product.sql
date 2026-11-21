/* Create a table for PRODUCTS with 
an auto-incrementing primary key. */

CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    title VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    description TEXT,
    product_type VARCHAR(50) NOT NULL,
    product_format VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    is_active BOOLEAN NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);