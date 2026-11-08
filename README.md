
## 🔑 API Ключі
.env
VITE_API_BASE_URL=https://api.themoviedb.org
VITE_API_KEY=ca1d19b1f8abfdaad960f198318e5127
VITE_API_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTFkMTliMWY4YWJmZGFhZDk2MGYxOTgzMThlNTEyNyIsIm5iZiI6MTc5MzA5NDIwNC43MzgsInN1YiI6IjZhZTA3MjNjZDRkYzVjZWI2Y2U2ZTYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QERHxZGR9qhjEBROePnVMO81oZwcT4rXVeZlYaEGRoE


## 🚀 Процес запуску проєкту

Для локального запуску застосунку виконайте наступні кроки:

1. **Клонуйте репозиторій:**
   https://github.com/lily8xa/movies-exam/tree/master 
<>Code / download ZIP/зберегти та розархівувати проєкт


2. **Перейдіть у директорію проєкту:**
  Відкрити WebStorm/Open/мій проєкт

3. **Встановіть залежності:**
  
   npm install
   ```

4. **Налаштуйте змінні оточення (API-ключі):**
    * Створіть файл `.env` у кореневій папці проєкту.
    * Додайте туди мої ключі ☝️## 🔑 API Ключі

5. **Запустіть проєкт у режимі розробки:**
   ```bash
   npm start
   ```
   *(або `npm run dev`, якщо ви використовуєте Vite)*

Застосунок відкриється у вашому браузері за адресою `http://localhost:ХХХХХ

---
## 🗺️ Функціонал сторінок та URL структури

У додатку реалізовано наступні сторінки та маршрути:

path: '/', element: <MainLayout/>---Тут відображається логотип, меню навігації, рядок для сортування за популярністю та датою випуску,
рядок пошуку за назвою та особистий кабінет користувача.
index: true, element: <Movies/>---Автоматично відображає всі фільми одразу при завантаженні сторінки.
<GenresMenu/>---Меню для сортування фільмів за жанрами.
path: 'movies/:id', element: <MovieDetailPage/>---При натисненні на карту фільму відкривається детальна інформація про обраний фільм.
path: 'favorite', element: <FavoritePage/>---на карті фільму розташоване (🤍) при натисненні на яке фільм додається до вкладки Favorite
(для заповнення головного меню, можна прибрати)
<Pagination>---меню для керування сторінками з фільмами. доступний перехід на першу, останню і проміжні сторінки.

