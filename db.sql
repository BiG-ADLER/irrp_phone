CREATE TABLE IF NOT EXISTS `block_list_phone` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`blocker` VARCHAR(20) NOT NULL,
	`blocked` VARCHAR(20) NOT NULL,
	PRIMARY KEY (`id`)
);
