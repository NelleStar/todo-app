\echo 'Delete and recreate todo db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE todo;
CREATE DATABASE todo;
\connect todo

\i todo-schema.sql
\i todo-seed.sql

\echo 'Delete and recreate todo_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE todo_test;
CREATE DATABASE todo_test;
\connect todo_test

\i todo-schema.sql