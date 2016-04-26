angular.module('ambler.controllers')

.controller('ViewCtrl', function($scope) {

	// geocoder = new google.maps.Geocoder();

	$scope.locations = [
											{ id: 01, name: "500 Capp Street", address: "500 Capp St, San Francisco, CA 94110",
												lat: 37.7585649, lng: -122.41818139999998, category: "art", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.810.810/12825837_842753145853729_1894560635_n.jpg?ig_cache_key=MTIwMjM3NDA3NzY4NzQzOTY4Ng%3D%3D.2.c",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 8, art: 10, architecture: 10, vista: 0, nature: 0, open_space: 0, daytime: 10, night: 5, explore: 9, tour: "g" 
											},

											{ id: 02, name: "Alamo Square", address: "Steiner St, San Francisco, CA 94117",
												lat: 37.7737676, lng: -122.43246390000002, category: "architecture", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/12338437_1706995792873260_148444126_n.jpg?ig_cache_key=MTIwODQwNTU5MzczNjA1MDk1MA%3D%3D.2.c",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 7, art: 1, architecture: 8, vista: 9, nature: 6,	open_space: 6, daytime: 10, night: 8, explore: 3, tour: "d" 
											},

											{ id: 03, name: "Alemany Farm", address: "700 Alemany Blvd, San Francisco, CA 94110",
												lat: 37.7338589, lng: -122.4126326, category: "vista", description: " ",
												picURL: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12346083_184686028545052_1969116424_n.jpg?ig_cache_key=MTEzODYyMDcxNjgzOTg0MDE1Ng%3D%3D.2",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 6, art: 4, architecture: 3, vista: 7, nature: 10, open_space: 10, daytime: 10, night: 0, explore: 6, tour: "f" 
											},

											{ id: 04, name: "Balmy Alley", address: "50 Balmy St., San Francisco, CA",
												lat: 37.75181, lng: -122.41243359999999, category: "nature", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/12751201_1052975434745536_1247614223_n.jpg?ig_cache_key=MTIwODE0NTAwMzU4MDk3NzM1Mw%3D%3D.2",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 8, art: 10, architecture: 4, vista: 3, nature: 1, open_space: 1, daytime: 10, night: 1, explore: 5, tour: "g" 
											}, 

											{ id: 05, name: "Bernal Heights Park", address: "10 Bernal Heights Blvd, San Francisco, CA 94110",
												lat: 37.743118, lng: -122.4151976, category: "art", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12826218_1689015558053290_1136123522_n.jpg?ig_cache_key=MTIwOTExNjkyNDg1OTU3NDI5Nw%3D%3D.2",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 7, art: 0, architecture: 1, vista: 10, nature: 8, open_space: 10, daytime: 10, night: 4, explore: 7, tour: "f" 
											},

											{ id: 06, name: "Buena Vista Park", address: "Buena Vista & Haight, San Francisco, CA 94117",
												lat: 37.76773, lng: -122.44020999999998, category: "open space", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/10387930_205652173127671_1201375180_n.jpg?ig_cache_key=MTIwNTkzMDgzNzk2NTM4NDg0NQ%3D%3D.2",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 7, art: 0, architecture: 2, vista: 10, nature: 8, open_space: 7, daytime: 10, night: 0, explore: 4, tour: "h" 
											},

											{ id: 07, name: "City Hall", address: "1 Dr Carlton B Goodlett Pl, San Francisco, CA 94102",
												lat: 37.7792597, lng: -122.41926469999999, category: "architecture", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1390286_685258894946662_351989821_n.jpg?ig_cache_key=MTIwOTY4MjE3OTQ5MDA0MzQxNQ%3D%3D.2",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 10, art: 5, architecture: 10, vista: 5, nature: 5, open_space: 5, daytime: 9, night: 10, explore: 7, tour: "d" 
											},

											{ id: 08, name: "Clarion Alley Mural Project", address: "Clarion Alley, Mission District, San Francisco, CA",
												lat: 37.7629245, lng: -122.42171889999997, category: "nature", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/10616961_1691962627712725_596433112_n.jpg?ig_cache_key=MTIwODU0NDcwNTA3NDU1NzQ5Mw%3D%3D.2",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 8, art: 10, architecture: 4, vista: 3, nature: 1, open_space: 1, daytime: 10, night: 1, explore: 5, tour: "g" 
											},

											{ id: 09, name: "Coit Tower", address: "1 Telegraph Hill Blvd, San Francisco, CA 94133",
												lat: 37.8023777, lng: -122.405823, category: "art", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1171981_102697150129387_2140030179_n.jpg?ig_cache_key=MTIwOTQ0MDc1NzEzMDk3MjE2Mg%3D%3D.2",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 7, art: 6, architecture: 8, vista: 8, nature: 6, open_space: 5, daytime: 9, night: 7, explore: 6, tour: "c" 
											},

											{ id: 10, name: "Columbus Tower", address: "900 Kearny St, San Francisco, CA 94133",
												lat: 37.7963935, lng: -122.40488119999998, category: "vista", description: " ",
												picURL: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12231023_583785561790310_1716445032_n.jpg?ig_cache_key=MTIyODAwMzEzMTMzMjM3ODYzNg%3D%3D.2",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 9, art: 5, architecture: 10, vista: 5, nature: 0, open_space: 0, daytime: 9, night: 9, explore: 2, tour: "c" 
											},

											{ id: 11, name: "Corona Heights Park", address: "Roosevelt Way & Museum Way, San Francisco, CA 94114",
												lat: 37.7652816, lng: -122.44123769999999, category: "open space", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.810.810/12797756_1529478217347818_1062922049_n.jpg?ig_cache_key=MTIwNjEzMzAxNzU1NDAwNTYzOA%3D%3D.2.c",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 7, art: 0, architecture: 2, vista: 10, nature: 8, open_space: 7, daytime: 10, night: 0, explore: 4, tour: "h" 
											},

											{ id: 12, name: "Crissy Field", address: "1199 E Beach, San Francisco, CA 94129",
												lat: 37.8057795, lng: -122.44914219999998, category: "nature", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/12826110_1539839386312953_281070030_n.jpg?ig_cache_key=MTIwOTUwODY5NzI2MTg2NjIxOQ%3D%3D.2.c",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 7, art: 2, architecture: 4, vista: 10, nature: 10, open_space: 10, daytime: 10, night: 2, explore: 10, tour: "b" 
											},

											{ id: 13, name: "Crown Zellerbach Building", address: "1 Bush St, San Francisco, CA 94104",
												lat: 37.7909622, lng: -122.40001519999998, category: "nature", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c102.0.875.875/12749774_1705246259691449_885808275_n.jpg?ig_cache_key=MTE4NzQzMjAzOTM1MjI1OTQ2MA%3D%3D.2.c",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 6, art: 8, architecture: 9, vista: 4, nature: 4, open_space: 0, daytime: 10, night: 4, explore: 3, tour: "c" 
											},

											{ id: 14, name: "Cupid's Span", address: "7th St, San Francisco, CA 94105",
												lat: 37.7803148, lng: -122.41245279999998, category: "architecture", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/12677280_496552367197998_2114467009_n.jpg?ig_cache_key=MTE4MjA3ODYwNDQ0Nzk4NzQ5OA%3D%3D.2.c",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 7, art: 10, architecture: 8, vista: 10, nature: 5, open_space: 5, daytime: 10, night: 10, explore: 5, tour: "c" 
											},

											{ id: 15, name: "Ferry Building", address: "1 Sausalito - San Francisco Ferry Bldg, San Francisco, CA 94111",
												lat: 37.79554580000001, lng: -122.39342049999999, category: "architecture", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.31.1080.1080/10349610_728900520578860_1154771412_n.jpg?ig_cache_key=MTIwODkxMzIxOTcyNzMxMDIyNQ%3D%3D.2.c",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 7, art: 1, architecture: 8, vista: 10, nature: 5, open_space: 4, daytime: 10, night: 9, explore: 7, tour: "c" 
											},

											{ id: 16, name: "Filbert Steps", address: "Filbert, San Francisco, CA 94133",
												lat: 37.802008, lng: -122.40479190000002, category: "open space", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/10499037_165186220538917_645416689_n.jpg?ig_cache_key=MTIwOTEwMTk3MzA0NTQ3NTY0Mw%3D%3D.2",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 5, art: 0, architecture: 3, vista: 5, nature: 5, open_space: 5, daytime: 10, night: 0, explore: 2, tour: "d" 
											},

											{ id: 17, name: "Fort Point Overlook", address: "Marine Dr, San Francisco, CA 94129",
												lat: 37.8088219, lng: -122.47216930000002, category: "nature", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1517359_620929661407347_624888979_n.jpg?ig_cache_key=MTIwOTExMTkyNjIxMzcwMjM5OQ%3D%3D.2",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 9, art: 0, architecture: 5, vista: 10, nature: 8, open_space: 9, daytime: 10, night: 3, explore: 5, tour: "b" 
											},

											{ id: 18, name: "Glen Canyon Park", address: "Elk St, San Francisco, CA 94127",
												lat: 37.7360965, lng: -122.4397328, category: "vista", description: " ",
												picURL: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12950267_1622846631287924_1041885643_n.jpg?ig_cache_key=MTIzMzg2MTg4MzU5NTMwNTEzMg%3D%3D.2",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 9, art: 1, architecture: 1, vista: 7, nature: 10, open_space: 10, daytime: 10, night: 2, explore: 9, tour: "h" 
											},

											{ id: 19, name: "Grace Cathederal", address: "1100 California St, San Francisco, CA 94108",
												lat: 37.7918345, lng: -122.4133435, category: "architecture", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/12383216_802162456572597_441516563_n.jpg?ig_cache_key=MTE3NzkyMDkxMTQ0MjIxNzI3OA%3D%3D.2.c",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 10, art: 8, architecture: 9, vista: 8, nature: 7, open_space: 7, daytime: 10, night: 8, explore: 6, tour: "d" 
											},

											{ id: 20, name: "Grand View Park", address: "Grand View Park, San Francisco, CA 94122",
												lat: 37.7562628, lng: -122.47184520000002, category: "nature", description: " ",
												picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/11925684_867655596658030_408211881_n.jpg?ig_cache_key=MTA2ODk4MTk5MTIzOTI5ODI1Nw%3D%3D.2.c",
												imgOne: " ",
												imgTwo: " ",
												imgThree: " ",
												beauty: 7, art: 0, architecture: 3, vista: 10, nature: 10, open_space: 9, daytime: 10, night: 2, explore: 0, tour: "i" 
											},

											{ id: 21, name: "Heron's Head Park", address: "98 The Embarcadero, SF CA, 94105",
											  lat: " ", lng: " ", category: "vista", description: " ",
											  picURL: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12747710_140676559654703_2040141235_n.jpg?ig_cache_key=MTE5NDQ3MjI1MTkxOTQ2NzUxNg%3D%3D.2",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 8, art: 3, architecture: 1, vista: 8, nature: 10, open_space: 10, daytime: 10, night: 2, explore: 7, tour: "e" 
											},

											{ id: 22, name: "India Basin Shoreline Park", address: "India Basin Shoreline Park",
											  lat: " ", lng: " ", category: "open space", description: " ",
											  picURL: "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12797637_757913184341772_912495353_n.jpg?ig_cache_key=MTE5NDI4MzI1NTAzNjQxNDg1Nw%3D%3D.2",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 6, art: 2, architecture: 1, vista: 8, nature: 9, open_space: 10, daytime: 10, night: 0, explore: 6, tour: "e" 
											},

											{ id: 23, name: "Lady with Apples", address: "700 Polk Street, San Francisco, CA 94109",
											  lat: " ", lng: " ", category: "open space", description: " ",
											  picURL: "https://s-media-cache-ak0.pinimg.com/564x/32/b7/cf/32b7cfbcf99120890306086b3cc5a994.jpg",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 7, art: 10, architecture: 1, vista: 1, nature: 0, open_space: 0, daytime: 10, night: 0, explore: 0, tour: "d" 
											},

											{ id: 24, name: "Lands End Trail", address: "Lands End Trail, San Francisco, CA",
											  lat: " ", lng: " ", category: "open space", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/c247.0.586.586/12531153_854468611330130_538971429_n.jpg?ig_cache_key=MTIwOTIxNDEwMzY5NDYzMzY4OQ%3D%3D.2.c",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 8, art: 0, architecture: 0, vista: 10, nature: 10, open_space: 10, daytime: 10, night: 0, explore: 10, tour: "a" 
											},

											{ id: 25, name: "Lyon Street Steps", address: "Broadway & Lyon Street, San Francisco, CA 94115",
											  lat: " ", lng: " ", category: "", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/12798015_977532112336899_268809616_n.jpg?ig_cache_key=MTIwOTA0MjU1NjE4OTQ2MDkwNA%3D%3D.2.c",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 9, art: 1, architecture: 9, vista: 9, nature: 5, open_space: 4, daytime: 10, night: 7, explore: 3, tour: "b"
											},

											{ id: 26, name: "McLaren Water Tower", address: "McLaren Upper Resovoir",
											  lat: " ", lng: " ", category: "vista", description: " ",
											  picURL: "https://scontent.cdninstagram.com/t51.2885-15/e15/11282677_382599438597837_1175959615_n.jpg?ig_cache_key=OTg2NDM0NjY2Mzk3OTA1NDE4.2",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 6, art: 1, architecture: 4, vista: 8, nature: 8, open_space: 8, daytime: 8, night: 10, explore: 6, tour: "f" 
											},

										  { id: 27, name: "Mission Dolores Park", address: "19th & Dolores St, San Francisco, CA 94114",
											  lat: " ", lng: " ", category: "nature", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1172979_974300005993947_1383159442_n.jpg?ig_cache_key=MTIwOTU1MDU1NTc5MDgwODEwNA%3D%3D.2",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 6, art: 2, architecture: 3, vista: 7, nature: 7, open_space: 7, daytime: 10, night: 2, explore: 4, tour: "g" 
											},

											{ id: 28, name: "Ocean Beach", address: "Ocean Beach", lat: " ", lng: " ", category: "art", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/10817814_180190949030316_1087374299_n.jpg?ig_cache_key=MTIwODQ1MTI2MDg0NzcxNzUzNQ%3D%3D.2.c",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 8, art: 0, architecture: 0, vista: 10, nature: 8, open_space: 10, daytime: 10, night: 7, explore: 7, tour: "a" 
											},

											{ id: 29, name: "Palace of Fine Arts", address: "3301 Lyon Street, San Francisco, CA 94123", lat: " ", lng: " ", category: "architecture", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12826094_973759812713494_497640592_n.jpg?ig_cache_key=MTIwOTU3NzU2MzMxMzE1NDIxMQ%3D%3D.2",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 7, art: 6, architecture: 9, vista: 6, nature: 7, open_space: 6, daytime: 10, night: 9, explore: 3, tour: "b" 
											},

											{ id: 30, name: "Pennsylvania Gardens", address: "279 Pennsylvania Ave, San Francisco, CA 94107",
											  lat: " ", lng: " ", category: "vista", description: " ",
											  picURL: "https://lh3.googleusercontent.com/-p9AaF-rVUYg/VwrXFebkYNI/AAAAAAAAJ_o/ArE0CWfBUok/s400/blogger-image--1834408890.jpg",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 8, art: 1, architecture: 3, vista: 6, nature: 10, open_space: 5, daytime: 10, night: 2, explore: 3, tour: "e" },

											{ id: 31, name: "Pier 70 - Industrial Rust", address: "Pier 70, San Francisco, 94107", lat: " ", lng: " ", category: "art", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/11906317_1733701846857872_770805625_n.jpg?ig_cache_key=MTA3NjE2MjYwMjAzMDM0NDQzMg%3D%3D.2",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 6, art: 1, architecture: 9, vista: 8, nature: 4, open_space: 4, daytime: 10, night: 6, explore: 1, tour: "e" 
											},

											{ id: 32, name: "Potrero View", address: "1300 19th St, San Francisco, California 94107-2825", lat: " ", lng: " ", category: "architecture", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/1173242_202747896759286_1836880436_n.jpg?ig_cache_key=MTIwOTA3MDYyNDIzMDMwNzMzMg%3D%3D.2",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 8, art: 1, architecture: 6, vista: 10, nature: 5, open_space: 4, daytime: 10, night: 10, explore: 3, tour: "e" 
											},

											{ id: 33, name: "Shakespeare Garden", address: "Shakespeare Garden",
											  lat: " ", lng: " ", category: "open space", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.85.1080.1080/11925743_1611557692439275_1731182733_n.jpg?ig_cache_key=MTA2MTIwMjQzMDk0NDA0MDQyMA%3D%3D.2.c",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 7, art: 2, architecture: 7, vista: 1, nature: 8, open_space: 7, daytime: 10, night: 0, explore: 4, tour: "i" 
											},

											{ id: 34, name: "Strawberry Hill", address: "Strawberry Hill",
											  lat: " ", lng: " ", category: "open space", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/11420830_1072107942823877_326873261_n.jpg?ig_cache_key=MTEwNzU5NDc1NjY0MzA0NzQzOA%3D%3D.2.c",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 8, art: 5, architecture: 5, vista: 7, nature: 9, open_space: 7, daytime: 10, night: 0, explore: 7, tour: "i" 
											},

											{ id: 35, name: "Sutro Heights Park", address: "Sutro Heights Park",
											  lat: " ", lng: " ", category: "nature", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/12816951_514003218779273_1482208679_n.jpg?ig_cache_key=MTIwODk4NTM3NzI4NDc4MDAxMA%3D%3D.2.c",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 9, art: 0, architecture: 2, vista: 10, nature: 10, open_space: 9, daytime: 10, night: 2, explore: 7, tour: "a" 
											},

											{ id: 36, name: "Tank Hill", address: "2 Belgrave Ave, San Francisco, CA 94117", lat: " ", lng: " ", category: "art", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/1169127_1672088023058279_417846652_n.jpg?ig_cache_key=MTIwNjE5NDQyNDA0MDcyNjQ2OA%3D%3D.2.c",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 6, art: 0, architecture: 4, vista: 10, nature: 9, open_space: 7, daytime: 9, night: 7, explore: 2, tour: "h" 
											},

											{ id: 37, name: "The 16th Avenue Tiled Steps", address: "16th Ave, San Francisco, CA 94122",
											  lat: " ", lng: " ", category: "open space", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12142490_1067404029945664_1238402333_n.jpg?ig_cache_key=MTA5MzAxMDM0Mjc3MjAzMTg1Nw%3D%3D.2",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 9, art: 9, architecture: 3, vista: 5, nature: 5, open_space: 5, daytime: 10, night: 0, explore: 2, tour: "i" 
											},

											{ id: 38, name: "Twin Peaks Summit", address: "501 Twin Peaks Boulevard, San Francisco, CA 94114", lat: " ", lng: " ", category: "architecture", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/c241.0.597.597/12139584_1484055468590811_383100891_n.jpg?ig_cache_key=MTEwODk2MTM1MDIyNDM1ODI4Nw%3D%3D.2.c",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 7, art: 0, architecture: 5, vista: 10, nature: 5, open_space: 7, daytime: 8, night: 9, explore: 2, tour: "h" 
											},

											{ id: 39, name: "Vis Valley Greenway", address: "Agriculture Lot of the Visitacion Valley Greenway",
											  lat: " ", lng: " ", category: "vista", description: " ",
											  picURL: "https://scontent.cdninstagram.com/t51.2885-15/e15/11324456_1450363551926913_2028542961_n.jpg?ig_cache_key=OTk5MzQ3NDM4MDMzMjY4NjA2.2",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 6, art: 5, architecture: 4, vista: 8, nature: 10, open_space: 9, daytime: 10, night: 1, explore: 6, tour: "f" 
											},

											{ id: 40, name: "Yerba Buena Gardens", address: "750 Howard St, San Francisco, CA 94103", lat: " ", lng: " ", category: "art", description: " ",
											  picURL: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/c257.0.565.565/12748232_777931122322099_1219095101_n.jpg?ig_cache_key=MTE5MDMyOTI2MTk5MTQyODkzMw%3D%3D.2.c",
											  imgOne: " ",
											  imgTwo: " ",
											  imgThree: " ",
											  beauty: 10, art: 8, architecture: 8, vista: 7, nature: 6, open_space: 6, daytime: 10, night: 8, explore: 7, tour: "d" 
											}];

	//LOOP THRU LOCATIONS AND GRAB [NAME, ADDRESS, LAT, LNG]
	for (var i = 0; i < $scope.locations.length; i++) {
		console.log($scope.locations[i].id, $scope.locations[i].name, [$scope.locations[i].lat, $scope.locations[i].lng] );
	}

	// // FOR EACH LOOP VERSION
	// $scope.locations.forEach(function (location) {
	// 	// array_of_spots.push($scope.locations[i].address);
	// 	getCoordinates(location.address, function(coordinates) {
	// 		console.log(coordinates)
	// 	});
	// });

// 	array_of_spots = [];
// 	i = 0;
// 	$scope.locations.forEach(function(location) {
// 		// console.log("address found " + $scope.locations[i].address + " i = " + (i));
// 		array_of_spots.push($scope.locations[i].address);
// 		// console.log(location.address);
// 		i = i+1;
// 	});
// 	console.log(array_of_spots);

// // for (j=0; j<array_of_spots.length; j+=1) {
// 	getCoordinates(array_of_spots[i], function(coordinates) {
// 		console.log(coordinates);
// 	});
// }

	// function getCoordinates (address, callback) {
	// 	// for (i in address) {
	// 		var coordinates;
	// 		var geocoder = new google.maps.Geocoder();
	// 		if (geocoder) {
	// 			geocoder.geocode({ address: address}, function (results, status) {
	// 				// console.log(results);
	// 				var coords_obj = results[0].geometry.location;
	// 				var coords_address = results[0].formatted_address;
	// 				coordinates = [coords_obj.lat(), coords_obj.lng(), coords_address];

	// 				callback(coordinates);
	// 			});
	// 		}

	// 	// };
 //  } // close getCoordinates function

}); //ViewCtrl