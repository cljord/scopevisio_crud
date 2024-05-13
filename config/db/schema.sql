DROP DATABASE IF EXISTS gas_station_app;
CREATE DATABASE gas_station_app;

\c gas_station_app;

CREATE TABLE IF NOT EXISTS gasstations (
    id int primary key,
    address varchar(256),
    x real,
    y real
);