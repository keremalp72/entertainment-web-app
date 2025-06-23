import MediaCard from '../components/MediaCard'

const Bookmarked = ({ data, bookmarks, handleBookmark, searchTerm, searchResults }) => {
  // Bookmark yapılmış öğeleri filtrele
  const bookmarkedItems = data.filter(item => bookmarks.includes(item.title))
  const bookmarkedMovies = bookmarkedItems.filter(item => item.type === 'movie')
  const bookmarkedSeries = bookmarkedItems.filter(item => item.type === 'series')

  // Arama sonuçları varsa ve sadece bookmark yapılmış olanları göster
  if (searchTerm && searchResults.length > 0) {
    const filteredBookmarks = searchResults.filter(item => bookmarks.includes(item.title))
    
    return (
      <div>
        <h2 className="section-title">Found {filteredBookmarks.length} bookmarked results for '{searchTerm}'</h2>
        <div className="content-grid">
          {filteredBookmarks.map((item, index) => (
            <MediaCard
              key={index}
              item={item}
              isBookmarked={true}
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
        <h2 className="section-title">No bookmarked results found for '{searchTerm}'</h2>
      </div>
    )
  }

  // Hiç bookmark yoksa
  if (bookmarkedItems.length === 0) {
    return (
      <div>
        <h2 className="section-title">Bookmarked Movies</h2>
        <p>No bookmarked movies found.</p>
        
        <h2 className="section-title">Bookmarked TV Series</h2>
        <p>No bookmarked TV series found.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Bookmarked Filmler */}
      <section className="bookmarked-section">
        <h2 className="section-title">Bookmarked Movies</h2>
        {bookmarkedMovies.length > 0 ? (
          <div className="content-grid">
            {bookmarkedMovies.map((item, index) => (
              <MediaCard
                key={index}
                item={item}
                isBookmarked={true}
                onBookmark={handleBookmark}
              />
            ))}
          </div>
        ) : (
          <p>No bookmarked movies found.</p>
        )}
      </section>

      {/* Bookmarked Diziler */}
      <section className="bookmarked-section">
        <h2 className="section-title">Bookmarked TV Series</h2>
        {bookmarkedSeries.length > 0 ? (
          <div className="content-grid">
            {bookmarkedSeries.map((item, index) => (
              <MediaCard
                key={index}
                item={item}
                isBookmarked={true}
                onBookmark={handleBookmark}
              />
            ))}
          </div>
        ) : (
          <p>No bookmarked TV series found.</p>
        )}
      </section>
    </div>
  )
}

export default Bookmarked 