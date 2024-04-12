const globalParamsObject = {
    config: {
        adsNumber: 5, // предельное кол-во объявлений каждого пользователя по каждой категории
    },
    main: {
        adsCategory: ['Скидка', 'Благотворительность', 'Мероприятие', 'Объявление', 'Недвижимость'],
        adsCategoryNames: ['sales', 'charity', 'events', 'avito', 'real'],
        districtsNames: ['Ворошиловский', 'Дзержинский', 'Кировский', 'Красноармейский', 'Краснооктябрьский', 'Советский', 'Тракторозаводский', 'Центральный'],
        namesOfMongoMOdel: {
            adCategory: 'Категория:',
            name: 'Название:',
            description: 'Описание:',
            cost: 'Цена:',
            discount: 'Скидка:',
            discountCategory: 'Категория:',
            avitoCategory: 'Категория',
            startDate: 'Дата начала:',
            endDate: 'Дата конца:',
            district: 'Район:',
            address: 'Адрес:',
        },
        checkAdCategory: [
            [['img'], ['address', 'latitude', 'longitude'], ['district', 'name', 'description'], ['cost', 'discount', 'discountCategory']],
            [['img'], ['address', 'latitude', 'longitude'], ['district', 'name', 'description']],
            [['img'], ['address', 'latitude', 'longitude'], ['district', 'name', 'description'], ['cost', 'startDate', 'endDate']],
            [['img'], ['address', 'latitude', 'longitude'], ['district', 'name', 'description'], ['cost', 'avitoCategory', 'uniquePart', 'avitoSubCategory']],
            [['img'], ['address', 'latitude', 'longitude'], ['district', 'name', 'description'], ['cost', 'avitoCategory', 'uniquePart', 'avitoSubCategory']],
        ],
    },
    discounts: {
        discountsCategory: ['Красота и здоровье', 'Все для животных', 'Одежда и обувь', 'Товары для детей', 'Автомобиль', 'Электроника', 'Дом и дача', 'Хобби и отдых', 'Продукты', 'Фитнес и спорт', 'Другое'],
        discountSize: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
    },
    charity: {},
    avito: {
        avitoCategory: ['Автотранспорт', 'Работа', 'Одежда и обувь', 'Хобби и отдых', 'Животные', 'Для бизнеса', 'Услуги', 'Электроника', 'Товары для дома и дачи'],
        avitoSubCategory: [
            ['Автомобили', 'Мототехника', 'Водный транспорт', 'Грузовики и спецтехника', 'Аренда спецтехники', 'Запчасти и аксессуары', 'Аренда авто'],
            ['Типография, реклама, полиграфия', 'IT, интернет, телеком', 'Автомобильный бизнес', 'Административная работа', 'Банки, инвестиции', 'Без опыта работы', 'Бухгалтерия, финансы', 'Менеджмент', 'Госслужба, НКО', 'Домашний персонал', 'ЖКХ, эксплуатация', 'Искусство, развлечения', 'Консультирование', 'Курьерская доставка', 'Маркетинг, реклама', 'Медицина, фармацевтика', 'Образование, наука', 'Охрана, безопасность', 'Продажи', 'Производство', 'Страхование', 'Строительство', 'Такси', 'Транспорт, логистика', 'Туризм, рестораны', 'Управление персоналом', 'Фитнес, салоны красоты', 'Юриспруденция'],
            ['Женская одежда', 'Женская обувь', 'Мужская одежда', 'Мужская обувь', 'Детская одежда и обувь', 'Часы и украшения', 'Красота и здоровье', 'Товары для детей и игрушки'],
            ['Билеты и путешествия', 'Велосипеды', 'Коллекционирование', 'Охота и спорт', 'Водные развлечения'],
            ['Собаки', 'Кошки', 'Птицы', 'Аквариум', 'Другие животные'],
            ['Готовый бизнес', 'Оборудование для бизнеса'],
            ['Перевозки', 'Ремонт и отделка', 'Строительство', 'Красота и здоровье', 'Уборка', 'Ремонт техники', 'Деловые услуги', 'Обучение', 'Автосервис', 'Эвакуатор', 'Сад, благоустройство', 'Компьютерная помощь', 'Реклама, полиграфия', 'Бытовые услуги', 'Праздники и мероприятия', 'Фото и видеосъемка', 'Охрана и безопасность', 'Другое'],
            ['Телефоны', 'Аудио и видео', 'Для Компьютеров', 'Игры, приставки и программы', 'Ноутбуки', 'Настольные Компьютеры', 'Фототехника', 'Планшеты и электронные книги', 'Оргтехника и расходники', 'Оборудование для майнинга', 'ЧПУ лазерное оборудование', 'ЧПУ фрезерное оборудование', 'ЗD оборудование и материалы'],
            ['Ремонт и строительство', 'Мебель и интерьер', 'Бытовая техника', 'Растения', 'Посуда и товары для кухни'],
        ],
        avitoCategoryToParam: [
            [0, 0, 0, 0, 0, 0, 0], // Автотранспорт
            [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // Работа
            [4, 4, 4, 4, 4, 4, 4, 4], // Одежда и обувь
            [5, 5, 5, 5, 5, 5], // Хобби и отдых
            [6, 6, 6, 6, 6], // Животные
            [7, 7], // Для бизнеса
            [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], // Услуги
            [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], // Электроника
            [10, 10, 10, 10, 10, 10], // Товары для дома и дачи
        ],
        avitoParametrs: [
            // автомобиль
            ['Год выпуска:', 'Пробег:', 'Мощность двигателя:', 'Цвет:', ['Тип коробки передач:', ['Механическая', 'Автоматическая', 'Робот']], 'Объем двигателя:', 'VIN:', 'Кол-во владельцев:'],
            // недвижимость
            [],
            // Работа
            ['Опыт работы:', 'График:', ['Специализация:', ['Графический дизайнер', 'Сборщик рекламных конструкций', 'Фрезеровщик, гравировщик', '3D инженер', 'Оператор оргтехники', 'Переплетчик']]],
            // Работа
            ['Опыт работы:', 'График:'],
            // Одежда и обувь
            ['Размер:', 'Состояние:', 'Бренд:', 'Цвет:'],
            // Хобби и отдых
            ['Состояние:'],
            // Животные
            ['Парода:', 'Возраст'],
            // Для бизнеса
            ['Состояние:'],
            // услуги
            [['Сфера деятельности:', ['Перевозки', 'Ремонт и строительство', 'Красота', 'Клининг', 'Ремонт техники', 'Деловые услуги', 'Обучение', 'Медицина']], 'Опыт работы:', 'Специальность:', 'Предоплата:'],
            // Электроника
            ['Состояние:', 'Бренд:', 'Цвет:'],
            // Товары для дома и дачи
            ['Состояние:', 'Бренд:'],
        ],
    },
    real: {
        avitoCategory: ['Недвижимость снять', 'Недвижимость купить'],
        avitoSubCategory: [
            ['Посуточно', 'Квартира', 'Комната', 'Дом, дача', 'Участок', 'Гараж, парковка', 'Коммерческая недвижимость'],
            ['Квартира', 'Комната', 'Дом, дача', 'Участок', 'Гараж, парковка', 'Коммерческая недвижимость'],

        ],
        avitoCategoryToParam: [
            [0, 0, 0, 0, 0, 0, 0], // Недвижемость снять
            [0, 0, 0, 0, 0, 0], // Недвижемость купить
        ],
        avitoParametrs: [
            ['Метраж:', ['Санузел:', ['Раздельный', 'Совмещенный']], 'Этаж:', 'Кол-во комнат:', 'Интернет и ТВ:', 'Залог:', 'Техника:', 'Мебель:', 'Площадь кухни:', 'Ремонт:'],
        ],
    },
    events: {},
};

export default globalParamsObject;
