CREATE TABLE products (
  product_id integer PRIMARY KEY,
  name varchar(80),
  slogan varchar(200),
  description varchar(300),
  category varchar(80),
  default_price varchar(10)
);

CREATE TABLE features (
  feature varchar(80),
  value varchar(80),
  product_id integer REFERENCES products(product_id)
);

-- isDefault in the old api is referenced as 'default?'
CREATE TABLE styles (
  product_id integer REFERENCES products (product_id),
  style_id integer PRIMARY KEY,
  name varchar(80),
  original_price varchar(10),
  sale_price varchar(10),
  isDefault boolean
);


CREATE TABLE photos (
  style_id integer REFERENCES styles (style_id),
  thumbnail_url varchar(300),
  url varchar(300)
);

CREATE TABLE skus (
  style_id integer REFERENCES styles (style_id),
  sku_id integer PRIMARY KEY,
  quantity integer,
  size varchar(5)
);

CREATE TABLE related (
  product_id integer REFERENCES products(product_id),
  realted_id integer
);
