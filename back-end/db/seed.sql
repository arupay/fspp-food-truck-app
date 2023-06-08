\c dev_trucks; 

INSERT INTO users (email, username) VALUES
('abc123@gmail.com', 'Deacon'),
('doug@gmail.com', 'Doug'),
('carrie@gmail.com', 'Carrie'),
('arthur@example.com', 'Arthur'),
('spence@example.com', 'Spence');

INSERT INTO trucks (added_by, name, address, zip, borough, category, image_url, about, lat, lng) VALUES
(1,'Birria-landia', '77-99 Roosevelt Ave', 11372, 'Queens', 'Latin', 'https://github.com/arupay/fspp-food-truck-app/assets/96318127/5e1912d5-497d-4e5f-9c80-a0517b5f70f6', 'Birria-Landia is a taco food truck that began in the Jackson Heights neighborhood of Queens, New York in the summer of 2019 and quickly became a favorite of locals and critics alike, earning a high rating from The New York Times.', 40.746942, -73.890501),
(1,'The Halal Guys', '6th Avenue & W 53rd Street', 10019, 'Manhattan', 'Middle Eastern', 'http://feedthelion.co.uk/wp-content/uploads/the-halal-guys-london.jpg', 'The Halal Guys are bringing American Halal Food to the masses. Featuring a flavor profile that cant be replicated in any other cuisine format, flawlessly cooked, premium quality Halal meats that are seasoned to perfection and a melting pot of Middle Eastern and Mediterranean flavors that are sure to delight like our world famous White Sauce. Come see why we are different.', 40.7617719, -73.9790609),
(1,'Cesars Empanadas', '16-32 Hanson Place',11217, 'Brooklyn', 'Latin', 'https://github.com/arupay/fspp-food-truck-app/assets/96318127/89a427d5-59e5-401a-905c-13d78bb5009f', 'The best empanadas in Brooklyn! We specialize in Latin fare, with a good-sized array of menu choices. The first choice and most recommended are of course, the empanadas. The empanadas are made fresh to order. Come get yours', 40.685208, -73.976959 ),
(1,'Kingston Food Truck', '570 Zerega Avenue', 10473, 'The Bronx', 'Caribbean', 'https://10619-2.s.cdn12.com/rests/original/101_505280359.jpg', 'Chef Paul Smooth of @kingstonfoodtruck grew up cooking traditional Jamaican food in his fathers restaurant in Kingston. He opened his food truck in 2018, and serves delicious food like Jerk Chicken, Oxtail, and his signature “Rasta Pasta” to a loyal following in the Bronx. ', 40.8201904, -73.8420979),
(1,'Greek Festival', 'Hylan Blvd Ebbitts Road 2700', 10306, 'Staten Island', 'Greek', 'https://s3-media0.fl.yelpcdn.com/bphoto/bnhpvJptrbeCXnZQRNVSEQ/o.jpg', 'Explore our extensive menu featuring greek food. We offer many items such as salads. Locate our choice of fine entrees at Greek Festival Food Truck. Many consider us the best place to eat in Staten Island. Give us a call at (347) 422-1993 you wont regre it', 40.566181, -74.113991),
(1,'Frankys Souvlaki', '31 Steinway St #2', 11103, 'Queens', 'Greek','https://github.com/arupay/fspp-food-truck-app/assets/96318127/2ceeb013-617a-4a6c-945a-e5a89cceebfa', 'Youd be hard-pressed to find any street food fanatic whos not crazy about food on a stick. After all, these kinds of cuisines are the perfect combination of delicious and portable. So, whats not to love about grabbing them straight out of a food truck when youre on the go? Frankys Souvlaki serves delicious souvlaki and more.', 40.7599191, -73.9178906),
(1,'Moms Momo', '72-30 Broadway', 11372, 'Queens', 'Asian', 'https://pbs.twimg.com/media/ECT_H3KXsAAP_ol?format=jpg&name=large', 'Moms Momo features Tibetan momos, tasty dumplings that are filled with pork, chicken, beef or vegetables and steamed or pan-fried.', 40.747030, -73.892780),
(1,'Uncle Gussy`s', '345 Park Ave', 10154, 'Manhattan', 'Greek', 'https://pbs.twimg.com/media/FaxzY7TWAAImGTY?format=jpg&name=large', 'We believe that great food starts with family and our family knows great Greek food! The First Greek food truck in the world started with my family. My family has been vending food on the streets of New York City since 1971 when our uncle started serving hotdogs and pretzels on 51st and Park Avenue. Today, my brother Franky and I bring the best Greek food to the city that never sleeps!', 40.757720, -73.972350),
(1,'Diso''s Italian Sandwich Society', '245 Park Ave', 10029, 'Manhattan', 'Italian', 'https://www.greatperformances.com/wp-content/uploads/2021/10/Disos3.png', 'Diso''s Italian Sandwich Society is a NYC food truck that offers up the highest quality and authenticity of Italian sandwiches on the streets on New York City. Being able to display what Diso''s serves and who we are as a company on such a platform like the Food Network is a dream come true to any person who''s career is working with food and feeding people.', 40.792880, -73.947780),
(1,'Tacos El Bronco', '4324 4th Ave.', 11220, 'Brooklyn', 'Latin', 'https://fastly.4sqi.net/img/general/699x268/206755_L6rwRX0eIh8UA40HmWlN2zNY7Noyd4c5tBwqwZ6s17A.jpg', 'At Tacos El Bronquito you''ll find a wide selection of authentic Mexican food we are sure you will love. We are proud to say, that at Tacos El Bronquito you can find authentic hand-made traditional tortillas.', 40.6500796, -74.0092406 ),
(1,'Anton''s Dumplings', '151 W 3rd St', 10009, 'Manhattan', 'Russian', 'https://static01.nyt.com/images/2016/05/04/fashion/04HUNGRY-slide-BWKO/04HUNGRY-slide-BWKO-superJumbo.jpg?quality=75&auto=webp&disable=upscale', 'Serving the best Russian dumplings in America. Pelmeni and Perogi (meat and potato dumplings) served in 5 delicious ways: the Classic, Beets & Horseradish, Teriyaki, Chimichurri, and the late-night drunchie favorite, the Smoke Gouda Fondue.', 40.730994, -74.001319);

INSERT INTO reviews (trucks_id, reviewer, content, rating ) VALUES
('1', 2, 'My friend told me about this taco spot months ago and Ive been dying to make the trek to go and finally went. I mean what can I say it was truly worth the trip. Absolutely delicious!!! Take my word for it....just go and get some!!', 5),
('1', 3, 'Best Birria Ive ever had.  Service is quick, this location is extremely popular but the line moves quickly. Food is always consistently good. I recommend you try all the items on the menu. The consomé is a must, definitely get the large.
', 5),
('1',4, 'Tried it on a whim. Absolutely divine tacos. Consome is amazing as well. Reminds me of Hungarian Goulash soup.
', 4),
('2', 2, 'Generous portions, great food, good price. Its incredible how they get the meat so tender. Really takeout friendly. Ignore the other carts and trucks and make a b line straight for any halal guys cart you see.
', 5),
('2', 4, 'The line was so long but moved up pretty fast. I got a combo platter and its so good! The white sauce is like mayo, adding the right touch to the platter.', 5),
('2', 3, 'Its getting worse and worse, by the day. Its probably normal when you scale up. You lose the quality against the quantity. And look at that chicken supply traveling through all  the best conditions possible. Over all the food is ok thanks to the legendary white sauce.', 1),
('2', 5,'Went here after coming out of a radio city event and boy was I glad I did. Definitely lives up to the hype!', 5),
('3', 1,'wow. super juicy and perfectly seasoned meats. this place is the absolute perfect snack to fill up and or save a minute if youre waiting at the dmv around the corner. ', 5),
('4', 3,'The best jerk chicken is great, their rice peas, sweet chili shrimp and salmon is great to! Prices are a little steep but you get so much food! Always have leftovers after!', 5),
('5', 5,'Got sick after eating it.', 2),
('6', 4,'$14.70 for just falafel rice, no tsziki, only hot sauce... falafels were good. 2 stars bcos its too expensive.', 2),
('9', 3, 'When I first laid my eyes on this sandwich, I mean it was aesthetically pleasing but when I took my first bite, wow!!! Totally a mouthful and well damn thats how I like my food! Jimmy two times is my favorite. My only complaint which doesnt even deserve a star removal, is that the prosciutto is not aged enough and is way too chewy when they load it up.', 5),
('9', 4, '
Not a good experience.  If you have a clear schedule and a lot of time, it could be worth the try.  If you are busy and looking for a quick lunch, I would not recommend. ', 2),
('9', 2, 'Ive had this place twice now, first time I got the big Pauly and second time I got the Joey shakes. Both were very large sandwiches and both were delicious. Big pauly is a chicken parm hero thats better than most pizzerias in the city. If you see the truck make it a point to stop by.', 5),
('10', 2, 'I''ve been a regular customer here . Its delicious. Their fish taco, Mexican sausage taco and carne enchilada (spicy pork) are my favorite. Usually three tacos fills me up. They are actually really big and wrapped in two soft tortillas . It'' very savory and satisfying', 5),
('11', 2,'We asked Anton''s dumplings to do an event at Big Deal Casino and they were out of this world! In spite of having a work emergency, they showed up and feed our guests delicious dumplings. Thanks guys!', 5 ),
('11', 3, 'These are the PERFECT delivery food. The dumplings are well-cooked, not doughy, and I love the original flavors. The large comes with about 30 bite sized dumplings! Love it!', 4);


INSERT INTO favorite_trucks (user_id, truck_id)
VALUES
(1, 1),
(1, 3),
(1, 5),
(1, 7);