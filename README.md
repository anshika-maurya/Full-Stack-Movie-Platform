# 🎬 Hungama Cinematic

A full-stack movie discovery platform where users can explore movies, search content in real time, watch trailers, and manage their favorite movies.

The application integrates **TMDB API** for movie data and a **custom backend API** for authentication and additional features.

---

## 🚀 Features

### 🎥 Movie Discovery
- Trending movies
- Popular movies
- Top rated movies
- Popular TV shows
- Horizontal movie rows

### 🔎 Real-Time Search
- Instant search results
- Debounced API calls for performance
- Supports movies, TV shows, and people

### 🎬 Movie Details
- Movie overview and rating
- Cast information
- YouTube trailer playback
- Dynamic movie detail pages

### ❤️ Favorites
- Add movies to favorites
- Remove movies from favorites
- Dedicated favorites page

### 🔐 Authentication
- User signup
- User login
- JWT-based authentication

### 🛠 Admin Dashboard
- Add movies
- Delete movies
- View added movies

### ⚡ User Experience
- Infinite scrolling
- Responsive UI
- Smooth hover animations
- Clean card layout

---

## 🛠 Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB

### APIs
- TMDB (The Movie Database)

### Deployment
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## ⚙️ Installation

Clone the repository


git clone https://github.com/yourusername/hungama-cinematic.git


Install dependencies


npm install


Run frontend


npm run dev


Run backend


npm start


---

## 🔐 Environment Variables

### Frontend `.env`


VITE_API_URL=your_backend_url
VITE_TMDB_API_KEY=your_tmdb_api_key


### Backend `.env`


MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
TMDB_KEY=your_tmdb_api_key


---

## 📂 Project Structure


src
├── components
│ ├── HeroBanner.jsx
│ ├── MovieCard.jsx
│ ├── MovieRow.jsx
│ ├── TrailerModal.jsx
│
├── pages
│ ├── Home.jsx
│ ├── MovieDetails.jsx
│ ├── Search.jsx
│ ├── Favorites.jsx
│ ├── AdminDashboard.jsx
│
├── redux
│ └── moviesSlice.js
│
├── services
│ ├── tmdbApi.js
│ ├── moviesApi.js
│ └── authApi.js


---

## ⚠ Challenges Faced

During development and deployment several issues were solved:

- TMDB API was initially inaccessible, so **VPN was required to access the API during development**
- Direct API requests failed during deployment
- Implemented a **backend proxy API using Node.js and Express**
- Fixed **Vercel routing issues for dynamic routes**
- Handled API errors and debugging during production deployment

---

## 👨‍💻 Author

Developed as part of a **Full Stack Development Challenge by Sheriyans Coding School** with a **2-day deadline**.

The project helped strengthen understanding of:

- API integration
- backend proxy architecture
- authentication systems
- deployment debugging

