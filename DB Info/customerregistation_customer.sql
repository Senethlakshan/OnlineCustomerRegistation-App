CREATE DATABASE  IF NOT EXISTS `customerregistation` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `customerregistation`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: customerregistation
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` bigint NOT NULL AUTO_INCREMENT,
  `age` int DEFAULT NULL,
  `annual_income` double DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `login_username` varchar(255) DEFAULT NULL,
  `nic_number` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `registration_date` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `UK_2afc3lldq0d6dp9cce6w7simg` (`nic_number`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,30,60000,'John','Doe','johndoe123','1234567890','secretpassword','A new customer','Mr.',NULL),(4,30,60000,'lakshan','Doe','johndoe123','sssss','secretpassword','A new customer','Mr.',NULL),(5,30,60000,'lakshededan','Doe','johndoe123','000000111','secretpassword','A new customer','Mr.','2023-09-16 14:45:22.983000'),(6,30,60000,'lakshededan','Doe','johndoe123','200033940760','secretpassword','A new customer','Mr.','2023-09-16 16:29:23.553000'),(7,30,60000,'lakshededan','Doe','johndoe123','0022343300111','secretpassword','A new customer','Mr.','2023-09-16 15:25:37.124000'),(8,30,60000,'lakshededan','Doe','johndoe123','200034900750','secretpassword','A new customer','Mr.','2023-09-16 16:29:52.670000'),(9,30,60000,'lakshededan','Doe','johndoe123','200034200750','secretpassword','A new customer','Mr.','2023-09-16 16:34:02.494000'),(10,12,11111,'K.M Seneth','lakshan','xeded','200033400888','eedededexc','cfcfc','Mr.','2023-09-16 16:39:36.303000'),(11,0,2,'lakshan','jbsl','3','9500208922','3d3d','ecerc','Mrs.','2023-09-16 16:49:12.586000'),(12,0,12334,'sahan','lkaka','xeded','3000339007','1111111111111111111','ecerc','Mrs.','2023-09-16 16:58:36.292000'),(13,0,12334,'sahan','lkaka','xeded','300033900s','1111111111111111111','ecerc','Mrs.','2023-09-16 16:59:45.039000'),(14,0,2222222222,'test','lakshan','xeded','4000339007','22323','eec','Mr.','2023-09-16 17:08:08.638000'),(15,NULL,0,'','','','','','','Mr.','2023-09-16 17:08:47.604000');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-16 17:58:30
