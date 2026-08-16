
# 1. What is a Database?

A **database** is a place where we store data in an organized way.

For example, a college needs to store:

* Student names
* Roll numbers
* Courses
* Marks
* Phone numbers

A database helps us to:

* Store data
* Find data
* Update data
* Delete data

### Simple Definition

> **Database = A place to store and manage data.**

Example:

```text
College Database
│
├── Students
├── Teachers
├── Courses
└── Marks
```

---

# 2. SQL vs NoSQL

There are two common types of databases:

* SQL
* NoSQL

## SQL

SQL databases store data mainly in **tables**.

Examples:

* MySQL
* PostgreSQL
* Oracle
* SQL Server

Example:

```text
+----+------+-----+
| id | name | age |
+----+------+-----+
| 1  | Raj  | 21  |
| 2  | Aman | 22  |
| 3  | Ravi | 20  |
+----+------+-----+
```

SQL usually follows a fixed structure.

---

## NoSQL

NoSQL databases use flexible data structures.

Examples:

* MongoDB
* Redis
* Cassandra
* Firebase

MongoDB example:

```json
{
  "name": "Raj",
  "age": 21,
  "city": "Maharajganj"
}
```

### Simple Difference

| SQL             | NoSQL                    |
| --------------- | ------------------------ |
| Tables          | Flexible data structures |
| Rows & columns  | Documents/collections    |
| Fixed structure | Flexible structure       |
| MySQL           | MongoDB                  |

### Remember

```text
SQL   → Tables
NoSQL → Flexible Data
```

---

# 3. What is SQL?

SQL stands for:

> **Structured Query Language**

SQL is used to communicate with a SQL database.

We use SQL to:

* Create databases
* Create tables
* Insert data
* Read data
* Update data
* Delete data

Example:

```sql
SELECT * FROM students;
```

This means:

> Show all data from the `students` table.

---

# 4. What is a Table?

A **table** stores data in rows and columns.

Think of an Excel sheet.

Example:

```text
students

+----+------+-----+-------------+
| id | name | age | city        |
+----+------+-----+-------------+
| 1  | Raj  | 21  | Maharajganj |
| 2  | Aman | 22  | Lucknow     |
| 3  | Ravi | 20  | Delhi       |
+----+------+-----+-------------+
```

## Column

A column represents one type of information.

```text
id
name
age
city
```

## Row

A row represents one complete record.

```text
1 | Raj | 21 | Maharajganj
```

### Remember

```text
Column → Type of information
Row    → Complete record
```

---

# 5. Our First Database

Let's create our first database.

```sql
CREATE DATABASE college;
```

### Meaning

```text
CREATE DATABASE
→ Create a database

college
→ Database name
```

---

## Show Databases

```sql
SHOW DATABASES;
```

This shows all available databases.

---

## Use Database

```sql
USE college;
```

`USE` tells MySQL which database we want to work with.

---

# 6. Our First Table

Let's create a `students` table.

```sql
CREATE TABLE students (
    id INT,
    name VARCHAR(50),
    age INT,
    city VARCHAR(50)
);
```

### Understanding

```text
id INT
→ Stores numbers

name VARCHAR(50)
→ Stores text up to 50 characters

age INT
→ Stores age

city VARCHAR(50)
→ Stores city name
```

---

# 7. Show Tables

To see all tables:

```sql
SHOW TABLES;
```

---

# 8. Check Table Structure

Use:

```sql
DESC students;
```

or:

```sql
DESCRIBE students;
```

It shows:

* Column name
* Data type
* Key
* NULL
* Default value

---

# 9. What is a Database Query?

A **query** is a command given to the database.

Example:

```sql
CREATE DATABASE college;
```

Another example:

```sql
SELECT * FROM students;
```

Both are database queries.

Common queries:

```sql
CREATE DATABASE college;
```

```sql
CREATE TABLE students (...);
```

```sql
INSERT INTO students VALUES (...);
```

```sql
SELECT * FROM students;
```

```sql
UPDATE students SET age = 22 WHERE id = 1;
```

```sql
DELETE FROM students WHERE id = 1;
```

---

# 10. Insert Data

We use `INSERT` to add data.

```sql
INSERT INTO students
VALUES (1, 'Raj', 21, 'Maharajganj');
```

Add another student:

```sql
INSERT INTO students
VALUES (2, 'Aman', 22, 'Lucknow');
```

Add another:

```sql
INSERT INTO students
VALUES (3, 'Ravi', 20, 'Delhi');
```

---

## Check Data

```sql
SELECT * FROM students;
```

Result:

```text
+----+------+-----+-------------+
| id | name | age | city        |
+----+------+-----+-------------+
| 1  | Raj  | 21  | Maharajganj |
| 2  | Aman | 22  | Lucknow     |
| 3  | Ravi | 20  | Delhi       |
+----+------+-----+-------------+
```

---

# 11. What are Constraints?

**Constraints are rules applied to table columns.**

They help keep our data correct.

Important constraints:

* PRIMARY KEY
* FOREIGN KEY
* NOT NULL
* UNIQUE
* DEFAULT
* CHECK

Example:

```sql
name VARCHAR(50) NOT NULL
```

This means `name` cannot be empty.

---

# 12. NOT NULL

`NOT NULL` means a value cannot be empty.

Example:

```sql
name VARCHAR(50) NOT NULL
```

Every student must have a name.

---

# 13. UNIQUE

`UNIQUE` means values must be different.

Example:

```sql
email VARCHAR(100) UNIQUE
```

Two students cannot have the same email.

Example:

```text
raj@gmail.com
aman@gmail.com
ravi@gmail.com
```

---

# 14. DEFAULT

`DEFAULT` provides a value automatically.

Example:

```sql
city VARCHAR(50) DEFAULT 'Lucknow'
```

If city is not provided:

```text
Lucknow
```

will be used.

---

# 15. CHECK

`CHECK` checks a condition.

Example:

```sql
age INT CHECK (age >= 18)
```

This means age should be 18 or greater.

```text
21 → Valid
20 → Valid
18 → Valid
15 → Invalid
```

---

# 16. What are Keys?

A **key** helps us identify records or connect tables.

Important keys:

* Primary Key
* Foreign Key

---

# 17. Primary Key

A **Primary Key uniquely identifies each row**.

Example:

```text
id
1
2
3
```

Every ID is different.

Create a Primary Key:

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);
```

### Primary Key Rules

* Must be unique
* Cannot be NULL
* Identifies one row

### Easy Example

```text
Student ID → Primary Key
```

---

# 18. Foreign Key

A **Foreign Key connects two tables**.

Example:

### Students

```text
+----+------+
| id | name |
+----+------+
| 1  | Raj  |
| 2  | Aman |
+----+------+
```

### Orders

```text
+----------+------------+
| order_id | student_id |
+----------+------------+
| 101      | 1          |
| 102      | 2          |
+----------+------------+
```

Here:

```text
orders.student_id
        ↓
students.id
```

So `student_id` connects the two tables.

---

## Create Foreign Key

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    student_id INT,
    FOREIGN KEY (student_id)
    REFERENCES students(id)
);
```

### Remember

```text
Primary Key → Identifies
Foreign Key → Connects
```

---

# 19. Primary Key vs Foreign Key

| Primary Key      | Foreign Key                     |
| ---------------- | ------------------------------- |
| Identifies a row | Connects tables                 |
| Must be unique   | Can repeat                      |
| Cannot be NULL   | Can be NULL depending on design |
| `students.id`    | `orders.student_id`             |

---

# 20. Create Table with Constraints

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 18),
    email VARCHAR(100) UNIQUE,
    city VARCHAR(50) DEFAULT 'Lucknow'
);
```

Here:

```text
id    → PRIMARY KEY
name  → NOT NULL
age   → CHECK
email → UNIQUE
city  → DEFAULT
```

---

# 21. CRUD Operations

CRUD means:

```text
C → Create
R → Read
U → Update
D → Delete
```

## Create

Add data:

```sql
INSERT INTO students
VALUES (1, 'Raj', 21, 'Maharajganj');
```

## Read

Read data:

```sql
SELECT * FROM students;
```

## Update

Change data:

```sql
UPDATE students
SET city = 'Gorakhpur'
WHERE id = 1;
```

## Delete

Remove data:

```sql
DELETE FROM students
WHERE id = 1;
```

---

# 22. SELECT Command

`SELECT` is used to read data.

## Select Everything

```sql
SELECT * FROM students;
```

Here:

```text
SELECT
→ Get data

*
→ All columns

FROM students
→ From students table
```

---

# 23. Select Specific Columns

We can select only the columns we need.

```sql
SELECT name, age
FROM students;
```

This shows:

```text
name
age
```

---

# 24. Select One Column

```sql
SELECT name
FROM students;
```

This shows only student names.

---

# 25. WHERE Clause

`WHERE` is used to filter data.

Example:

```sql
SELECT * FROM students
WHERE age > 20;
```

Meaning:

> Show students whose age is greater than 20.

---

## Find Student by ID

```sql
SELECT * FROM students
WHERE id = 1;
```

---

## Find Students from Lucknow

```sql
SELECT * FROM students
WHERE city = 'Lucknow';
```

---

# 26. UPDATE Command

`UPDATE` changes existing data.

```sql
UPDATE students
SET city = 'Gorakhpur'
WHERE id = 1;
```

Meaning:

```text
UPDATE students
→ Change students data

SET city
→ Change city

WHERE id = 1
→ Only student 1
```

### Important

Always use `WHERE` when updating a specific row.

---

# 27. DELETE Command

`DELETE` removes data.

```sql
DELETE FROM students
WHERE id = 3;
```

This deletes student ID 3.

Check:

```sql
SELECT * FROM students;
```

### Important

Be careful with:

```sql
DELETE FROM students;
```

Without `WHERE`, all records can be deleted.

---

# 28. Complete Practical

Now let's create a complete database.

## Step 1 — Create Database

```sql
CREATE DATABASE college;
```

## Step 2 — Use Database

```sql
USE college;
```

## Step 3 — Create Table

```sql
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT,
    email VARCHAR(100) UNIQUE,
    city VARCHAR(50)
);
```

## Step 4 — Check Table

```sql
SHOW TABLES;
```

## Step 5 — Check Structure

```sql
DESC students;
```

## Step 6 — Insert Data

```sql
INSERT INTO students
VALUES
(1, 'Raj', 21, 'raj@gmail.com', 'Maharajganj'),
(2, 'Aman', 22, 'aman@gmail.com', 'Lucknow'),
(3, 'Ravi', 20, 'ravi@gmail.com', 'Delhi'),
(4, 'Ankit', 23, 'ankit@gmail.com', 'Gorakhpur'),
(5, 'Rahul', 19, 'rahul@gmail.com', 'Kanpur');
```

## Step 7 — Show All Data

```sql
SELECT * FROM students;
```

## Step 8 — Select Name and Age

```sql
SELECT name, age
FROM students;
```

## Step 9 — Find Age Greater Than 20

```sql
SELECT * FROM students
WHERE age > 20;
```

## Step 10 — Find Student ID 1

```sql
SELECT * FROM students
WHERE id = 1;
```

## Step 11 — Update Student

```sql
UPDATE students
SET city = 'Gorakhpur'
WHERE id = 1;
```

## Step 12 — Check Update

```sql
SELECT * FROM students;
```

## Step 13 — Delete Student

```sql
DELETE FROM students
WHERE id = 5;
```

## Step 14 — Check Again

```sql
SELECT * FROM students;
```

---

# 29. Foreign Key Practical

Now create a `courses` table.

```sql
CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL
);
```

Insert courses:

```sql
INSERT INTO courses
VALUES
(101, 'MERN Stack'),
(102, 'Java'),
(103, 'Python');
```

Check:

```sql
SELECT * FROM courses;
```

---

# 30. Student Courses Table

Now connect students with courses.

```sql
CREATE TABLE student_courses (
    id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id)
    REFERENCES students(id),
    FOREIGN KEY (course_id)
    REFERENCES courses(course_id)
);
```

Here:

```text
student_id → students.id
course_id  → courses.course_id
```

---

## Insert Relationships

```sql
INSERT INTO student_courses
VALUES
(1, 1, 101),
(2, 2, 102),
(3, 3, 103);
```

Meaning:

```text
Student 1 → MERN Stack
Student 2 → Java
Student 3 → Python
```

Check:

```sql
SELECT * FROM student_courses;
```

---

# 31. Database Structure

Our database now looks like:

```text
college
│
├── students
│   ├── id
│   ├── name
│   ├── age
│   ├── email
│   └── city
│
├── courses
│   ├── course_id
│   └── course_name
│
└── student_courses
    ├── id
    ├── student_id
    └── course_id
```

Relationship:

```text
students
    ↓
student_courses
    ↑
courses
```

---

# 32. Useful MySQL Commands

### Show Databases

```sql
SHOW DATABASES;
```

### Use Database

```sql
USE college;
```

### Show Tables

```sql
SHOW TABLES;
```

### Show Table Structure

```sql
DESC students;
```

### Show Data

```sql
SELECT * FROM students;
```

### Delete Database

```sql
DROP DATABASE college;
```

### Delete Table

```sql
DROP TABLE students;
```

⚠️ `DROP` permanently removes the database or table.

---

# 33. Quick Revision

| Topic       | Meaning                          |
| ----------- | -------------------------------- |
| Database    | Stores and manages data          |
| SQL         | Language used with SQL databases |
| NoSQL       | Flexible data storage            |
| Table       | Stores data in rows and columns  |
| Row         | One complete record              |
| Column      | One type of information          |
| Query       | Command given to database        |
| Constraint  | Rule for data                    |
| Primary Key | Uniquely identifies a row        |
| Foreign Key | Connects tables                  |
| INSERT      | Adds data                        |
| SELECT      | Reads data                       |
| UPDATE      | Changes data                     |
| DELETE      | Removes data                     |
| WHERE       | Filters data                     |

---

# 34. Important Commands

```sql
CREATE DATABASE college;

USE college;

CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT,
    city VARCHAR(50)
);

INSERT INTO students
VALUES (1, 'Raj', 21, 'Maharajganj');

SELECT * FROM students;

SELECT name, age
FROM students;

SELECT * FROM students
WHERE age > 20;

UPDATE students
SET city = 'Gorakhpur'
WHERE id = 1;

DELETE FROM students
WHERE id = 1;
```

---

# 35. Practice

Create a database:

```text
college
```

Create a table:

```text
students
```

Columns:

```text
id
name
age
email
city
```

Practice these:

```sql
SELECT * FROM students;
```

```sql
SELECT name, age FROM students;
```

```sql
SELECT * FROM students
WHERE age > 20;
```

```sql
UPDATE students
SET city = 'Lucknow'
WHERE id = 1;
```

```sql
DELETE FROM students
WHERE id = 5;
```

Then create:

```text
courses
```

and:

```text
student_courses
```

Use **Primary Key + Foreign Key** to connect them.

---

