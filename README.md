# 🎬 Hungama 

Hungama is a full-stack movie discovery platform where users can explore movies, search content in real time, watch trailers, and manage their favorite movies.

The platform integrates **TMDB API** for movie data and a **custom Node.js backend** for authentication and additional features.

---

## 🚀 Features

### 🎥 Movie Browsing
- Trending movies
- Popular movies
- Top rated movies
- Popular TV shows
- Horizontal movie rows

### 🔎 Real-Time Search
- Instant search results
- Debounced API requests
- Supports movies, TV shows, and people

### 🎬 Movie Details
- Movie overview
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
- JWT authentication

### 🛠 Admin Dashboard
- Add movies
- Delete movies
- View added movies

### ⚡ User Experience
- Infinite scrolling
- Responsive UI
- Smooth animations
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

### API
- TMDB (The Movie Database)

### Deployment
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## ⚠ Challenges Faced

During development and deployment several issues were solved:

- TMDB API was not accessible initially, so **VPN was required to access the API**
- Direct TMDB API calls failed during deployment
- Implemented a **backend proxy API using Node.js and Express**
- Fixed **Vercel routing issues for dynamic routes**
- Handled API errors during production deployment

---

## ⚙️ Installation

Clone the repository


git clone https://github.com/anshika-maurya/Full-Stack-Movie-Platform


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


hungama
│
├── frontend
│ ├── src
│ │ ├── components
│ │ │ ├── HeroBanner.jsx
│ │ │ ├── MovieCard.jsx
│ │ │ ├── MovieRow.jsx
│ │ │ └── TrailerModal.jsx
│ │ │
│ │ ├── pages
│ │ │ ├── Home.jsx
│ │ │ ├── MovieDetails.jsx
│ │ │ ├── Search.jsx
│ │ │ ├── Favorites.jsx
│ │ │ └── AdminDashboard.jsx
│ │ │
│ │ ├── redux
│ │ │ └── moviesSlice.js
│ │ │
│ │ └── services
│ │ ├── tmdbApi.js
│ │ ├── moviesApi.js
│ │ └── authApi.js
│ │
│ └── package.json
│
├── backend
│ ├── routes
│ │ ├── authRoutes.js
│ │ └── movieRoutes.js
│ │
│ ├── models
│ │ └── Movie.js
│ │
│ ├── server.js
│ └── package.json
│
└── README.md


---

## 👨‍💻 Author

Developed as part of a **Full Stack Development Challenge by Sheriyans Coding School** with a **2-day deadline**.

This project helped strengthen understanding of:

- API integration
- backend proxy architecture
- authentication systems
- deployment debugging

