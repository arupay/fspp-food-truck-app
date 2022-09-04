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
    about TEXT,
    lat DECIMAL(10,8),
    lng DECIMAL(11,8)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    trucks_id INTEGER REFERENCES trucks (id)
    ON DELETE CASCADE
);