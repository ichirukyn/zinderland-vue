import axios from 'axios';

// let config = {
//     baseURL: 'http://c92521q7.beget.tech/'
// };
axios.defaults.baseURL = 'http://c92521q7.beget.tech/';
// axios.defaults.baseURL = 'http://zinderland-api/';
// axios.defaults.headers.common = {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }

const httpClient = axios;

/** Добавление токена аутентификации, и обновление его, если это требуется */
// const authInterceptor = config => {
//     // достаём токент аутентификации пользователя, с LocalStorage, или cookies, например
//     // const authToken = '...';
//     // config.headers.Authorization = `Bearer ${authToken}`;

//     // return config;
// };

// /** добавлени логгера при каждом axios запросе */
// const loggerInterceptor = config => {
//     /** как-то обрабатываем логи */
//     return config;
// }

/** Добавляем экземпляру созданные обработчики для аутентификации и логов */
// httpClient.interceptors.request.use(authInterceptor);
// httpClient.interceptors.request.use(loggerInterceptor);

/** Добавление обработчика для результатов или ошибок при запросах */
// httpClient.interceptors.response.use(
//     response => {
//         /** Как-то обрабатываем успешный результат */
//         return response;
//     },
    
//     error => {
//         /** Как-то обрабатываем результат, завершенный ошибкой */
//         return Promise.reject(error);
//     }
// );

export default httpClient;