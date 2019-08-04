/*
Navicat MySQL Data Transfer

Source Server         : localDB
Source Server Version : 50722
Source Host           : localhost:3306
Source Database       : ppxcamp

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2019-08-04 17:16:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` varchar(64) NOT NULL,
  `cate_id` varchar(64) DEFAULT NULL,
  `author_id` varchar(64) DEFAULT NULL,
  `content` text,
  `title` char(255) DEFAULT NULL,
  `img_url` varchar(512) DEFAULT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of article
-- ----------------------------

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `author_id` varchar(64) DEFAULT NULL,
  `title` char(255) DEFAULT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `game_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of category
-- ----------------------------

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` varchar(64) NOT NULL,
  `reply_id` varchar(64) DEFAULT NULL,
  `article_id` varchar(64) NOT NULL,
  `content` text,
  `author_id` varchar(64) DEFAULT NULL,
  `author_name` varchar(64) DEFAULT NULL,
  `time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of comment
-- ----------------------------

-- ----------------------------
-- Table structure for game
-- ----------------------------
DROP TABLE IF EXISTS `game`;
CREATE TABLE `game` (
  `game_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(64) NOT NULL,
  `img_url` varchar(512) NOT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `author_id` varchar(64) DEFAULT NULL,
  `author_name` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`game_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of game
-- ----------------------------

-- ----------------------------
-- Table structure for privilege
-- ----------------------------
DROP TABLE IF EXISTS `privilege`;
CREATE TABLE `privilege` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of privilege
-- ----------------------------

-- ----------------------------
-- Table structure for sessions
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `session_id` tinytext NOT NULL,
  `TTL` tinytext,
  `login_name` varchar(64) DEFAULT NULL,
  `login_id` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`session_id`(64))
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sessions
-- ----------------------------

-- ----------------------------
-- Table structure for userprivilege
-- ----------------------------
DROP TABLE IF EXISTS `userprivilege`;
CREATE TABLE `userprivilege` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `privilege_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of userprivilege
-- ----------------------------
INSERT INTO `userprivilege` VALUES ('1', '11', '12');
INSERT INTO `userprivilege` VALUES ('2', '11', '2');
INSERT INTO `userprivilege` VALUES ('3', '11', '3');
INSERT INTO `userprivilege` VALUES ('4', '12', '4');
INSERT INTO `userprivilege` VALUES ('5', '12', '2');
INSERT INTO `userprivilege` VALUES ('6', '12', '35');
INSERT INTO `userprivilege` VALUES ('7', '12', '6');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(64) DEFAULT NULL,
  `password` text NOT NULL,
  `nickname` varchar(64) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'test', '123456', '测试');
INSERT INTO `users` VALUES ('8', 'test2', '123456', '测试2');
INSERT INTO `users` VALUES ('9', 'test3', '123456', '测试3');
INSERT INTO `users` VALUES ('10', 'test4', '123456', '测试4');
INSERT INTO `users` VALUES ('11', 'test5', '123456', '测试5');
INSERT INTO `users` VALUES ('12', 'test6', '123456', '测试6');
