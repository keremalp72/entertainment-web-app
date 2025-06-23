import MediaCard from '../components/MediaCard'

const TvSeries = ({ data, bookmarks, handleBookmark, searchTerm, searchResults }) => {
  // Arama sonuçları varsa ve sadece dizi olanları göster
  if (searchTerm && searchResults.length > 0) {
    const filteredSeries = searchResults.filter(item => item.type === 'series')
    
    return (
      <div>
        <h2 className="section-title">Found {filteredSeries.length} results for '{searchTerm}'</h2>
        <div className="content-grid">
          {filteredSeries.map((item, index) => (
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
        <h2 className="section-title">No TV series results found for '{searchTerm}'</h2>
      </div>
    )
  }

  // Sadece dizileri filtrele
  const seriesItems = data.filter(item => item.type === 'series')

  return (
    <div>
      <h2 className="section-title">TV Series</h2>
      <div className="content-grid">
        {seriesItems.map((item, index) => (
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

export default TvSeries 