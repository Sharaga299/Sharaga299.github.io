const games = [
    { 
        id: 1, 
        title: "HELLDIVERS 2", 
        genre: "кооперативный шутер", 
        price: 3999, 
        rating: 8.8, 
        releaseDate: "2024-02-08", 
        developer: "Arrowhead Game Studios", 
        region: "Global", 
        image: "/img/helldivers_2.png",
        description: "Интенсивный кооперативный шутер с видом сверху, где вы сражаетесь с ордами врагов в галактических войнах.",
        systemRequirements: "ОС: Windows 10 64-bit, Процессор: Intel Core i5-6600K, Оперативная память: 12 GB, Видеокарта: NVIDIA GeForce GTX 960",
        reviews: [
            { user: "Стрелок42", text: "Адреналин зашкаливает, кооп с друзьями — огонь!", rating: 9 },
            { user: "Космо_Фан", text: "Баги иногда раздражают, но геймплей затягивает.", rating: 8 },
            { user: "Дивер_99", text: "Отличная командная игра, но соло сложновато.", rating: 8 },
            { user: "Галактика22", text: "Графика и эффекты на уровне, рекомендую!", rating: 9 },
            { user: "Патрон_007", text: "Миссии разнообразные, но серверы иногда лагают.", rating: 7 },
            { user: "Звезда_Герой", text: "Кооп — это душа игры, без друзей не так весело.", rating: 8 },
            { user: "Боец_X", text: "Обновления частые, разработчики слушают комьюнити.", rating: 9 },
            { user: "Ракета_55", text: "Иногда падает ФПС на старых ПК.", rating: 7 },
            { user: "Солдат_Космос", text: "Эпичные битвы, особенно с боссами!", rating: 9 },
            { user: "Орда_Крушитель", text: "Хотелось бы больше кастомизации персонажей.", rating: 8 }
        ]
    },
    { 
        id: 2, 
        title: "Fortnite", 
        genre: "королевская битва", 
        price: 0, 
        rating: 8.2, 
        releaseDate: "2017-07-25", 
        developer: "Epic Games", 
        region: "Global", 
        image: "/img/Fortnite.png",
        description: "Бесплатная королевская битва с ярким стилем, строительной механикой и регулярными обновлениями.",
        systemRequirements: "ОС: Windows 10 64-bit, Процессор: Intel Core i3-3225, Оперативная память: 4 GB, Видеокарта: Intel HD 4000",
        reviews: [
            { user: "Баттл_Кид", text: "Весело, но донат решает в скинах.", rating: 8 },
            { user: "Форт_Фан", text: "Обновления держат в тонусе, новые сезоны крутые!", rating: 9 },
            { user: "Снайпер_77", text: "Строительство бесит, но игра затягивает.", rating: 7 },
            { user: "Эпик_Геймер", text: "Кроссплатформа — это топ, играю с друзьями на PS!", rating: 9 },
            { user: "Танцор_228", text: "Эмоции и скины — лучшее, но лаги иногда есть.", rating: 8 },
            { user: "Король_Арены", text: "Новичкам тяжело, слишком много профи.", rating: 7 },
            { user: "Билдер_Про", text: "Креативный режим — находка для фантазии!", rating: 9 },
            { user: "Виктори_Рояль", text: "Графика мультяшная, но геймплей на высоте.", rating: 8 },
            { user: "Шторм_Бегун", text: "Сервера иногда падают на больших ивентах.", rating: 7 },
            { user: "Фортнайтер", text: "Играю с 2018, до сих пор не надоела!", rating: 9 }
        ]
    },
    { 
        id: 3, 
        title: "Minecraft", 
        genre: "песочница", 
        price: 1999, 
        rating: 9.5, 
        releaseDate: "2011-11-18", 
        developer: "Mojang Studios", 
        region: "Global", 
        image: "/img/Minecraft.png",
        description: "Легендарная песочница, где вы строите, исследуете и выживаете в кубическом мире.",
        systemRequirements: "ОС: Windows 10 64-bit, Процессор: Intel Core i3-3210, Оперативная память: 4 GB, Видеокарта: Intel HD Graphics 4000",
        reviews: [
            { user: "Кубик_Рубик", text: "Игра детства, бесконечный простор для творчества!", rating: 10 },
            { user: "Крипер_Фан", text: "Моды делают игру бесконечной, рекомендую!", rating: 9 },
            { user: "Строитель_99", text: "Мультиплеер с друзьями — это любовь.", rating: 10 },
            { user: "Редстоун_Про", text: "Сложные механизмы создавать — кайф!", rating: 9 },
            { user: "Пиксель_Геймер", text: "Графика простая, но атмосфера непревзойдённая.", rating: 10 },
            { user: "Эндер_Дракон", text: "Обновления добавляют кучу нового, браво Mojang!", rating: 9 },
            { user: "Алмаз_Копатель", text: "Иногда баги с текстурами раздражают.", rating: 8 },
            { user: "Биом_Фан", text: "Новые биомы шикарные, исследовать одно удовольствие.", rating: 9 },
            { user: "Крафтер_228", text: "Соло играть скучновато, нужен сервер.", rating: 8 },
            { user: "Майн_Легенда", text: "Игра на все времена, 10/10!", rating: 10 }
        ]
    },
    { 
        id: 4, 
        title: "Grand Theft Auto V", 
        genre: "экшен", 
        price: 2999, 
        rating: 9.0, 
        releaseDate: "2013-09-17", 
        developer: "Rockstar North", 
        region: "Global", 
        image: "/img/gta_5.png",
        description: "Криминальный открытый мир с захватывающим сюжетом и живым онлайн-режимом.",
        systemRequirements: "ОС: Windows 8.1 64-bit, Процессор: Intel Core i5-3470, Оперативная память: 8 GB, Видеокарта: NVIDIA GeForce GTX 660",
        reviews: [
            { user: "Тревор_Фан", text: "Сюжет — шедевр, онлайн до сих пор живой!", rating: 9 },
            { user: "Майкл_ГТА", text: "Графика немного устарела, но геймплей вечен.", rating: 8 },
            { user: "Лос_Сантос", text: "Мир живой, каждая деталь продумана!", rating: 10 },
            { user: "Гонщик_777", text: "Онлайн гонки — это топ, но читеры бесят.", rating: 8 },
            { user: "Франклин_Кул", text: "История про трёх героев — лучшее в серии.", rating: 9 },
            { user: "Рокстар_Фан", text: "Обновления для GTA Online радуют.", rating: 9 },
            { user: "Криминал_88", text: "Сервера иногда лагают, но терпимо.", rating: 8 },
            { user: "Бандит_228", text: "Миссии в онлайне повторяются, хочется нового.", rating: 7 },
            { user: "ГТА_Легенда", text: "Играю с релиза, не надоедает!", rating: 10 },
            { user: "Угонщик_99", text: "Машины, погони, атмосфера — всё на высоте.", rating: 9 }
        ]
    },
    { 
        id: 5, 
        title: "The Elder Scrolls IV: Oblivion Remastered", 
        genre: "рпг", 
        price: 4999, 
        rating: 9.2, 
        releaseDate: "2024-11-15", 
        developer: "Bethesda Game Studios", 
        region: "Global", 
        image: "/img/The_Elder_Scrolls _IV_Oblivion_Remastered.png",
        description: "Обновлённая классика с улучшенной графикой и эпичным открытым миром Сиродила.",
        systemRequirements: "ОС: Windows 10 64-bit, Процессор: Intel Core i5-8400, Оперативная память: 8 GB, Видеокарта: NVIDIA GeForce GTX 1060",
        reviews: [
            { user: "Сиродил_Фан", text: "Ремастер шикарен, графика радует глаз!", rating: 10 },
            { user: "Довакин_88", text: "Квесты всё ещё захватывают, как в 2006!", rating: 9 },
            { user: "Темное_Братство", text: "Некоторые текстуры всё же староваты.", rating: 8 },
            { user: "Обливион_Герой", text: "Музыка и атмосфера — чистый кайф.", rating: 10 },
            { user: "Маг_Сиродила", text: "Магия и боёвка стали лучше, рекомендую!", rating: 9 },
            { user: "Гильдия_Воров", text: "Баги Bethesda никуда не делись.", rating: 8 },
            { user: "Кваджит_99", text: "Открытый мир до сих пор впечатляет.", rating: 9 },
            { user: "Эльф_Арчер", text: "Ремастер оправдал ожидания, браво!", rating: 10 },
            { user: "Портал_Закрыт", text: "Иногда падает ФПС в городах.", rating: 8 },
            { user: "Легенда_Тамриэля", text: "Вернулся в юность, игра мечты!", rating: 10 }
        ]
    },
    { 
        id: 6, 
        title: "The Last of Us Part II Remastered", 
        genre: "экшен-приключение", 
        price: 4999, 
        rating: 9.3, 
        releaseDate: "2024-01-19", 
        developer: "Naughty Dog", 
        region: "Global", 
        image: "/img/The_Last_of_Us_Part_II_Remastered..png",
        description: "Эмоциональная история Элли с улучшенной графикой и новым контентом.",
        systemRequirements: "ОС: Windows 10 64-bit, Процессор: Intel Core i5-8600K, Оперативная память: 16 GB, Видеокарта: NVIDIA GeForce RTX 2060",
        reviews: [
            { user: "Элли_Фан", text: "Сюжет разрывает сердце, графика топ!", rating: 10 },
            { user: "Джоэл_88", text: "Ремастер добавил крутые фичи, но баги есть.", rating: 9 },
            { user: "Выживший_99", text: "Эмоции на пределе, лучшая история!", rating: 10 },
            { user: "Заражённый", text: "Боевка шикарная, но оптимизация хромает.", rating: 8 },
            { user: "Постапок_Фан", text: "Атмосфера гнетущая, в хорошем смысле.", rating: 9 },
            { user: "Стрелок_Элли", text: "Новый контент радует, стоит своих денег.", rating: 9 },
            { user: "Наути_Дог", text: "Иногда ИИ врагов тупит, но терпимо.", rating: 8 },
            { user: "Конец_Мира", text: "Графика 4K — просто космос!", rating: 10 },
            { user: "Путешественник", text: "Сюжет спорный, но исполнение топовое.", rating: 9 },
            { user: "Ласт_Фан", text: "Ремастер для фанатов, новичкам сложновато.", rating: 8 }
        ]
    },
    { 
        id: 7, 
        title: "Cyberpunk 2077", 
        genre: "рпг", 
        price: 5999, 
        rating: 8.5, 
        releaseDate: "2020-12-10", 
        developer: "CD Projekt Red", 
        region: "Global", 
        image: "/img/Cyberpunk_2077.png",
        description: "Открытый мир в футуристическом Найт-Сити с глубоким сюжетом и потрясающей графикой.",
        systemRequirements: "ОС: Windows 10 64-bit, Процессор: Intel Core i5-3570K, Оперативная память: 8 GB, Видеокарта: NVIDIA GeForce GTX 780",
        reviews: [
            { user: "Алексей_2077", text: "Графика просто космос! Иногда встречаются баги.", rating: 9 },
            { user: "Кира_Геймер", text: "Найт-Сити живой, но оптимизация слабая.", rating: 8 },
            { user: "Ви_Фан", text: "Сюжет и персонажи — шедевр!", rating: 10 },
            { user: "Кибер_Панк", text: "После патчей игра стала лучше.", rating: 9 },
            { user: "Джонни_Сильвер", text: "Баги всё ещё есть, но атмосфера топ.", rating: 8 },
            { user: "Найт_Сити", text: "Кастомизация и выбор в квестах крутые!", rating: 9 },
            { user: "Хакер_99", text: "ФПС падает на старых видеокартах.", rating: 7 },
            { user: "Самурай_Ронин", text: "Музыка и стиль — чистый кайф.", rating: 10 },
            { user: "Кибер_Геймер", text: "Ожидал большего, но всё равно залипаю.", rating: 8 },
            { user: "Футурист_22", text: "DLC Phantom Liberty добавил кучу контента!", rating: 9 }
        ]
    },
    { 
        id: 8, 
        title: "Valorant", 
        genre: "тактический шутер", 
        price: 0, 
        rating: 8.7, 
        releaseDate: "2020-06-02", 
        developer: "Riot Games", 
        region: "Global", 
        image: "/img/Valorant.png",
        description: "Бесплатный тактический шутер 5v5 с уникальными агентами и динамичными матчами.",
        systemRequirements: "ОС: Windows 7 64-bit, Процессор: Intel Core 2 Duo E8400, Оперативная память: 4 GB, Видеокарта: Intel HD 3000",
        reviews: [
            { user: "Рейдж_Фан", text: "Геймплей отточен, каждый матч — вызов!", rating: 9 },
            { user: "Снайпер_Вало", text: "Скины дорогие, но играть можно и без них.", rating: 8 },
            { user: "Агент_007", text: "Командная игра решает, соло тяжело.", rating: 8 },
            { user: "Феникс_99", text: "Графика стильная, оптимизация отличная.", rating: 9 },
            { user: "Тактик_22", text: "Баланс агентов иногда хромает.", rating: 7 },
            { user: "Вало_Геймер", text: "Турниры смотреть — одно удовольствие!", rating: 9 },
            { user: "Киллджой_Фан", text: "Серверы стабильные, пинг радует.", rating: 9 },
            { user: "Дуэлист_88", text: "Новичкам сложно в рейтинге.", rating: 8 },
            { user: "Риот_Ловер", text: "Обновления частые, контент добавляют.", rating: 9 },
            { user: "Вайпер_Про", text: "Хотелось бы больше карт.", rating: 8 }
        ]
    },
    { 
        id: 9, 
        title: "Doom Eternal", 
        genre: "шутер", 
        price: 3999, 
        rating: 9.1, 
        releaseDate: "2020-03-20", 
        developer: "id Software", 
        region: "Global", 
        image: "/img/Doom_Eternal.png",
        description: "Брутальный шутер с динамичными боями и эпичным саундтреком.",
        systemRequirements: "ОС: Windows 10 64-bit, Процессор: Intel Core i5-2500K, Оперативная память: 8 GB, Видеокарта: NVIDIA GeForce GTX 970",
        reviews: [
            { user: "Дум_Слеер", text: "Адреналин и мясо, лучший шутер!", rating: 10 },
            { user: "Демон_Крушитель", text: "Саундтрек разносит, геймплей огонь!", rating: 9 },
            { user: "Рип_Энд_Тир", text: "Сложность высокая, но это кайф.", rating: 9 },
            { user: "Хелл_Фан", text: "Графика шикарная, оптимизация топ.", rating: 10 },
            { user: "Геймер_666", text: "Иногда устаёшь от интенсивности.", rating: 8 },
            { user: "Плазма_Райфл", text: "Боссы эпичные, каждый бой — событие.", rating: 9 },
            { user: "Дум_Хантер", text: "Мультиплеер слабоват, но сингл топ.", rating: 8 },
            { user: "Адский_Рыцарь", text: "DLC добавили кучу контента!", rating: 9 },
            { user: "Слеер_99", text: "На старых ПК может лагать.", rating: 8 },
            { user: "Кровь_И_Огонь", text: "Это DOOM, что ещё сказать? 10/10!", rating: 10 }
        ]
    },
    { 
        id: 10, 
        title: "Split Fiction", 
        genre: "приключение", 
        price: 4999, 
        rating: 8.9, 
        releaseDate: "2024-10-10", 
        developer: "Hazelight Studios", 
        region: "Global", 
        image: "/img/Split_Fiction.png",
        description: "Кооперативное приключение с уникальной механикой разделённого экрана и захватывающим сюжетом.",
        systemRequirements: "ОС: Windows 10 64-bit, Процессор: Intel Core i5-6600K, Оперативная память: 8 GB, Видеокарта: NVIDIA GeForce GTX 970",
        reviews: [
            { user: "Кооп_Фан", text: "Играть с другом — чистый кайф!", rating: 9 },
            { user: "Сплит_Геймер", text: "Сюжет трогательный, механики крутые.", rating: 9 },
            { user: "Дуэт_99", text: "Без коопа играть невозможно.", rating: 8 },
            { user: "Приключение_22", text: "Графика и стиль на высоте!", rating: 10 },
            { user: "История_Фан", text: "Эмоционально, как It Takes Two!", rating: 9 },
            { user: "Синхрон_88", text: "Иногда управление запутанное.", rating: 8 },
            { user: "Геймер_Дуо", text: "Кооперативные загадки — топ!", rating: 9 },
            { user: "Экран_Разделён", text: "Оптимизация отличная, багов нет.", rating: 9 },
            { user: "Друзья_Игра", text: "Хотелось бы больше уровней.", rating: 8 },
            { user: "Сплит_Легенда", text: "Идеально для игры с напарником!", rating: 10 }
        ]
    },
    { 
        id: 11, 
        title: "Apex Legends", 
        genre: "королевская битва", 
        price: 0, 
        rating: 8.6, 
        releaseDate: "2019-02-04", 
        developer: "Respawn Entertainment", 
        region: "Global", 
        image: "/img/Apex_Legends.png",
        description: "Бесплатная королевская битва с быстрым геймплеем и уникальными легендами.",
        systemRequirements: "ОС: Windows 7 64-bit, Процессор: Intel Core i3-6300, Оперативная память: 6 GB, Видеокарта: NVIDIA GeForce GT 640",
        reviews: [
            { user: "Легенда_99", text: "Динамика и командная игра — топ!", rating: 9 },
            { user: "Рейф_Фан", text: "Скины дорогие, но геймплей бесплатный.", rating: 8 },
            { user: "Баттл_Апекс", text: "Новичкам сложно, но это мотивирует.", rating: 8 },
            { user: "Гибралтар_Про", text: "Карты разнообразные, играть не надоедает.", rating: 9 },
            { user: "Снайпер_Апекс", text: "Баланс оружия иногда странный.", rating: 7 },
            { user: "Респавн_Фан", text: "Сезоны добавляют кучу нового!", rating: 9 },
            { user: "Лоба_Леди", text: "Серверы стабильные, лаги редки.", rating: 9 },
            { user: "Бладхаунд_88", text: "Хотелось бы больше соло-режимов.", rating: 8 },
            { user: "Арена_Геймер", text: "Режим арены — отличное дополнение.", rating: 9 },
            { user: "Ваттсон_Фан", text: "Играю с релиза, до сих пор в кайф!", rating: 9 }
        ]
    },
    { 
        id: 12, 
        title: "Forza Horizon 5", 
        genre: "гонки", 
        price: 4999, 
        rating: 9.2, 
        releaseDate: "2021-11-09", 
        developer: "Playground Games", 
        region: "Global", 
        image: "/img/Forza_Horizon_5.png",
        description: "Гоночный открытый мир в Мексике с потрясающей графикой и свободой вождения.",
        systemRequirements: "ОС: Windows 10 64-bit, Процессор: Intel Core i5-4460, Оперативная память: 8 GB, Видеокарта: NVIDIA GeForce GTX 970",
        reviews: [
            { user: "Гонщик_99", text: "Графика и мир — просто космос!", rating: 10 },
            { user: "Форза_Фан", text: "Машины, пейзажи, музыка — всё идеально.", rating: 9 },
            { user: "Дрифт_Про", text: "Физика вождения на высоте!", rating: 9 },
            { user: "Мексика_Рейсер", text: "Онлайн гонки — чистый кайф.", rating: 9 },
            { user: "Турбо_88", text: "Иногда баги с текстурами.", rating: 8 },
            { user: "Авто_Ловер", text: "Кастомизация машин шикарная!", rating: 10 },
            { user: "Скорость_777", text: "Сервера иногда подтормаживают.", rating: 8 },
            { user: "Горизонт_Фан", text: "DLC с Hot Wheels — находка!", rating: 9 },
            { user: "Рейсер_228", text: "Хотелось бы больше сюжетных миссий.", rating: 8 },
            { user: "Форза_Легенда", text: "Лучшая гоночная игра ever!", rating: 10 }
        ]
    },
    { 
        id: 13, 
        title: "Red Dead Redemption 2", 
        genre: "экшен-приключение", 
        price: 4999, 
        rating: 9.7, 
        releaseDate: "2018-10-26", 
        developer: "Rockstar Games", 
        region: "Global", 
        image: "/img/RDR_2.png",
        description: "Эпичная история Дикого Запада с открытым миром и невероятной детализацией.",
        systemRequirements: "ОС: Windows 10 64-bit, Процессор: Intel Core i5-2500K, Оперативная память: 8 GB, Видеокарта: NVIDIA GeForce GTX 770",
        reviews: [
            { user: "Артур_Морган", text: "Шедевр, каждая деталь продумана!", rating: 10 },
            { user: "Ковбой_99", text: "Сюжет и мир — лучшее в играх.", rating: 10 },
            { user: "Дикий_Запад", text: "Графика до сих пор впечатляет.", rating: 9 },
            { user: "Рокстар_Фан", text: "Онлайн режим слабоват, сингл топ.", rating: 8 },
            { user: "Лассо_88", text: "Атмосфера погружает с головой!", rating: 10 },
            { user: "Бандит_Вест", text: "Иногда управление громоздкое.", rating: 8 },
            { user: "Геймер_РДР", text: "История Артура разрывает сердце.", rating: 10 },
            { user: "Седло_Про", text: "Оптимизация на ПК отличная.", rating: 9 },
            { user: "Охотник_777", text: "Охота и рыбалка — отдельный кайф.", rating: 9 },
            { user: "Ред_Дед_Фан", text: "Игра на 100 часов, не пожалеете!", rating: 10 }
        ]
    },
    { 
        id: 14, 
        title: "Battlefield 2042", 
        genre: "шутер", 
        price: 3999, 
        rating: 7.9, 
        releaseDate: "2021-11-19", 
        developer: "DICE", 
        region: "Global", 
        image: "/img/Battlefield_2042.png",
        description: "Масштабный шутер с динамичными боями и разрушаемым окружением.",
        systemRequirements: "ОС: Windows 10 64-bit, Процессор: Intel Core i5-6600K, Оперативная память: 8 GB, Видеокарта: NVIDIA GeForce GTX 1050 Ti",
        reviews: [
            { user: "Солдат_2042", text: "Масштаб боёв впечатляет, но баги есть.", rating: 8 },
            { user: "Танк_Фан", text: "После патчей стало лучше, рекомендую.", rating: 9 },
            { user: "Баттл_Геймер", text: "Карты огромные, но баланс хромает.", rating: 7 },
            { user: "Снайпер_99", text: "Графика шикарная, разрушения топ!", rating: 9 },
            { user: "Пилот_88", text: "Техника управляется отлично!", rating: 9 },
            { user: "Боец_777", text: "Сервера иногда лагают.", rating: 8 },
            { user: "Дайс_Фан", text: "Хотелось бы больше контента.", rating: 7 },
            { user: "Война_2042", text: "Режим Portal — находка для фанатов.", rating: 9 },
            { user: "Стрелок_22", text: "Оптимизация слабая на старых ПК.", rating: 7 },
            { user: "Баттл_Легенда", text: "Классический Battlefield, но с оговорками.", rating: 8 }
        ]
    },
    { 
        id: 15, 
        title: "Mafia: The Old Country", 
        genre: "экшен-приключение", 
        price: 5999, 
        rating: 9.0, 
        releaseDate: "2025-08-01", 
        developer: "Hangar 13", 
        region: "Global", 
        image: "/img/Mafia_The_Old_Country.png",
        description: "Предыстория мафии в Сицилии начала XX века с кинематографичным сюжетом.",
        systemRequirements: "ОС: Windows 11 64-bit, Процессор: Intel Core i7-9700, Оперативная память: 16 GB, Видеокарта: NVIDIA GeForce RTX 3060",
        reviews: [
            { user: "Дон_Сицилия", text: "Атмосфера мафии передана идеально!", rating: 10 },
            { user: "Мафия_Фан", text: "Сюжет захватывает с первых минут.", rating: 9 },
            { user: "Гангстер_99", text: "Графика на уровне, но баги есть.", rating: 8 },
            { user: "Сицилия_1900", text: "Мир живой, каждая деталь продумана.", rating: 10 },
            { user: "Томми_Фан", text: "Боевка динамичная, стелс крутой!", rating: 9 },
            { user: "Коза_Ностра", text: "Иногда ИИ врагов тупит.", rating: 8 },
            { user: "Мафиозо_88", text: "Музыка и стиль — чистый кайф.", rating: 9 },
            { user: "Босс_777", text: "Хотелось бы больше побочных квестов.", rating: 8 },
            { user: "Криминал_22", text: "Ожидания оправданы, браво Hangar 13!", rating: 10 },
            { user: "Семья_Фан", text: "Сюжет держит в напряжении до конца.", rating: 9 }
        ]
    }
];
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = parseInt(urlParams.get('id'));
    const game = games.find(g => g.id === gameId);
    if (game) {
        document.getElementById('game-image').src = game.image;
        document.getElementById('game-title').textContent = game.title;
        document.getElementById('game-description').textContent = game.description;
        document.getElementById('game-price').textContent = `Цена: ${game.price === 0 ? 'Бесплатно' : game.price + ' ₽'}`;
        document.getElementById('game-release').textContent = `Дата релиза: ${game.releaseDate}`;
        const stars = '★'.repeat(Math.round(game.rating / 2)) + '☆'.repeat(5 - Math.round(game.rating / 2));
        document.getElementById('game-rating').textContent = `Рейтинг: ${stars}`;
        document.getElementById('game-developer').textContent = `Разработчик: ${game.developer}`;
        document.getElementById('game-region').textContent = `Регион: ${game.region}`;
        document.getElementById('system-reqs').textContent = game.systemRequirements;
        const reviewList = document.getElementById('review-list');
        game.reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            const reviewStars = '★'.repeat(Math.round(review.rating / 2)) + '☆'.repeat(5 - Math.round(review.rating / 2));
            reviewDiv.innerHTML = `<p><strong>${review.user}</strong>: ${review.text}</p><p>Рейтинг: ${reviewStars}</p>`;
            reviewList.appendChild(reviewDiv);
        });
    }
    const buyButton = document.getElementById('buy-button');
    const paymentModal = document.getElementById('payment-modal');
    const closeModal = document.querySelector('.close-modal');
    const payButton = document.getElementById('pay-button');
    const clearFormButton = document.getElementById('clear-form');
    const notification = document.getElementById('notification');
    const cardNumberInput = document.getElementById('card-number');
    const cardHolderInput = document.getElementById('card-holder');
    const cardExpiryInput = document.getElementById('card-expiry');
    const cardCvvInput = document.getElementById('card-cvv');
    const paymentForm = document.getElementById('payment-form');
    const cardNumberDisplay = document.getElementById('card-number-display');
    const cardHolderDisplay = document.getElementById('card-holder-display');
    const cardExpiryDisplay = document.getElementById('card-expiry-display');
    const cardContainer = document.querySelector('.card-container');
    const loading = document.getElementById('loading');
    const keyResult = document.getElementById('key-result');
    const generatedKey = document.getElementById('generated-key');
    const copyKeyButton = document.getElementById('copy-key');
    const closeKeyButton = document.getElementById('close-key');
    buyButton.addEventListener('click', () => {
        paymentModal.style.display = 'flex';
        paymentForm.style.display = 'block';
        cardContainer.style.display = 'block';
        keyResult.style.display = 'none';
    });
    closeModal.addEventListener('click', () => {
        paymentModal.style.display = 'none';
        paymentForm.reset();
        cardNumberDisplay.textContent = '**** **** **** ****';
        cardHolderDisplay.textContent = 'ИМЯ ВЛАДЕЛЬЦА';
        cardExpiryDisplay.textContent = 'MM/YY';
        loading.style.display = 'none';
        keyResult.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === paymentModal) {
            paymentModal.style.display = 'none';
            paymentForm.reset();
            cardNumberDisplay.textContent = '**** **** **** ****';
            cardHolderDisplay.textContent = 'ИМЯ ВЛАДЕЛЬЦА';
            cardExpiryDisplay.textContent = 'MM/YY';
            loading.style.display = 'none';
            keyResult.style.display = 'none';
        }
    });
    cardNumberInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '').slice(0, 16);
        e.target.value = value.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
        cardNumberDisplay.textContent = value ? value.replace(/(\d{4})(?=\d)/g, '$1 ').trim() : '**** **** **** ****';
    });
    cardHolderInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '').slice(0, 50);
        cardHolderDisplay.textContent = e.target.value ? e.target.value.toUpperCase() : 'ИМЯ ВЛАДЕЛЬЦА';
    });
    cardExpiryInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '').slice(0, 4);
        e.target.value = value.length >= 2 ? value.slice(0, 2) + '/' + value.slice(2) : value;
        cardExpiryDisplay.textContent = e.target.value || 'MM/YY';
    });
    cardCvvInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
    });
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    clearFormButton.addEventListener('click', () => {
        paymentForm.reset();
        cardNumberDisplay.textContent = '**** **** **** ****';
        cardHolderDisplay.textContent = 'ИМЯ ВЛАДЕЛЬЦА';
        cardExpiryDisplay.textContent = 'MM/YY';
    });
    payButton.addEventListener('click', () => {
        const cardNumber = cardNumberInput.value.replace(/\s/g, '');
        const cardHolder = cardHolderInput.value.trim();
        const cardExpiry = cardExpiryInput.value;
        const cardCvv = cardCvvInput.value;
        if (cardNumber.length !== 16) {
            notification.textContent = 'Номер карты должен содержать 16 цифр';
            notification.style.display = 'block';
            setTimeout(() => notification.style.display = 'none', 3000);
            return;
        }
        if (!/^[A-Za-z\s]{2,50}$/.test(cardHolder)) {
            notification.textContent = 'Имя владельца должно содержать только буквы и быть от 2 до 50 символов';
            notification.style.display = 'block';
            setTimeout(() => notification.style.display = 'none', 3000);
            return;
        }
        if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(cardExpiry)) {
            notification.textContent = 'Срок действия должен быть в формате MM/YY (01-12/YY)';
            notification.style.display = 'block';
            setTimeout(() => notification.style.display = 'none', 3000);
            return;
        }
        if (cardCvv.length !== 3) {
            notification.textContent = 'CVV должен содержать 3 цифры';
            notification.style.display = 'block';
            setTimeout(() => notification.style.display = 'none', 3000);
            return;
        }
        paymentForm.style.display = 'none';
        cardContainer.style.display = 'none';
        loading.style.display = 'block';
        setTimeout(() => {
            loading.style.display = 'none';
            const key = `${Math.random().toString(36).substr(2, 5).toUpperCase()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
            generatedKey.textContent = key;
            keyResult.style.display = 'block';
        }, 2000);
    });
    copyKeyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(generatedKey.textContent).then(() => {
            notification.textContent = 'Ключ скопирован!';
            notification.classList.add('success');
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
                notification.classList.remove('success');
            }, 3000);
        });
    });
    closeKeyButton.addEventListener('click', () => {
        paymentModal.style.display = 'none';
        paymentForm.reset();
        cardNumberDisplay.textContent = '**** **** **** ****';
        cardHolderDisplay.textContent = 'ИМЯ ВЛАДЕЛЬЦА';
        cardExpiryDisplay.textContent = 'MM/YY';
        loading.style.display = 'none';
        keyResult.style.display = 'none';
        paymentForm.style.display = 'block';
        cardContainer.style.display = 'block';
    });
});