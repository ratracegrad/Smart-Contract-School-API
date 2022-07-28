export const dropChallengeTableSQL = 'DROP TABLE IF EXISTS challenge';
export const dropSolutionTableSQL = 'DROP TABLE IF EXISTS solution';
export const dropUserTableSQL = 'DROP TABLE IF EXISTS user';
export const dropResourceTableSQL = 'DROP TABLE IF EXISTS resource';

export const insertChallengeSQL = 'INSERT INTO challenge (title, image_url, image_alt, descrShort, descrLong, difficulty, requirements, tags, learning) VALUES ?';
export const insertSolutionSQL = 'INSERT INTO solution (gist_url, author) VALUES ?';
export const insertUserSQL = 'INSERT INTO user (username) VALUES ?';
export const insertResourceSQL = 'INSERT INTO resource (title, descr, image_url, image_alt, category, url) VALUES ?';

export const createChallengeTableSQL = `CREATE TABLE challenge (
	challenge_id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(240) NOT NULL,
	image_url VARCHAR(240),
	image_alt VARCHAR(240),
	descrShort VARCHAR(480),
	descrLong VARCHAR(480),
	difficulty VARCHAR(40) NOT NULL,
	requirements VARCHAR(480),
	tags VARCHAR(240),
	learning VARCHAR(240),
	active BOOLEAN DEFAULT true,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (challenge_id),
	CONSTRAINT chk_difficulty CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced'))
)`;

export const createSolutionTableSQL = `CREATE TABLE solution (
	solution_id INT NOT NULL AUTO_INCREMENT,
	gist_url VARCHAR(240) NOT NULL,
	votes INT DEFAULT 0,
	author VARCHAR(40) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	cid INT,
	uid INT,
	PRIMARY KEY (solution_id),
	KEY challenge_idx (cid),
	KEY user_idx (uid)
)`;

export const createUserTableSQL = `CREATE TABLE user (
	user_id INT NOT NULL AUTO_INCREMENT,
	username VARCHAR(40) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (user_id)
)`;

export const createResourcesTableSQL = `CREATE TABLE resource (
	resource_id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(240) NOT NULL,
	descr VARCHAR(1240) NOT NULL,
	image_url VARCHAR(240) NOT NULL,
	image_alt VARCHAR(240) NOT NULL,
	category VARCHAR(40) NOT NULL,
	url VARCHAR(240) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (resource_id),
	CONSTRAINT chk_category CHECK (category IN ('Video', 'Article', 'Community', 'DAO'))
)`;
