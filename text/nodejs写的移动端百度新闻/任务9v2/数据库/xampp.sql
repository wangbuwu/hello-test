-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-11-21 14:34:23
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xampp`
--

-- --------------------------------------------------------

--
-- 表的结构 `login`
--

CREATE TABLE `login` (
  `id` int(4) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  `lasttime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `lasttime`) VALUES
(1, 'admin', '123', '2016-10-07 04:33:04');

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsid` int(11) NOT NULL COMMENT '自动增长',
  `newstype` char(100) NOT NULL,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `newstime` varchar(10) NOT NULL,
  `newssrc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻表';

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstype`, `newstitle`, `newsimg`, `newscontent`, `newstime`, `newssrc`) VALUES
(1, '推荐', '微信盛世隐忧：小程序的政治不正确', 'http://t11.baidu.com/it/u=827624593,2475386489&fm=170&s=6ECA2D8E560B36F8569CA58303009091&w=500&h=300&img.JPEG&access=215967317', '新闻内容', '2016-09-25', '热点'),
(2, '推荐', '阿尔法公社许四清：投了一大半2B项目，是因为中国2B市场“欠债太多”', 'http://t12.baidu.com/it/u=3462615980,2110872585&fm=170&s=F590779E11A8D0EE0CD708DC0300F0B7&w=218&h=146&img.JPEG', '新闻内容', '2016-09-25', '热点'),
(3, '推荐', '谷歌10月4日将发布一款神秘的Wifi硬件', 'http://t12.baidu.com/it/u=3524028749,2891947578&fm=170&s=1CD8AB552CA8F21398049D670300A070&w=218&h=146&img.PNG', '新闻内容', '2016-09-25', '热点'),
(4, '百家', '英超-半场4球!博格巴获处子球 曼联4-1莱斯特城', 'http://t10.baidu.com/it/u=3941396688,1315438816&fm=170&s=9CB7D0B6DA922CD00CBF82B00300600D&w=218&h=146&img.JPEG', '新闻内容', '2016-09-25', '热点'),
(51, '本地', '使用信用卡须知：信用卡收费哪家银行最坑?今天才知道', 'http://t10.baidu.com/it/u=3684551610,922936640&fm=170&s=67609F47D876E1965B91187803&w=218&h=146&img.JPEG', '内容', '2016-10-31', '热点'),
(52, '本地', '老梁，你凭什么不允许别人喜欢杨幂呢？', 'http://t12.baidu.com/it/u=1848440666,1050970438&fm=170&s=A4C8B1440CEA24150748958A03&w=218&h=146&img.PNG', '内容', '2016-10-31', '热点'),
(59, '百家', '从乌镇的窗户透视互联网世界的“变”与“常”', 'http://h.hiphotos.baidu.com/news/q%3D100/sign=374f3920e024b899d83c7d385e061d59/eaf81a4c510fd9f9c85d46492c2dd42a2834a443.jpg', '新闻内容', '2016-11-20', '百度'),
(62, '百家', '习近平会见美国总统奥巴马', 'http://g.hiphotos.baidu.com/news/q%3D100/sign=277eb811283fb80e0ad165d706d02ffb/bd3eb13533fa828b808929c3f41f4134970a5a63.jpg', '新闻', '2016-11-20', '百度'),
(63, '本地', '习近平会见美国总统奥巴马', 'http://g.hiphotos.baidu.com/news/q%3D100/sign=277eb811283fb80e0ad165d706d02ffb/bd3eb13533fa828b808929c3f41f4134970a5a63.jpg', '新闻', '2016-11-20', '百度'),
(64, '本地', '习近平会见美国总统奥巴马', 'http://g.hiphotos.baidu.com/news/q%3D100/sign=277eb811283fb80e0ad165d706d02ffb/bd3eb13533fa828b808929c3f41f4134970a5a63.jpg', '新闻', '2016-11-20', '百度'),
(66, '本地', '缓刹车、转大弯 谷歌想要自动驾驶像人一样开车', 'http://t10.baidu.com/it/u=2223425766,3666183624&fm=170&s=5E105F811E9B13C646D1701703&w=218&h=147&img.PNG', '新闻', '2016-11-20', '百度'),
(67, '推荐', '缓刹车、转大弯 谷歌想要自动驾驶像人一样开车', 'http://t10.baidu.com/it/u=2223425766,3666183624&fm=170&s=5E105F811E9B13C646D1701703&w=218&h=147&img.PNG', '新闻', '2016-11-20', '百度'),
(68, '百家', '缓刹车、转大弯 谷歌想要自动驾驶像人一样开车', 'http://t10.baidu.com/it/u=2223425766,3666183624&fm=170&s=5E105F811E9B13C646D1701703&w=218&h=147&img.PNG', '新闻', '2016-11-20', '百度'),
(69, '本地', '篮球宝贝倒立开腿 上围傲人呼之欲出', 'http://t10.baidu.com/it/u=968581026,2343926508&fm=170&s=A8F079846862249CA42C789A03&w=218&h=146&img.JPEG', '新闻', '2016-11-19', '热点'),
(70, '推荐', '华为的极化码被5G采纳 离拿下5G时代还有多远？', 'http://t10.baidu.com/it/u=1517302212,1246220246&fm=170&s=BA774192464204F78BFF7F8303&w=218&h=146&img.JPEG', '新闻', '2016-11-20', '百度'),
(72, '推荐', '谷歌工程师：杀毒软件根本没什么用 ', 'http://t12.baidu.com/it/u=1981017938,2555852491&fm=170&s=2D54C34EF298A99E8E25F9D903&w=218&h=146&img.JPEG', '新闻', '2016-11-20', '百度');

-- --------------------------------------------------------

--
-- 表的结构 `news2`
--

CREATE TABLE `news2` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `img` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='百家新闻表';

--
-- 转存表中的数据 `news2`
--

INSERT INTO `news2` (`id`, `title`, `img`, `content`, `time`) VALUES
(1, '印度：一个经济一塌糊涂，设备都没齐全的国家，人口即将超越我国', 'http://t12.baidu.com/it/u=3885098735,2961282509&fm=170&s=F3B21BC00AE1388CE28C3CA50300A0C2&w=218&h=146&img.JPEG', '新闻内容', '2016-10-06'),
(2, '这个省排名没进前三：却是全民最富有的！', 'http://t12.baidu.com/it/u=186107681,3223138423&fm=170&s=A0734F36599264415AD9514A03006071&w=218&h=146&img.JPEG', '新闻内容', '2016-10-06'),
(3, '法拉利F12秀漂移，哪个角度，怎么都觉得酷毙！', 'http://t12.baidu.com/it/u=1474495592,4165736357&fm=170&s=DAC0CB0349FB2A0548D063A403007006&w=218&h=146&img.JPEG', '新闻内容', '2016-10-06'),
(4, '依然CP3！半场12次助攻 保罗回击质疑', 'http://t11.baidu.com/it/u=3573438877,2340907083&fm=170&s=EE160DC710DBA5D04E6C9D280300E013&w=218&h=146&img.JPEG', '新闻内容', '2016-10-06'),
(5, '魔兽生涯5大3分时刻，飘在3分线外的火花，豪言要把对手打花！', 'http://t12.baidu.com/it/u=529456349,1832051014&fm=170&s=C6C708E6033397D0545D99AD03003001&w=218&h=146&img.JPEG', '新闻内容', '2016-10-06'),
(6, '乔丹是史上最强滞空王？防守球员都下落了，他还在空中向上飞翔！', 'http://t10.baidu.com/it/u=286282101,3050269098&fm=170&s=2D61E90645470555386065980300E093&w=218&h=146&img.JPEG', '新闻内容', '2016-10-06');

-- --------------------------------------------------------

--
-- 表的结构 `news3`
--

CREATE TABLE `news3` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `img` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻表本地';

--
-- 转存表中的数据 `news3`
--

INSERT INTO `news3` (`id`, `title`, `img`, `content`, `time`) VALUES
(1, '十一黄金周尾声 北京迎来返程高峰(图)', 'http://t10.baidu.com/it/u=4128860037,3286350461&fm=170&s=F6F735C44AB0B0C80CC4FD080100E092&w=218&h=146&img.JPEG', '新闻内容', '2016-10-06'),
(2, '珠海重启限购：本地限购3套 外地限购1套', 'http://t12.baidu.com/it/u=632192159,1933259273&fm=170&s=81B4559402560BCA1693E1050300F0FB&w=218&h=146&img.JPEG', '新闻内容', '2016-10-06'),
(3, '北京将疏解部分教育功能 压缩市属高校京外招生人数', 'http://t11.baidu.com/it/u=3208909501,376992452&fm=170&s=88224F9068AA188C76106973030040F0&w=218&h=146&img.JPG', '新闻内容', '2016-10-06'),
(4, '国庆假期返程途中有雨 上班首日降温', 'http://t11.baidu.com/it/u=1293521875,961464277&fm=170&s=DB186787485012D00522822E0300705B&w=218&h=146&img.JPEG', '新闻内容', '2016-10-06'),
(5, '还不快收藏，想在北京找美食就靠这个攻略了！', 'http://t10.baidu.com/it/u=2541961371,4103895210&fm=170&s=3FA06487141239D24C189CAF03007000&w=218&h=146&img.JPEG', '新闻内容', '2016-10-06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsid`),
  ADD KEY `index` (`newstitle`);

--
-- Indexes for table `news2`
--
ALTER TABLE `news2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news3`
--
ALTER TABLE `news3`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `login`
--
ALTER TABLE `login`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=84;
--
-- 使用表AUTO_INCREMENT `news2`
--
ALTER TABLE `news2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- 使用表AUTO_INCREMENT `news3`
--
ALTER TABLE `news3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
