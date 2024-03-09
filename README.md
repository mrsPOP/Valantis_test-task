# Valantis product list ✨✨✨

## Как посмотреть проект:

Так как у домена API нет SSL-сертификата, чтобы посмотреть проект нужно предварительно разрешить в настройках браузера делать запросы к http://api.valantis.store:40000/. Я использую Chrome, в других браузерах настраивается аналогичным способом.

1. Набрать в адресной строке: chrome://flags/
2. В поиске набрать: Insecure origins treated as secure.
3. Вставить в поле http://api.valantis.store:40000/
4. Пометить Enabled.
5. Перезайти в Браузер.
6. Теперь можно перейти по ссылке ниже.

[**Посмотреть проект**](https://valantis-test-task-nrfz.vercel.app/)

## Viewing the Project:

Since the API domain does not have an SSL certificate, to view the project, you need to allow requests to be made to http://api.valantis.store:40000/ in the browser settings. I use Chrome, and in other browsers, it can be configured in a similar way.

1. Type in the address bar: chrome://flags/
2. In the search, type: Insecure origins treated as secure.
3. Enter the following URL in the field: http://api.valantis.store:40000/
4. Check Enabled.
5. Restart the browser.
6. Now you can access the project through the following [**link**](https://valantis-test-task-nrfz.vercel.app/)

Этот проект был создан в целях подачи заявки на вакансию в компании Valantis.

The project was created to apply for a vacancy at Valantis.

## Tech-Stack:
- TypeScript
- React
- Next.js
- Redux toolkit

## Описание:

На странице отображается список товаров с возможностью фильтрации по одному из фильтров: цена, название товара, бренд. Также реализована пагинация.

При отправке запросов на сервер в случае ошибки в консоль выводится комментарий и описание ошибки.

Первый рендер происходит на сервере, поэтому первая страница отображается мгновенно. Если следующая страница есть - она подгружается заранее. Загруженные страницы кэшируются.

## Description:

The page displays a list of products with the ability to filter by one of the criteria: price, product name, brand. Pagination functionality is also implemented.

In case of errors when sending requests to the server, a comment and error description are output to the console.

The initial render occurs on the server, so the first page is displayed instantly. If the next page exists, it is preloaded. The loaded pages are cached.


