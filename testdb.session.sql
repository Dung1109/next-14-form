-- show tables;

SELECT  * from users;

-- show create table student;

-- {
--   "Table": "student",
--   "Create Table": "CREATE TABLE `student` (\n  `id` int(11) NOT NULL,\n  `name` varchar(20) DEFAULT NULL,\n  `age` int(11) DEFAULT NULL,\n  PRIMARY KEY (`id`) /*T![clustered_index] CLUSTERED */\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin"
-- }

-- insert into student (id, name, age) values (2, '张三', 18);

-- INSERT INTO student (id, name, age) VALUES (6, 'asdfas', 18);
