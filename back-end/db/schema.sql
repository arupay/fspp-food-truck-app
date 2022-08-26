DROP DATABASE IF EXISTS dev_trucks;
CREATE DATABASE dev_trucks;

\c dev_trucks;

CREATE TABLE trucks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT,
    zip INT,
    borough TEXT,
    category TEXT,
    image_url TEXT,
    about TEXT
);