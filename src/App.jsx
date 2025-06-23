import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import data from '../data/data.json'

// Bileşenleri import edeceğiz
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import TvSeries from './pages/TvSeries'
import Bookmarked from './pages/Bookmarked'
import Search from './components/Search'

function App() {
  const [allData, setAllData] = useState([])
  const [bookmarks, setBookmarks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    // Verileri yükle
    setAllData(data)
    
    // Kaydedilmiş bookmarkları localStorage'dan al (varsa)
    const savedBookmarks = localStorage.getItem('bookmarks')
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks))
    }
  }, [])

  // Bookmark işlemi
  const handleBookmark = (title) => {
    const updatedBookmarks = bookmarks.includes(title)
      ? bookmarks.filter(bookmark => bookmark !== title)
      : [...bookmarks, title]
    
    setBookmarks(updatedBookmarks)
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
  }

  // Arama işlemi
  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term.trim() === '') {
      setSearchResults([])
      return
    }

    const filteredResults = allData.filter(item => 
      item.title.toLowerCase().includes(term.toLowerCase())
    )
    setSearchResults(filteredResults)
  }

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Search searchTerm={searchTerm} handleSearch={handleSearch} />
          
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  data={allData} 
                  bookmarks={bookmarks} 
                  handleBookmark={handleBookmark}
                  searchTerm={searchTerm}
                  searchResults={searchResults}
                />
              } 
            />
            <Route 
              path="/movies" 
              element={
                <Movies 
                  data={allData} 
                  bookmarks={bookmarks} 
                  handleBookmark={handleBookmark}
                  searchTerm={searchTerm}
                  searchResults={searchResults}
                />
              } 
            />
            <Route 
              path="/tv-series" 
              element={
                <TvSeries 
                  data={allData} 
                  bookmarks={bookmarks} 
                  handleBookmark={handleBookmark}
                  searchTerm={searchTerm}
                  searchResults={searchResults}
                />
              } 
            />
            <Route 
              path="/bookmarked" 
              element={
                <Bookmarked 
                  data={allData} 
                  bookmarks={bookmarks} 
                  handleBookmark={handleBookmark}
                  searchTerm={searchTerm}
                  searchResults={searchResults}
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
