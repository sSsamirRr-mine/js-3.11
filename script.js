'use strict';

let users = document.querySelector("#users")
let sort = document.querySelector("select")
let input = document.querySelector('input')
let loading = document.querySelector(".loader")

loading.style.display = 'none'
let dates = {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Daniel",
                "last": "Mortensen"
            },
            "location": {
                "street": {
                    "number": 1041,
                    "name": "Ådalsvej"
                },
                "city": "Haslev",
                "state": "Danmark",
                "country": "Denmark",
                "postcode": 57634,
                "coordinates": {
                    "latitude": "-39.0791",
                    "longitude": "-142.3419"
                },
                "timezone": {
                    "offset": "-6:00",
                    "description": "Central Time (US & Canada), Mexico City"
                }
            },
            "email": "daniel.mortensen@example.com",
            "login": {
                "uuid": "3831f428-d8fd-4dd2-8a7f-8e34649e7d3f",
                "username": "heavyzebra605",
                "password": "ne1469",
                "salt": "YH8YZZlt",
                "md5": "bfdcf50d7f9d31b786e0b84aedd8f1fb",
                "sha1": "f091fae29c3d614cee08b3959c5fd12f110458a5",
                "sha256": "d32a9cb260622fb7f444454fde32f36787c5c4470cfaeff267b6d4926c2e2ef3"
            },
            "dob": {
                "date": "1995-02-11T16:54:12.872Z",
                "age": 30
            },
            "registered": {
                "date": "2006-07-01T20:19:25.066Z",
                "age": 18
            },
            "phone": "42594829",
            "cell": "48258015",
            "id": {
                "name": "CPR",
                "value": "110295-0701"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/26.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/26.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/26.jpg"
            },
            "nat": "DK"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "هستی",
                "last": "زارعی"
            },
            "location": {
                "street": {
                    "number": 1035,
                    "name": "شهید صابونچی"
                },
                "city": "قم",
                "state": "خراسان جنوبی",
                "country": "Iran",
                "postcode": 98601,
                "coordinates": {
                    "latitude": "-12.4491",
                    "longitude": "109.7298"
                },
                "timezone": {
                    "offset": "+9:00",
                    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            "email": "hsty.zraay@example.com",
            "login": {
                "uuid": "38d0280c-0298-4c41-a17b-4f3ebb030d92",
                "username": "blackdog792",
                "password": "mark1",
                "salt": "n3SSbldZ",
                "md5": "33cfcd6992d2edb3a28e728c571b0767",
                "sha1": "9e25847645958c87b52f1bc403971e1b55448709",
                "sha256": "e12953cb9f857b8739116104b8ee46171c2badd3d019b84b335ec2d500181d71"
            },
            "dob": {
                "date": "1981-07-01T11:46:31.320Z",
                "age": 43
            },
            "registered": {
                "date": "2009-01-01T06:54:20.707Z",
                "age": 16
            },
            "phone": "048-05418890",
            "cell": "0990-408-1614",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/15.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/15.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/15.jpg"
            },
            "nat": "IR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Eliza",
                "last": "Woods"
            },
            "location": {
                "street": {
                    "number": 5596,
                    "name": "Queensway"
                },
                "city": "Wakefield",
                "state": "Gwent",
                "country": "United Kingdom",
                "postcode": "U8N 8DJ",
                "coordinates": {
                    "latitude": "-58.4585",
                    "longitude": "97.0420"
                },
                "timezone": {
                    "offset": "+7:00",
                    "description": "Bangkok, Hanoi, Jakarta"
                }
            },
            "email": "eliza.woods@example.com",
            "login": {
                "uuid": "a526d086-2cdf-40f0-a1d1-a177c4f5c8ae",
                "username": "bigkoala856",
                "password": "catcat",
                "salt": "C9BMLWqu",
                "md5": "1a63dc86d3e65d3bbdd455853561b99c",
                "sha1": "6136b4cc6bbe082c8f30bfdf02e833e7eebc8606",
                "sha256": "417d62ae3a362ef5062077018a2bea55ea123aceb2a4211c43313ff4a8723e22"
            },
            "dob": {
                "date": "1991-08-13T00:40:09.230Z",
                "age": 33
            },
            "registered": {
                "date": "2015-12-26T10:27:51.250Z",
                "age": 9
            },
            "phone": "016974 19358",
            "cell": "07598 324187",
            "id": {
                "name": "NINO",
                "value": "SA 42 04 53 Z"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/16.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
            },
            "nat": "GB"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "آوینا",
                "last": "جعفری"
            },
            "location": {
                "street": {
                    "number": 2590,
                    "name": "جمهوری اسلامی"
                },
                "city": "دزفول",
                "state": "اصفهان",
                "country": "Iran",
                "postcode": 69883,
                "coordinates": {
                    "latitude": "-11.4677",
                    "longitude": "132.4393"
                },
                "timezone": {
                    "offset": "-4:00",
                    "description": "Atlantic Time (Canada), Caracas, La Paz"
                }
            },
            "email": "awyn.jaafry@example.com",
            "login": {
                "uuid": "7f7a9c45-316d-4da2-b0f0-858adcc3ea66",
                "username": "bluemouse954",
                "password": "clippers",
                "salt": "E0kfClit",
                "md5": "357feaa7fec328ea4444cbf640ad90e2",
                "sha1": "6d86919bcf48ce1f3c01483c92d66a1cb3469b76",
                "sha256": "7d87d636d4d2c8916a39c0d767f035b5ab3f78e541757da1e90bdadb95fa66d4"
            },
            "dob": {
                "date": "1983-03-08T08:29:09.082Z",
                "age": 41
            },
            "registered": {
                "date": "2019-12-09T21:38:48.447Z",
                "age": 5
            },
            "phone": "009-86460608",
            "cell": "0902-257-3267",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/87.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
            },
            "nat": "IR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Lucile",
                "last": "Petit"
            },
            "location": {
                "street": {
                    "number": 2993,
                    "name": "Rue de L'Abbé-Patureau"
                },
                "city": "Strasbourg",
                "state": "Val-D'Oise",
                "country": "France",
                "postcode": 45147,
                "coordinates": {
                    "latitude": "29.3886",
                    "longitude": "-20.1735"
                },
                "timezone": {
                    "offset": "-5:00",
                    "description": "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            "email": "lucile.petit@example.com",
            "login": {
                "uuid": "532930ff-44f2-4cb4-a582-953ac506a073",
                "username": "whitekoala713",
                "password": "greg",
                "salt": "2QvoU8vN",
                "md5": "bd82f08ecbdddb77a9643c7202027af0",
                "sha1": "a71db5382150b1c6c51f4f068ece530afbfa1e3a",
                "sha256": "750262f341332c0b5ad0cb3ed53c0dffc676359b7072a5ff60fb13312113ffac"
            },
            "dob": {
                "date": "1948-02-17T13:05:10.359Z",
                "age": 77
            },
            "registered": {
                "date": "2005-12-15T04:57:35.822Z",
                "age": 19
            },
            "phone": "04-80-92-06-13",
            "cell": "06-88-28-55-32",
            "id": {
                "name": "INSEE",
                "value": "2480195557847 43"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/85.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/85.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/85.jpg"
            },
            "nat": "FR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Olga",
                "last": "Sánchez"
            },
            "location": {
                "street": {
                    "number": 9838,
                    "name": "Calle de Alcalá"
                },
                "city": "Orense",
                "state": "Aragón",
                "country": "Spain",
                "postcode": 43262,
                "coordinates": {
                    "latitude": "23.3155",
                    "longitude": "-136.1855"
                },
                "timezone": {
                    "offset": "-4:00",
                    "description": "Atlantic Time (Canada), Caracas, La Paz"
                }
            },
            "email": "olga.sanchez@example.com",
            "login": {
                "uuid": "7971425d-c360-454b-ae58-e765b7793b24",
                "username": "beautifulgorilla766",
                "password": "elvisp",
                "salt": "JEEwlwI0",
                "md5": "fad824a5ea763a1f64354dcd83147316",
                "sha1": "7eb04a12bdd54559572a397c05df577e9aa82d43",
                "sha256": "cdb11cd6884a0e0004666576d05d1465c4ac80786afddb690ae2fb4045aadebf"
            },
            "dob": {
                "date": "1956-07-07T13:34:23.103Z",
                "age": 68
            },
            "registered": {
                "date": "2002-11-29T10:35:22.494Z",
                "age": 22
            },
            "phone": "911-103-475",
            "cell": "638-498-361",
            "id": {
                "name": "DNI",
                "value": "01422123-N"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/58.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/58.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/58.jpg"
            },
            "nat": "ES"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "آوین",
                "last": "نجاتی"
            },
            "location": {
                "street": {
                    "number": 6161,
                    "name": "مجاهدین اسلام"
                },
                "city": "اهواز",
                "state": "البرز",
                "country": "Iran",
                "postcode": 18444,
                "coordinates": {
                    "latitude": "-22.8866",
                    "longitude": "138.2298"
                },
                "timezone": {
                    "offset": "+6:00",
                    "description": "Almaty, Dhaka, Colombo"
                }
            },
            "email": "awyn.njty@example.com",
            "login": {
                "uuid": "6f058b68-8d2e-4a55-ba47-5e668898ed54",
                "username": "sadelephant376",
                "password": "sweety",
                "salt": "eMtNcyLD",
                "md5": "e3d697f67ac0cf4f9c7582b5a9fde346",
                "sha1": "74fbf48a3ae4d012ce2b611bb562976a0faae4b2",
                "sha256": "558ec8156f448440e6cbd6e22d02d247984aa7fcc3a74377476fb979531db472"
            },
            "dob": {
                "date": "1963-02-13T02:20:36.126Z",
                "age": 62
            },
            "registered": {
                "date": "2016-07-11T01:52:04.030Z",
                "age": 8
            },
            "phone": "007-70419282",
            "cell": "0947-178-0881",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/79.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
            },
            "nat": "IR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Vesna",
                "last": "Borojević"
            },
            "location": {
                "street": {
                    "number": 8079,
                    "name": "Labljanska"
                },
                "city": "Stara Pazova",
                "state": "Zaječar",
                "country": "Serbia",
                "postcode": 17960,
                "coordinates": {
                    "latitude": "-15.9715",
                    "longitude": "-136.9664"
                },
                "timezone": {
                    "offset": "0:00",
                    "description": "Western Europe Time, London, Lisbon, Casablanca"
                }
            },
            "email": "vesna.borojevic@example.com",
            "login": {
                "uuid": "db730f65-e293-403a-8f64-f1f958aead9e",
                "username": "beautifulcat719",
                "password": "ballin",
                "salt": "BpvDkxDj",
                "md5": "8e1c91d76effee53a1b866dbf529ad48",
                "sha1": "dccfe58a83b8c061217f758202315f111bbb7e85",
                "sha256": "02c441ca52c84ee05b617521b5e7dab9dc0cf932bd97a2b04ebaccf40cd6e508"
            },
            "dob": {
                "date": "1988-06-25T05:16:42.596Z",
                "age": 36
            },
            "registered": {
                "date": "2011-02-22T00:32:39.196Z",
                "age": 14
            },
            "phone": "035-0711-033",
            "cell": "067-0941-186",
            "id": {
                "name": "SID",
                "value": "027013566"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/58.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/58.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/58.jpg"
            },
            "nat": "RS"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Ceyhan",
                "last": "Okumuş"
            },
            "location": {
                "street": {
                    "number": 2230,
                    "name": "Maçka Cd"
                },
                "city": "Siirt",
                "state": "Sakarya",
                "country": "Turkey",
                "postcode": 52404,
                "coordinates": {
                    "latitude": "55.9264",
                    "longitude": "96.3921"
                },
                "timezone": {
                    "offset": "-12:00",
                    "description": "Eniwetok, Kwajalein"
                }
            },
            "email": "ceyhan.okumus@example.com",
            "login": {
                "uuid": "ce8d16eb-0630-4686-b9c1-0644361a7f21",
                "username": "crazydog219",
                "password": "dddddddd",
                "salt": "1LGspVWy",
                "md5": "2c90b7fbed73fee05dc2e0d84bb33ced",
                "sha1": "08f63a27c5fb018df01e89707f63d3a0620b8cb9",
                "sha256": "07d113d7fc4ff936a9f38a679eec7c61bd58f9511287ece0e2505154b275e441"
            },
            "dob": {
                "date": "1976-06-09T20:16:57.048Z",
                "age": 48
            },
            "registered": {
                "date": "2016-04-24T19:10:08.721Z",
                "age": 8
            },
            "phone": "(184)-761-9319",
            "cell": "(809)-921-7097",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/28.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
            },
            "nat": "TR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Noelle",
                "last": "Frazier"
            },
            "location": {
                "street": {
                    "number": 7316,
                    "name": "Valwood Pkwy"
                },
                "city": "Melbourne",
                "state": "New South Wales",
                "country": "Australia",
                "postcode": 1472,
                "coordinates": {
                    "latitude": "-5.9940",
                    "longitude": "-113.7723"
                },
                "timezone": {
                    "offset": "-7:00",
                    "description": "Mountain Time (US & Canada)"
                }
            },
            "email": "noelle.frazier@example.com",
            "login": {
                "uuid": "2433afae-e0ed-4979-8a1d-1439b43bb6ca",
                "username": "ticklishswan670",
                "password": "puppies",
                "salt": "jsG2B6W9",
                "md5": "20df7709306712a6808fb7dd9ab33ffc",
                "sha1": "f5fc5bfd402cd60cb5e7861cd45a6eed2fce487d",
                "sha256": "b9033b2d62c3b1e19ceb97f5b2707d061ed9bd69d467f566fda92a15e366ee47"
            },
            "dob": {
                "date": "1948-09-11T00:54:58.009Z",
                "age": 76
            },
            "registered": {
                "date": "2007-07-18T06:16:11.215Z",
                "age": 17
            },
            "phone": "02-4532-7223",
            "cell": "0425-294-108",
            "id": {
                "name": "TFN",
                "value": "871580384"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/5.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/5.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
            },
            "nat": "AU"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Freya",
                "last": "Cooper"
            },
            "location": {
                "street": {
                    "number": 759,
                    "name": "Pine Hill Road"
                },
                "city": "Blenheim",
                "state": "Taranaki",
                "country": "New Zealand",
                "postcode": 13408,
                "coordinates": {
                    "latitude": "52.7638",
                    "longitude": "169.1614"
                },
                "timezone": {
                    "offset": "+1:00",
                    "description": "Brussels, Copenhagen, Madrid, Paris"
                }
            },
            "email": "freya.cooper@example.com",
            "login": {
                "uuid": "349de6da-53bf-45a6-a6a0-2ebe1e30925d",
                "username": "smallmouse918",
                "password": "magnus",
                "salt": "5qkPMmID",
                "md5": "bccc253f83441a1b3017857d28e627d1",
                "sha1": "80f05d299ea3ecb8fd50b3feeebc0aa9f682d894",
                "sha256": "5a7292735923581132d15bcb0be54732db86aa0fc3f9a16fff8a2a292f9f8c4e"
            },
            "dob": {
                "date": "1977-12-02T08:34:31.132Z",
                "age": 47
            },
            "registered": {
                "date": "2012-02-12T18:04:35.792Z",
                "age": 13
            },
            "phone": "(692)-026-0758",
            "cell": "(516)-863-0284",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/38.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/38.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/38.jpg"
            },
            "nat": "NZ"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Rüdiger",
                "last": "Ritter"
            },
            "location": {
                "street": {
                    "number": 7023,
                    "name": "Waldweg"
                },
                "city": "Weißenthurm",
                "state": "Schleswig-Holstein",
                "country": "Germany",
                "postcode": 10550,
                "coordinates": {
                    "latitude": "59.2873",
                    "longitude": "-103.7184"
                },
                "timezone": {
                    "offset": "-12:00",
                    "description": "Eniwetok, Kwajalein"
                }
            },
            "email": "rudiger.ritter@example.com",
            "login": {
                "uuid": "d9953f99-8bc6-4c4a-8d94-f49159775358",
                "username": "happypanda403",
                "password": "sharky",
                "salt": "tGRwcoLt",
                "md5": "9da7d9ff9d3f9c8b729879d50a4b9ad8",
                "sha1": "b89b3bd87557241d2d7071c06b1f56cafff3222e",
                "sha256": "6d894faa265ee28cbcfc9dc318a27184302e2467e6496fc97d4625d0ecce09de"
            },
            "dob": {
                "date": "1968-09-29T08:54:52.880Z",
                "age": 56
            },
            "registered": {
                "date": "2015-12-27T21:11:36.415Z",
                "age": 9
            },
            "phone": "0707-2591460",
            "cell": "0172-8143618",
            "id": {
                "name": "SVNR",
                "value": "82 290968 R 466"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/84.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/84.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/84.jpg"
            },
            "nat": "DE"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Hector",
                "last": "Robert"
            },
            "location": {
                "street": {
                    "number": 2363,
                    "name": "Rue Denfert-Rochereau"
                },
                "city": "Aix-En-Provence",
                "state": "Doubs",
                "country": "France",
                "postcode": 63234,
                "coordinates": {
                    "latitude": "87.1280",
                    "longitude": "-62.2392"
                },
                "timezone": {
                    "offset": "-10:00",
                    "description": "Hawaii"
                }
            },
            "email": "hector.robert@example.com",
            "login": {
                "uuid": "06b30932-1046-4c95-a7fd-6a1016433458",
                "username": "orangezebra919",
                "password": "eduard",
                "salt": "im69hQqy",
                "md5": "2c4f5ba83e4a6c2d180854ece4988674",
                "sha1": "16dad238c702891c84722aebf0e6542e89708698",
                "sha256": "38d070ef38f0177b84a168f0d307db6a5a2387597f2907c98c53a6f3f4a31e60"
            },
            "dob": {
                "date": "1982-02-27T17:11:18.129Z",
                "age": 42
            },
            "registered": {
                "date": "2011-11-27T14:40:16.897Z",
                "age": 13
            },
            "phone": "04-88-15-68-36",
            "cell": "06-65-69-00-97",
            "id": {
                "name": "INSEE",
                "value": "1820144469988 72"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/14.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/14.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/14.jpg"
            },
            "nat": "FR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Consuelo",
                "last": "Gallego"
            },
            "location": {
                "street": {
                    "number": 9445,
                    "name": "Calle de La Almudena"
                },
                "city": "Gijón",
                "state": "Andalucía",
                "country": "Spain",
                "postcode": 95720,
                "coordinates": {
                    "latitude": "14.0333",
                    "longitude": "69.8055"
                },
                "timezone": {
                    "offset": "+5:00",
                    "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
                }
            },
            "email": "consuelo.gallego@example.com",
            "login": {
                "uuid": "1b4c9922-1195-4a06-97eb-345bd1bb162f",
                "username": "redleopard951",
                "password": "girls1",
                "salt": "CQI0OQhO",
                "md5": "f69f72c37cd11b07913e62daed6a29c5",
                "sha1": "781770ce06b1de96cf78f06ceee60395c5d012b6",
                "sha256": "8fec0c5c41bbdf0e5fee8d145a652004294d557b1112fba497c27c5fb1b24d50"
            },
            "dob": {
                "date": "1998-04-07T21:01:29.735Z",
                "age": 26
            },
            "registered": {
                "date": "2013-10-16T10:59:51.997Z",
                "age": 11
            },
            "phone": "936-701-869",
            "cell": "645-849-133",
            "id": {
                "name": "DNI",
                "value": "23891559-C"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/92.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
            },
            "nat": "ES"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Eric",
                "last": "Mascareñas"
            },
            "location": {
                "street": {
                    "number": 9786,
                    "name": "Viaducto Roldán"
                },
                "city": "Colonia Piloto",
                "state": "Chiapas",
                "country": "Mexico",
                "postcode": 15872,
                "coordinates": {
                    "latitude": "-50.2036",
                    "longitude": "122.0488"
                },
                "timezone": {
                    "offset": "-3:30",
                    "description": "Newfoundland"
                }
            },
            "email": "eric.mascarenas@example.com",
            "login": {
                "uuid": "47c2cd0e-e2dd-4e1a-bc6c-f17357257211",
                "username": "purplekoala912",
                "password": "zeppelin",
                "salt": "WUemzcPk",
                "md5": "b09a339acc8e41951d742b05f5d39caa",
                "sha1": "7e71e48e8be1080d7c8504bcfbcba2b362392aab",
                "sha256": "6203d4873185b62a68fad15a5136043db26667f23908d38726ddeac2e7ce3fde"
            },
            "dob": {
                "date": "1979-07-13T16:18:08.522Z",
                "age": 45
            },
            "registered": {
                "date": "2016-10-27T12:03:43.490Z",
                "age": 8
            },
            "phone": "(678) 671 1596",
            "cell": "(667) 752 8199",
            "id": {
                "name": "NSS",
                "value": "68 63 97 2736 1"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/70.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/70.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/70.jpg"
            },
            "nat": "MX"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Aglayida",
                "last": "Pashuk"
            },
            "location": {
                "street": {
                    "number": 9490,
                    "name": "Oleksandra Kopilenka"
                },
                "city": "Ugniv",
                "state": "Rivnenska",
                "country": "Ukraine",
                "postcode": 93504,
                "coordinates": {
                    "latitude": "-67.9111",
                    "longitude": "67.7903"
                },
                "timezone": {
                    "offset": "-1:00",
                    "description": "Azores, Cape Verde Islands"
                }
            },
            "email": "aglayida.pashuk@example.com",
            "login": {
                "uuid": "c79a90c2-2155-4c0f-b21d-a13b0259aad9",
                "username": "bluecat292",
                "password": "reng",
                "salt": "oCIhVNBy",
                "md5": "1b9e914912e91177b1a10313abc463a9",
                "sha1": "95f6bd1ef90516dd7fa0f37d49b04ea4aedc1643",
                "sha256": "c41cccc4920bd643263a96a5c2f096df0802dee40b0c7a23a489b5308a998617"
            },
            "dob": {
                "date": "1988-09-21T19:35:51.032Z",
                "age": 36
            },
            "registered": {
                "date": "2006-04-04T07:36:56.402Z",
                "age": 18
            },
            "phone": "(098) K50-4318",
            "cell": "(099) V54-3591",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/45.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/45.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/45.jpg"
            },
            "nat": "UA"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Rita",
                "last": "Chavez"
            },
            "location": {
                "street": {
                    "number": 6955,
                    "name": "Dane St"
                },
                "city": "Burbank",
                "state": "Wyoming",
                "country": "United States",
                "postcode": 96933,
                "coordinates": {
                    "latitude": "-53.6562",
                    "longitude": "50.2916"
                },
                "timezone": {
                    "offset": "+4:30",
                    "description": "Kabul"
                }
            },
            "email": "rita.chavez@example.com",
            "login": {
                "uuid": "703bba7d-9843-4cc6-8422-8b42d7b92e52",
                "username": "angryostrich497",
                "password": "northern",
                "salt": "N1rCL3I9",
                "md5": "44bbcaebc355ce5f739ab36b9025b1de",
                "sha1": "37731cdd11d7e4e8c1b38fa7c7daf060d2e20c5a",
                "sha256": "67ac498a5d21b3b3274e0f8ad98df65472a88e20474eab00b425eb9dd3166950"
            },
            "dob": {
                "date": "1974-04-03T06:19:56.955Z",
                "age": 50
            },
            "registered": {
                "date": "2012-06-04T00:58:11.380Z",
                "age": 12
            },
            "phone": "(576) 661-6741",
            "cell": "(692) 585-8522",
            "id": {
                "name": "SSN",
                "value": "773-08-4487"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/63.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/63.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/63.jpg"
            },
            "nat": "US"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Viivi",
                "last": "Ojala"
            },
            "location": {
                "street": {
                    "number": 4579,
                    "name": "Tehtaankatu"
                },
                "city": "Miehikkälä",
                "state": "Kainuu",
                "country": "Finland",
                "postcode": 45566,
                "coordinates": {
                    "latitude": "73.9618",
                    "longitude": "126.7502"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "viivi.ojala@example.com",
            "login": {
                "uuid": "0ff32c0f-b0eb-4482-bd93-9248d7ecfbdd",
                "username": "bigwolf797",
                "password": "winger",
                "salt": "E4lvRNnr",
                "md5": "849fc53ddec531259e642c113bfb99eb",
                "sha1": "0b48d9d8735ddb00123db30ab9ffbfd92a71c539",
                "sha256": "ad0718a66ad47d7bc2a0b083d99268da781eb4c405b9cea51f4a67c9e2357463"
            },
            "dob": {
                "date": "1980-10-23T14:47:43.585Z",
                "age": 44
            },
            "registered": {
                "date": "2006-10-27T07:29:32.343Z",
                "age": 18
            },
            "phone": "07-613-243",
            "cell": "044-544-20-97",
            "id": {
                "name": "HETU",
                "value": "NaNNA648undefined"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/91.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/91.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/91.jpg"
            },
            "nat": "FI"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Aya",
                "last": "Alfsen"
            },
            "location": {
                "street": {
                    "number": 3074,
                    "name": "Ole Moes vei"
                },
                "city": "Bykle",
                "state": "Oslo",
                "country": "Norway",
                "postcode": "5580",
                "coordinates": {
                    "latitude": "24.0393",
                    "longitude": "-154.3453"
                },
                "timezone": {
                    "offset": "+5:30",
                    "description": "Bombay, Calcutta, Madras, New Delhi"
                }
            },
            "email": "aya.alfsen@example.com",
            "login": {
                "uuid": "4047854b-4364-483f-a20d-dc19d06d72ce",
                "username": "silverzebra679",
                "password": "dustin",
                "salt": "IC6S7NkA",
                "md5": "d81c6f547df3507816eea4c8f78929f1",
                "sha1": "4c75ceb866cebaa32fb9dac978a6115e66d6a039",
                "sha256": "2056e6b1114ffafaf2e298b2788aac89548c196015495a5f2770513afa055d82"
            },
            "dob": {
                "date": "1974-07-24T04:47:12.883Z",
                "age": 50
            },
            "registered": {
                "date": "2005-05-30T13:54:38.780Z",
                "age": 19
            },
            "phone": "73287488",
            "cell": "49395067",
            "id": {
                "name": "FN",
                "value": "24077424209"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/92.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
            },
            "nat": "NO"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Roxane",
                "last": "Van den Berghe"
            },
            "location": {
                "street": {
                    "number": 1971,
                    "name": "De Kooikampen"
                },
                "city": "Veldhoven",
                "state": "Utrecht",
                "country": "Netherlands",
                "postcode": "3767 WA",
                "coordinates": {
                    "latitude": "-32.4436",
                    "longitude": "-143.1199"
                },
                "timezone": {
                    "offset": "-3:00",
                    "description": "Brazil, Buenos Aires, Georgetown"
                }
            },
            "email": "roxane.vandenberghe@example.com",
            "login": {
                "uuid": "971a0b0e-42a9-4387-9cae-976af413a0c8",
                "username": "orangekoala426",
                "password": "portugal",
                "salt": "ISiekDiX",
                "md5": "67752896dfe85398eadeb54274363d23",
                "sha1": "781500b21e12f1cac8786f0f42080301d4ecb995",
                "sha256": "76672ceb0b09c5dd4176ab31263e2745cd1753315b0f93acdcedbb4362bcf541"
            },
            "dob": {
                "date": "1977-01-25T05:48:20.738Z",
                "age": 48
            },
            "registered": {
                "date": "2011-09-28T22:42:58.438Z",
                "age": 13
            },
            "phone": "(0133) 785869",
            "cell": "(06) 33135642",
            "id": {
                "name": "BSN",
                "value": "17103336"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/29.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/29.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/29.jpg"
            },
            "nat": "NL"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Terry",
                "last": "Nelson"
            },
            "location": {
                "street": {
                    "number": 3407,
                    "name": "Parker Rd"
                },
                "city": "Bueblo",
                "state": "North Dakota",
                "country": "United States",
                "postcode": 42426,
                "coordinates": {
                    "latitude": "67.7903",
                    "longitude": "15.8906"
                },
                "timezone": {
                    "offset": "-2:00",
                    "description": "Mid-Atlantic"
                }
            },
            "email": "terry.nelson@example.com",
            "login": {
                "uuid": "2ada604d-733d-4b0b-bfe0-58b50394c6b5",
                "username": "bluebear671",
                "password": "monique",
                "salt": "RyidPv3A",
                "md5": "0d27b95ed9a73a8b30cf6b053acc2109",
                "sha1": "aba5f6ba310e6fab981ba4062a4a67d3c7ac73ce",
                "sha256": "23d5d4d30419982dbc4066380daabd7828debfe2553c7ba5391a925ca5c3e420"
            },
            "dob": {
                "date": "1987-04-14T09:40:45.109Z",
                "age": 37
            },
            "registered": {
                "date": "2006-02-13T00:17:36.943Z",
                "age": 19
            },
            "phone": "(317) 245-9627",
            "cell": "(442) 644-3993",
            "id": {
                "name": "SSN",
                "value": "598-46-4069"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/83.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/83.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/83.jpg"
            },
            "nat": "US"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Macit",
                "last": "Öymen"
            },
            "location": {
                "street": {
                    "number": 8170,
                    "name": "Talak Göktepe Cd"
                },
                "city": "Burdur",
                "state": "Eskişehir",
                "country": "Turkey",
                "postcode": 27166,
                "coordinates": {
                    "latitude": "-13.5842",
                    "longitude": "65.7253"
                },
                "timezone": {
                    "offset": "-3:30",
                    "description": "Newfoundland"
                }
            },
            "email": "macit.oymen@example.com",
            "login": {
                "uuid": "dc0b48e2-6a04-4e17-9b2e-ffa655d13a04",
                "username": "tinybird229",
                "password": "caprice",
                "salt": "MgOV4nDq",
                "md5": "9eeea922e20d27c7e105cf4f6219454d",
                "sha1": "3040e3421ae6d89db882f3c59c42fcd6987bcb3d",
                "sha256": "57143a9174af9d3d17ac59c3c4070f6caa46aed1e8ca506f35099fbe6295f79f"
            },
            "dob": {
                "date": "2000-08-16T21:14:08.383Z",
                "age": 24
            },
            "registered": {
                "date": "2004-01-26T08:59:23.530Z",
                "age": 21
            },
            "phone": "(430)-889-4540",
            "cell": "(076)-703-2597",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/47.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
            },
            "nat": "TR"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Veer",
                "last": "Singh"
            },
            "location": {
                "street": {
                    "number": 2138,
                    "name": "NAD X Rd"
                },
                "city": "Dehradun",
                "state": "Rajasthan",
                "country": "India",
                "postcode": 61743,
                "coordinates": {
                    "latitude": "16.4684",
                    "longitude": "-130.7460"
                },
                "timezone": {
                    "offset": "-6:00",
                    "description": "Central Time (US & Canada), Mexico City"
                }
            },
            "email": "veer.singh@example.com",
            "login": {
                "uuid": "3ef1a465-8fea-4729-9d29-ad59a8be00eb",
                "username": "bigfrog193",
                "password": "babyface",
                "salt": "pbzZCG0a",
                "md5": "3acb498c09295d3958a696eb9c9cb14d",
                "sha1": "1f6f18ea90a78bf7aafc1deac4b5b2be0bdab064",
                "sha256": "6bdcdcd6b304ebe5cb6749294a091ab3189ee366f3f13b44696e8b519579e997"
            },
            "dob": {
                "date": "1948-12-16T15:50:31.796Z",
                "age": 76
            },
            "registered": {
                "date": "2013-12-19T18:35:43.382Z",
                "age": 11
            },
            "phone": "8890714655",
            "cell": "8944776202",
            "id": {
                "name": "UIDAI",
                "value": "347985035227"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/88.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
            },
            "nat": "IN"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Elijah",
                "last": "Roberts"
            },
            "location": {
                "street": {
                    "number": 5246,
                    "name": "Victoria Street"
                },
                "city": "Nelson",
                "state": "Gisborne",
                "country": "New Zealand",
                "postcode": 22446,
                "coordinates": {
                    "latitude": "-1.9072",
                    "longitude": "-24.8520"
                },
                "timezone": {
                    "offset": "+4:00",
                    "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
                }
            },
            "email": "elijah.roberts@example.com",
            "login": {
                "uuid": "6affde4f-442b-4f75-8f7a-8fab1a6a8ff9",
                "username": "silvermouse208",
                "password": "westham",
                "salt": "2NepdPgf",
                "md5": "5e5be82a651f446aee41320a3af2655b",
                "sha1": "efe2c1842c6eaaa5ba3ea62d69218b210a4c2b13",
                "sha256": "ebf025207a4af01c28cece45951bac185cf3dd44aad78ba7f3271e70b3418332"
            },
            "dob": {
                "date": "1990-04-13T05:33:16.899Z",
                "age": 34
            },
            "registered": {
                "date": "2022-04-18T05:34:15.160Z",
                "age": 2
            },
            "phone": "(901)-850-2342",
            "cell": "(600)-768-0770",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/2.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/2.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/2.jpg"
            },
            "nat": "NZ"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Bella",
                "last": "Riley"
            },
            "location": {
                "street": {
                    "number": 8990,
                    "name": "Groveland Terrace"
                },
                "city": "Arvada",
                "state": "Texas",
                "country": "United States",
                "postcode": 87037,
                "coordinates": {
                    "latitude": "82.1456",
                    "longitude": "-60.5415"
                },
                "timezone": {
                    "offset": "-4:00",
                    "description": "Atlantic Time (Canada), Caracas, La Paz"
                }
            },
            "email": "bella.riley@example.com",
            "login": {
                "uuid": "bc02d9e6-9e7f-4265-b5de-289f1a7484ff",
                "username": "bigostrich873",
                "password": "hall",
                "salt": "B5jFuEh7",
                "md5": "df9d2c25ace6685dd6008281e23ad95a",
                "sha1": "0fa571bc610210d8860fb895c652da948a28798c",
                "sha256": "52dbe4c304dc6601c310ec0e3581a41003fa72ed6dbe9cb081ad51ef7a24bef5"
            },
            "dob": {
                "date": "1996-06-25T23:15:21.750Z",
                "age": 28
            },
            "registered": {
                "date": "2014-01-15T21:44:05.501Z",
                "age": 11
            },
            "phone": "(215) 468-4325",
            "cell": "(574) 279-7615",
            "id": {
                "name": "SSN",
                "value": "085-48-6171"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/7.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
            },
            "nat": "US"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Branislav",
                "last": "Ivanišević"
            },
            "location": {
                "street": {
                    "number": 6798,
                    "name": "Luke Spasojevića"
                },
                "city": "Ub",
                "state": "Pčinja",
                "country": "Serbia",
                "postcode": 39425,
                "coordinates": {
                    "latitude": "-55.9059",
                    "longitude": "-133.0254"
                },
                "timezone": {
                    "offset": "+7:00",
                    "description": "Bangkok, Hanoi, Jakarta"
                }
            },
            "email": "branislav.ivanisevic@example.com",
            "login": {
                "uuid": "1cb1360a-2fa7-4e9b-bbda-c319faacb94d",
                "username": "tinyleopard556",
                "password": "jayhawks",
                "salt": "af93RssK",
                "md5": "6f7720ef2c4bc0220b60bf6b959dee82",
                "sha1": "421c6c2fbebe3a03e2aa05b94ffb6d80381a27df",
                "sha256": "6fc042c24501853f694a11293431f6232370e2b76cf5c482d1d054955915f414"
            },
            "dob": {
                "date": "1959-09-12T11:13:03.446Z",
                "age": 65
            },
            "registered": {
                "date": "2021-11-17T03:43:25.575Z",
                "age": 3
            },
            "phone": "013-8663-621",
            "cell": "064-7605-399",
            "id": {
                "name": "SID",
                "value": "057578534"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/67.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
            },
            "nat": "RS"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Julius",
                "last": "Kantola"
            },
            "location": {
                "street": {
                    "number": 8496,
                    "name": "Rautatienkatu"
                },
                "city": "Sund",
                "state": "Päijät-Häme",
                "country": "Finland",
                "postcode": 78245,
                "coordinates": {
                    "latitude": "-61.5328",
                    "longitude": "150.4466"
                },
                "timezone": {
                    "offset": "-5:00",
                    "description": "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            "email": "julius.kantola@example.com",
            "login": {
                "uuid": "ebda5eb3-c5a2-4ea0-a36f-7ebe3782ca76",
                "username": "redpeacock601",
                "password": "passpass",
                "salt": "IurPa4z3",
                "md5": "1b0f229cfd0ae1650685cd276a1b1d69",
                "sha1": "342bac570463a8aae18640508184c86ab3f493f7",
                "sha256": "efeccacbbc0e6a98e6248e5758c1348e7f573b8a7ec833249116debcb7518f4a"
            },
            "dob": {
                "date": "1971-11-16T08:55:20.773Z",
                "age": 53
            },
            "registered": {
                "date": "2018-08-18T10:06:51.472Z",
                "age": 6
            },
            "phone": "06-597-499",
            "cell": "044-107-95-07",
            "id": {
                "name": "HETU",
                "value": "NaNNA225undefined"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/33.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/33.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/33.jpg"
            },
            "nat": "FI"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Emil",
                "last": "Larsen"
            },
            "location": {
                "street": {
                    "number": 730,
                    "name": "Solbakkevej"
                },
                "city": "Lemvig",
                "state": "Syddanmark",
                "country": "Denmark",
                "postcode": 94961,
                "coordinates": {
                    "latitude": "44.6329",
                    "longitude": "-107.5976"
                },
                "timezone": {
                    "offset": "-3:00",
                    "description": "Brazil, Buenos Aires, Georgetown"
                }
            },
            "email": "emil.larsen@example.com",
            "login": {
                "uuid": "23c37d68-1662-4ded-9668-f2fec25ab21f",
                "username": "redsnake104",
                "password": "toni",
                "salt": "HFHHgF4v",
                "md5": "4df62d0c8f7fb4c34fe173b78235bd0b",
                "sha1": "1f6136fbbac8587e9ae732dabf18ca24952428bc",
                "sha256": "c8a2078501564b678acadb85c3787d3449b541f467c4dc10468825ffc5b5299e"
            },
            "dob": {
                "date": "1973-10-15T18:40:16.312Z",
                "age": 51
            },
            "registered": {
                "date": "2006-07-04T11:13:19.070Z",
                "age": 18
            },
            "phone": "60009604",
            "cell": "06456489",
            "id": {
                "name": "CPR",
                "value": "151073-7216"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/69.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/69.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/69.jpg"
            },
            "nat": "DK"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Eva",
                "last": "Rojas"
            },
            "location": {
                "street": {
                    "number": 5688,
                    "name": "Calle de La Almudena"
                },
                "city": "San Sebastián de Los Reyes",
                "state": "Galicia",
                "country": "Spain",
                "postcode": 29856,
                "coordinates": {
                    "latitude": "83.8676",
                    "longitude": "47.5645"
                },
                "timezone": {
                    "offset": "-10:00",
                    "description": "Hawaii"
                }
            },
            "email": "eva.rojas@example.com",
            "login": {
                "uuid": "d479d8fa-0a78-48a7-ba9b-2ac718f46d9d",
                "username": "heavymeercat128",
                "password": "kittykat",
                "salt": "zRpWaC2p",
                "md5": "74910ba528dd3cf65eb1348c90edcd37",
                "sha1": "12f08aaa4fc1b704968d5784515a0c118e6d2369",
                "sha256": "216fdc3bda0ab67f7643e6929ce8c473527252208c9fc4fe6b84fe954ca9b0c3"
            },
            "dob": {
                "date": "1979-09-04T09:35:52.800Z",
                "age": 45
            },
            "registered": {
                "date": "2003-05-06T13:07:32.926Z",
                "age": 21
            },
            "phone": "992-262-091",
            "cell": "629-072-716",
            "id": {
                "name": "DNI",
                "value": "04879502-O"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/31.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/31.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/31.jpg"
            },
            "nat": "ES"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Swarna",
                "last": "Patil"
            },
            "location": {
                "street": {
                    "number": 8939,
                    "name": "Kasturba Rd"
                },
                "city": "Khandwa",
                "state": "Karnataka",
                "country": "India",
                "postcode": 87897,
                "coordinates": {
                    "latitude": "10.4927",
                    "longitude": "-81.4152"
                },
                "timezone": {
                    "offset": "+1:00",
                    "description": "Brussels, Copenhagen, Madrid, Paris"
                }
            },
            "email": "swarna.patil@example.com",
            "login": {
                "uuid": "4cb51d76-db5a-4fa9-b7e8-267e25ba34f1",
                "username": "heavywolf386",
                "password": "magicman",
                "salt": "01JczTIh",
                "md5": "9beea45c6077fed1187014361bf91b08",
                "sha1": "67cb6d41e3379eef9bab06171ebcc3182d2412ac",
                "sha256": "17175da53cd7ad736942002c48edbe236967ecba80c70baf03813dfc8a62b239"
            },
            "dob": {
                "date": "1949-04-08T14:26:33.921Z",
                "age": 75
            },
            "registered": {
                "date": "2002-04-18T11:11:42.935Z",
                "age": 22
            },
            "phone": "8094427153",
            "cell": "9632783051",
            "id": {
                "name": "UIDAI",
                "value": "671761497606"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/73.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
            },
            "nat": "IN"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Amar",
                "last": "Vaage"
            },
            "location": {
                "street": {
                    "number": 1587,
                    "name": "Øvre Skogvei"
                },
                "city": "Bryggja",
                "state": "Oppland",
                "country": "Norway",
                "postcode": "0684",
                "coordinates": {
                    "latitude": "81.6019",
                    "longitude": "99.0225"
                },
                "timezone": {
                    "offset": "+6:00",
                    "description": "Almaty, Dhaka, Colombo"
                }
            },
            "email": "amar.vaage@example.com",
            "login": {
                "uuid": "a3fb9263-7568-4773-9eca-6fba20ab4a19",
                "username": "happyfish524",
                "password": "malcolm",
                "salt": "9ysI6iir",
                "md5": "cf4c922d77003c3380b5dce55ab38259",
                "sha1": "df0c6edac62204b60c1793d6ae083e73a5324cbc",
                "sha256": "c9b40bc5d2c1cb34134a247237d8852b4fcbca24f896adb8c7a34566feff75c4"
            },
            "dob": {
                "date": "1976-10-12T19:32:28.512Z",
                "age": 48
            },
            "registered": {
                "date": "2004-12-05T20:40:07.872Z",
                "age": 20
            },
            "phone": "75934583",
            "cell": "48153922",
            "id": {
                "name": "FN",
                "value": "12107648176"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/76.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/76.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/76.jpg"
            },
            "nat": "NO"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Frederikke",
                "last": "Larsen"
            },
            "location": {
                "street": {
                    "number": 3267,
                    "name": "Hestehaven"
                },
                "city": "Hirtsals",
                "state": "Syddanmark",
                "country": "Denmark",
                "postcode": 12015,
                "coordinates": {
                    "latitude": "78.8617",
                    "longitude": "17.6596"
                },
                "timezone": {
                    "offset": "-11:00",
                    "description": "Midway Island, Samoa"
                }
            },
            "email": "frederikke.larsen@example.com",
            "login": {
                "uuid": "7ebfa265-bfa8-42fc-94db-7ce4e4f909ca",
                "username": "whiteleopard259",
                "password": "saiyan",
                "salt": "0uKZ1uUG",
                "md5": "b289d2788e7a4d4cb85b54a3c42cadda",
                "sha1": "2698d61f14b89ee5c4c875127e71d35637a584f1",
                "sha256": "2a8b9e5fe5a2dbfcb1d3923f5ef65b3f5f2f43f04e1fd35687e4f4f8296ca20f"
            },
            "dob": {
                "date": "1947-10-01T08:50:53.200Z",
                "age": 77
            },
            "registered": {
                "date": "2003-09-07T23:28:25.303Z",
                "age": 21
            },
            "phone": "16150363",
            "cell": "85203112",
            "id": {
                "name": "CPR",
                "value": "011047-4289"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/52.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/52.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
            },
            "nat": "DK"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Hakan",
                "last": "Veltkamp"
            },
            "location": {
                "street": {
                    "number": 2813,
                    "name": "Betty van Niftrikweg"
                },
                "city": "Ooststellingwerf",
                "state": "Gelderland",
                "country": "Netherlands",
                "postcode": "6607 JC",
                "coordinates": {
                    "latitude": "-78.5655",
                    "longitude": "83.8346"
                },
                "timezone": {
                    "offset": "+7:00",
                    "description": "Bangkok, Hanoi, Jakarta"
                }
            },
            "email": "hakan.veltkamp@example.com",
            "login": {
                "uuid": "89afcc85-35dc-4d8b-a127-2cb865974c69",
                "username": "redbutterfly590",
                "password": "vivid",
                "salt": "jn9kV9Rc",
                "md5": "b37b0157abdec886473d09ed975ca8ab",
                "sha1": "8cdf4f990a32859becb72218976ebde45517c3b2",
                "sha256": "656fa1ee2cb4617c20733433ca1b91c98dd443a205f87b5a5bb12bc999a35546"
            },
            "dob": {
                "date": "1982-06-30T12:54:33.963Z",
                "age": 42
            },
            "registered": {
                "date": "2016-05-22T17:20:29.452Z",
                "age": 8
            },
            "phone": "(064) 6218544",
            "cell": "(06) 82761198",
            "id": {
                "name": "BSN",
                "value": "11679241"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/16.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/16.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/16.jpg"
            },
            "nat": "NL"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Deniz",
                "last": "Elçiboğa"
            },
            "location": {
                "street": {
                    "number": 2462,
                    "name": "Necatibey Cd"
                },
                "city": "Kırıkkale",
                "state": "Denizli",
                "country": "Turkey",
                "postcode": 29465,
                "coordinates": {
                    "latitude": "-20.3208",
                    "longitude": "-1.9615"
                },
                "timezone": {
                    "offset": "+2:00",
                    "description": "Kaliningrad, South Africa"
                }
            },
            "email": "deniz.elciboga@example.com",
            "login": {
                "uuid": "4c9a165c-e8ca-4f96-8258-a742b2056496",
                "username": "happykoala741",
                "password": "w4g8at",
                "salt": "jJzGjdok",
                "md5": "4f278c18592d0c268c5881d2e017ea77",
                "sha1": "eaae69eac35b1e63d86c485f63a09358b7b90255",
                "sha256": "add669fde3a188b206fcc34a136597b2913db3a5ba20f623800af6f6cabafa0c"
            },
            "dob": {
                "date": "1988-03-18T10:16:51.132Z",
                "age": 36
            },
            "registered": {
                "date": "2014-01-01T11:54:54.656Z",
                "age": 11
            },
            "phone": "(012)-976-9211",
            "cell": "(593)-646-7374",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/58.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
            },
            "nat": "TR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Lea",
                "last": "Knight"
            },
            "location": {
                "street": {
                    "number": 3659,
                    "name": "Alfred St"
                },
                "city": "Inwood",
                "state": "Québec",
                "country": "Canada",
                "postcode": "U5B 5Q8",
                "coordinates": {
                    "latitude": "51.5582",
                    "longitude": "69.9375"
                },
                "timezone": {
                    "offset": "+2:00",
                    "description": "Kaliningrad, South Africa"
                }
            },
            "email": "lea.knight@example.com",
            "login": {
                "uuid": "cd0feea5-6591-4a5b-a20a-5e6930ac3d21",
                "username": "bigsnake215",
                "password": "protect",
                "salt": "xOR14OnQ",
                "md5": "b66b01585f5f7c083e343131ff01d21f",
                "sha1": "8c26c555905f8d6df16e69507cf6c937201c504f",
                "sha256": "2dbcd9621ae577ec2121c33262a33f3463dcd7b827a4050bea8aa0e0b4b3c62a"
            },
            "dob": {
                "date": "1950-11-30T09:37:15.675Z",
                "age": 74
            },
            "registered": {
                "date": "2003-05-04T08:02:03.271Z",
                "age": 21
            },
            "phone": "H47 X86-2452",
            "cell": "T01 E53-1839",
            "id": {
                "name": "SIN",
                "value": "524152642"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/47.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/47.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/47.jpg"
            },
            "nat": "CA"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Dries",
                "last": "Helmers"
            },
            "location": {
                "street": {
                    "number": 1807,
                    "name": "Bosbeekweg"
                },
                "city": "Enschede",
                "state": "Limburg",
                "country": "Netherlands",
                "postcode": "4642 RG",
                "coordinates": {
                    "latitude": "48.4530",
                    "longitude": "-140.4866"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "dries.helmers@example.com",
            "login": {
                "uuid": "78f94c56-4877-45ef-98fe-7a70afd4af5d",
                "username": "ticklishostrich919",
                "password": "june",
                "salt": "5UIgd2mf",
                "md5": "be287a3c147441d98d088617c26dac96",
                "sha1": "eaa45f7f0538f0eb4d00382c77c3428a63a69bba",
                "sha256": "55de135170b0df5c85222c0c32760dc4834a91e4c61545bb7c6728faacdc36bc"
            },
            "dob": {
                "date": "1970-03-28T16:23:59.373Z",
                "age": 54
            },
            "registered": {
                "date": "2003-10-02T07:35:11.878Z",
                "age": 21
            },
            "phone": "(030) 9479238",
            "cell": "(06) 04975686",
            "id": {
                "name": "BSN",
                "value": "17590651"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/58.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
            },
            "nat": "NL"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Oliver",
                "last": "Heinonen"
            },
            "location": {
                "street": {
                    "number": 1434,
                    "name": "Korkeavuorenkatu"
                },
                "city": "Keuruu",
                "state": "Kainuu",
                "country": "Finland",
                "postcode": 38361,
                "coordinates": {
                    "latitude": "-36.0283",
                    "longitude": "-114.2476"
                },
                "timezone": {
                    "offset": "-7:00",
                    "description": "Mountain Time (US & Canada)"
                }
            },
            "email": "oliver.heinonen@example.com",
            "login": {
                "uuid": "53a1ace3-743e-412f-9764-0edf79701cab",
                "username": "ticklishgorilla577",
                "password": "lumber",
                "salt": "OG2PNgpX",
                "md5": "b6953546ee50eb1276f16b08c62f5ddd",
                "sha1": "e16c185924756969eac78c1c78dc070c046a2646",
                "sha256": "dcc3759c8b73043a2f9674c69bc2af64128b60050f1bf3c99f8a9469e1c33b26"
            },
            "dob": {
                "date": "1958-12-29T14:54:32.844Z",
                "age": 66
            },
            "registered": {
                "date": "2003-05-21T19:40:30.915Z",
                "age": 21
            },
            "phone": "02-129-793",
            "cell": "045-373-50-89",
            "id": {
                "name": "HETU",
                "value": "NaNNA573undefined"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/42.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/42.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
            },
            "nat": "FI"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Yoëlla",
                "last": "Van de Westerlo"
            },
            "location": {
                "street": {
                    "number": 3671,
                    "name": "Grebbebergstraat"
                },
                "city": "Laarbeek",
                "state": "Flevoland",
                "country": "Netherlands",
                "postcode": "8562 YW",
                "coordinates": {
                    "latitude": "-78.8834",
                    "longitude": "-41.2463"
                },
                "timezone": {
                    "offset": "0:00",
                    "description": "Western Europe Time, London, Lisbon, Casablanca"
                }
            },
            "email": "yoella.vandewesterlo@example.com",
            "login": {
                "uuid": "48ec85fe-3393-4c94-86d7-8f0115119e5d",
                "username": "beautifulbutterfly674",
                "password": "theboss",
                "salt": "svl3Bwd3",
                "md5": "a0f6e4000dfa2fd0c1ea3f60b80a9736",
                "sha1": "1ff6fef0b32ae75d3390a4dfd7f054ff95304918",
                "sha256": "3982e5c8cc073580870dc30a8c81caf36402d5a83b13153114b8087f9429c2d8"
            },
            "dob": {
                "date": "1974-11-04T16:47:08.819Z",
                "age": 50
            },
            "registered": {
                "date": "2010-05-27T23:31:08.265Z",
                "age": 14
            },
            "phone": "(082) 7813644",
            "cell": "(06) 98337654",
            "id": {
                "name": "BSN",
                "value": "88516657"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/66.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/66.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/66.jpg"
            },
            "nat": "NL"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Astrid",
                "last": "Pedersen"
            },
            "location": {
                "street": {
                    "number": 8905,
                    "name": "Kystvejen"
                },
                "city": "Gl. Rye",
                "state": "Syddanmark",
                "country": "Denmark",
                "postcode": 91231,
                "coordinates": {
                    "latitude": "87.1794",
                    "longitude": "-167.0105"
                },
                "timezone": {
                    "offset": "-7:00",
                    "description": "Mountain Time (US & Canada)"
                }
            },
            "email": "astrid.pedersen@example.com",
            "login": {
                "uuid": "b26a889e-66bb-4a40-b57c-fd815933bc24",
                "username": "brownfrog887",
                "password": "newbie",
                "salt": "8xKhqydJ",
                "md5": "81af74179c6e2c646424831403a65a7f",
                "sha1": "c63851b5625cb394037d247741d65e909d14b6c4",
                "sha256": "91d74652e491f3f54a4adba0aea42289e696647f73866ccd220f21a3e81224e2"
            },
            "dob": {
                "date": "1961-09-03T04:38:05.553Z",
                "age": 63
            },
            "registered": {
                "date": "2005-11-01T23:26:06.114Z",
                "age": 19
            },
            "phone": "17169297",
            "cell": "56699771",
            "id": {
                "name": "CPR",
                "value": "020961-6673"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/14.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/14.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/14.jpg"
            },
            "nat": "DK"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Zhivoslav",
                "last": "Radko"
            },
            "location": {
                "street": {
                    "number": 4473,
                    "name": "Artema"
                },
                "city": "Novomoskovsk",
                "state": "Odeska",
                "country": "Ukraine",
                "postcode": 67787,
                "coordinates": {
                    "latitude": "17.3696",
                    "longitude": "37.7922"
                },
                "timezone": {
                    "offset": "+11:00",
                    "description": "Magadan, Solomon Islands, New Caledonia"
                }
            },
            "email": "zhivoslav.radko@example.com",
            "login": {
                "uuid": "8e832da1-31a1-41fc-a1cf-0f12e8035739",
                "username": "lazypanda223",
                "password": "brooke",
                "salt": "SG98odxr",
                "md5": "8ae467da696a5381aae85d558a1bb439",
                "sha1": "836f14794c423ae6435af6d3d1d83ae075a964a5",
                "sha256": "c86775ec210b362f1e86f76c4329147257a6757733ebb036e4283def68109286"
            },
            "dob": {
                "date": "1946-04-29T08:30:10.577Z",
                "age": 78
            },
            "registered": {
                "date": "2015-08-16T16:54:45.393Z",
                "age": 9
            },
            "phone": "(096) Z84-1300",
            "cell": "(096) S12-2565",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/25.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
            },
            "nat": "UA"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Magdalena",
                "last": "Bajević"
            },
            "location": {
                "street": {
                    "number": 9268,
                    "name": "Klinska"
                },
                "city": "Bački Petrovac",
                "state": "Srem",
                "country": "Serbia",
                "postcode": 17309,
                "coordinates": {
                    "latitude": "-72.3315",
                    "longitude": "-154.7517"
                },
                "timezone": {
                    "offset": "-5:00",
                    "description": "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            "email": "magdalena.bajevic@example.com",
            "login": {
                "uuid": "cad0bb0f-a1c1-44e5-8dd7-e28571f61bde",
                "username": "silverfish723",
                "password": "ophelia",
                "salt": "qv1CGOnM",
                "md5": "c5d79f26d4745ad2396fe74b5daf60a2",
                "sha1": "7f7de232a47e7276ca0b611e66f5bbd6cd3e5dd2",
                "sha256": "ea347233da13d5111abece29635b67af9773a2db31b22def2c359972e835a40d"
            },
            "dob": {
                "date": "1998-06-28T13:17:49.300Z",
                "age": 26
            },
            "registered": {
                "date": "2013-10-25T00:01:20.088Z",
                "age": 11
            },
            "phone": "025-5111-167",
            "cell": "062-7987-546",
            "id": {
                "name": "SID",
                "value": "650356749"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/2.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/2.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
            },
            "nat": "RS"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Phoebe",
                "last": "Kennedy"
            },
            "location": {
                "street": {
                    "number": 9609,
                    "name": "King Street"
                },
                "city": "Bangor",
                "state": "Gwynedd County",
                "country": "United Kingdom",
                "postcode": "IH8 4SW",
                "coordinates": {
                    "latitude": "15.4951",
                    "longitude": "-151.6234"
                },
                "timezone": {
                    "offset": "+10:00",
                    "description": "Eastern Australia, Guam, Vladivostok"
                }
            },
            "email": "phoebe.kennedy@example.com",
            "login": {
                "uuid": "1195ae75-386c-470b-ac92-8f7c1acf070d",
                "username": "goldenmouse181",
                "password": "topcat",
                "salt": "A81HnBC2",
                "md5": "f5c4233cbb9f26430db46ae529f34347",
                "sha1": "b3295ba1be20910ae3242efa7f37d08ad7cb5a99",
                "sha256": "d016b811b9365c334380b6898265959e7e8e64c0b3d6307439d28e5bd763687b"
            },
            "dob": {
                "date": "1986-09-22T07:14:45.972Z",
                "age": 38
            },
            "registered": {
                "date": "2021-04-17T22:26:47.868Z",
                "age": 3
            },
            "phone": "017684 79900",
            "cell": "07344 240573",
            "id": {
                "name": "NINO",
                "value": "ZN 74 97 08 W"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/72.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
            },
            "nat": "GB"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Enora",
                "last": "Garcia"
            },
            "location": {
                "street": {
                    "number": 483,
                    "name": "Rue de la Gare"
                },
                "city": "Caen",
                "state": "Cher",
                "country": "France",
                "postcode": 65101,
                "coordinates": {
                    "latitude": "12.2575",
                    "longitude": "-25.6195"
                },
                "timezone": {
                    "offset": "+10:00",
                    "description": "Eastern Australia, Guam, Vladivostok"
                }
            },
            "email": "enora.garcia@example.com",
            "login": {
                "uuid": "ea1b2d21-3ca7-4da5-81fd-b4497e884fa1",
                "username": "ticklishelephant506",
                "password": "sharon",
                "salt": "OaHeQVN7",
                "md5": "96c308108de79f89b14c2df5f010c5b3",
                "sha1": "1a38bb7839ef42ac46eb668e5a7728fbee8de560",
                "sha256": "e2ac0d05e83e43fa780a17b5643d70b994434738d855a3c930e7d60dde1591e9"
            },
            "dob": {
                "date": "1986-05-26T16:03:19.047Z",
                "age": 38
            },
            "registered": {
                "date": "2004-02-23T16:58:07.720Z",
                "age": 21
            },
            "phone": "02-29-74-42-09",
            "cell": "06-14-54-61-99",
            "id": {
                "name": "INSEE",
                "value": "2860498042449 28"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/41.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/41.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg"
            },
            "nat": "FR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Gabriele",
                "last": "Peixoto"
            },
            "location": {
                "street": {
                    "number": 2093,
                    "name": "Rua Pernambuco "
                },
                "city": "Barreiras",
                "state": "Sergipe",
                "country": "Brazil",
                "postcode": 46862,
                "coordinates": {
                    "latitude": "-26.4717",
                    "longitude": "132.0544"
                },
                "timezone": {
                    "offset": "+3:30",
                    "description": "Tehran"
                }
            },
            "email": "gabriele.peixoto@example.com",
            "login": {
                "uuid": "aa49437b-a085-4fe0-8c8b-e84755644dad",
                "username": "sadgoose249",
                "password": "ferguson",
                "salt": "GQBkxLB8",
                "md5": "4cb4b43acd82849c8631a4c4da826f3a",
                "sha1": "08b1a7a28726665a426a1360c760a85b18b8439a",
                "sha256": "362fb7609841466db46fef913f08820fb8805893ce1eb52d4a7fbc7a9ef5fa5b"
            },
            "dob": {
                "date": "1985-03-30T16:30:03.570Z",
                "age": 39
            },
            "registered": {
                "date": "2019-05-31T00:04:39.626Z",
                "age": 5
            },
            "phone": "(71) 5677-8025",
            "cell": "(64) 6994-5056",
            "id": {
                "name": "CPF",
                "value": "951.432.099-08"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/31.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/31.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/31.jpg"
            },
            "nat": "BR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Amber",
                "last": "May"
            },
            "location": {
                "street": {
                    "number": 7837,
                    "name": "New Road"
                },
                "city": "Leicester",
                "state": "Warwickshire",
                "country": "United Kingdom",
                "postcode": "Y8 1NZ",
                "coordinates": {
                    "latitude": "17.3467",
                    "longitude": "92.9817"
                },
                "timezone": {
                    "offset": "-2:00",
                    "description": "Mid-Atlantic"
                }
            },
            "email": "amber.may@example.com",
            "login": {
                "uuid": "954a0e6d-aab8-47d5-99fc-7ff720ce90c4",
                "username": "whiteostrich799",
                "password": "mullet",
                "salt": "ny0QZVzZ",
                "md5": "8df6367f17ece25ee025974c0285c7f4",
                "sha1": "514ffecea2f30cba058281e6bda95c1b4e63f2e0",
                "sha256": "d3ef26e0b772df077967d56637e2335253d9c5e7c3490dd5136b7c02ab428b86"
            },
            "dob": {
                "date": "1983-11-23T16:46:51.434Z",
                "age": 41
            },
            "registered": {
                "date": "2003-08-26T18:05:42.329Z",
                "age": 21
            },
            "phone": "015396 90877",
            "cell": "07904 931769",
            "id": {
                "name": "NINO",
                "value": "TL 17 39 13 N"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/41.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/41.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg"
            },
            "nat": "GB"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Frederic",
                "last": "Glöckner"
            },
            "location": {
                "street": {
                    "number": 9634,
                    "name": "Kirchgasse"
                },
                "city": "Ludwigshafen A. Rhein",
                "state": "Hamburg",
                "country": "Germany",
                "postcode": 92780,
                "coordinates": {
                    "latitude": "-52.2684",
                    "longitude": "-25.8231"
                },
                "timezone": {
                    "offset": "+10:00",
                    "description": "Eastern Australia, Guam, Vladivostok"
                }
            },
            "email": "frederic.glockner@example.com",
            "login": {
                "uuid": "434751c7-ef88-4881-8e5e-ad083ba100fa",
                "username": "smallzebra725",
                "password": "fastball",
                "salt": "6T9btp8z",
                "md5": "79b6f5f26917510f05896437bea9b4ea",
                "sha1": "4eec5f76841d0ec84d8fc95c2db69334b84ac300",
                "sha256": "20cafbefe6d0462202b41dafc72ffa930df68ea651cf74dcaee1a6d94d76a076"
            },
            "dob": {
                "date": "1990-11-17T05:19:12.559Z",
                "age": 34
            },
            "registered": {
                "date": "2005-08-26T20:59:39.118Z",
                "age": 19
            },
            "phone": "0192-9608270",
            "cell": "0179-2950414",
            "id": {
                "name": "SVNR",
                "value": "89 161190 G 402"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/92.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/92.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/92.jpg"
            },
            "nat": "DE"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "غزل",
                "last": "قاسمی"
            },
            "location": {
                "street": {
                    "number": 1030,
                    "name": "دکتر مفتح"
                },
                "city": "بوشهر",
                "state": "سیستان و بلوچستان",
                "country": "Iran",
                "postcode": 98294,
                "coordinates": {
                    "latitude": "-73.5836",
                    "longitude": "-4.1175"
                },
                "timezone": {
                    "offset": "-5:00",
                    "description": "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            "email": "gzl.qsmy@example.com",
            "login": {
                "uuid": "0a79a7df-c42a-4495-8f19-7ca36b4c07d4",
                "username": "tinyelephant166",
                "password": "sand",
                "salt": "YpYGOVI2",
                "md5": "7cc553cb2ea976bc287dbf06cf53cb39",
                "sha1": "f3dc6f0a1513d75ae13b12bff3e67606f42c8e00",
                "sha256": "9cde219edd0f1bee5a3e432c81e88951d898b4027ae268d3dafd132d8d2fd72c"
            },
            "dob": {
                "date": "1961-05-08T05:51:58.750Z",
                "age": 63
            },
            "registered": {
                "date": "2009-08-02T21:58:11.166Z",
                "age": 15
            },
            "phone": "068-66036734",
            "cell": "0905-366-9463",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/84.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/84.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/84.jpg"
            },
            "nat": "IR"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Malthe",
                "last": "Rasmussen"
            },
            "location": {
                "street": {
                    "number": 7793,
                    "name": "Solsikkevej"
                },
                "city": "Rødvig Stevns",
                "state": "Syddanmark",
                "country": "Denmark",
                "postcode": 27036,
                "coordinates": {
                    "latitude": "2.9676",
                    "longitude": "-22.4470"
                },
                "timezone": {
                    "offset": "+9:00",
                    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            "email": "malthe.rasmussen@example.com",
            "login": {
                "uuid": "90905f44-941f-424f-8c3b-3907dcf90389",
                "username": "purpleduck391",
                "password": "eleven",
                "salt": "OwXyXhpr",
                "md5": "f08d8e26f7bb41ed733dfae8505d744b",
                "sha1": "a79ffc8221067bcdf9eb9c168ea8d18e0079a488",
                "sha256": "bb7241d23910a373ff7018391be2839f5455f4abeec6b98244f1beadad797e98"
            },
            "dob": {
                "date": "1966-07-15T14:07:29.100Z",
                "age": 58
            },
            "registered": {
                "date": "2018-09-08T10:50:37.791Z",
                "age": 6
            },
            "phone": "69272663",
            "cell": "68072306",
            "id": {
                "name": "CPR",
                "value": "150766-3206"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/58.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
            },
            "nat": "DK"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Mar",
                "last": "Mora"
            },
            "location": {
                "street": {
                    "number": 4789,
                    "name": "Calle de La Democracia"
                },
                "city": "Oviedo",
                "state": "Castilla la Mancha",
                "country": "Spain",
                "postcode": 27434,
                "coordinates": {
                    "latitude": "77.7074",
                    "longitude": "145.6277"
                },
                "timezone": {
                    "offset": "-4:00",
                    "description": "Atlantic Time (Canada), Caracas, La Paz"
                }
            },
            "email": "mar.mora@example.com",
            "login": {
                "uuid": "a87e677d-fd90-46b8-a97e-510ca0f773b2",
                "username": "happyladybug303",
                "password": "dottie",
                "salt": "jeSJ33FP",
                "md5": "824e6703f1eda3fd6c912f0e689344fb",
                "sha1": "cdb58ace0b90368cd4a22a70435e3fb8ac563ae5",
                "sha256": "9ccc2ded55d9c78adf754db4677fa25110b5e5df288020fbab7050cc5a721484"
            },
            "dob": {
                "date": "1982-10-02T22:45:27.003Z",
                "age": 42
            },
            "registered": {
                "date": "2012-01-02T09:54:12.835Z",
                "age": 13
            },
            "phone": "903-600-993",
            "cell": "660-103-825",
            "id": {
                "name": "DNI",
                "value": "68360581-Z"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/16.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
            },
            "nat": "ES"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Bogoljub",
                "last": "Cvejić"
            },
            "location": {
                "street": {
                    "number": 7229,
                    "name": "Torbanovačka"
                },
                "city": "Medveđa",
                "state": "Braničevo",
                "country": "Serbia",
                "postcode": 79980,
                "coordinates": {
                    "latitude": "11.0029",
                    "longitude": "-56.4047"
                },
                "timezone": {
                    "offset": "-8:00",
                    "description": "Pacific Time (US & Canada)"
                }
            },
            "email": "bogoljub.cvejic@example.com",
            "login": {
                "uuid": "fa54bd50-81ab-42ba-96fb-a0ac70ec2f18",
                "username": "happyleopard206",
                "password": "sooner",
                "salt": "5TlfStvM",
                "md5": "0a53578863a27e1fb050ef0c3bdf1997",
                "sha1": "4cead5dbc958d467f6b32a1c733fa52bbd1b6d65",
                "sha256": "84bb387dff11bc8fbfbb008657230b3f7a28ac6590b167d02d89aeeb133679e9"
            },
            "dob": {
                "date": "1978-12-14T16:43:32.854Z",
                "age": 46
            },
            "registered": {
                "date": "2014-06-07T17:53:34.001Z",
                "age": 10
            },
            "phone": "028-3105-980",
            "cell": "061-4829-339",
            "id": {
                "name": "SID",
                "value": "459897792"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/1.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/1.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/1.jpg"
            },
            "nat": "RS"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Brett",
                "last": "Richardson"
            },
            "location": {
                "street": {
                    "number": 6543,
                    "name": "Park Road"
                },
                "city": "Stoke-on-Trent",
                "state": "Dumfries and Galloway",
                "country": "United Kingdom",
                "postcode": "CF2 5JS",
                "coordinates": {
                    "latitude": "4.3216",
                    "longitude": "168.6998"
                },
                "timezone": {
                    "offset": "-9:00",
                    "description": "Alaska"
                }
            },
            "email": "brett.richardson@example.com",
            "login": {
                "uuid": "648e2249-6479-42cb-9e56-8e56c286e44f",
                "username": "yellowgorilla960",
                "password": "krishna",
                "salt": "21m4fW29",
                "md5": "3e636f8dd1cc17ae024c9a3ccbdf61cf",
                "sha1": "72879a6f9b41279838b072d6cd865a431bb6766e",
                "sha256": "204fa221cccdc8570d01e2d89425dd589618be4a73e45a44d00a88dfb47311f2"
            },
            "dob": {
                "date": "1951-08-16T11:58:14.548Z",
                "age": 73
            },
            "registered": {
                "date": "2004-11-11T21:13:02.397Z",
                "age": 20
            },
            "phone": "015395 31649",
            "cell": "07857 796711",
            "id": {
                "name": "NINO",
                "value": "CK 59 70 73 F"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/80.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/80.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/80.jpg"
            },
            "nat": "GB"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Vildan",
                "last": "Tekand"
            },
            "location": {
                "street": {
                    "number": 9078,
                    "name": "Doktorlar Cd"
                },
                "city": "Balıkesir",
                "state": "Sakarya",
                "country": "Turkey",
                "postcode": 40634,
                "coordinates": {
                    "latitude": "-83.6682",
                    "longitude": "-149.9634"
                },
                "timezone": {
                    "offset": "-12:00",
                    "description": "Eniwetok, Kwajalein"
                }
            },
            "email": "vildan.tekand@example.com",
            "login": {
                "uuid": "47560544-e0f5-49dd-9c8c-f820181a3915",
                "username": "sadladybug436",
                "password": "clutch",
                "salt": "JPaZr1Cz",
                "md5": "24af924da39c9303fda3d253d87bee51",
                "sha1": "0ef363743e7e3a7d703302161b734e358a1e80ec",
                "sha256": "1ddd5c0bd345862d6fec9c25e6496a3d39540e9cc57be4f5de031c73456b0da4"
            },
            "dob": {
                "date": "1959-10-06T09:48:52.159Z",
                "age": 65
            },
            "registered": {
                "date": "2003-01-08T15:54:09.680Z",
                "age": 22
            },
            "phone": "(062)-230-9824",
            "cell": "(030)-202-7451",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/35.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/35.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/35.jpg"
            },
            "nat": "TR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Amanda",
                "last": "Halla"
            },
            "location": {
                "street": {
                    "number": 8142,
                    "name": "Hämeentie"
                },
                "city": "Honkajoki",
                "state": "Lapland",
                "country": "Finland",
                "postcode": 52048,
                "coordinates": {
                    "latitude": "26.1011",
                    "longitude": "-66.1102"
                },
                "timezone": {
                    "offset": "-3:30",
                    "description": "Newfoundland"
                }
            },
            "email": "amanda.halla@example.com",
            "login": {
                "uuid": "d8405323-73df-4b55-ac42-a4c23f2cfb0f",
                "username": "lazyzebra396",
                "password": "mikey",
                "salt": "MpBNOCCV",
                "md5": "daf3f554831726818e872c70a8cf99d4",
                "sha1": "297e9db329d3d69970c9966c9a97db4e970e0e32",
                "sha256": "e8ce445b5f536b7218b7499acd93e33b0046b1ebfc428a59d1944ee78364148a"
            },
            "dob": {
                "date": "1966-10-22T05:52:57.759Z",
                "age": 58
            },
            "registered": {
                "date": "2008-09-23T10:30:43.234Z",
                "age": 16
            },
            "phone": "06-488-080",
            "cell": "045-672-88-98",
            "id": {
                "name": "HETU",
                "value": "NaNNA910undefined"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/82.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
            },
            "nat": "FI"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Jim",
                "last": "Sutton"
            },
            "location": {
                "street": {
                    "number": 4763,
                    "name": "Denny Street"
                },
                "city": "Balbriggan",
                "state": "Clare",
                "country": "Ireland",
                "postcode": 85398,
                "coordinates": {
                    "latitude": "28.7030",
                    "longitude": "-147.1283"
                },
                "timezone": {
                    "offset": "-6:00",
                    "description": "Central Time (US & Canada), Mexico City"
                }
            },
            "email": "jim.sutton@example.com",
            "login": {
                "uuid": "8ab2a793-2e97-465c-bd7a-3604e4ba22fd",
                "username": "whitebutterfly267",
                "password": "tomtom",
                "salt": "1MlRbrnj",
                "md5": "da9612bb1d9d5a146d8bd614929a2b8d",
                "sha1": "a620f02843c9a1dc0bcf4e3d8af7e31c61db0097",
                "sha256": "1b74acd03161e8d312cc45a8ba7c4737f2b516d7a328192e788292a2bc64a08a"
            },
            "dob": {
                "date": "1964-07-26T09:51:53.233Z",
                "age": 60
            },
            "registered": {
                "date": "2014-01-23T20:15:09.192Z",
                "age": 11
            },
            "phone": "021-889-7520",
            "cell": "081-166-8233",
            "id": {
                "name": "PPS",
                "value": "1646432T"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/39.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/39.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/39.jpg"
            },
            "nat": "IE"
        },
        {
            "gender": "male",
            "name": {
                "title": "Monsieur",
                "first": "Tobias",
                "last": "Lecomte"
            },
            "location": {
                "street": {
                    "number": 1408,
                    "name": "Route de Genas"
                },
                "city": "Eggersriet",
                "state": "Appenzell Ausserrhoden",
                "country": "Switzerland",
                "postcode": 1608,
                "coordinates": {
                    "latitude": "-56.0445",
                    "longitude": "-111.2650"
                },
                "timezone": {
                    "offset": "+7:00",
                    "description": "Bangkok, Hanoi, Jakarta"
                }
            },
            "email": "tobias.lecomte@example.com",
            "login": {
                "uuid": "9be462aa-0c61-4e53-9838-e3329682032f",
                "username": "bigpanda623",
                "password": "rhythm",
                "salt": "dJ9bKWMS",
                "md5": "36fe2f54de5690c24479194cac0955cc",
                "sha1": "7551b6dcddc4745841f2192169c42f9a0cb3f649",
                "sha256": "6de3b738be4a92a72865b4c7d2ec5812618114eab3d67f38c3d733f61a511a14"
            },
            "dob": {
                "date": "1995-10-23T20:43:55.426Z",
                "age": 29
            },
            "registered": {
                "date": "2020-07-01T09:17:20.863Z",
                "age": 4
            },
            "phone": "078 302 14 26",
            "cell": "079 946 73 04",
            "id": {
                "name": "AVS",
                "value": "756.7873.5480.73"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/68.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/68.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/68.jpg"
            },
            "nat": "CH"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Salman",
                "last": "Holst"
            },
            "location": {
                "street": {
                    "number": 7398,
                    "name": "Dorpshuisplein"
                },
                "city": "Mill",
                "state": "Zuid-Holland",
                "country": "Netherlands",
                "postcode": "9069 HP",
                "coordinates": {
                    "latitude": "-15.7561",
                    "longitude": "-25.3403"
                },
                "timezone": {
                    "offset": "0:00",
                    "description": "Western Europe Time, London, Lisbon, Casablanca"
                }
            },
            "email": "salman.holst@example.com",
            "login": {
                "uuid": "bc99014f-baf4-4228-b5a6-ac5b71fa7785",
                "username": "beautifulgorilla852",
                "password": "1125",
                "salt": "uNF0K4n1",
                "md5": "1fab93536325b5d0583e0ba4845f4707",
                "sha1": "73a7ca1504fa0e610a33c428f753fc3a31c3aa4a",
                "sha256": "562601a817a69dd2b399418227b9143b24e620126a63ab90ceede327b2d9d1c3"
            },
            "dob": {
                "date": "1989-09-16T23:17:33.909Z",
                "age": 35
            },
            "registered": {
                "date": "2014-06-16T13:36:29.207Z",
                "age": 10
            },
            "phone": "(047) 7741368",
            "cell": "(06) 56853561",
            "id": {
                "name": "BSN",
                "value": "49713092"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/25.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
            },
            "nat": "NL"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Annabella",
                "last": "Van Santvoort"
            },
            "location": {
                "street": {
                    "number": 8127,
                    "name": "Bong"
                },
                "city": "Verwolde",
                "state": "Noord-Holland",
                "country": "Netherlands",
                "postcode": "0434 ZE",
                "coordinates": {
                    "latitude": "-67.5033",
                    "longitude": "-12.9204"
                },
                "timezone": {
                    "offset": "-7:00",
                    "description": "Mountain Time (US & Canada)"
                }
            },
            "email": "annabella.vansantvoort@example.com",
            "login": {
                "uuid": "d96abdea-3ab1-4c21-8747-beda4794c022",
                "username": "crazybear610",
                "password": "pablo",
                "salt": "B8HgfcKG",
                "md5": "d4cf02b506620e0e0ccef541b5421b86",
                "sha1": "7a847fded63602b6257a6da2d7d4e1592aa13e63",
                "sha256": "967303769b950a80eaac642b95c8037f7333ea9b6fef0fd64562bfa9ebdbad46"
            },
            "dob": {
                "date": "1981-08-26T16:42:40.875Z",
                "age": 43
            },
            "registered": {
                "date": "2015-02-06T10:18:11.785Z",
                "age": 10
            },
            "phone": "(0020) 547102",
            "cell": "(06) 43545825",
            "id": {
                "name": "BSN",
                "value": "31723477"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/95.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/95.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/95.jpg"
            },
            "nat": "NL"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Lorenzo",
                "last": "Ibáñez"
            },
            "location": {
                "street": {
                    "number": 3986,
                    "name": "Avenida de Salamanca"
                },
                "city": "Pozuelo de Alarcón",
                "state": "País Vasco",
                "country": "Spain",
                "postcode": 65662,
                "coordinates": {
                    "latitude": "7.0928",
                    "longitude": "-42.8592"
                },
                "timezone": {
                    "offset": "+8:00",
                    "description": "Beijing, Perth, Singapore, Hong Kong"
                }
            },
            "email": "lorenzo.ibanez@example.com",
            "login": {
                "uuid": "2d5f0123-1e69-4eaa-b8e4-6aba1d817082",
                "username": "crazydog506",
                "password": "kristen",
                "salt": "ol7Qk1UH",
                "md5": "2ec211fd7f8709949f10928c2b430dcf",
                "sha1": "35348c977040071e95f44e33b0b41a8432786db7",
                "sha256": "c0cdc1f2dd73f770e64abdea4f88d3624a3497e8fdb1fddb7482e149ee897b8a"
            },
            "dob": {
                "date": "1998-05-30T01:34:17.602Z",
                "age": 26
            },
            "registered": {
                "date": "2005-07-25T09:49:14.012Z",
                "age": 19
            },
            "phone": "965-839-066",
            "cell": "631-141-869",
            "id": {
                "name": "DNI",
                "value": "23318924-A"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/40.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
            },
            "nat": "ES"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Vilma",
                "last": "Hautala"
            },
            "location": {
                "street": {
                    "number": 243,
                    "name": "Pirkankatu"
                },
                "city": "Brändö",
                "state": "Ostrobothnia",
                "country": "Finland",
                "postcode": 62866,
                "coordinates": {
                    "latitude": "3.9469",
                    "longitude": "-5.2667"
                },
                "timezone": {
                    "offset": "+5:00",
                    "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
                }
            },
            "email": "vilma.hautala@example.com",
            "login": {
                "uuid": "f435a523-aa05-49ec-a373-460b1f08e410",
                "username": "purplebutterfly486",
                "password": "weed420",
                "salt": "ZdW61rod",
                "md5": "49801954eef0f4678c91c88263685fe3",
                "sha1": "4a6c90eda21478547027dc1cfaf477c59ca6eaf3",
                "sha256": "9ef8720d4670f24b1951795f606b3fb3715c7d64c72897fde6278d5cb713ee7b"
            },
            "dob": {
                "date": "1993-08-25T00:07:07.577Z",
                "age": 31
            },
            "registered": {
                "date": "2009-08-18T04:29:54.298Z",
                "age": 15
            },
            "phone": "02-329-872",
            "cell": "041-335-87-58",
            "id": {
                "name": "HETU",
                "value": "NaNNA270undefined"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/21.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/21.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/21.jpg"
            },
            "nat": "FI"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Ladomira",
                "last": "Nalivaychuk"
            },
            "location": {
                "street": {
                    "number": 2964,
                    "name": "Komarova"
                },
                "city": "Zinkiv",
                "state": "Ivano-Frankivska",
                "country": "Ukraine",
                "postcode": 75086,
                "coordinates": {
                    "latitude": "5.7971",
                    "longitude": "-24.9242"
                },
                "timezone": {
                    "offset": "-8:00",
                    "description": "Pacific Time (US & Canada)"
                }
            },
            "email": "ladomira.nalivaychuk@example.com",
            "login": {
                "uuid": "f42e39f8-cd84-4618-8a63-c8099da334c2",
                "username": "goldenbutterfly637",
                "password": "kristina",
                "salt": "cyNizcKn",
                "md5": "95ce98c9e9bd4a2afb9ebf69e38fe918",
                "sha1": "a655059122f225a25299cb3113b2d9a20aafd7c2",
                "sha256": "38ba304f967cc6104e8be0c5bc61d8452a91116939b3194a6fd4ccf1f33a2d48"
            },
            "dob": {
                "date": "1948-11-08T10:58:15.103Z",
                "age": 76
            },
            "registered": {
                "date": "2003-09-21T02:26:55.132Z",
                "age": 21
            },
            "phone": "(067) C81-9026",
            "cell": "(096) U31-0051",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/39.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
            },
            "nat": "UA"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Diane",
                "last": "Gaillard"
            },
            "location": {
                "street": {
                    "number": 4052,
                    "name": "Quai Chauveau"
                },
                "city": "Roubaix",
                "state": "Guyane",
                "country": "France",
                "postcode": 13982,
                "coordinates": {
                    "latitude": "-56.0651",
                    "longitude": "-96.3689"
                },
                "timezone": {
                    "offset": "-10:00",
                    "description": "Hawaii"
                }
            },
            "email": "diane.gaillard@example.com",
            "login": {
                "uuid": "63ec810d-317d-4ae7-9950-e7be35eeb1c3",
                "username": "greendog190",
                "password": "magical",
                "salt": "p0uqmbnJ",
                "md5": "09f3c7a900139759b001a06306fede09",
                "sha1": "685c6c7bdbfa9a4999e1d56cd8ea32fd75a48640",
                "sha256": "113018005728f2e414dd35ce52190bfc1ec829f8bcf72a5582e73de2f95f8886"
            },
            "dob": {
                "date": "1960-07-21T15:12:36.990Z",
                "age": 64
            },
            "registered": {
                "date": "2006-01-29T10:57:00.025Z",
                "age": 19
            },
            "phone": "02-29-07-34-23",
            "cell": "06-55-30-07-06",
            "id": {
                "name": "INSEE",
                "value": "2600667904051 86"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/24.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/24.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/24.jpg"
            },
            "nat": "FR"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Damir",
                "last": "Nenezić"
            },
            "location": {
                "street": {
                    "number": 394,
                    "name": "Pudarački Put"
                },
                "city": "Lapovo",
                "state": "South Banat",
                "country": "Serbia",
                "postcode": 79241,
                "coordinates": {
                    "latitude": "10.4404",
                    "longitude": "137.5748"
                },
                "timezone": {
                    "offset": "+6:00",
                    "description": "Almaty, Dhaka, Colombo"
                }
            },
            "email": "damir.nenezic@example.com",
            "login": {
                "uuid": "4f017fc9-ad91-4b8f-8b82-6b73b356b222",
                "username": "blueostrich253",
                "password": "knight1",
                "salt": "zeoQy2i5",
                "md5": "8c2e13552550ab28bb24f5557d86d61a",
                "sha1": "d33b8b98eea0e12f82dc5bea224556098afd067a",
                "sha256": "6734406325f868e4ebfcb292fd7c362f250f0281702e286fba99cec62afeac21"
            },
            "dob": {
                "date": "1952-11-16T06:52:22.403Z",
                "age": 72
            },
            "registered": {
                "date": "2013-08-26T06:00:35.910Z",
                "age": 11
            },
            "phone": "012-8432-062",
            "cell": "063-0479-215",
            "id": {
                "name": "SID",
                "value": "065613826"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/51.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
            },
            "nat": "RS"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Mélody",
                "last": "Brun"
            },
            "location": {
                "street": {
                    "number": 8708,
                    "name": "Avenue Debrousse"
                },
                "city": "Le Havre",
                "state": "Lot-et-Garonne",
                "country": "France",
                "postcode": 43892,
                "coordinates": {
                    "latitude": "-27.9137",
                    "longitude": "-72.9302"
                },
                "timezone": {
                    "offset": "+3:00",
                    "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
                }
            },
            "email": "melody.brun@example.com",
            "login": {
                "uuid": "25a8daa1-4c8d-4684-8602-4fbf585b680d",
                "username": "smallgorilla453",
                "password": "krypton",
                "salt": "GrkySbhp",
                "md5": "790a938feacedc3e478f2b7282f4d5d4",
                "sha1": "c589593094710c9dcbb0ea0132e48447c615d04d",
                "sha256": "6b68b03d9574a977a3e18dbbe1b72820cfa462ee8909db6b28f7ea2f945da2de"
            },
            "dob": {
                "date": "1979-02-22T19:54:18.795Z",
                "age": 46
            },
            "registered": {
                "date": "2006-05-23T17:53:27.620Z",
                "age": 18
            },
            "phone": "05-21-30-11-30",
            "cell": "06-66-69-18-09",
            "id": {
                "name": "INSEE",
                "value": "2790154937553 68"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/84.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/84.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/84.jpg"
            },
            "nat": "FR"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Nihal",
                "last": "Öztürk"
            },
            "location": {
                "street": {
                    "number": 9382,
                    "name": "Istiklal Cd"
                },
                "city": "Ankara",
                "state": "Erzincan",
                "country": "Turkey",
                "postcode": 14008,
                "coordinates": {
                    "latitude": "82.7369",
                    "longitude": "8.8067"
                },
                "timezone": {
                    "offset": "+5:00",
                    "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
                }
            },
            "email": "nihal.ozturk@example.com",
            "login": {
                "uuid": "b5bcfcb7-5972-4545-ae75-0ee11a86bd3c",
                "username": "heavysnake886",
                "password": "pyon",
                "salt": "43tOTl8P",
                "md5": "2e3e60a6e16c375eb6744f985e4f8710",
                "sha1": "2d622e11e4623ae9ebe3ff0e44a710c3e451f7c6",
                "sha256": "f006b624527ef6c24b7e5e3e4f1ddcadc1f2ae0d0debdb7a156bb65371875ad8"
            },
            "dob": {
                "date": "1963-09-24T09:49:19.493Z",
                "age": 61
            },
            "registered": {
                "date": "2006-04-13T07:13:24.367Z",
                "age": 18
            },
            "phone": "(710)-411-4608",
            "cell": "(644)-730-2992",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/24.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/24.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/24.jpg"
            },
            "nat": "TR"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Sam",
                "last": "Mandelid"
            },
            "location": {
                "street": {
                    "number": 2471,
                    "name": "Mikael Hertzbergs vei"
                },
                "city": "Spydeberg",
                "state": "Akershus",
                "country": "Norway",
                "postcode": "5254",
                "coordinates": {
                    "latitude": "69.3449",
                    "longitude": "-135.8200"
                },
                "timezone": {
                    "offset": "+9:30",
                    "description": "Adelaide, Darwin"
                }
            },
            "email": "sam.mandelid@example.com",
            "login": {
                "uuid": "5b77d499-8cec-4c6f-956c-a87dd93a98bd",
                "username": "whitesnake723",
                "password": "alpha",
                "salt": "7LmcGn7F",
                "md5": "a924ac55bc1cbebfc8150ddb9efbf50d",
                "sha1": "81d351ba6bb7385927542b16557fd0f99c26cbfb",
                "sha256": "2463a282fd21d66448aee8126ad4ed88d6e97b08c4a803431bf33f079e126d1b"
            },
            "dob": {
                "date": "1950-08-02T16:27:03.627Z",
                "age": 74
            },
            "registered": {
                "date": "2003-02-28T13:49:55.820Z",
                "age": 21
            },
            "phone": "51227305",
            "cell": "41187611",
            "id": {
                "name": "FN",
                "value": "02085030976"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/72.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/72.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/72.jpg"
            },
            "nat": "NO"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Nick",
                "last": "Griffin"
            },
            "location": {
                "street": {
                    "number": 6882,
                    "name": "The Crescent"
                },
                "city": "Clonakilty",
                "state": "Kerry",
                "country": "Ireland",
                "postcode": 67255,
                "coordinates": {
                    "latitude": "15.9960",
                    "longitude": "45.0978"
                },
                "timezone": {
                    "offset": "-8:00",
                    "description": "Pacific Time (US & Canada)"
                }
            },
            "email": "nick.griffin@example.com",
            "login": {
                "uuid": "3fd4b2bc-2e73-4eef-9924-609a44d4222b",
                "username": "silverfish359",
                "password": "garion",
                "salt": "DwCcoqCc",
                "md5": "14357fb86d4a0c77a94f7cf6b826e441",
                "sha1": "cf52e75fff9272419e8243fe5908f2bb5804dfff",
                "sha256": "4880154deda01a9cac0b73186ad3e6a2b8f7e1ba70f24318712601f79b15bf05"
            },
            "dob": {
                "date": "1990-08-26T03:42:23.316Z",
                "age": 34
            },
            "registered": {
                "date": "2002-12-10T00:33:26.511Z",
                "age": 22
            },
            "phone": "061-790-3676",
            "cell": "081-825-7136",
            "id": {
                "name": "PPS",
                "value": "4966046T"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/76.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/76.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/76.jpg"
            },
            "nat": "IE"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Sheila",
                "last": "Campbell"
            },
            "location": {
                "street": {
                    "number": 1400,
                    "name": "Blossom Hill Rd"
                },
                "city": "Wollongong",
                "state": "Northern Territory",
                "country": "Australia",
                "postcode": 7944,
                "coordinates": {
                    "latitude": "-65.6609",
                    "longitude": "55.7274"
                },
                "timezone": {
                    "offset": "-8:00",
                    "description": "Pacific Time (US & Canada)"
                }
            },
            "email": "sheila.campbell@example.com",
            "login": {
                "uuid": "f3ec8aaf-fbc3-4aac-9e66-bf7099ab8ff3",
                "username": "bigfish567",
                "password": "margie",
                "salt": "7iyNzGJw",
                "md5": "4b77da18b698fad3ea72d27dbb339262",
                "sha1": "14682ca46e60422b4bb2354709d2a4b4b280b1d3",
                "sha256": "b73028fa28cbc2c39ebc86c012e584148547a3e32d6336970bd14e9918caf12d"
            },
            "dob": {
                "date": "1971-09-01T22:16:59.982Z",
                "age": 53
            },
            "registered": {
                "date": "2006-08-28T00:30:48.419Z",
                "age": 18
            },
            "phone": "03-5536-7878",
            "cell": "0484-054-545",
            "id": {
                "name": "TFN",
                "value": "188771142"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/72.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
            },
            "nat": "AU"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Svitodara",
                "last": "Batig"
            },
            "location": {
                "street": {
                    "number": 1835,
                    "name": "Nizhnya Gorova"
                },
                "city": "Rudki",
                "state": "Zakarpatska",
                "country": "Ukraine",
                "postcode": 19105,
                "coordinates": {
                    "latitude": "-79.4343",
                    "longitude": "-42.0688"
                },
                "timezone": {
                    "offset": "-12:00",
                    "description": "Eniwetok, Kwajalein"
                }
            },
            "email": "svitodara.batig@example.com",
            "login": {
                "uuid": "428b20a4-7fe7-4251-88b1-338b9cf7013e",
                "username": "tinygoose441",
                "password": "blackcat",
                "salt": "aWFroogx",
                "md5": "c57f4ff0bb91e4b444287f0122a1fb5a",
                "sha1": "07494f72747c94567a61fa388bd59d09b36b1d1b",
                "sha256": "09c736040f3adc0398b86f1b0c790231d931b6a8cea41947d55f389a26f07564"
            },
            "dob": {
                "date": "1997-03-18T04:02:18.380Z",
                "age": 27
            },
            "registered": {
                "date": "2010-03-21T06:04:38.370Z",
                "age": 14
            },
            "phone": "(099) S25-4640",
            "cell": "(097) Z51-7353",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/52.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
            },
            "nat": "UA"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Noham",
                "last": "Simon"
            },
            "location": {
                "street": {
                    "number": 5845,
                    "name": "Place de la Mairie"
                },
                "city": "Pau",
                "state": "Saône-et-Loire",
                "country": "France",
                "postcode": 91196,
                "coordinates": {
                    "latitude": "-24.3786",
                    "longitude": "-152.2344"
                },
                "timezone": {
                    "offset": "+3:30",
                    "description": "Tehran"
                }
            },
            "email": "noham.simon@example.com",
            "login": {
                "uuid": "d145d78a-39ab-44bf-9079-92122ab4cfdb",
                "username": "yellowswan396",
                "password": "brett",
                "salt": "lZReBHvR",
                "md5": "1ea57737eed8c08941684f77a17518d5",
                "sha1": "acdb3957663ffefe8093d53cecc26cd987bede28",
                "sha256": "992a933b2d4b9e6bf5ebad13a1092b2739bed587f719d723dffa9b8a36320465"
            },
            "dob": {
                "date": "1991-10-05T02:32:58.876Z",
                "age": 33
            },
            "registered": {
                "date": "2014-01-09T21:19:01.211Z",
                "age": 11
            },
            "phone": "02-73-49-85-76",
            "cell": "06-43-31-24-87",
            "id": {
                "name": "INSEE",
                "value": "1910907376055 19"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/34.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
            },
            "nat": "FR"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Rasmus",
                "last": "Andersen"
            },
            "location": {
                "street": {
                    "number": 5031,
                    "name": "Oddervej"
                },
                "city": "Vesterborg",
                "state": "Sjælland",
                "country": "Denmark",
                "postcode": 35790,
                "coordinates": {
                    "latitude": "15.4696",
                    "longitude": "-11.2125"
                },
                "timezone": {
                    "offset": "+2:00",
                    "description": "Kaliningrad, South Africa"
                }
            },
            "email": "rasmus.andersen@example.com",
            "login": {
                "uuid": "ba8158ac-7f6c-4c7b-bf40-716fd8377de5",
                "username": "angryduck691",
                "password": "sally1",
                "salt": "ehkLbwOp",
                "md5": "69fe02953469c0735426f5df4e1db049",
                "sha1": "ef254be0d139fdc5119ba634f4a3e8c4fbb3f9f1",
                "sha256": "531c9e9d49a6915ee9997c497c5948cf64a71b41d19d5875051235cd3fe80a0a"
            },
            "dob": {
                "date": "1957-08-03T23:45:38.957Z",
                "age": 67
            },
            "registered": {
                "date": "2005-01-12T22:38:24.563Z",
                "age": 20
            },
            "phone": "41611278",
            "cell": "51497417",
            "id": {
                "name": "CPR",
                "value": "030857-6928"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/56.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
            },
            "nat": "DK"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Silvia",
                "last": "Burgos"
            },
            "location": {
                "street": {
                    "number": 714,
                    "name": "Eje vial Limón"
                },
                "city": "Ciudad Mendoza",
                "state": "Durango",
                "country": "Mexico",
                "postcode": 71303,
                "coordinates": {
                    "latitude": "23.7549",
                    "longitude": "-147.5431"
                },
                "timezone": {
                    "offset": "-8:00",
                    "description": "Pacific Time (US & Canada)"
                }
            },
            "email": "silvia.burgos@example.com",
            "login": {
                "uuid": "bfc5cd52-6480-4f0a-a271-52446dcd988b",
                "username": "ticklishcat814",
                "password": "lennon",
                "salt": "9sLV8jTE",
                "md5": "e136e1a8d71ecc335362c004af0b5caf",
                "sha1": "6a3d8f662d627abc341b09ad25f4ba1a0d21d978",
                "sha256": "2701dff44b34e208ae794ed4ff90133c904ddc263fadb99a04b20611e80a1705"
            },
            "dob": {
                "date": "1987-12-29T13:48:38.170Z",
                "age": 37
            },
            "registered": {
                "date": "2011-01-23T13:46:31.380Z",
                "age": 14
            },
            "phone": "(647) 484 0465",
            "cell": "(669) 369 3459",
            "id": {
                "name": "NSS",
                "value": "77 43 92 3219 8"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/16.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
            },
            "nat": "MX"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Alia",
                "last": "Beverdam"
            },
            "location": {
                "street": {
                    "number": 3336,
                    "name": "Bavelseparklaan"
                },
                "city": "Eastermar",
                "state": "Drenthe",
                "country": "Netherlands",
                "postcode": "8591 ZV",
                "coordinates": {
                    "latitude": "-52.4435",
                    "longitude": "133.6471"
                },
                "timezone": {
                    "offset": "+3:00",
                    "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
                }
            },
            "email": "alia.beverdam@example.com",
            "login": {
                "uuid": "b7fcfd4d-571b-4702-a860-3ba3434b6cb2",
                "username": "organicbird672",
                "password": "favorite",
                "salt": "OnjLv2MU",
                "md5": "47bfa241dc95dfabe1514d9ac83fd182",
                "sha1": "fbd89dfee8c20d499987b95b16e067f79742f568",
                "sha256": "cb8aade644d03a671e3f537ba3178f9a4044696fa08a86857a74f481be867203"
            },
            "dob": {
                "date": "1972-12-04T02:20:28.614Z",
                "age": 52
            },
            "registered": {
                "date": "2015-04-25T06:36:14.667Z",
                "age": 9
            },
            "phone": "(029) 3363450",
            "cell": "(06) 32938423",
            "id": {
                "name": "BSN",
                "value": "60249582"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/92.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
            },
            "nat": "NL"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Edmund",
                "last": "Stavland"
            },
            "location": {
                "street": {
                    "number": 1026,
                    "name": "Ansgar Sørlies vei"
                },
                "city": "Nordstrand",
                "state": "Hedmark",
                "country": "Norway",
                "postcode": "2055",
                "coordinates": {
                    "latitude": "40.3094",
                    "longitude": "16.3537"
                },
                "timezone": {
                    "offset": "-3:00",
                    "description": "Brazil, Buenos Aires, Georgetown"
                }
            },
            "email": "edmund.stavland@example.com",
            "login": {
                "uuid": "d101c296-1fed-4fad-9869-6c7cfe10ceb4",
                "username": "sadzebra947",
                "password": "515000",
                "salt": "Cu23BA0m",
                "md5": "688993960b9712b6d84abea838c1e6fb",
                "sha1": "9d9e7c396f0689879beecddf0cc5e8387ef43488",
                "sha256": "a997c73a5d0741581763beb7dcc76b71a97c7ab1e2cd945e6b809359724f84e4"
            },
            "dob": {
                "date": "1951-04-21T10:16:23.305Z",
                "age": 73
            },
            "registered": {
                "date": "2015-08-14T20:58:20.810Z",
                "age": 9
            },
            "phone": "69463919",
            "cell": "42317019",
            "id": {
                "name": "FN",
                "value": "21045147395"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/25.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
            },
            "nat": "NO"
        },
        {
            "gender": "male",
            "name": {
                "title": "Monsieur",
                "first": "Jose",
                "last": "Bernard"
            },
            "location": {
                "street": {
                    "number": 624,
                    "name": "Rue de L'Abbé-Gillet"
                },
                "city": "Gündlischwand",
                "state": "Basel-Landschaft",
                "country": "Switzerland",
                "postcode": 8567,
                "coordinates": {
                    "latitude": "70.8193",
                    "longitude": "-151.4529"
                },
                "timezone": {
                    "offset": "-1:00",
                    "description": "Azores, Cape Verde Islands"
                }
            },
            "email": "jose.bernard@example.com",
            "login": {
                "uuid": "33a5d46d-f25e-40c5-a736-18c58a1ca54e",
                "username": "brownzebra774",
                "password": "mylife",
                "salt": "bDcmEwHf",
                "md5": "cba345326ed61a168604cb4111b4c2df",
                "sha1": "50565b9184988a747cf7d8279371a54393f0ad32",
                "sha256": "08d5b7ea40639609faf923316842b8fe12326cdbadf11db2ab3d91008efc5616"
            },
            "dob": {
                "date": "1959-04-24T13:21:55.528Z",
                "age": 65
            },
            "registered": {
                "date": "2010-01-14T23:59:27.477Z",
                "age": 15
            },
            "phone": "075 536 21 83",
            "cell": "078 854 23 90",
            "id": {
                "name": "AVS",
                "value": "756.8029.1955.08"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/26.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/26.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/26.jpg"
            },
            "nat": "CH"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Radogosta",
                "last": "Sachenko"
            },
            "location": {
                "street": {
                    "number": 3705,
                    "name": "Provulok Marini Raskovoyi"
                },
                "city": "Brodi",
                "state": "Cherkaska",
                "country": "Ukraine",
                "postcode": 80352,
                "coordinates": {
                    "latitude": "-6.0266",
                    "longitude": "58.9296"
                },
                "timezone": {
                    "offset": "-5:00",
                    "description": "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            "email": "radogosta.sachenko@example.com",
            "login": {
                "uuid": "daf2b92a-8476-4f63-a467-6baf15d12f8c",
                "username": "purplemeercat879",
                "password": "damian",
                "salt": "NMoun0Kh",
                "md5": "afcffb3b2a4d809f1ea28b38124ae757",
                "sha1": "2a2e82be55ab0e0bf1a7b30ec8674647f79075fb",
                "sha256": "de5f96a7801d80ab3f90e15b28525baaeaa666ffe68f4dd00f162ddaa0af08ad"
            },
            "dob": {
                "date": "1964-09-17T20:05:21.262Z",
                "age": 60
            },
            "registered": {
                "date": "2011-09-02T15:07:25.471Z",
                "age": 13
            },
            "phone": "(068) G98-0634",
            "cell": "(097) O15-8655",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/72.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
            },
            "nat": "UA"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Fred",
                "last": "Luft"
            },
            "location": {
                "street": {
                    "number": 7206,
                    "name": "Neue Straße"
                },
                "city": "Lauterecken",
                "state": "Hessen",
                "country": "Germany",
                "postcode": 49047,
                "coordinates": {
                    "latitude": "-0.3123",
                    "longitude": "153.3712"
                },
                "timezone": {
                    "offset": "-11:00",
                    "description": "Midway Island, Samoa"
                }
            },
            "email": "fred.luft@example.com",
            "login": {
                "uuid": "b1ed6b55-9f0a-4329-a081-bcafcd37b165",
                "username": "organiccat320",
                "password": "weiner",
                "salt": "9HJgoGPL",
                "md5": "2a737dc55d59421f585ee1e872e68059",
                "sha1": "9543cbe09ab7047bc4dd567cb0e04279b8d2b0b4",
                "sha256": "a054e92c1a1dc83af83a0231e41369bcdc53b3ea987716822808a07cb1733475"
            },
            "dob": {
                "date": "1971-08-04T20:09:39.176Z",
                "age": 53
            },
            "registered": {
                "date": "2009-10-28T22:47:00.858Z",
                "age": 15
            },
            "phone": "0878-9704803",
            "cell": "0176-1502336",
            "id": {
                "name": "SVNR",
                "value": "18 040871 L 218"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/48.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/48.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/48.jpg"
            },
            "nat": "DE"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Kaitlin",
                "last": "Hill"
            },
            "location": {
                "street": {
                    "number": 1259,
                    "name": "Richmond Park"
                },
                "city": "Mountmellick",
                "state": "South Dublin",
                "country": "Ireland",
                "postcode": 73013,
                "coordinates": {
                    "latitude": "-36.6256",
                    "longitude": "154.0729"
                },
                "timezone": {
                    "offset": "-5:00",
                    "description": "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            "email": "kaitlin.hill@example.com",
            "login": {
                "uuid": "c7640e17-97a2-4eee-9174-76f1c5b39371",
                "username": "purplewolf685",
                "password": "musica",
                "salt": "j6ZlVXej",
                "md5": "0495689bdba03230a162e1b06ddde97d",
                "sha1": "e7af5cd73913c188f2cb42ea1b60f465993d07ce",
                "sha256": "479adcc87b294d0aa87ba6cb3b670d8cce46942aaec010e955bf9362e9307d63"
            },
            "dob": {
                "date": "1961-07-25T17:51:58.026Z",
                "age": 63
            },
            "registered": {
                "date": "2006-09-13T23:02:00.444Z",
                "age": 18
            },
            "phone": "041-671-4041",
            "cell": "081-928-4190",
            "id": {
                "name": "PPS",
                "value": "4879020T"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/88.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
            },
            "nat": "IE"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Nitesh",
                "last": "Anchan"
            },
            "location": {
                "street": {
                    "number": 8206,
                    "name": "Carter Rd Promenade"
                },
                "city": "Bhind",
                "state": "Dadra and Nagar Haveli",
                "country": "India",
                "postcode": 19580,
                "coordinates": {
                    "latitude": "70.6801",
                    "longitude": "-32.5515"
                },
                "timezone": {
                    "offset": "+3:00",
                    "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
                }
            },
            "email": "nitesh.anchan@example.com",
            "login": {
                "uuid": "8a62696f-5b52-4bd5-b28a-bce03897bfe7",
                "username": "bluetiger515",
                "password": "fullmoon",
                "salt": "4jDkjP65",
                "md5": "2ba6070a62f0068eceaaed552af2365a",
                "sha1": "58e9d8c7d287f9c33e2c2fa3446c954a15be283f",
                "sha256": "ed39e103133b8a8c74192ed86c325f031254879bae9b9a6aaa2c1005e6ac4f93"
            },
            "dob": {
                "date": "1974-09-12T22:43:32.625Z",
                "age": 50
            },
            "registered": {
                "date": "2016-08-27T18:03:26.633Z",
                "age": 8
            },
            "phone": "9283192679",
            "cell": "7401384956",
            "id": {
                "name": "UIDAI",
                "value": "228236919953"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/58.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
            },
            "nat": "IN"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Federico",
                "last": "Ureña"
            },
            "location": {
                "street": {
                    "number": 4201,
                    "name": "Callejón Lozada"
                },
                "city": "Alamos",
                "state": "Sinaloa",
                "country": "Mexico",
                "postcode": 18378,
                "coordinates": {
                    "latitude": "2.4101",
                    "longitude": "-146.8539"
                },
                "timezone": {
                    "offset": "-12:00",
                    "description": "Eniwetok, Kwajalein"
                }
            },
            "email": "federico.urena@example.com",
            "login": {
                "uuid": "9af82753-0ef0-4d7f-99e6-c77ec36fbdc6",
                "username": "smallostrich370",
                "password": "joejoe",
                "salt": "94ZyBTTc",
                "md5": "b93bbd4ebc4db4de59f14b6eaffc221c",
                "sha1": "1a18e57784c375ab6532d01ed5ca2d97641a1fd6",
                "sha256": "d62c4b23654d3d5b66ea5e340fe73b58bc906ba7f95c6eea907a2acd5bc2fde5"
            },
            "dob": {
                "date": "1987-07-09T04:35:45.329Z",
                "age": 37
            },
            "registered": {
                "date": "2010-09-02T06:28:38.155Z",
                "age": 14
            },
            "phone": "(601) 523 5215",
            "cell": "(633) 258 3676",
            "id": {
                "name": "NSS",
                "value": "71 30 20 9070 1"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/68.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/68.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/68.jpg"
            },
            "nat": "MX"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Rachel",
                "last": "Mcguinness"
            },
            "location": {
                "street": {
                    "number": 254,
                    "name": "Galway Road"
                },
                "city": "Gorey",
                "state": "Wexford",
                "country": "Ireland",
                "postcode": 47033,
                "coordinates": {
                    "latitude": "60.7186",
                    "longitude": "44.6500"
                },
                "timezone": {
                    "offset": "+9:00",
                    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            "email": "rachel.mcguinness@example.com",
            "login": {
                "uuid": "ebcb169f-c5f4-48ab-b17e-cc58f11ca927",
                "username": "happymeercat766",
                "password": "security",
                "salt": "hol2YS9h",
                "md5": "44898554dbe9da5026ea79729f9c1068",
                "sha1": "c9a2a5c717d3c27d0a84b4ce09cbd6fdf501af2b",
                "sha256": "8d76808c65837a10feb950be0edcf0057d2c2adcf3d3db57b1face90e7f44412"
            },
            "dob": {
                "date": "1993-01-13T00:46:20.781Z",
                "age": 32
            },
            "registered": {
                "date": "2009-02-20T13:46:08.554Z",
                "age": 16
            },
            "phone": "031-470-8727",
            "cell": "081-913-7171",
            "id": {
                "name": "PPS",
                "value": "9612278T"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/55.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/55.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/55.jpg"
            },
            "nat": "IE"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "محیا",
                "last": "سالاری"
            },
            "location": {
                "street": {
                    "number": 5320,
                    "name": "شهید بهشتی"
                },
                "city": "نجف‌آباد",
                "state": "آذربایجان شرقی",
                "country": "Iran",
                "postcode": 47406,
                "coordinates": {
                    "latitude": "-12.9255",
                    "longitude": "-39.4204"
                },
                "timezone": {
                    "offset": "-9:00",
                    "description": "Alaska"
                }
            },
            "email": "mhy.slry@example.com",
            "login": {
                "uuid": "fd16f305-5cc9-4b8e-b5b1-01a9f803b8f0",
                "username": "lazypanda696",
                "password": "homerj",
                "salt": "OIZqQgDQ",
                "md5": "6b79139fd08af7f1e80f9e8c6908a60e",
                "sha1": "8cde52fbf59395b764a985515f2c24f0a0d728f5",
                "sha256": "07199403d8d3b939291cbe5aafe6dc31496145c1a304c3dcb6e8c82867027423"
            },
            "dob": {
                "date": "1999-08-10T08:41:32.419Z",
                "age": 25
            },
            "registered": {
                "date": "2002-10-06T08:06:08.585Z",
                "age": 22
            },
            "phone": "008-20491500",
            "cell": "0978-917-5952",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/48.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/48.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/48.jpg"
            },
            "nat": "IR"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Bedete",
                "last": "Novaes"
            },
            "location": {
                "street": {
                    "number": 8480,
                    "name": "Rua Minas Gerais "
                },
                "city": "Cabo de Santo Agostinho",
                "state": "Pernambuco",
                "country": "Brazil",
                "postcode": 85156,
                "coordinates": {
                    "latitude": "63.4057",
                    "longitude": "75.4025"
                },
                "timezone": {
                    "offset": "+8:00",
                    "description": "Beijing, Perth, Singapore, Hong Kong"
                }
            },
            "email": "bedete.novaes@example.com",
            "login": {
                "uuid": "c8d84b50-28d8-4c73-b677-7d95092ba3b5",
                "username": "crazyduck899",
                "password": "skidoo",
                "salt": "S2zcmsjt",
                "md5": "a4e77168c35068c4f8e93368bdb66392",
                "sha1": "7d8bc389105a7c1d1a67582aeb9263d1e2c0d500",
                "sha256": "f1ea656e9721e5b486bdc89d03fa45dd16060e877b83300807482a2bf1a8a276"
            },
            "dob": {
                "date": "1946-10-13T21:56:53.915Z",
                "age": 78
            },
            "registered": {
                "date": "2021-01-12T11:02:55.853Z",
                "age": 4
            },
            "phone": "(61) 7085-3651",
            "cell": "(38) 2665-8972",
            "id": {
                "name": "CPF",
                "value": "700.263.960-99"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/2.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/2.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
            },
            "nat": "BR"
        },
        {
            "gender": "male",
            "name": {
                "title": "Monsieur",
                "first": "Theo",
                "last": "Blanc"
            },
            "location": {
                "street": {
                    "number": 3840,
                    "name": "Boulevard de la Duchère"
                },
                "city": "Goldach",
                "state": "Basel-Landschaft",
                "country": "Switzerland",
                "postcode": 1208,
                "coordinates": {
                    "latitude": "59.2919",
                    "longitude": "-57.8870"
                },
                "timezone": {
                    "offset": "+4:30",
                    "description": "Kabul"
                }
            },
            "email": "theo.blanc@example.com",
            "login": {
                "uuid": "db86436c-ecf3-4152-a7e1-6f52caffd37f",
                "username": "greenpanda459",
                "password": "chuckles",
                "salt": "GlGCW9B6",
                "md5": "663e4a7aa9a9793f996c8f1913b30789",
                "sha1": "87535e7ed45e2f1a9c5aa07d4fc07d08e8755c24",
                "sha256": "271be9da6442dd2c22f2e787af3667ee9e3603efe4a734e7a797a70e6af2ca34"
            },
            "dob": {
                "date": "1976-09-01T00:31:17.637Z",
                "age": 48
            },
            "registered": {
                "date": "2018-03-17T13:46:41.035Z",
                "age": 6
            },
            "phone": "076 752 89 51",
            "cell": "078 810 11 81",
            "id": {
                "name": "AVS",
                "value": "756.6304.5713.63"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/11.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/11.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/11.jpg"
            },
            "nat": "CH"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Jing",
                "last": "Kolen"
            },
            "location": {
                "street": {
                    "number": 5175,
                    "name": "Hofmanstraat"
                },
                "city": "De Westereen",
                "state": "Flevoland",
                "country": "Netherlands",
                "postcode": "5202 HT",
                "coordinates": {
                    "latitude": "71.0438",
                    "longitude": "68.4543"
                },
                "timezone": {
                    "offset": "-5:00",
                    "description": "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            "email": "jing.kolen@example.com",
            "login": {
                "uuid": "1cd79666-ef75-44dd-b2e1-0b0d773d3ce0",
                "username": "silversnake492",
                "password": "amanda",
                "salt": "NdDUrsuS",
                "md5": "f05fa1a32336a3c1e7f42139c05368e9",
                "sha1": "c591aeebd468a759ca7134623b8e5285557dc750",
                "sha256": "3ac0bcb3a34939d961475ee827cd03f24b633aeef9043e5ba2775e2a34cacf9d"
            },
            "dob": {
                "date": "1992-01-07T14:52:20.718Z",
                "age": 33
            },
            "registered": {
                "date": "2022-03-24T22:48:55.084Z",
                "age": 2
            },
            "phone": "(0972) 240945",
            "cell": "(06) 18226479",
            "id": {
                "name": "BSN",
                "value": "16101846"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/73.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/73.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/73.jpg"
            },
            "nat": "NL"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Austin",
                "last": "Morris"
            },
            "location": {
                "street": {
                    "number": 5882,
                    "name": "Hoon Hay Road"
                },
                "city": "Auckland",
                "state": "Tasman",
                "country": "New Zealand",
                "postcode": 46842,
                "coordinates": {
                    "latitude": "51.4962",
                    "longitude": "-24.4800"
                },
                "timezone": {
                    "offset": "+4:00",
                    "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
                }
            },
            "email": "austin.morris@example.com",
            "login": {
                "uuid": "2b5e1583-243f-4f88-9eeb-f053f65cfbd2",
                "username": "sadbird467",
                "password": "briana",
                "salt": "mCETO3Cp",
                "md5": "e0c1ef98caa4191b80f0c932cac1a3f1",
                "sha1": "8fa26140455bdb92f09d665299490359366ce275",
                "sha256": "b9b6a06b762c4a371672a5ccffb7ab200e0f72048fd0664a282f99bd87c77835"
            },
            "dob": {
                "date": "1948-11-04T14:14:53.356Z",
                "age": 76
            },
            "registered": {
                "date": "2009-11-12T07:34:04.682Z",
                "age": 15
            },
            "phone": "(267)-494-8596",
            "cell": "(953)-826-8721",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/29.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/29.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/29.jpg"
            },
            "nat": "NZ"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Antonija",
                "last": "Stefanović"
            },
            "location": {
                "street": {
                    "number": 9004,
                    "name": "Milosava Vlajića"
                },
                "city": "Valjevo",
                "state": "Moravica",
                "country": "Serbia",
                "postcode": 41661,
                "coordinates": {
                    "latitude": "76.3764",
                    "longitude": "-131.5514"
                },
                "timezone": {
                    "offset": "-6:00",
                    "description": "Central Time (US & Canada), Mexico City"
                }
            },
            "email": "antonija.stefanovic@example.com",
            "login": {
                "uuid": "f4ea0d4c-0e4f-4817-97fc-49d88b31447f",
                "username": "bluewolf544",
                "password": "chocolate",
                "salt": "szMfPHn3",
                "md5": "0f8e48d70d2f5746d55bf8dc8b59730d",
                "sha1": "6c3267c27d459aef73b5d6909fa82d61f6e4a85a",
                "sha256": "401f7b769e3cfbd90b8adf0f9303a78ec0c4573c4d0ff0fc0025d12a66fba008"
            },
            "dob": {
                "date": "1989-03-11T02:17:51.449Z",
                "age": 35
            },
            "registered": {
                "date": "2003-10-08T08:05:28.346Z",
                "age": 21
            },
            "phone": "016-9168-372",
            "cell": "067-4948-062",
            "id": {
                "name": "SID",
                "value": "939625638"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/24.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/24.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/24.jpg"
            },
            "nat": "RS"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Kaya",
                "last": "Tütüncü"
            },
            "location": {
                "street": {
                    "number": 102,
                    "name": "Talak Göktepe Cd"
                },
                "city": "Zonguldak",
                "state": "Çanakkale",
                "country": "Turkey",
                "postcode": 27461,
                "coordinates": {
                    "latitude": "56.9508",
                    "longitude": "-92.3074"
                },
                "timezone": {
                    "offset": "-9:00",
                    "description": "Alaska"
                }
            },
            "email": "kaya.tutuncu@example.com",
            "login": {
                "uuid": "d8ac8dce-3145-4dbd-aa06-ac56086aae7a",
                "username": "angrybird201",
                "password": "smooth",
                "salt": "CRZrBin4",
                "md5": "fc61df754665d6ccf720c1c944dc228a",
                "sha1": "47b365f0bb416924bd0c5c0b9db2778bcc95a6a0",
                "sha256": "8f20762fbf6587810e25c68be6daf8599bb64f1d7766416382283aa64d783d00"
            },
            "dob": {
                "date": "1958-06-28T19:58:08.238Z",
                "age": 66
            },
            "registered": {
                "date": "2021-10-31T12:52:23.274Z",
                "age": 3
            },
            "phone": "(289)-278-5884",
            "cell": "(993)-016-8827",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/4.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
            },
            "nat": "TR"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Clarence",
                "last": "Rivera"
            },
            "location": {
                "street": {
                    "number": 8566,
                    "name": "Central St"
                },
                "city": "Melbourne",
                "state": "Western Australia",
                "country": "Australia",
                "postcode": 5459,
                "coordinates": {
                    "latitude": "-29.0857",
                    "longitude": "-88.2108"
                },
                "timezone": {
                    "offset": "-6:00",
                    "description": "Central Time (US & Canada), Mexico City"
                }
            },
            "email": "clarence.rivera@example.com",
            "login": {
                "uuid": "48eeccbf-3a5c-46c1-b459-356d99f3c3aa",
                "username": "purplemouse961",
                "password": "spiral",
                "salt": "zEUdLCzm",
                "md5": "adf71f74a28641b62897155c43a077ee",
                "sha1": "be8c956ed46a377025d2b1d8134e6ec1a20d9ad2",
                "sha256": "be6a7fc261afabd8737d46a3ddbcf613f532fc02088063606def69e60d1de8e3"
            },
            "dob": {
                "date": "1951-05-02T14:07:08.291Z",
                "age": 73
            },
            "registered": {
                "date": "2013-03-31T02:01:35.817Z",
                "age": 11
            },
            "phone": "04-1903-8509",
            "cell": "0454-826-339",
            "id": {
                "name": "TFN",
                "value": "328202697"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/5.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/5.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg"
            },
            "nat": "AU"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Rhonda",
                "last": "Morgan"
            },
            "location": {
                "street": {
                    "number": 6002,
                    "name": "Mcclellan Rd"
                },
                "city": "Aubrey",
                "state": "Texas",
                "country": "United States",
                "postcode": 69306,
                "coordinates": {
                    "latitude": "-18.4978",
                    "longitude": "50.2079"
                },
                "timezone": {
                    "offset": "+3:00",
                    "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
                }
            },
            "email": "rhonda.morgan@example.com",
            "login": {
                "uuid": "d0b45095-40a5-4899-9478-a4321b9ee8a4",
                "username": "happygoose668",
                "password": "shuan",
                "salt": "FshdrYI7",
                "md5": "70d0b7925a2bbf083563c05ab3e71c56",
                "sha1": "b13452c3d83d686e03096e6b827d27610edfd78e",
                "sha256": "1ae241aa49e713b07e3269458900291265bd1d4ec88a98d0b5ae2822e1b17720"
            },
            "dob": {
                "date": "1984-07-22T21:00:27.455Z",
                "age": 40
            },
            "registered": {
                "date": "2004-04-17T15:13:58.560Z",
                "age": 20
            },
            "phone": "(530) 298-8985",
            "cell": "(720) 452-7632",
            "id": {
                "name": "SSN",
                "value": "059-65-2197"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/43.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
            },
            "nat": "US"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Charlie",
                "last": "Gilbert"
            },
            "location": {
                "street": {
                    "number": 6113,
                    "name": "E Little York Rd"
                },
                "city": "Sydney",
                "state": "Western Australia",
                "country": "Australia",
                "postcode": 9667,
                "coordinates": {
                    "latitude": "-19.2395",
                    "longitude": "-1.6424"
                },
                "timezone": {
                    "offset": "-3:30",
                    "description": "Newfoundland"
                }
            },
            "email": "charlie.gilbert@example.com",
            "login": {
                "uuid": "3a721590-0ff5-4912-95d3-8bc5b18d2fd7",
                "username": "yellowdog877",
                "password": "butler",
                "salt": "BMdQXioz",
                "md5": "fd7f9fe797e7d21e072aaf44f1999949",
                "sha1": "e8afbe647a200e648ed86e6e4a96a5ea9f10625e",
                "sha256": "009efbfdf0a339d49d0bc33260d35fec0e781208d85ad20a437ba683d4010ed4"
            },
            "dob": {
                "date": "1957-10-26T05:53:58.677Z",
                "age": 67
            },
            "registered": {
                "date": "2014-02-13T11:29:51.382Z",
                "age": 11
            },
            "phone": "06-4447-0461",
            "cell": "0412-039-278",
            "id": {
                "name": "TFN",
                "value": "162576536"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/78.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/78.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/78.jpg"
            },
            "nat": "AU"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Tilde",
                "last": "Christensen"
            },
            "location": {
                "street": {
                    "number": 2557,
                    "name": "Gammel Kongevej"
                },
                "city": "Haslev",
                "state": "Hovedstaden",
                "country": "Denmark",
                "postcode": 88453,
                "coordinates": {
                    "latitude": "-77.5103",
                    "longitude": "-145.9219"
                },
                "timezone": {
                    "offset": "+7:00",
                    "description": "Bangkok, Hanoi, Jakarta"
                }
            },
            "email": "tilde.christensen@example.com",
            "login": {
                "uuid": "2bd70ceb-21b4-459d-a819-907d6209ed03",
                "username": "blackswan127",
                "password": "moritz",
                "salt": "sCo8tBuS",
                "md5": "e5055e57a3891050ef1e518cdc5bb945",
                "sha1": "95b414b6b15eb728156d52c8e90fc115428a0c4d",
                "sha256": "ed025aff9ffdfd02c8447a9044c02445fb228877b0553f6a2c649615c59c4632"
            },
            "dob": {
                "date": "1971-03-11T18:44:27.036Z",
                "age": 53
            },
            "registered": {
                "date": "2021-04-24T17:31:20.071Z",
                "age": 3
            },
            "phone": "38250355",
            "cell": "23301342",
            "id": {
                "name": "CPR",
                "value": "110371-9887"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/72.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
            },
            "nat": "DK"
        },
        {
            "gender": "female",
            "name": {
                "title": "Madame",
                "first": "Alina",
                "last": "Morin"
            },
            "location": {
                "street": {
                    "number": 3909,
                    "name": "Rue de L'Abbé-Groult"
                },
                "city": "Aarberg",
                "state": "Jura",
                "country": "Switzerland",
                "postcode": 5333,
                "coordinates": {
                    "latitude": "-10.0768",
                    "longitude": "127.9756"
                },
                "timezone": {
                    "offset": "+4:00",
                    "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
                }
            },
            "email": "alina.morin@example.com",
            "login": {
                "uuid": "4e65f78f-dfbc-4f37-b1c2-a9d47dd3e1cd",
                "username": "sadtiger208",
                "password": "valencia",
                "salt": "96pGQphZ",
                "md5": "69e8a8794fe86c000c455be53f54a264",
                "sha1": "dd69dc910fadb7722906841ab2a9cee0a8e6d9a7",
                "sha256": "fc5e6ade1cee84534432a49b3974beab646a8a4cfff06586602c13fb67d3fd59"
            },
            "dob": {
                "date": "1946-10-07T07:40:24.599Z",
                "age": 78
            },
            "registered": {
                "date": "2018-09-28T07:55:15.447Z",
                "age": 6
            },
            "phone": "076 532 99 92",
            "cell": "075 516 71 16",
            "id": {
                "name": "AVS",
                "value": "756.8875.2471.01"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/25.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/25.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/25.jpg"
            },
            "nat": "CH"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Reinder",
                "last": "Groen"
            },
            "location": {
                "street": {
                    "number": 9084,
                    "name": "Houtwijk"
                },
                "city": "Noardburgum",
                "state": "Limburg",
                "country": "Netherlands",
                "postcode": "8118 LE",
                "coordinates": {
                    "latitude": "86.5311",
                    "longitude": "7.4921"
                },
                "timezone": {
                    "offset": "+3:30",
                    "description": "Tehran"
                }
            },
            "email": "reinder.groen@example.com",
            "login": {
                "uuid": "f6f12ca4-a636-494a-8569-0e4388a97331",
                "username": "yellowzebra990",
                "password": "hansolo",
                "salt": "FfLcyTGg",
                "md5": "bddf116710fc9f3a679321418b534add",
                "sha1": "d4d1023fe916ff1197dff4285bcbd4f36fffa0db",
                "sha256": "1f1d093f2ef250d1046215aa0a11d1d1932989514e6fc1c105c4f7df0950c80f"
            },
            "dob": {
                "date": "1945-12-27T05:19:09.467Z",
                "age": 79
            },
            "registered": {
                "date": "2005-03-03T01:31:28.556Z",
                "age": 19
            },
            "phone": "(0249) 757606",
            "cell": "(06) 04188359",
            "id": {
                "name": "BSN",
                "value": "65704862"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/73.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/73.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/73.jpg"
            },
            "nat": "NL"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Bernardina",
                "last": "Novaes"
            },
            "location": {
                "street": {
                    "number": 8,
                    "name": "Rua Rio de Janeiro "
                },
                "city": "Itatiba",
                "state": "Espírito Santo",
                "country": "Brazil",
                "postcode": 43299,
                "coordinates": {
                    "latitude": "36.5042",
                    "longitude": "-44.3118"
                },
                "timezone": {
                    "offset": "-6:00",
                    "description": "Central Time (US & Canada), Mexico City"
                }
            },
            "email": "bernardina.novaes@example.com",
            "login": {
                "uuid": "82263997-e22b-48f9-9e3b-8ab9351a6f56",
                "username": "lazygorilla186",
                "password": "lost",
                "salt": "OjbZNVKT",
                "md5": "5c61d2ebca3ca3564f205c2ea9fe060d",
                "sha1": "11d375a83eb2f416c5abb05b497e95f927f02b6c",
                "sha256": "828d382a93083e84951f3bd4f04c08ee4857732ee6d04a42352a03911e44f5ae"
            },
            "dob": {
                "date": "1997-03-02T10:29:29.411Z",
                "age": 27
            },
            "registered": {
                "date": "2014-12-17T07:58:47.261Z",
                "age": 10
            },
            "phone": "(96) 4620-9142",
            "cell": "(19) 2822-8271",
            "id": {
                "name": "CPF",
                "value": "756.810.047-70"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/6.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/6.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/6.jpg"
            },
            "nat": "BR"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Valtteri",
                "last": "Kantola"
            },
            "location": {
                "street": {
                    "number": 8347,
                    "name": "Bulevardi"
                },
                "city": "Savitaipale",
                "state": "Northern Ostrobothnia",
                "country": "Finland",
                "postcode": 14818,
                "coordinates": {
                    "latitude": "-25.2049",
                    "longitude": "-88.2643"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "valtteri.kantola@example.com",
            "login": {
                "uuid": "1c8fd0e2-72b5-4d02-b182-da0411f6dd80",
                "username": "sadmouse606",
                "password": "shocker",
                "salt": "PAEsOgXM",
                "md5": "3c07f612f8434fe93e4b125865d69ae6",
                "sha1": "b70c233f578c553f88d5a74b7653767b74ba0ccc",
                "sha256": "b64cd90c5401fff05f700c1ea78af83da2e21b13285ea027a82bf787c6b8ed56"
            },
            "dob": {
                "date": "1960-10-06T16:15:45.854Z",
                "age": 64
            },
            "registered": {
                "date": "2017-01-30T23:06:22.629Z",
                "age": 8
            },
            "phone": "04-672-238",
            "cell": "041-427-54-30",
            "id": {
                "name": "HETU",
                "value": "NaNNA913undefined"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/47.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
            },
            "nat": "FI"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Clifford",
                "last": "Banks"
            },
            "location": {
                "street": {
                    "number": 4498,
                    "name": "North Street"
                },
                "city": "Ennis",
                "state": "Mayo",
                "country": "Ireland",
                "postcode": 24579,
                "coordinates": {
                    "latitude": "76.0461",
                    "longitude": "-107.7224"
                },
                "timezone": {
                    "offset": "-12:00",
                    "description": "Eniwetok, Kwajalein"
                }
            },
            "email": "clifford.banks@example.com",
            "login": {
                "uuid": "cb3b5663-8340-4120-96d9-bceab1224e8a",
                "username": "sadostrich213",
                "password": "maxwell",
                "salt": "G6okhOXb",
                "md5": "920464497977f7a087c9016aa23b180a",
                "sha1": "dfe2a6e40017ac6bab628348e09b00a16b3bdad3",
                "sha256": "d7fd4bd5e61050dfa1ffac8c6d42f851bc4bbd2e0a095d74ba1a117b438fa94c"
            },
            "dob": {
                "date": "2001-03-13T04:55:45.325Z",
                "age": 23
            },
            "registered": {
                "date": "2008-05-15T03:36:51.025Z",
                "age": 16
            },
            "phone": "011-287-3983",
            "cell": "081-435-1413",
            "id": {
                "name": "PPS",
                "value": "7964388T"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/59.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/59.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/59.jpg"
            },
            "nat": "IE"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Regina",
                "last": "Kolodiy"
            },
            "location": {
                "street": {
                    "number": 2040,
                    "name": "Olbrahta"
                },
                "city": "Korostishiv",
                "state": "Kiyivska",
                "country": "Ukraine",
                "postcode": 84868,
                "coordinates": {
                    "latitude": "-71.1086",
                    "longitude": "-108.1212"
                },
                "timezone": {
                    "offset": "-4:00",
                    "description": "Atlantic Time (Canada), Caracas, La Paz"
                }
            },
            "email": "regina.kolodiy@example.com",
            "login": {
                "uuid": "496a4cbe-2bb0-415c-9fd8-7164be7a6923",
                "username": "blueladybug628",
                "password": "titleist",
                "salt": "jUJG1fke",
                "md5": "8401776e9c62d693659810eac6bd568b",
                "sha1": "ecfd799ed923b4033074ea0fd6b65e075d25fb53",
                "sha256": "383f55f045f10a5fc9aeca01cc92e4f737f3d3b6628260d6ec791e7c0d702408"
            },
            "dob": {
                "date": "1998-10-14T21:16:49.229Z",
                "age": 26
            },
            "registered": {
                "date": "2019-02-06T19:15:34.581Z",
                "age": 6
            },
            "phone": "(068) B67-6896",
            "cell": "(096) M44-8611",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/0.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/0.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/0.jpg"
            },
            "nat": "UA"
        },
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Leposava",
                "last": "Jelačić"
            },
            "location": {
                "street": {
                    "number": 8677,
                    "name": "Narodne Republike"
                },
                "city": "Mitrovica",
                "state": "Kolubara",
                "country": "Serbia",
                "postcode": 90779,
                "coordinates": {
                    "latitude": "-63.5692",
                    "longitude": "-30.6605"
                },
                "timezone": {
                    "offset": "+8:00",
                    "description": "Beijing, Perth, Singapore, Hong Kong"
                }
            },
            "email": "leposava.jelacic@example.com",
            "login": {
                "uuid": "8fb0c53e-dfc2-40e2-9a59-a0d4d763b754",
                "username": "greensnake382",
                "password": "222333",
                "salt": "aWVR3Vw7",
                "md5": "8066136b87376abaf1fa45fc86447c24",
                "sha1": "23c1a1b3717b12feb8277d00ef5cecb2fc124f5e",
                "sha256": "eed21a5e1d0d0634c3e532ff9abcd6ba7ddfab2af88b3bdbf1717794d171d7b1"
            },
            "dob": {
                "date": "1959-01-01T05:12:00.461Z",
                "age": 66
            },
            "registered": {
                "date": "2010-12-06T16:14:29.028Z",
                "age": 14
            },
            "phone": "013-7139-353",
            "cell": "067-4375-296",
            "id": {
                "name": "SID",
                "value": "144871847"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/0.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/0.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/0.jpg"
            },
            "nat": "RS"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Annabelle",
                "last": "Liu"
            },
            "location": {
                "street": {
                    "number": 3070,
                    "name": "Grand Marais Ave"
                },
                "city": "Souris",
                "state": "Ontario",
                "country": "Canada",
                "postcode": "R7O 5U5",
                "coordinates": {
                    "latitude": "-82.8321",
                    "longitude": "-47.6141"
                },
                "timezone": {
                    "offset": "-7:00",
                    "description": "Mountain Time (US & Canada)"
                }
            },
            "email": "annabelle.liu@example.com",
            "login": {
                "uuid": "1a4350fd-3706-4130-bc78-25a11c4d4147",
                "username": "ticklishbear274",
                "password": "basket",
                "salt": "8FIMexn8",
                "md5": "9d46d038f8c256b153c0fa4f708121b3",
                "sha1": "1141c95e82d3caeb337c1045cbe52e8ac9dd778c",
                "sha256": "e41b47c36bb5b23cea956d5f66be95acdae5265fe6df7285e354629f2c60edc4"
            },
            "dob": {
                "date": "1985-10-14T07:07:58.858Z",
                "age": 39
            },
            "registered": {
                "date": "2008-06-11T01:00:46.801Z",
                "age": 16
            },
            "phone": "T23 Z81-4293",
            "cell": "T10 W16-1635",
            "id": {
                "name": "SIN",
                "value": "049905482"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/25.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/25.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/25.jpg"
            },
            "nat": "CA"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Ross",
                "last": "Thomas"
            },
            "location": {
                "street": {
                    "number": 4980,
                    "name": "Pecan Acres Ln"
                },
                "city": "Albany",
                "state": "Northern Territory",
                "country": "Australia",
                "postcode": 7586,
                "coordinates": {
                    "latitude": "21.9835",
                    "longitude": "-87.7842"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "ross.thomas@example.com",
            "login": {
                "uuid": "7aa77c98-f565-4d87-9d0e-089c3edece21",
                "username": "happybutterfly698",
                "password": "deaths",
                "salt": "imlAJ4qR",
                "md5": "ae721ec5f15514ce38d47db87b3ba220",
                "sha1": "5f0fe77a66bbd3a3083912591dcf48aa218386a6",
                "sha256": "1624b3596e9163334792cf280b1503b03270c423b5d30a7269be2eb83c89fc15"
            },
            "dob": {
                "date": "1997-03-04T05:12:11.020Z",
                "age": 27
            },
            "registered": {
                "date": "2004-02-02T16:58:53.448Z",
                "age": 21
            },
            "phone": "01-4033-0033",
            "cell": "0463-327-399",
            "id": {
                "name": "TFN",
                "value": "299339932"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/91.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/91.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/91.jpg"
            },
            "nat": "AU"
        }
    ],
    "info": {
        "seed": "2ae98c1cbacc8556",
        "results": 100,
        "page": 1,
        "version": "1.4"
    }
}
async function CreateCard(data) {
    loading.style.display = 'block'
    // let response = await fetch(`https://randomuser.me/api/?results=100`)
    // let data = await response.json()
    loading.style.display = 'none'
    let card = document.createElement("div")
    let icon = document.createElement("img")
    let name = document.createElement("h2")
    let age = document.createElement('p')
    let phone = document.createElement("p")
    let email = document.createElement('p')
    let map = document.createElement("p")
    card.classList.add('card')
    icon.classList.add('icon')
    name.classList.add('name')
    age.classList.add('age')
    phone.classList.add('phone')
    email.classList.add('email')
    map.classList.add('map')
    icon.src = data?.picture?.large
    name.innerHTML = ` ${data?.name?.first} ${data?.name?.last}`
    age.innerHTML = `Age: ${data?.dob?.age}`
    phone.innerHTML = `Phone: ${data?.phone}`
    email.innerHTML = `Email: ${data?.email}`
    map.innerHTML = `Manzil: ${data?.location.city} ${data?.location.state}`
    card.appendChild(icon)
    card.appendChild(name)
    card.appendChild(age)
    card.appendChild(phone)
    card.appendChild(email)
    card.appendChild(map)
    users.appendChild(card)
}

dates?.results.forEach(element => {
    CreateCard(element)
});

sort.addEventListener('input', () => {
    users.innerHTML = '';
    if (sort.value == 'Name') {
        dates?.results.forEach(element => {
            CreateCard(element)
        });
    } else {
        let ageSort = dates?.results.sort((a, b) => a?.dob?.age - b?.dob?.age)
        ageSort?.forEach(element => {
            CreateCard(element)
        });
    }
})

input.addEventListener('input', () => {
    users.innerHTML = ''
    if (sort.value == 'Name') {
        let inpSearch = dates?.results.filter((item) =>
            item.name.first.toLowerCase().includes(input.value.trim().toLowerCase()) +
            item.name.last.toLowerCase().includes(input.value.trim().toLowerCase())
        )
        inpSearch.forEach(element => {
            CreateCard(element)
        });
    } else {
        let inpSearchnum = dates?.results.filter((item) =>
            item.dob.age.toString().includes(input.value)
        )
        console.log(inpSearchnum);

        inpSearchnum.forEach(element => {
            CreateCard(element)
        });
    };
})