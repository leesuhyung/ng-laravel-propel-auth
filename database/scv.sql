
# This is a fix for InnoDB in MySQL >= 4.1.x
# It "suspends judgement" for fkey relationships until are tables are set.
SET FOREIGN_KEY_CHECKS = 0;

-- ---------------------------------------------------------------------
-- board
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `board`;

CREATE TABLE `board`
(
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `user_id` int(10) unsigned NOT NULL,
    `entity` VARCHAR(45) DEFAULT 'info' NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `contents` TEXT NOT NULL,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`),
    INDEX `fk_board_user_idx` (`user_id`),
    CONSTRAINT `fk_board_user`
        FOREIGN KEY (`user_id`)
        REFERENCES `user` (`id`)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- user
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user`
(
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255),
    `remember_token` VARCHAR(100),
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `email_UNIQUE` (`email`)
) ENGINE=InnoDB;

# This restores the fkey checks, after having unset them earlier
SET FOREIGN_KEY_CHECKS = 1;
