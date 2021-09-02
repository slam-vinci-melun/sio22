-- Base biblio

CREATE TABLE `genre` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`intitule` varchar(30) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

CREATE TABLE `livre` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`titre` varchar(65) NOT NULL,
	`auteur` varchar(65) NOT NULL,
	`editeur` varchar(65) DEFAULT NULL,
	`ean` varchar(13) NOT NULL,
	`genre` tinyint(1) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY `ean` (`ean`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 ;

INSERT INTO `genre` (`intitule`) VALUES
('Policier'),
('Fantastique'),
('Aventure');

INSERT INTO `livre` (`titre`,`auteur`,`editeur`,`ean`,`genre`)
 VALUES
('Le Seigneur des Anneaux','Tolkien','Bourgeois','9782267000924','2'),
('Les Aventures de Sherlock Holmes','Doyle','Omnibus','9782258067219','1'),
('Les Aventures de Jack Aubrey','OBrian','Omnibus','9782258054738','3');

CREATE VIEW livre_policier AS
 SELECT titre, auteur, ean
 FROM livre
 WHERE genre=1;


CREATE TABLE T_livre_fantastique (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`titre` varchar(65) NOT NULL,
	`auteur` varchar(65) NOT NULL,
	`ean` varchar(13) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


