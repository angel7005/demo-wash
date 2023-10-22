-- MySQL dump 10.19  Distrib 10.3.38-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: wasing
-- ------------------------------------------------------
-- Server version	10.3.38-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
use sql9655359;
--
-- Table structure for table `model`
--

DROP TABLE IF EXISTS `model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `model` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `model` varchar(30) NOT NULL,
  `features` varchar(500) DEFAULT NULL,
  `trade` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `iu_model` (`model`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model`
--

LOCK TABLES `model` WRITE;
/*!40000 ALTER TABLE `model` DISABLE KEYS */;
INSERT INTO `model` VALUES (1,'DWF-174WP','AUTOMATIC',1),(3,'DaF-174Wa','DaF-174Wa',1);
/*!40000 ALTER TABLE `model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trade`
--

DROP TABLE IF EXISTS `trade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trade` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `trade` varchar(30) NOT NULL,
  `url` varchar(30) DEFAULT NULL,
  `descriptions` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `iu_trade` (`trade`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trade`
--

LOCK TABLES `trade` WRITE;
/*!40000 ALTER TABLE `trade` DISABLE KEYS */;
INSERT INTO `trade` VALUES (1,'DAEWOOD','http://www.daewood.com','Washing and more..'),(4,'aaa','aaa','aaaa'),(5,'aa','aa','aa'),(6,'bb','bb','bb'),(7,'dd','ddd','ddd'),(8,'NNN','http://www.nnnn.com','OOONNNASLD;ldl;\'fsdddddddddddddddddddddddddddddddddddddddddd'),(9,'fff','fff','fff'),(11,'dddd','ddd','dddd'),(18,'dddd1','ddd','dddd'),(19,'dddd1w','ddd','dddd'),(21,'Trade21','URL@2121212121','dddddddddddd211111111122222111111111');
/*!40000 ALTER TABLE `trade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `movil` varchar(15) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `alias` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(30) NOT NULL DEFAULT 'customer',
  `mail` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warranty`
--

DROP TABLE IF EXISTS `warranty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `warranty` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `serial_number` varchar(25) NOT NULL,
  `model` varchar(20) NOT NULL,
  `date_sale` date NOT NULL,
  `days_warranty` int(10) unsigned NOT NULL,
  `descriptions` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `iu_serialnumber` (`serial_number`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warranty`
--

LOCK TABLES `warranty` WRITE;
/*!40000 ALTER TABLE `warranty` DISABLE KEYS */;
INSERT INTO `warranty` VALUES (10,'c1234567890','rrrrr','2023-10-02',20,'111111111trrrrrrr'),(12,'b1234567899','uuyuu','2023-10-08',19,'111111111trrrrrrr'),(13,'b1234567898','as12-0303-22','2023-10-10',18,'aaaaaaaaaaaaaaaaaaaa'),(14,'b1234567897','aesl-0303-223','2023-10-10',17,'aaaaaaaaaaaaaaaaaaaa'),(15,'b1234567896','dffddf','2023-10-12',16,'33335555'),(16,'b1234567895','dsffdf','2023-10-08',15,'444444444444444444455555555'),(18,'b1234567894','rgfgfg','2023-10-12',14,'55555'),(19,'b1234567893','ddddd','2023-10-12',13,'44444'),(20,'b1234567892','nfgfdg454545','2023-10-12',12,'erfdffddfdf'),(21,'b1234567891','rtertertert','2023-10-12',11,'hfgjfjfjhj'),(22,'b1234567890','mhrt56566','2023-10-12',10,'hgfjjghjjh'),(23,'c1234567891','ffffffff','2023-10-13',21,'ffffffffffffffffffffffffffffff'),(24,'c1234567892','eee','2023-10-13',22,'2222222222222222'),(25,'c1234567893','model89','2023-10-13',23,'hhhhhh');
/*!40000 ALTER TABLE `warranty` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-16  7:14:41
