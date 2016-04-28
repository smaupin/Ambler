angular.module('ambler')
.factory('dataService', dataService);

dataService.$inject = [];

function dataService() {
	var factory = {};
	factory.locations = [
										{ id: 01, name: "500 Capp Street", address: "500 Capp St, San Francisco, CA 94110",
											lat: 37.7585649, lng: -122.41818139999998, category: "art", description: "Design showcase in the former home of David Kenneth Ireland",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.810.810/12825837_842753145853729_1894560635_n.jpg?ig_cache_key=MTIwMjM3NDA3NzY4NzQzOTY4Ng%3D%3D.2.c",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12357487_1684292028483785_466997309_n.jpg?ig_cache_key=MTE2MTcyMjA3MzIyMzY5MDU0MQ%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/e15/11426504_782143715216443_253769873_n.jpg?ig_cache_key=MTAwMjk4NDY4MTAyNjI1NTYxMQ%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/e15/10296671_1579305115667832_1710726209_n.jpg?ig_cache_key=OTY0NTcyNjc4NjIwNjA4ODU2.2",
											beauty: 8, art: 10, architecture: 10, vista: 0, nature: 0, open_space: 0, daytime: 10, night: 5, explore: 9, tour: "g"
										},

										{ id: 02, name: "Alamo Square", address: "Steiner St, San Francisco, CA 94117",
											lat: 37.7737676, lng: -122.43246390000002, category: "architecture", description: "Home of the world famous Painted Ladies",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/12338437_1706995792873260_148444126_n.jpg?ig_cache_key=MTIwODQwNTU5MzczNjA1MDk1MA%3D%3D.2.c",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/12918010_253344665016400_155457420_n.jpg?ig_cache_key=MTIzNTA3NzgyNjg4MDk4MDUyNQ%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12935139_1719743564956834_1912400425_n.jpg?ig_cache_key=MTIzNjQxMzE5ODI3MjI1Mjk5Nw%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12965003_1724388681172948_1197823345_n.jpg?ig_cache_key=MTIzNTg2NTAxNjY3NTcwNTc4OQ%3D%3D.2",
											beauty: 7, art: 1, architecture: 8, vista: 9, nature: 6,	open_space: 6, daytime: 10, night: 8, explore: 3, tour: "d"
										},

										{ id: 03, name: "Alemany Farm", address: "700 Alemany Blvd, San Francisco, CA 94110",
											lat: 37.7338589, lng: -122.4126326, category: "vista", description: "Celebrate diversity and find green relief downtown",
											picURL: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12346083_184686028545052_1969116424_n.jpg?ig_cache_key=MTEzODYyMDcxNjgzOTg0MDE1Ng%3D%3D.2",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/e15/916015_700496533348973_302923502_n.jpg?ig_cache_key=NzAyOTE1ODY3OTk0MjU2MzQ1.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12346083_184686028545052_1969116424_n.jpg?ig_cache_key=MTEzODYyMDcxNjgzOTg0MDE1Ng%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12724933_538563049685460_267531774_n.jpg?ig_cache_key=MTIzNTAzMDg2Mjk0Nzc5ODc1OQ%3D%3D.2",
											beauty: 6, art: 4, architecture: 3, vista: 7, nature: 10, open_space: 10, daytime: 10, night: 0, explore: 6, tour: "f"
										},

										{ id: 04, name: "Balmy Alley", address: "50 Balmy St., San Francisco, CA",
											lat: 37.75181, lng: -122.41243359999999, category: "nature", description: "Muralistas fashioned this alley with the struggles of San Francisco",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/12751201_1052975434745536_1247614223_n.jpg?ig_cache_key=MTIwODE0NTAwMzU4MDk3NzM1Mw%3D%3D.2",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12912403_103800440027058_1199635948_n.jpg?ig_cache_key=MTIzMjc4OTE5ODgyMTY3NzEwNg%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12959967_1058789237528157_1668303238_n.jpg?ig_cache_key=MTIzNTIwMjkzNDc3MTI5NjExNQ%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12965235_1264270976934228_1756184306_n.jpg?ig_cache_key=MTIzNTEzNzcwMjQzMzc2NjAxOQ%3D%3D.2",
											beauty: 8, art: 10, architecture: 4, vista: 3, nature: 1, open_space: 1, daytime: 10, night: 1, explore: 5, tour: "g"
										},

										{ id: 05, name: "Bernal Heights Park", address: "10 Bernal Heights Blvd, San Francisco, CA 94110",
											lat: 37.743118, lng: -122.4151976, category: "art", description: "360 degree views of San Francisco on this green hill",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12826218_1689015558053290_1136123522_n.jpg?ig_cache_key=MTIwOTExNjkyNDg1OTU3NDI5Nw%3D%3D.2",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12965791_491993784334037_1278175043_n.jpg?ig_cache_key=MTIzNTgwNzgyODgzMDgxMDYwMQ%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12912569_1007385015965778_618985943_n.jpg?ig_cache_key=MTIzMzQ1MjM4MDY1MTEwNTI0Mg%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12317764_461880420678117_2107146602_n.jpg?ig_cache_key=MTIyNTUyNjMwMzAwNDg5OTM4OA%3D%3D.2",
											beauty: 7, art: 0, architecture: 1, vista: 10, nature: 8, open_space: 10, daytime: 10, night: 4, explore: 7, tour: "f"
										},

										{ id: 06, name: "Buena Vista Park", address: "Buena Vista & Haight, San Francisco, CA 94117",
											lat: 37.76773, lng: -122.44020999999998, category: "open space", description: "Our best outdoor make-out ballroom",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/10387930_205652173127671_1201375180_n.jpg?ig_cache_key=MTIwNTkzMDgzNzk2NTM4NDg0NQ%3D%3D.2",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12930933_1571920676433920_1751622145_n.jpg?ig_cache_key=MTIzMDE2NjAzODA2MzEwNTQ2NA%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12940325_494176774105900_1625815721_n.jpg?ig_cache_key=MTIzNTgxNDQwOTIzNTM5NzA0Ng%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12965118_760079750783687_682698796_n.jpg?ig_cache_key=MTIzMjM5ODczMzUzNjk4NjUzMw%3D%3D.2",
											beauty: 7, art: 0, architecture: 2, vista: 10, nature: 8, open_space: 7, daytime: 10, night: 0, explore: 4, tour: "h"
										},

										{ id: 07, name: "City Hall", address: "1 Dr Carlton B Goodlett Pl, San Francisco, CA 94102",
											lat: 37.7792597, lng: -122.41926469999999, category: "architecture", description: "One of the most stunning government buildings in the country.",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1390286_685258894946662_351989821_n.jpg?ig_cache_key=MTIwOTY4MjE3OTQ5MDA0MzQxNQ%3D%3D.2",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12784014_967258066691015_1063201314_n.jpg?ig_cache_key=MTIwNjE2NDQ4MDcyOTU4MjUxNg%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12558343_180557822303812_360394013_n.jpg?ig_cache_key=MTE2OTcwMDA2MjE0OTI1NjU0MQ%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/12930731_218579105186342_1457960695_n.jpg?ig_cache_key=MTIzMzc3NjUyNjYyMzcwMzY2MQ%3D%3D.2",
											beauty: 10, art: 5, architecture: 10, vista: 5, nature: 5, open_space: 5, daytime: 9, night: 10, explore: 7, tour: "d"
										},

										{ id: 08, name: "Clarion Alley Murals", address: "Clarion Alley, Mission District, San Francisco, CA",
											lat: 37.7629245, lng: -122.42171889999997, category: "nature", description: "Diego Rivera's legacy continues on the walls of this alley",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/10616961_1691962627712725_596433112_n.jpg?ig_cache_key=MTIwODU0NDcwNTA3NDU1NzQ5Mw%3D%3D.2",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/e15/11419248_1621869004762004_2130019119_n.jpg?ig_cache_key=MTAxMTEyNTAyNTY4NzU1NDQ1Mw%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12501663_585347881623310_1019389396_n.jpg?ig_cache_key=MTIyNjg2ODMxMTkyODE5ODk3MA%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12930719_1275946202420650_2028040605_n.jpg?ig_cache_key=MTIyODExNTk2NjQ0ODIwNzU4Mg%3D%3D.2",
											beauty: 8, art: 10, architecture: 4, vista: 3, nature: 1, open_space: 1, daytime: 10, night: 1, explore: 5, tour: "g"
										},

										{ id: 09, name: "Coit Tower", address: "1 Telegraph Hill Blvd, San Francisco, CA 94133",
											lat: 37.8023777, lng: -122.405823, category: "art", description: "The loveliest concrete fire hose on earth",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1171981_102697150129387_2140030179_n.jpg?ig_cache_key=MTIwOTQ0MDc1NzEzMDk3MjE2Mg%3D%3D.2",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12934933_1095652050486090_2112951424_n.jpg?ig_cache_key=MTIzMzE1Nzk0NDc1Njg1OTUzMg%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/10387760_1152150108128590_962547950_n.jpg?ig_cache_key=MTIwMjcxMTQwMzQzODk4NTk2Ng%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/12965276_602082993278662_25996014_n.jpg?ig_cache_key=MTIzNjI1NDg5NjM0OTk3ODUyMw%3D%3D.2",
											beauty: 7, art: 6, architecture: 8, vista: 8, nature: 6, open_space: 5, daytime: 9, night: 7, explore: 6, tour: "c"
										},

										{ id: 10, name: "Columbus Tower", address: "900 Kearny St, San Francisco, CA 94133",
											lat: 37.7963935, lng: -122.40488119999998, category: "vista", description: "Coppola's Copper Cupola on Columbus",
											picURL: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12231023_583785561790310_1716445032_n.jpg?ig_cache_key=MTIyODAwMzEzMTMzMjM3ODYzNg%3D%3D.2",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/10570034_508152119394371_521156128_n.jpg?ig_cache_key=MTIwNjU5MjA5MDA0ODc5NjU2Mw%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/12965144_1049308978475885_102261694_n.jpg?ig_cache_key=MTIzNjUxODc5OTc0MDMwMjU3OQ%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/12729426_483357525185845_1349624976_n.jpg?ig_cache_key=MTE4MjM2MTkxMjk1NTgxNTYwOQ%3D%3D.2",
											beauty: 9, art: 5, architecture: 10, vista: 5, nature: 0, open_space: 0, daytime: 9, night: 9, explore: 2, tour: "c"
										},

										{ id: 11, name: "Corona Heights Park", address: "Roosevelt Way & Museum Way, San Francisco, CA 94114",
											lat: 37.7652816, lng: -122.44123769999999, category: "open space", description: "Superior views and a windchill factor",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.810.810/12797756_1529478217347818_1062922049_n.jpg?ig_cache_key=MTIwNjEzMzAxNzU1NDAwNTYzOA%3D%3D.2.c",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/1170060_590816444404638_757560303_n.jpg?ig_cache_key=MTIxNDkwNzM0NjU3ODE4MzExNQ%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12530905_578915055604044_773055879_n.jpg?ig_cache_key=MTIzMTIwMzQ5NzI3NDU1MTE0MQ%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12965225_263342290669536_1031888162_n.jpg?ig_cache_key=MTIyNjE5MzkxOTczNjA5NzY3NA%3D%3D.2",
											beauty: 7, art: 0, architecture: 2, vista: 10, nature: 8, open_space: 7, daytime: 10, night: 0, explore: 4, tour: "h"
										},

										{ id: 12, name: "Crissy Field", address: "1199 E Beach, San Francisco, CA 94129",
											lat: 37.8057795, lng: -122.44914219999998, category: "nature", description: "Estuary...Airfield...Estuary",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/12826110_1539839386312953_281070030_n.jpg?ig_cache_key=MTIwOTUwODY5NzI2MTg2NjIxOQ%3D%3D.2.c",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12940225_1738342953079280_1727390722_n.jpg?ig_cache_key=MTIzNTgwMDc5MDUyMjIxNDE5Mw%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11326976_1714909152060212_1600792340_n.jpg?ig_cache_key=MTIxMzQyNDMwMDQ3Mzg2NjkxMg%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12479615_1593478530966977_1918369853_n.jpg?ig_cache_key=MTIzNDQxOTgxMTU3NDcxNzc3NA%3D%3D.2",
											beauty: 7, art: 2, architecture: 4, vista: 10, nature: 10, open_space: 10, daytime: 10, night: 2, explore: 10, tour: "b"
										},

										{ id: 13, name: "Crown Zellerbach Bldg", address: "1 Bush St, San Francisco, CA 94104",
											lat: 37.7909622, lng: -122.40001519999998, category: "nature", description: "Notable architecture and bamboo garden in the heart of FiDi",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c102.0.875.875/12749774_1705246259691449_885808275_n.jpg?ig_cache_key=MTE4NzQzMjAzOTM1MjI1OTQ2MA%3D%3D.2.c",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/12822372_1772899556257964_1240084366_n.jpg?ig_cache_key=MTIwODQwNDI1MTk5MTIzMjkyNA%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11849365_858636754248748_1398115699_n.jpg?ig_cache_key=MTE5MTQxOTAyMDc3NjEwNjkxOA%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12751152_1584247981895240_480151638_n.jpg?ig_cache_key=MTIwMzg4NTQwNTE2Mjc2MDg1Mg%3D%3D.2",
											beauty: 6, art: 8, architecture: 9, vista: 4, nature: 4, open_space: 0, daytime: 10, night: 4, explore: 3, tour: "c"
										},

										{ id: 14, name: "Cupid's Span", address: "7th St, San Francisco, CA 94105",
											lat: 37.7803148, lng: -122.41245279999998, category: "architecture", description: "Giant left his heart in San Francisco - Cupid shot right through it.",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/12677280_496552367197998_2114467009_n.jpg?ig_cache_key=MTE4MjA3ODYwNDQ0Nzk4NzQ5OA%3D%3D.2.c",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12950358_598963313588563_989343462_n.jpg?ig_cache_key=MTIzMjM2NjkyNTIwMTc1NjEwNQ%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12934952_618432651638458_1319203099_n.jpg?ig_cache_key=MTIzMzY2MzMwODkwNTEyNjAxNw%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12328085_476439305878143_1792715983_n.jpg?ig_cache_key=MTIyMTIyMzMxOTgwNzM4OTAyNw%3D%3D.2",
											beauty: 7, art: 10, architecture: 8, vista: 10, nature: 5, open_space: 5, daytime: 10, night: 10, explore: 5, tour: "c"
										},

										{ id: 15, name: "Ferry Building", address: "1 Sausalito - San Francisco Ferry Bldg, San Francisco, CA 94111",
											lat: 37.79554580000001, lng: -122.39342049999999, category: "architecture", description: "Ferry terminal and home to one of the finest farmer’s markets in the country.  ",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.31.1080.1080/10349610_728900520578860_1154771412_n.jpg?ig_cache_key=MTIwODkxMzIxOTcyNzMxMDIyNQ%3D%3D.2.c",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12445786_1286879048008527_1871141666_n.jpg?ig_cache_key=MTIzNjMxNTMxMjMyODc0NDQxNA%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/e35/11363736_693894700751042_901137049_n.jpg?ig_cache_key=MTIyMjI4MjYwMTQ4NjMxNzMyNg%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12976388_2014181388807683_2034052263_n.jpg?ig_cache_key=MTIzNjE4OTMxMDQ5MTg1MDkzMg%3D%3D.2",
											beauty: 7, art: 1, architecture: 8, vista: 10, nature: 5, open_space: 4, daytime: 10, night: 9, explore: 7, tour: "c"
										},

										{ id: 16, name: "Filbert Steps", address: "Filbert, San Francisco, CA 94133",
											lat: 37.802008, lng: -122.40479190000002, category: "open space", description: "Built into a cliff to continue Filbert - at least for pedestrians",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/10499037_165186220538917_645416689_n.jpg?ig_cache_key=MTIwOTEwMTk3MzA0NTQ3NTY0Mw%3D%3D.2",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13099084_1048773458536344_2134903892_n.jpg?ig_cache_key=MTIzNTk4NDA0MjUyMjUwMzg2Nw%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12912458_743159955787608_1197066887_n.jpg?ig_cache_key=MTIzNDMyMDQ0ODk4NDczNzQzNA%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12912405_125863994480682_1147389031_n.jpg?ig_cache_key=MTIyNTE4Mjg5MTQ4ODM4NzgzNA%3D%3D.2",
											beauty: 5, art: 0, architecture: 3, vista: 5, nature: 5, open_space: 5, daytime: 10, night: 0, explore: 2, tour: "d"
										},

										{ id: 17, name: "Fort Point Overlook", address: "Marine Dr, San Francisco, CA 94129",
											lat: 37.8088219, lng: -122.47216930000002, category: "nature", description: "No Vertigo at this Golden Gate vantage point",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1517359_620929661407347_624888979_n.jpg?ig_cache_key=MTIwOTExMTkyNjIxMzcwMjM5OQ%3D%3D.2",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/12940032_211917682524974_729371272_n.jpg?ig_cache_key=MTIzMzYyNzQ3NTQ5NTkxMzU2NA%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12725045_1078618025533491_54210_n.jpg?ig_cache_key=MTIzMTQzNDU2MTQyMjg1ODY2OA%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/10661160_261086134223654_299181477_n.jpg?ig_cache_key=MTIxMTc3NDg1NDU0NzgzMzM5MA%3D%3D.2",
											beauty: 9, art: 0, architecture: 5, vista: 10, nature: 8, open_space: 9, daytime: 10, night: 3, explore: 5, tour: "b"
										},

										{ id: 18, name: "Glen Canyon Park", address: "Elk St, San Francisco, CA 94127",
											lat: 37.7360965, lng: -122.4397328, category: "vista", description: "Lose yourself in this urban canyon",
											picURL: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12950267_1622846631287924_1041885643_n.jpg?ig_cache_key=MTIzMzg2MTg4MzU5NTMwNTEzMg%3D%3D.2",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12907303_201425306911337_804429614_n.jpg?ig_cache_key=MTIzMjAwMzI4MDg0MTYzMDkwMg%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13102366_1534303036877837_602333198_n.jpg?ig_cache_key=MTIzNTgwNTEzOTU1MjI2NDkzMA%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12940943_1147986561912478_405668609_n.jpg?ig_cache_key=MTIyMDY1ODExMjg1ODIxMDc1OQ%3D%3D.2",
											beauty: 9, art: 1, architecture: 1, vista: 7, nature: 10, open_space: 10, daytime: 10, night: 2, explore: 9, tour: "h"
										},

										{ id: 19, name: "Grace Cathederal", address: "1100 California St, San Francisco, CA 94108",
											lat: 37.7918345, lng: -122.4133435, category: "architecture", description: "Stunning architecture with a breathtaking view of the city",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/12383216_802162456572597_441516563_n.jpg?ig_cache_key=MTE3NzkyMDkxMTQ0MjIxNzI3OA%3D%3D.2.c",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12976267_1549106358724635_155905417_n.jpg?ig_cache_key=MTIzNjEzMTczMjcwODA2ODA4OQ%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12976416_218354375203412_2130142879_n.jpg?ig_cache_key=MTIyOTk5OTM3MzIzMjk0MzM0OA%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13108623_1618922461682929_1749976693_n.jpg?ig_cache_key=MTIzNjUzNzM1ODk2NDU3MjExOQ%3D%3D.2",
											beauty: 10, art: 8, architecture: 9, vista: 8, nature: 7, open_space: 7, daytime: 10, night: 8, explore: 6, tour: "d"
										},

										{ id: 20, name: "Grand View Park", address: "Grand View Park, San Francisco, CA 94122",
											lat: 37.7562628, lng: -122.47184520000002, category: "nature", description: "The Sunset's aptly named hilltop park",
											picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/11925684_867655596658030_408211881_n.jpg?ig_cache_key=MTA2ODk4MTk5MTIzOTI5ODI1Nw%3D%3D.2.c",
											imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12905147_714199075350006_1146367655_n.jpg?ig_cache_key=MTIzMDAwMTU4NTY3MDgxMDcyOQ%3D%3D.2",
											imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12502035_1597604260562016_61978966_n.jpg?ig_cache_key=MTIyNDk5OTIzNDY0NjI2MTk0NQ%3D%3D.2",
											imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12445923_1134612346589509_59165967_n.jpg?ig_cache_key=MTIyMjU5Njc1OTI1MjE5MDQ5NA%3D%3D.2",
											beauty: 7, art: 0, architecture: 3, vista: 10, nature: 10, open_space: 9, daytime: 10, night: 2, explore: 0, tour: "i"
										},

										{ id: 21, name: "Heron's Head Park", address: "98 The Embarcadero, SF CA, 94105",
										  lat: 37.8092049, lng: -122.41734309999998, category: "vista", description: "22-acre open space and thriving wildlife habitat",
										  picURL: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12747710_140676559654703_2040141235_n.jpg?ig_cache_key=MTE5NDQ3MjI1MTkxOTQ2NzUxNg%3D%3D.2",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12935146_158540614543769_390892608_n.jpg?ig_cache_key=MTIzNjQ4MDcxNDM4NjM5NjMyMg%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12317761_550669118426855_1009921806_n.jpg?ig_cache_key=MTIxNDgxMDQ1Mjg5MjA4Nzg3NA%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1172562_1024566794291941_1334887863_n.jpg?ig_cache_key=MTIzMDgzMTY4NTcxNzk1NTIxOA%3D%3D.2",
										  beauty: 8, art: 3, architecture: 1, vista: 8, nature: 10, open_space: 10, daytime: 10, night: 2, explore: 7, tour: "e"
										},

										{ id: 22, name: "India Basin Shoreline", address: "India Basin Shoreline Park",
										  lat: 37.7340277, lng: -122.37557279999999, category: "open space", description: "Secluded windswept green space with a small waterfront playground",
										  picURL: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12797637_757913184341772_912495353_n.jpg?ig_cache_key=MTE5NDI4MzI1NTAzNjQxNDg1Nw%3D%3D.2",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12393841_1671976336394323_764610602_n.jpg?ig_cache_key=MTE1MzI0NjE1MDE0OTg3NjMzNQ%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12912417_1083964395004211_857209119_n.jpg?ig_cache_key=MTIzNTAxNDA5MzM1NjEwNjkzMw%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12825962_793158327485437_1769773206_n.jpg?ig_cache_key=MTIwMzM5OTM0NDczODEwNjk3NQ%3D%3D.2",
										  beauty: 6, art: 2, architecture: 1, vista: 8, nature: 9, open_space: 10, daytime: 10, night: 0, explore: 6, tour: "e"
										},

										{ id: 23, name: "Lady with Apples", address: "700 Polk Street, San Francisco, CA 94109",
										  lat: 37.7833794, lng: -122.41904449999998, category: "open space", description: "Ukranian muralist Aryz's stunning 5 story mural in the TL",
										  picURL: "https://s-media-cache-ak0.pinimg.com/564x/32/b7/cf/32b7cfbcf99120890306086b3cc5a994.jpg",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12935031_1013016615445062_506825180_n.jpg?ig_cache_key=MTIyNTQ5NTU1NjI5NDczMTYzOA%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/e15/10299788_662959677092892_1226617043_n.jpg?ig_cache_key=NzA5NDU0Mzc4NDQ4MTg3NTM1.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12599384_842276389215521_1064201973_n.jpg?ig_cache_key=MTIzMTE1ODY3NjQ2MjM5MTMyMA%3D%3D.2",
										  beauty: 7, art: 10, architecture: 1, vista: 1, nature: 0, open_space: 0, daytime: 10, night: 0, explore: 0, tour: "d"
										},

										{ id: 24, name: "Lands End Trail", address: "Lands End Trail, San Francisco, CA",
										  lat: 37.7858045, lng: -122.50337630000001, category: "open space", description: "Hike along the rocky and windswept Pacific shoreline",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/c247.0.586.586/12531153_854468611330130_538971429_n.jpg?ig_cache_key=MTIwOTIxNDEwMzY5NDYzMzY4OQ%3D%3D.2.c",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12940107_1731645663742048_282537334_n.jpg?ig_cache_key=MTIzNjc3ODc2MjQ5NDMzMDA0MA%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13092210_855705091208291_214641083_n.jpg?ig_cache_key=MTIzNTkyODA4MDU0NDQ3NDAwNg%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13118040_224984911211712_2066276249_n.jpg?ig_cache_key=MTIzNzc1NjA2NDU4NTg2MzAyNQ%3D%3D.2",
										  beauty: 8, art: 0, architecture: 0, vista: 10, nature: 10, open_space: 10, daytime: 10, night: 0, explore: 10, tour: "a"
										},

										{ id: 25, name: "Lyon Street Steps", address: "Broadway & Lyon Street, San Francisco, CA 94115",
										  lat: 37.7928089, lng: -122.44643610000003, category: "", description: "332 steps amongst some of the toniest mansions in town.",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/12798015_977532112336899_268809616_n.jpg?ig_cache_key=MTIwOTA0MjU1NjE4OTQ2MDkwNA%3D%3D.2.c",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/12599496_1586426168315100_491897679_n.jpg?ig_cache_key=MTIzMTU3NzAwOTM4MDAzNDg2MA%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13113848_1031485046931871_307050097_n.jpg?ig_cache_key=MTIzNzMyNjMzMDY3NDgxNDU2Mg%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12976541_1716750958599877_2132575028_n.jpg?ig_cache_key=MTIzNzA0NjI2NDc0MDg2MjcwNA%3D%3D.2",
										  beauty: 9, art: 1, architecture: 9, vista: 9, nature: 5, open_space: 4, daytime: 10, night: 7, explore: 3, tour: "b"
										},

										{ id: 26, name: "McLaren Water Tower", address: "McLaren Upper Resovoir",
										  lat: 37.7219425, lng: -122.42332640000001, category: "vista", description: "La Grande Tank - big, blue and lovely views",
										  picURL: "https://scontent.cdninstagram.com/t51.2885-15/e15/11282677_382599438597837_1175959615_n.jpg?ig_cache_key=OTg2NDM0NjY2Mzk3OTA1NDE4.2",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/917551_1023983160998626_18565749_n.jpg?ig_cache_key=MTE1ODg2OTQwNzk1NTcyNDY3NQ%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11248915_957690234274098_1240228381_n.jpg?ig_cache_key=MTA2MDIzNjgzNDU0MjUxMzE3MQ%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/e15/11350998_861820777219738_500383980_n.jpg?ig_cache_key=MTAxMDQ4OTQ5OTM3OTQ3Mzg1Mg%3D%3D.2",
										  beauty: 6, art: 1, architecture: 4, vista: 8, nature: 8, open_space: 8, daytime: 8, night: 10, explore: 6, tour: "f"
										},

									  { id: 27, name: "Mission Dolores Park", address: "19th & Dolores St, San Francisco, CA 94114",
										  lat: 37.7598191, lng: -122.4260362, category: "nature", description: "Grass = Hipster sunning; Playground = toddler running",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1172979_974300005993947_1383159442_n.jpg?ig_cache_key=MTIwOTU1MDU1NTc5MDgwODEwNA%3D%3D.2",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12728657_1163478743665295_132375019_n.jpg?ig_cache_key=MTE5MDI0NTUwOTQwODIwMTMxMw%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12531132_914865615301523_897790900_n.jpg?ig_cache_key=MTE5MDIzNjA3NTEzMTUyMDMzOQ%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11252746_1731174077097349_2017176405_n.jpg?ig_cache_key=MTE4ODY2MTAxOTY2NjQ0Njc4Mg%3D%3D.2",
										  beauty: 6, art: 2, architecture: 3, vista: 7, nature: 7, open_space: 7, daytime: 10, night: 2, explore: 4, tour: "g"
										},

										{ id: 28, name: "Ocean Beach", address: "Ocean Beach",
											lat: 37.769312, lng: -122.512248, category: "art", description: "A 3.5-mile uncrowded stretch of white beach - just you, the waves and the seabirds.  ",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/10817814_180190949030316_1087374299_n.jpg?ig_cache_key=MTIwODQ1MTI2MDg0NzcxNzUzNQ%3D%3D.2.c",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13113979_1540793612892343_1219845737_n.jpg?ig_cache_key=MTIzNzI3NjQwMDcyMzU3ODU5Mw%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13098927_2013748268849474_1280783401_n.jpg?ig_cache_key=MTIzNzQwMzE4NTE3MjEzMzI2Nw%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13116828_1588949451395950_1145997778_n.jpg?ig_cache_key=MTIzNzMxODUyODE2MDU5MjgzOA%3D%3D.2",
										  beauty: 8, art: 0, architecture: 0, vista: 10, nature: 8, open_space: 10, daytime: 10, night: 7, explore: 7, tour: "a"
										},

										{ id: 29, name: "Palace of Fine Arts", address: "3301 Lyon Street, San Francisco, CA 94123",
											lat: 37.8028993, lng: -122.44877380000003, category: "architecture", description: "Constructed for the 1915 Panama-Pacific Exposition to display works of art.",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12826094_973759812713494_497640592_n.jpg?ig_cache_key=MTIwOTU3NzU2MzMxMzE1NDIxMQ%3D%3D.2",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11374216_788308727957995_35689139_n.jpg?ig_cache_key=MTA3NTU2MzcxMDAyMzIzNDA5MQ%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12930781_381777201992474_1814225520_n.jpg?ig_cache_key=MTIzNDExNDE2NzA2MjI4MDQ3NA%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1515597_1535175460115965_1418308367_n.jpg?ig_cache_key=MTE1MDA4NTU0NzYyMTI2ODA4MQ%3D%3D.2",
										  beauty: 7, art: 6, architecture: 9, vista: 6, nature: 7, open_space: 6, daytime: 10, night: 9, explore: 3, tour: "b"
										},

										{ id: 30, name: "Pennsylvania Gardens", address: "279 Pennsylvania Ave, San Francisco, CA 94107",
										  lat: 37.763095, lng: -122.39331600000003, category: "vista", description: "Spectacular pocket garden created by community guerrilla gardeners",
										  picURL: "https://lh3.googleusercontent.com/-p9AaF-rVUYg/VwrXFebkYNI/AAAAAAAAJ_o/ArE0CWfBUok/s400/blogger-image--1834408890.jpg",
										  imgOne: "https://lh3.googleusercontent.com/-p9AaF-rVUYg/VwrXFebkYNI/AAAAAAAAJ_o/ArE0CWfBUok/s400/blogger-image--1834408890.jpg",
										  imgTwo: "http://4.bp.blogspot.com/-w6cka81ldJY/U0C9IRHX26I/AAAAAAAAId0/V5_Tgbkp9Iw/s1600/IMG_1306.jpg",
										  imgThree: "https://lh3.googleusercontent.com/-Mjn2SmNPaYM/T3nQPvoc-iI/AAAAAAAAAvI/H1-lYAuzE8oiN5ueHvyPWRZAl2-zQcDdgCCo/s640/IMG_2510.JPG",
										  beauty: 8, art: 1, architecture: 3, vista: 6, nature: 10, open_space: 5, daytime: 10, night: 2, explore: 3, tour: "e" },

										{ id: 31, name: "Pier 70 - Industrial Rust", address: "Pier 70, San Francisco, 94107",
											lat: 37.7595604, lng: -122.3829202, category: "art", description: "Historic shipyard-yesterday and Ship repair and Event space-today",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/11906317_1733701846857872_770805625_n.jpg?ig_cache_key=MTA3NjE2MjYwMjAzMDM0NDQzMg%3D%3D.2",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12965704_598956766937168_83237117_n.jpg?ig_cache_key=MTIzNzgzMTI3MDc1MTMzMzc3Nw%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/l/t51.2885-15/s640x640/sh0.08/e35/12519374_864032077055610_215781052_n.jpg?ig_cache_key=MTIzMTU3MjQwMzk3Mzg5NzMzMg%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12383233_630191823800507_1464595375_n.jpg?ig_cache_key=MTIyNDczNTkwNTg5NDc1MDk2NQ%3D%3D.2",
										  beauty: 6, art: 1, architecture: 9, vista: 8, nature: 4, open_space: 4, daytime: 10, night: 6, explore: 1, tour: "e"
										},

										{ id: 32, name: "Potrero View", address: "1300 19th St, San Francisco, California 94107-2825",
											lat: 37.7613732, lng: -122.39544910000001, category: "architecture", description: "Photographer’s choice for stunning city skyline backdrop.",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1173242_202747896759286_1836880436_n.jpg?ig_cache_key=MTIwOTA3MDYyNDIzMDMwNzMzMg%3D%3D.2",
										  imgOne: "https://c6.staticflickr.com/4/3450/3254363357_22ed7f7546_b.jpg",
										  imgTwo: "http://www.localcolorcards.com/SAN_FRANCISCO__02-251_files/02-251%20Potrero%20View%20wide%20copy.jpg",
										  imgThree: "http://s3-media4.fl.yelpcdn.com/bphoto/QcJAplPklliWRAec7L_wWw/o.jpg",
										  beauty: 8, art: 1, architecture: 6, vista: 10, nature: 5, open_space: 4, daytime: 10, night: 10, explore: 3, tour: "e"
										},

										{ id: 33, name: "Shakespeare Garden", address: "Shakespeare Garden",
										  lat: 37.768916, lng: -122.467219, category: "open space", description: "A romantic wedding setting nestled beside Cal Academy of Sciences",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.85.1080.1080/11925743_1611557692439275_1731182733_n.jpg?ig_cache_key=MTA2MTIwMjQzMDk0NDA0MDQyMA%3D%3D.2.c",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1515353_1143373775673503_600264459_n.jpg?ig_cache_key=MTIwMDc3MTc4MDMzNDI1NTk3Ng%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12747575_1737738843105180_161450567_n.jpg?ig_cache_key=MTE5NjcyNzcwMjU3OTk3Njg4Nw%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/10693251_813507825411529_1120645307_n.jpg?ig_cache_key=MTAzNTE0MTI1NjkzMDUwNTU1Nw%3D%3D.2",
										  beauty: 7, art: 2, architecture: 7, vista: 1, nature: 8, open_space: 7, daytime: 10, night: 0, explore: 4, tour: "i"
										},

										{ id: 34, name: "Strawberry Hill", address: "Strawberry Hill",
										  lat: 37.768818, lng: -122.475115, category: "open space", description: "An island smack in the middle of Stow Lake",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/11420830_1072107942823877_326873261_n.jpg?ig_cache_key=MTEwNzU5NDc1NjY0MzA0NzQzOA%3D%3D.2.c",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/12960024_1712770918992464_385511616_n.jpg?ig_cache_key=MTIzNjc1MjQzMjYwNjUwNTAzOQ%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12424446_1718188701769303_784891688_n.jpg?ig_cache_key=MTIxNTUxMzAxNzIwODczNDM2NA%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11426187_437208586467085_428282742_n.jpg?ig_cache_key=MTA1MjM4NjQ1OTI2MjQyNjk0NQ%3D%3D.2",
										  beauty: 8, art: 5, architecture: 5, vista: 7, nature: 9, open_space: 7, daytime: 10, night: 0, explore: 7, tour: "i"
										},

										{ id: 35, name: "Sutro Heights Park", address: "Sutro Heights Park",
										  lat: 37.7777942, lng: -122.51110749999998, category: "nature", description: "The ruins of a 19th century earthly paradise",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/12816951_514003218779273_1482208679_n.jpg?ig_cache_key=MTIwODk4NTM3NzI4NDc4MDAxMA%3D%3D.2.c",
										  imgOne: "https://scontent.cdninstagram.com/l/t51.2885-15/s640x640/sh0.08/e35/12912580_454606518083109_1704395111_n.jpg?ig_cache_key=MTIyNDcwNzg4ODc5MTgzOTUyNA%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/e15/1171807_900178876716393_556611263_n.jpg?ig_cache_key=MTAwODA5OTQxNDU3NzEwODMwNg%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12976171_574181072743490_969318665_n.jpg?ig_cache_key=MTIzNTcxNjg1OTkzMTI4Mjk3OQ%3D%3D.2",
										  beauty: 9, art: 0, architecture: 2, vista: 10, nature: 10, open_space: 9, daytime: 10, night: 2, explore: 7, tour: "a"
										},

										{ id: 36, name: "Tank Hill", address: "2 Belgrave Ave, San Francisco, CA 94117",
											lat: 37.75986, lng: -122.44825100000003, category: "art", description: "Dazzling views, native plant species, hawks and butterflies",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/1169127_1672088023058279_417846652_n.jpg?ig_cache_key=MTIwNjE5NDQyNDA0MDcyNjQ2OA%3D%3D.2.c",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12907397_200043320379691_458802964_n.jpg?ig_cache_key=MTIyNjI4Mjk3NTk2MTE0MzMyNg%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12940157_224675204576126_2043709519_n.jpg?ig_cache_key=MTIzNTUyMzkyNjE1NjQzMzY1OA%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12531167_1591892984459733_1842085755_n.jpg?ig_cache_key=MTIzMTI5NTMzMzU0ODY3OTcyMA%3D%3D.2",
										  beauty: 6, art: 0, architecture: 4, vista: 10, nature: 9, open_space: 7, daytime: 9, night: 7, explore: 2, tour: "h"
										},

										{ id: 37, name: "16th Ave Tiled Steps", address: "16th Ave, San Francisco, CA 94122",
										  lat: 37.7590799, lng: -122.473772, category: "open space", description: "Neighborhood effort has created a beautiful mosaic on the risers of the 163 steps",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12142490_1067404029945664_1238402333_n.jpg?ig_cache_key=MTA5MzAxMDM0Mjc3MjAzMTg1Nw%3D%3D.2",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/13109063_243501816002248_390420234_n.jpg?ig_cache_key=MTIzNzQ4MTY1MjY4ODQ3NDkzMQ%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12964995_931559160275879_1419691559_n.jpg?ig_cache_key=MTIzNjc0OTczNzU0NjUxMTYwNg%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/l/t51.2885-15/s640x640/sh0.08/e35/12950471_945232802256988_552533288_n.jpg?ig_cache_key=MTIzNTg2MTc1NDA1MTY3Mjk1OA%3D%3D.2",
										  beauty: 9, art: 9, architecture: 3, vista: 5, nature: 5, open_space: 5, daytime: 10, night: 0, explore: 2, tour: "i"
										},

										{ id: 38, name: "Twin Peaks Summit", address: "501 Twin Peaks Boulevard, San Francisco, CA 94114",
											lat: 37.7525564, lng: -122.4476191, category: "architecture", description: "Two prominent hills at the center of San Francisco providing killer city views.",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/c241.0.597.597/12139584_1484055468590811_383100891_n.jpg?ig_cache_key=MTEwODk2MTM1MDIyNDM1ODI4Nw%3D%3D.2.c",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/12959984_253234358361719_955705051_n.jpg?ig_cache_key=MTIzNjY2MDA0ODg5OTQ0ODAzOQ%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13092512_1018550624865737_2006491568_n.jpg?ig_cache_key=MTIzNTYzNTY0MDU3MjMyMTIxOQ%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12530916_781545185314514_799159022_n.jpg?ig_cache_key=MTIzMjY4MDA0NDkwNDQ3MTE2MQ%3D%3D.2",
										  beauty: 7, art: 0, architecture: 5, vista: 10, nature: 5, open_space: 7, daytime: 8, night: 9, explore: 2, tour: "h"
										},

										{ id: 39, name: "Vis Valley Greenway", address: "Agriculture Lot of the Visitacion Valley Greenway",
										  lat: 37.7155647, lng: -122.40624660000003, category: "vista", description: "A verdant swath winding through the heart of Visitacion Valley",
										  picURL: "https://scontent.cdninstagram.com/t51.2885-15/e15/11324456_1450363551926913_2028542961_n.jpg?ig_cache_key=OTk5MzQ3NDM4MDMzMjY4NjA2.2",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/e15/10946458_500021563480192_1886469362_n.jpg?ig_cache_key=OTQ0NTA5NjYwOTY1MzEzNDQ2.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/e15/925621_775982869111561_102607674_n.jpg?ig_cache_key=ODAwMzc0NTY2NjE3OTQyMjc4.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/e15/927104_809485125731451_901641995_n.jpg?ig_cache_key=NzQ3MTE2NDM5MzcyNTI1OTI1.2",
										  beauty: 6, art: 5, architecture: 4, vista: 8, nature: 10, open_space: 9, daytime: 10, night: 1, explore: 6, tour: "f"
										},

										{ id: 40, name: "Yerba Buena Gardens", address: "750 Howard St, San Francisco, CA 94103",
											lat: 37.7850153, lng: -122.4023464, category: "art", description: "Celebrate diversity and find green relief downtown",
										  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/c257.0.565.565/12748232_777931122322099_1219095101_n.jpg?ig_cache_key=MTE5MDMyOTI2MTk5MTQyODkzMw%3D%3D.2.c",
										  imgOne: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12599181_221641408214207_1083612538_n.jpg?ig_cache_key=MTIzMzU3NTQ1NDE4Mjg3Mzg4MQ%3D%3D.2",
										  imgTwo: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12912536_1019376461470660_108264124_n.jpg?ig_cache_key=MTIyNjQ3NzE0NzUwNDg5MDc4OQ%3D%3D.2",
										  imgThree: "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/11934890_436719023178626_2032404497_n.jpg?ig_cache_key=MTA4MDY1MDA2ODQxMzQ1ODQ4OQ%3D%3D.2",
										  beauty: 10, art: 8, architecture: 8, vista: 7, nature: 6, open_space: 6, daytime: 10, night: 8, explore: 7, tour: "d"
										}
								];
	factory.find = function(id) {
		return factory.locations[id];
	};

	return factory;
}
