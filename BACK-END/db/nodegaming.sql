CREATE DATABASE  IF NOT EXISTS `nodegaming` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `nodegaming`;
-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: nodegaming
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.22.04.1

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
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'GIGABYTE'),(2,'MSI'),(3,'ASUS'),(4,'AMD'),(5,'INTEL'),(6,'VIPER'),(7,'XPG'),(8,'KINGSTON'),(9,'ZOTAC'),(10,'SAPPHIRE'),(11,'ASROCK'),(12,'HYPERX'),(13,'AEROCOOL'),(14,'GAMEMAX'),(15,'LIAN LI'),(16,'KOLINK'),(17,'VIEWSONIC'),(18,'AORUS'),(19,'SAMSUNG');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Placa Madre','placaMadre.jpg'),(2,'Procesador','procesador.jpg'),(3,'Memoria Ram','memoriaRam.jpg'),(4,'Placa de Video','placaDeVideo.jpg'),(5,'Periférico','periferico.jpg'),(6,'Fuente de Poder','fuenteDePoder.jpg'),(7,'Gabinete','gabinete.jpg'),(8,'Monitor','monitor.jpg');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total` decimal(10,0) unsigned NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_products`
--

DROP TABLE IF EXISTS `orders_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subtotal` decimal(10,0) unsigned NOT NULL,
  `quantity` int unsigned NOT NULL,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id_idx` (`order_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE SET NULL,
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_products`
--

LOCK TABLES `orders_products` WRITE;
/*!40000 ALTER TABLE `orders_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,0) unsigned NOT NULL,
  `discount` int unsigned NOT NULL,
  `stock` int unsigned NOT NULL,
  `image_primary` varchar(255) NOT NULL,
  `image_secondary` varchar(255) DEFAULT NULL,
  `image_tertiary` varchar(255) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `brand_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id_idx` (`category_id`),
  KEY `brand_id_idx` (`brand_id`),
  CONSTRAINT `brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE SET NULL,
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Motherboard AM4 - Gigabyte GA-X570S AORUS ELITE','Description...',85000,0,100,'img-1657045799180133103491.jpeg','img-1657045799182250593498.jpeg','img-1657045799187128405721.jpeg',1,1),(2,'Motherboard AM4 - Msi MAG X570S TOMAHAWK MAX WIFI','Description...',65000,0,100,'img-1657046052494804574542.jpeg','img-1657046052498153167568.jpeg','img-1657046052502253652890.jpeg',1,2),(3,'Motherboard 1700 12°Gen - Asus Tuf GAMING Z690-PLUS WIFI DDR4','Description...',80000,0,100,'img-1657046189794968388391.jpeg','img-1657046189795297052146.jpeg','img-1657046189798964931047.jpeg',1,3),(4,'Motherboard 1700 12°Gen - Gigabyte GA-Z690 AORUS ELITE AX DDR4','Description...',70000,0,100,'img-1657046295457520391244.jpeg','img-1657046295459819415042.jpeg','img-1657046295462442336696.jpeg',1,1),(5,'Procesador Amd Ryzen 9 5900X 4.8 Ghz - AM4 Sin Cooler Sin Gpu','Description...',98000,0,100,'img-165704641042281594863.jpeg','img-1657046410422293063109.jpeg','img-1657046410423613454790.jpeg',2,4),(6,'Procesador Amd Ryzen 7 5700X 4.6 Ghz - AM4 Sin Cooler','Description...',65000,0,100,'img-1657046527280291631878.jpeg','img-1657046527281211004537.jpeg','img-1657046527284877705766.jpeg',2,4),(7,'Procesador Intel Core i9 12900K 5.2 Ghz Alder Lake 1700 Sin Cooler','Description...',142000,0,100,'img-1657046644551628304250.jpeg','img-1657046644553549505239.jpeg','img-1657046644555613015972.jpeg',2,5),(8,'Procesador Intel Core i7 12700K 5.0 Ghz Alder Lake 1700 Sin Cooler','Description...',97000,0,100,'img-165704670805452144533.jpeg','img-1657046708055215421908.jpeg','img-1657046708056969871969.jpeg',2,5),(9,'Memoria Patriot Viper DDR4 32GB (2x16GB) 3200Mhz Steel','Description...',25000,0,100,'img-1657046917022954248324.jpg','img-1657046917023274327138.jpg','img-1657046917023363886706.jpg',3,6),(10,'Memoria Adata DDR4 16GB (2x8GB) 3600Mhz XPG Spectrix D50 ROG','Description...',15000,0,100,'img-1657047124986488496380.jpg','img-1657047124986460095204.jpg','img-1657047124987921300040.jpg',3,7),(11,'Memoria Adata DDR5 16GB 5200Mhz XPG Lancer RGB','Description...',21000,0,100,'img-1657047014495512901115.jpeg','img-1657047014496650577341.jpeg','img-1657047014497292739324.jpeg',3,7),(12,'Memoria Kingston DDR5 16GB 4800Mhz Fury Beast Black','Description...',19000,0,100,'img-1657047263864406602010.jpeg','img-1657047263866555745733.jpeg','img-1657047263866525101826.jpeg',3,8),(13,'Placa de Video Zotac GeForce RTX 3090 24GB GDDR6X Trinity OC','Description...',525000,0,100,'img-1657047423863988983586.jpg','img-1657047423863523458076.jpg','img-1657047423863398163452.jpg',4,9),(14,'Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X ROG STRIX GAMING White','Description...',375000,0,100,'img-1657047485573718833053.jpg','img-1657047485574137289248.jpg','img-1657047485575800119322.jpg',4,3),(15,'Placa de Video Sapphire Radeon RX 6800 XT 16GB GDDR6 PULSE','Description...',205000,0,100,'img-1657047556937748293223.jpg','img-1657047556938920745124.jpg','img-1657047556939836639346.jpg',4,10),(16,'Placa de Video Asrock Radeon RX 6800 XT 16GB GDDR6 Phantom Gaming D OC','Description...',162000,0,100,'img-1657047617884639341024.jpg','img-1657047617885502738755.jpg','img-1657047617885765665281.jpg',4,11),(17,'Mouse ASUS ROG Strix Gladius III RGB Bluetooth Wireless 26.000DPI','Description...',21000,0,100,'img-165704773023868517549.jpg','img-1657047730239339391083.jpg','img-1657047730239413905165.jpg',5,3),(18,'Teclado Mecanico HP HyperX Alloy Origins 65 Switch Red','Description...',13000,0,100,'img-1657047871526937058179.jpg','img-165704787152856565920.jpg','img-1657047871528352579324.jpg',5,12),(19,'Bundle HP HyperX Streamer','Description...',22000,0,100,'img-1657047927220231254617.jpg','img-1657047927220766007630.jpg','img-1657047927221881082549.jpg',5,12),(20,'Combo Teclado y Mouse ASUS TUF Gaming Battle Box Aura Sync RGB','Description...',9000,0,100,'img-1657047979490121632106.jpg','img-1657047979491903475289.jpg','img-1657047979491320452889.jpg',5,3),(21,'Fuente ASUS ROG THOR 1200P 80 Plus Platinum 1200W Full modular','Description...',70000,0,100,'img-16570480918858106552.jpg','img-1657048091885672738942.jpg','img-1657048091885846204455.jpg',6,3),(22,'Fuente Gigabyte 850W 80 Plus Gold Full Modular P850GM','Description...',23000,0,100,'img-165704823499944541238.jpg','img-1657048235000887438341.jpg','img-1657048235000375792090.jpg',6,1),(23,'Fuente Aerocool Dorado 850W 80+ Gold ARGB','Description...',18000,0,100,'img-1657048356892866128769.jpg','img-1657048356893367788701.jpg','img-1657048356894720470576.jpg',6,13),(24,'Fuente Gamemax 800w 80+ Bronze GM-800 Semi Modular','Description...',12000,0,100,'img-1657048407141781406690.jpg','img-165704840714193511837.jpg','img-1657048407142688628606.jpg',6,14),(25,'Gabinete Lian Li Odyssey X Black','Description...',75000,0,100,'img-1657048501263918150779.jpg','img-1657048501263518120212.jpg','img-1657048501264833607761.jpg',7,15),(26,'Gabinete ASUS TUF GT501 Vidrio Templado White 3x120mm ARGB','Description...',32000,0,100,'img-1657048554035883410088.jpg','img-1657048554036754304744.jpg','img-1657048554036734888270.jpg',7,3),(27,'Gabinete Lian Li O11 Dynamic Razer Edition','Description...',30000,0,100,'img-1657048611293523810579.jpg','img-1657048611294370014981.jpg','img-1657048611294400008767.jpg',7,15),(28,'Gabinete Kolink Levante Black 4x120mm RGB Mesh Frontal Doble Vidrio Templado','Description...',13000,0,100,'img-1657048685392462499521.jpg','img-1657048685392561746393.jpg','img-1657048685393761460809.jpg',7,16),(29,'Monitor Gamer Viewsonic 32\" XG320U 150Hz 1ms 4K IPS','Description...',320000,0,100,'img-1657048771303373837714.jpg','img-1657048771304572961804.jpg','img-1657048771304272293274.jpg',8,17),(30,'Monitor Gamer Asus 34\" QHD VP349CGL Ultrawide IPS 1Ms 100Hz','Description...',175000,0,100,'img-1657048821314157364760.jpg','img-16570488213157256048.jpg','img-1657048821315203902139.jpg',8,3),(31,'Monitor Gamer AORUS FI25F 24.5\" 240Hz 0.4ms RGB IPS','Description...',155000,0,100,'img-1657048880717542807438.jpg','img-1657048880718592618469.jpg','img-1657048880718871584864.jpg',8,18),(32,'Monitor Gamer Samsung QHD 27\" G5 Odyssey Curvo 165Hz','Description...',88000,0,100,'img-1657048941812445411302.jpg','img-1657048941813208067106.jpg','img-1657048941813968469940.jpg',8,19);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'administrador'),(2,'usuario');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `role_id` int DEFAULT '2',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `role_id_idx` (`role_id`),
  CONSTRAINT `role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Peter','Parker','spiderman@gmail.com','1234567890','$2a$10$eAVH0RUxRImYzZPQwWyEhevDe0U6DDsljys02b2/zShQRgV9L6.Ja','img-1658754419171153387696.jpg',1),(2,'Tony','Stark','ironman@gmail.com','1234567890','$2a$10$Cwx27MQLT0Qzgoo847F24u.X/jynTDTz2QLBDESioV/rn/1P0.Vjm','img-1658754523262267921133.jpg',1),(3,'Steven','Rogers','capitanamerica@gmail.com','1234567890','$2a$10$NUVs82SxvJXYhAONDVCZcewcwGkMGAxHCiBiibyRTYw98vxAj5R/O','img-1658754651349596747400.jpg',1),(4,'Stephen','Strange','doctorstrange@gmail.com','1234567890','$2a$10$2qQG2/x0TqMzZHgpA4J3N.2V1ySHs2c9zn2addQT3U/02Lx7bfljS','img-1658755392482434154374.jpg',1),(5,'Gearard','Ashbolt','gashbolt0@google.fr','464-416-9775','3MZOGfe2vpzF','http://dummyimage.com/163x100.png/cc0000/ffffff',2),(6,'Mirilla','Zanettini','mzanettini8@zimbio.com','417-881-5387','fO4xvp','http://dummyimage.com/185x100.png/ff4444/ffffff',2),(7,'Pooh','Gorbell','pgorbell1@cloudflare.com','567-544-8670','YcrLlR8KDzY','http://dummyimage.com/153x100.png/cc0000/ffffff',2),(8,'Delbert','Farmar','dfarmar2@mail.ru','902-384-8186','5WuJIHxIMku','http://dummyimage.com/186x100.png/ff4444/ffffff',2),(9,'Adey','Bassil','abassil3@google.co.jp','799-922-1174','CthPsu','http://dummyimage.com/108x100.png/ff4444/ffffff',2),(10,'Carree','Ridde','cridde4@g.co','762-557-3495','SlEryMdHK9','http://dummyimage.com/217x100.png/5fa2dd/ffffff',2),(11,'Rosalinda','Kettoe','rkettoe5@soup.io','240-293-1798','D1cXgS8T','http://dummyimage.com/215x100.png/cc0000/ffffff',2),(12,'Sibella','Goldine','sgoldine6@mtv.com','865-324-7947','tabmrzeOpy','http://dummyimage.com/200x100.png/cc0000/ffffff',2),(13,'Jerrylee','Marlowe','jmarlowe7@stumbleupon.com','871-410-7509','CWWGX3TrK0D','http://dummyimage.com/142x100.png/cc0000/ffffff',2),(14,'Erskine','Spollen','espollen9@google.nl','266-353-6269','WT3Uq6p7nE','http://dummyimage.com/223x100.png/cc0000/ffffff',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-18 15:51:18
