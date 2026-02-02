CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  email VARCHAR(100)
);

INSERT INTO users(name,age,email) VALUES
('Jose Lorenzini', 30, 'jose@vientodelsur.net'),
('Ana Luisa', 28, 'ana@analytics.com'),
('Luis Palma', 62, 'luis@palma.com');


select * from users;