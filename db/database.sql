create TABLE tasks(
  id SERIAL PRIMARY KEY,
  text TEXT,
  ischeck BOOLEAN
);

create TABLE shopping(
  id SERIAL PRIMARY KEY,
  text TEXT,
  sum INTEGER,
  "createdAt" timestamp
);