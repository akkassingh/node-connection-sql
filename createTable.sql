CREATE TABLE IF NOT EXISTS `employees` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  gender varchar(255) NOT NULL,
  phone INT(10) UNSIGNED NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;