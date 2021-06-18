DROP TABLE IF EXISTS product_cart_junction;
DROP TABLE IF EXISTS carts;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

CREATE TABLE user (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(2000)
);

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(100),
  product_description VARCHAR(1000),
  product_image VARCHAR(2000)
);

CREATE TABLE carts (
  cart_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  active BOOLEAN
);

CREATE TABLE product_cart_junction (
  product_cart_id SERIAL PRIMARY KEY,
  cart_id INT REFERENCES carts(cart_id),
  product_id INT REFERENCES products(product_id),
  quantity INT
);

INSERT INTO products
(product_name, product_description, product_image)
VALUES
('shirt', '100% cotton', 'favicon.ico');