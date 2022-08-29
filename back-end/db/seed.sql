\c dev_trucks; 

INSERT INTO trucks (name, address, zip, borough, category, image_url, about) VALUES
('Birria-landia', '77-99 Roosevelt Ave', 11372, 'Queens', 'Latin', 'https://tinyurl.com/4c5x8cht', 'Birria-Landia is a taco food truck that began in the Jackson Heights neighborhood of Queens, New York in the summer of 2019 and quickly became a favorite of locals and critics alike, earning a high rating from The New York Times.'),
('The Halal Guys', '6th Avenue & W 53rd Street', 10019, 'Manhattan', 'Middle Eastern', 'http://feedthelion.co.uk/wp-content/uploads/the-halal-guys-london.jpg', 'The Halal Guys are bringing American Halal Food to the masses. Featuring a flavor profile that cant be replicated in any other cuisine format, flawlessly cooked, premium quality Halal meats that are seasoned to perfection and a melting pot of Middle Eastern and Mediterranean flavors that are sure to delight like our world famous White Sauce. Come see why we are different.'),
('Cesars Empanadas', '16-32 Hanson Place',11217, 'Brooklyn', 'Latin', 'https://thumbs.dreamstime.com/z/brooklyn-new-york-may-food-truck-downtown-brooklyn-food-truck-downtown-brooklyn-184661145.jpg', 'The best empanadas in Brooklyn! We specialize in Latin fare, with a good-sized array of menu choices. The first choice and most recommended are of course, the empanadas. The empanadas are made fresh to order.
Come get yours' ),
('Kingston Food Truck', '570 Zerega Avenue', 10473, 'The Bronx', 'Caribbean', 'https://10619-2.s.cdn12.com/rests/original/101_505280359.jpg', 'Chef Paul Smooth of @kingstonfoodtruck grew up cooking traditional Jamaican food in his fathers restaurant in Kingston. He opened his food truck in 2018, and serves delicious food like Jerk Chicken, Oxtail, and his signature “Rasta Pasta” to a loyal following in the Bronx. ' ),
('Greek Festival', 'Hylan Blvd Ebbitts Road 2700', 10306, 'Staten Island', 'Greek', 'https://s3-media0.fl.yelpcdn.com/bphoto/bnhpvJptrbeCXnZQRNVSEQ/o.jpg', 'Explore our extensive menu featuring greek food. We offer many items such as salads. Locate our choice of fine entrees at Greek Festival Food Truck. Many consider us the best place to eat in Staten Island. Give us a call at (347) 422-1993 you wont regre it'),
('Frankys Souvlaki', '31 Steinway St #2', 11103, 'Queens', 'Greek','https://tinyurl.com/4wrdt2c6', 'Youd be hard-pressed to find any street food fanatic whos not crazy about food on a stick. After all, these kinds of cuisines are the perfect combination of delicious and portable. So, whats not to love about grabbing them straight out of a food truck when youre on the go? Frankys Souvlaki serves delicious souvlaki and more.'),
('Moms Momo', '72-30 Broadway', 11372, 'Queens', 'Asian', 'https://pbs.twimg.com/media/ECT_H3KXsAAP_ol?format=jpg&name=large', 'Moms Momo features Tibetan momos, tasty dumplings that are filled with pork, chicken, beef or vegetables and steamed or pan-fried.');

INSERT INTO reviews (trucks_id, reviewer, title, content, rating )
VALUES
('1', 'Dana', 'Wow', 'My friend told me about this taco spot months ago and Ive been dying to make the trek to go and finally went. I mean what can I say it was truly worth the trip. Absolutely delicious!!! Take my word for it....just go and get some!!', 5),
('1', 'Andy','Delicious', 'Best Birria Ive ever had.  Service is quick, this location is extremely popular but the line moves quickly. Food is always consistently good. I recommend you try all the items on the menu. The consomé is a must, definitely get the large.
', 5),
('1', 'Aurel', 'Familiar Flavors', 'Tried it on a whim. Absolutely divine tacos. Consome is amazing as well. Reminds me of Hungarian Goulash soup.
', 4),
('2', 'Jeffrey', 'NYC Trip W/ The Fam', 'Generous portions, great food, good price. Its incredible how they get the meat so tender. Really takeout friendly. Ignore the other carts and trucks and make a b line straight for any halal guys cart you see.
', 5),
('2', 'Mika', 'Line Goes Fast', 'The line was so long but moved up pretty fast. I got a combo platter and its so good! The white sauce is like mayo, adding the right touch to the platter.', 5),
('2', 'Miguel', 'Not What It Used To be', 'Its getting worse and worse, by the day. Its probably normal when you scale up. You lose the quality against the quantity. And look at that chicken supply traveling through all  the best conditions possible. Over all the food is ok thanks to the legendary white sauce.', 1),
('2', 'Mark', 'Yummy', 'Went here after coming out of a radio city event and boy was I glad I did. Definitely lives up to the hype!', 5);

-- use advanced image search to choose images that are square (aspect ratio)
-- https://www.google.com/advanced_image_search