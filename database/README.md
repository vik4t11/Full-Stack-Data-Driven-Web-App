# N3L1F0NT – Commerce Database Design

**Relational Database Design | SQL | SQLite | Entity Relationship Modelling | Django ORM**

## Project Overview

This project explores the design and development of a relational database to support the commercial activities of N3L1F0NT, an independent multidisciplinary artist.

The database is being designed to organise business information, manage creative product inventory, track limited-edition items and record customer transactions.

It forms part of a wider Django-based artist website and commerce application, which aims to provide an integrated digital environment for showcasing creative work and managing an independent artist's business.

The database development is approached as a separate learning and experimentation process before integrating the finalised schema into the Django application.

The objective is to understand how commercial requirements can be translated into a structured relational database, using SQL to develop and test relationships, constraints and data integrity.

---

## Project Objectives

The project has two primary objectives.

### 1. Develop an independent artist website

- Create a digital portfolio and online presence.
- Showcase original artwork, textile pieces, prints and digital assets.
- Provide an online shop for customers.
- Establish a platform for creative collaborations and enquiries.
- Develop an independent website using Django, HTML, CSS and JavaScript.

### 2. Design a relational commerce database

- Organise products into categories.
- Manage physical and digital product formats.
- Track unique and limited-edition products.
- Assign individual edition numbers.
- Monitor product availability and inventory.
- Store multiple images associated with each product.
- Maintain customer and order records.
- Record individual items within customer orders.
- Establish relationships and constraints to maintain data integrity.

---

## Database Architecture

The database is designed around the commercial lifecycle of an artist's products.

A central design principle is to distinguish between a product, its individual editions and the commercial transactions associated with selling them.

For example:

| Entity | Purpose |
|---|---|
| **Product** | Describes the item or creative work being sold. |
| **Product Edition** | Represents an individual item or copy of a product. |
| **Customer** | Stores customer information. |
| **Customer Order** | Records a customer's transaction. |
| **Order Item** | Connects individual products or editions to customer orders. |

Separating these entities allows the database to represent products independently from their individual editions and sales transactions.

### Core Database Tables

| Table | Purpose |
|---|---|
| `category` | Organises products into categories. |
| `product` | Stores product information, descriptions, pricing and product types. |
| `product_edition` | Tracks individual product editions and their availability. |
| `product_image` | Stores multiple images associated with each product. |
| `digital_asset` | Records digital file information associated with an edition. |
| `customer` | Stores customer details. |
| `customer_order` | Records customer transactions and order status. |
| `order_item` | Records the products, editions and quantities included in an order. |

### Entity Relationship Diagram (ERD)

The Entity Relationship Diagram illustrates the proposed database structure and the relationships between its tables.

![N3L1F0NT commerce database Entity Relationship Diagram](schema/Neli_Font_ERD.drawio.png)

The diagram is used to explore how entities connect through primary keys and foreign keys, and how relationships support the commercial requirements of the application.

---

## Key Business Requirements

The database architecture considers several aspects of selling creative products:

- **Product types:** Original artwork, prints, digital assets and wearable pieces.
- **Product formats:** Physical and digital.
- **Edition management:** Unique and limited editions.
- **Categorisation:** One primary category per product.
- **Product imagery:** Multiple images per product.
- **Edition tracking:** Individual edition numbers.
- **Inventory management:** Tracking product availability.
- **Sales management:** Customers, orders and order items.
- **Digital delivery:** Recording digital files associated with products or editions.

These requirements inform the relationships, fields and constraints considered during database design.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| SQL | Relational database design, querying and data management. |
| SQLite | Local database development and schema experimentation. |
| Python | Backend programming. |
| Django | Web application framework and ORM integration. |
| HTML | Website structure. |
| CSS | Interface styling and responsive layouts. |
| JavaScript | Frontend interactions. |
| Visual Studio Code | Development environment. |
| Git and GitHub | Version control and project documentation. |

---

## SQL Development and Database Experimentation

I created a separate SQLite database, `shop_learning.db`, to experiment with the proposed commerce schema and develop my understanding of relational database design.

This provides a practical environment to write and execute SQL statements, create tables, define relationships and test database constraints before translating the structure into Django models.

The intention is to understand the underlying SQL architecture rather than relying exclusively on Django's Object Relational Mapper (ORM) to generate database structures.

This approach allows me to investigate how relational databases work independently of the web framework.

### Key SQL Concepts

The development process focuses on understanding:

- **Primary keys (PK):** Uniquely identify individual records within a table.
- **Foreign keys (FK):** Establish relationships between tables.
- **Referential integrity:** Ensures that relationships between records remain valid.
- **Data types:** Define the types of information stored in database columns.
- **Constraints:** Restrict invalid or inconsistent data.
- **Normalisation:** Organises information into related tables to reduce unnecessary duplication and improve data integrity.
- **SQL queries:** Retrieve, filter and combine information from related tables.

### Example: Referential Integrity

Every `category_id` entered into the `product` table must correspond to an existing record in the `category` table.

This relationship is established through a foreign key constraint.

For example, a product cannot reference a category that does not exist when foreign key enforcement is active.

This helps maintain consistency between related tables and prevents invalid references.

---

## Database Development Roadmap

The database will be developed incrementally, with each phase building on the previous stage.

### Phase 1 — Product Catalogue

**Objective:** Establish the foundational product structure.

- Create `category`.
- Create `product`.
- Create `product_image`.
- Establish the relationship between categories and products.
- Test product records and associated images.

### Phase 2 — Edition and Inventory Management

**Objective:** Introduce individual product and edition tracking.

- Create `product_edition`.
- Explore unique and limited-edition products.
- Assign individual edition numbers.
- Test availability and inventory management.
- Investigate constraints to prevent duplicate edition numbers where appropriate.

### Phase 3 — Customer Management

**Objective:** Introduce customer records.

- Create `customer`.
- Define customer information fields.
- Consider how customer records will relate to future orders.

### Phase 4 — Orders and Sales

**Objective:** Establish the commercial transaction structure.

- Create `customer_order`.
- Create `order_item`.
- Connect customer orders to individual products or editions.
- Record quantities and transaction details.
- Explore relationships between customers, orders and purchased items.

### Phase 5 — Digital Delivery

**Objective:** Introduce digital product management.

- Create `digital_asset`.
- Record digital file information.
- Establish relationships between digital assets and relevant editions.
- Consider secure access and download management.

### Phase 6 — Django Integration

**Objective:** Translate the tested relational schema into the Django application.

- Implement the database structure through Django models.
- Define model relationships and constraints.
- Generate and apply Django migrations.
- Connect the models to the website.
- Test database operations through Django ORM.
- Compare ORM operations with the underlying SQL structure.

---

## Development Decisions

### Why create a separate SQL learning database?

I created `shop_learning.db` to experiment with the proposed shop database structure independently of the main Django application.

This separates the process of learning and testing relational database concepts from the implementation of the website.

It also provides an opportunity to understand how SQL tables, primary keys, foreign keys and constraints work before using Django ORM to manage the same underlying database relationships.

The longer-term intention is to translate the tested schema into Django models, allowing the website to interact with the database through the framework's ORM.

The learning database is a local development resource, separate from the application's main database.

---

## Project Direction

The longer-term objective is to develop a maintainable commerce database that supports the growth of an independent artist's business.

The database design will evolve alongside the Django application, with particular attention to:

- Relational database architecture.
- Product and edition management.
- Inventory and availability.
- Customer and order management.
- Data integrity and validation.
- SQL querying and database relationships.
- Django ORM integration.

This project provides a practical environment for developing SQL and backend knowledge while exploring how database architecture supports real-world commercial requirements.

---

## Learning Resources and References

The following resources have informed the database design and development process.

**Django ORM**

- [GeeksforGeeks – Django ORM: Inserting, Updating and Deleting Data](https://www.geeksforgeeks.org/python/django-orm-inserting-updating-deleting-data/)

**SQL and Relational Database Concepts**

- [Stack Overflow – SQLite Foreign Key Constraints](https://stackoverflow.com/questions/77874084/how-does-sqlites-pragma-foreign-keys-on-reference-the-foreign-keys-tables)
- [W3Schools – SQL AUTO INCREMENT](https://www.w3schools.com/sql/sql_autoincrement.asp)
- [GeeksforGeeks – Introduction to Database Normalization](https://www.geeksforgeeks.org/dbms/introduction-of-database-normalization/)

---

**Project:** N3L1F0NT Commerce Database  
**Development approach:** Self-directed SQL experimentation and relational database design  
**Database environment:** SQLite  
**Integration framework:** Django ORM  
**Status:** Database design and learning in progress