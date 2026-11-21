-- CREATE TABLE statements for the Database Schema --

/* Create a table for CATEGORIES with 
an auto-incrementing primary key. */

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT
);

/* NOT NULL constraint ensures that category names cannot be empty. */
/* UNIQUE constraint ensures that category names are unique. */
/* The description field can be used to provide additional information about the category. */

    
