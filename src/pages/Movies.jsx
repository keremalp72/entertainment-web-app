import MediaCard from '../components/MediaCard'

const Movies = ({ data, bookmarks, handleBookmark, searchTerm, searchResults }) => {
  // Arama sonuçları varsa ve sadece film olanları göster
  if (searchTerm && searchResults.length > 0) {
    const filteredMovies = searchResults.filter(item => item.type === 'movie')
    
    return (
      <div>
        <h2 className="section-title">Found {filteredMovies.length} results for '{searchTerm}'</h2>
        <div className="content-grid">
          {filteredMovies.map((item, index) => (
            <MediaCard
              key={index}
              item={item}
              isBookmarked={bookmarks.includes(item.title)}
              onBookmark={handleBookmark}
            />
          ))}
        </div>
      </div>
    )
  }

  // Arama yapılmış ama sonuç yoksa
  if (searchTerm && searchResults.length === 0) {
    return (
      <div>
        <h2 className="section-title">No movie results found for '{searchTerm}'</h2>
      </div>
    )
  }

  // Sadece filmleri filtrele
  const movieItems = data.filter(item => item.type === 'movie')

  return (
    <div>
      <h2 className="section-title">Movies</h2>
      <div className="content-grid">
        {movieItems.map((item, index) => (
          <MediaCard
            key={index}
            item={item}
            isBookmarked={bookmarks.includes(item.title)}
            onBookmark={handleBookmark}
          />
        ))}
      </div>
    </div>
  )
}

export default Movies 