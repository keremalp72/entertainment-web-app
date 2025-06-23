import { useLocation } from 'react-router-dom'

const Search = ({ searchTerm, handleSearch }) => {
  const location = useLocation()
  
  // Bulunduğumuz sayfaya göre placeholder metni belirleme
  const getPlaceholderText = () => {
    const path = location.pathname
    
    if (path === '/movies') {
      return 'Search for movies'
    } else if (path === '/tv-series') {
      return 'Search for TV series'
    } else if (path === '/bookmarked') {
      return 'Search for bookmarked shows'
    } else {
      return 'Search for movies or TV series'
    }
  }
  
  return (
    <div className="search-container">
      <div className="search-icon">
        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" 
            fill="#FFF" opacity=".75"/>
        </svg>
      </div>
      <input
        type="text"
        className="search-input"
        placeholder={getPlaceholderText()}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default Search 