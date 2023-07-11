DROP DATABASE IF EXISTS dev_trucks;
CREATE DATABASE dev_trucks;

\c dev_trucks;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    username TEXT
);

CREATE TABLE trucks (
    id SERIAL PRIMARY KEY,
    added_by INTEGER REFERENCES users (id) NOT NULL,
    name TEXT NOT NULL,
    address TEXT,
    zip INT,
    borough TEXT,
    category TEXT,
    image_url TEXT,
    about TEXT,
    lat DECIMAL(12,9),
    lng DECIMAL(12,9)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer INTEGER NOT NULL REFERENCES users (id)ON DELETE CASCADE,
    content TEXT,
    rating NUMERIC,
    created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CHECK (rating >= 1 AND rating <= 5),
    trucks_id INTEGER REFERENCES trucks (id)
    ON DELETE CASCADE
);


CREATE TABLE favorite_trucks (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    truck_id INTEGER REFERENCES trucks (id) ON DELETE CASCADE
);
