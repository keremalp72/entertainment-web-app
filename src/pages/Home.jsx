import MediaCard from '../components/MediaCard'

const Home = ({ data, bookmarks, handleBookmark, searchTerm, searchResults }) => {
  // Arama sonuçları varsa onları göster
  if (searchTerm && searchResults.length > 0) {
    return (
      <div>
        <h2 className="section-title">Found {searchResults.length} results for '{searchTerm}'</h2>
        <div className="content-grid">
          {searchResults.map((item, index) => (
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
        <h2 className="section-title">No results found for '{searchTerm}'</h2>
      </div>
    )
  }

  // Normal görünüm - önce trending olanlar, sonra diğerleri
  const trendingItems = data.filter(item => item.trending)
  const recommendedItems = data.filter(item => !item.trending)

  return (
    <div>
      {/* Trending Bölümü */}
      <section className="trending-section">
        <h2 className="section-title">Trending</h2>
        <div className="trending-scroll">
          {trendingItems.map((item, index) => (
            <MediaCard
              key={index}
              item={item}
              isBookmarked={bookmarks.includes(item.title)}
              onBookmark={handleBookmark}
              isTrending={true}
            />
          ))}
        </div>
      </section>

      {/* Önerilen Bölümü */}
      <section>
        <h2 className="section-title">Recommended for you</h2>
        <div className="content-grid">
          {recommendedItems.map((item, index) => (
            <MediaCard
              key={index}
              item={item}
              isBookmarked={bookmarks.includes(item.title)}
              onBookmark={handleBookmark}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home 