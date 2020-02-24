
DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

DROP TABLE IF EXISTS questions;
		
CREATE TABLE questions (
  question_id SERIAL,
  product_id INTEGER NOT NULL DEFAULT NULL,
  question_body TEXT NULL DEFAULT NULL,
  question_date DATE NOT NULL DEFAULT NULL,
  asker_name TEXT NULL DEFAULT NULL,
  asker_email TEXT NULL DEFAULT NULL,
  reported INTEGER NOT NULL DEFAULT 0,
  helpful INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (question_id)
);

-- ---
-- Table 'answers'
-- list for the answers, each answer will have a foreign key linked to some question in the question list
-- ---

DROP TABLE IF EXISTS answers;
		
CREATE TABLE answers (
  answer_id SERIAL,
  question_id INTEGER NOT NULL DEFAULT NULL,
  body TEXT NULL DEFAULT NULL,
  answer_date DATE NOT NULL DEFAULT NULL,
  answerer_name TEXT NULL DEFAULT NULL,
  answerer_email TEXT NULL DEFAULT NULL,
  reported INTEGER NOT NULL DEFAULT 0,
  helpfulness INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (answer_id)
);

-- ---
-- Table 'photos'
-- photos list, will have a key linked to which answer it is associated with
-- ---

DROP TABLE IF EXISTS photos;
		
CREATE TABLE photos (
  id SERIAL,
  answer_id INTEGER NOT NULL DEFAULT NULL,
  url TEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);
