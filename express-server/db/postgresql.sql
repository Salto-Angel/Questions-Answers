
DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

DROP TABLE IF EXISTS `questions`;
		
CREATE TABLE `questions` (
  `question_id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
  `product_id` INTEGER NOT NULL DEFAULT NULL,
  `question_body` TEXT NULL DEFAULT NULL,
  `question_date` TIMESTAMP NOT NULL DEFAULT NULL,
  `asker_name` TEXT NULL DEFAULT NULL,
  `asker_email` TEXT NULL DEFAULT NULL,
  `question_helpfulness` INTEGER NULL DEFAULT NULL,
  `reported` INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (`question_id`)
) COMMENT 'list for all the questions, will have no foreign keys';

-- ---
-- Table 'answers'
-- list for the answers, each answer will have a foreign key linked to some question in the question list
-- ---

DROP TABLE IF EXISTS `answers`;
		
CREATE TABLE `answers` (
  `answer_id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
  `body` TEXT NULL DEFAULT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT NULL,
  `answerer_name` TEXT NULL DEFAULT NULL,
  `answerer_email` TEXT NULL DEFAULT NULL,
  `helpfulness` INTEGER NOT NULL DEFAULT 0,
  `reported` INTEGER NOT NULL DEFAULT 0,
  `question_id` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`answer_id`)
) COMMENT 'list for the answers, each answer will have a foreign key li';

-- ---
-- Table 'photos'
-- photos list, will have a key linked to which answer it is associated with
-- ---

DROP TABLE IF EXISTS `photos`;
		
CREATE TABLE `photos` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `photo` TEXT NULL DEFAULT NULL,
  `answer_id` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) COMMENT 'photos list, will have a key linked to which answer it is as';

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `answers` ADD FOREIGN KEY (question_id) REFERENCES `questions` (`question_id`);
ALTER TABLE `photos` ADD FOREIGN KEY (answer_id) REFERENCES `answers` (`answer_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `questions` (`question_id`,`question_body`,`question_date`,`asker_name`,`question_helpfulness`,`reported`) VALUES
-- ('','','','','','');
-- INSERT INTO `answers` (`answer_id`,`body`,`date`,`answerer_name`,`helpfulness`,`reported`,`new field`,`question_id`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `photos` (`id`,`photo`,`answer_id`) VALUES
-- ('','','');