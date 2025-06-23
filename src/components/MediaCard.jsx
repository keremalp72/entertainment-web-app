const MediaCard = ({ item, isBookmarked, onBookmark, isTrending = false }) => {
  const { title, release_date, type, age_rating, image } = item
  const year = new Date(release_date).getFullYear()
  
  return (
    <div className={isTrending ? "media-card trending-card" : "media-card"}>
      <div className="bookmark-icon" onClick={() => onBookmark(title)}>
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          {isBookmarked ? (
            <path
              d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
              fill="#FFF"
            />
          ) : (
            <path
              d="m10.518.75.399 12.214-5.084-4.24-5.084 4.24.399-12.214h9.37Zm-.8 11.465V1.761H2.285v10.454l3.983-3.34 3.45 3.34Z"
              fill="#FFF"
            />
          )}
        </svg>
      </div>
      
      <img src={image} alt={title} className="media-image" />
      
      <div className="media-info">
        <div className="media-meta">
          <span>{year}</span>
          <span className="media-dot"></span>
          <span className="media-type">
            {type === 'movie' ? (
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" 
                  fill="#FFF" opacity=".75"/>
              </svg>
            ) : (
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.019 1.332.741l1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z" 
                  fill="#FFF" opacity=".75"/>
              </svg>
            )}
            <span>{type === 'movie' ? 'Movie' : 'TV Series'}</span>
          </span>
          <span className="media-dot"></span>
          <span>{age_rating}</span>
        </div>
        <h3 className="media-title">{title}</h3>
      </div>
    </div>
  )
}

export default MediaCard 