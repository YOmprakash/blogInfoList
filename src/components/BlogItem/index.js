// Write your JS code here

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogDetails

  return (
    <div className="item-container">
      <img src={imageUrl} className="image" alt={{id}} />
      <div className="item-info">
        <p className="topic">{topic}</p>
        <p className="title">{title}</p>
        <div className="author-info">
          <img src={avatarUrl} alt={author} className="author-image" />
          <p className="author">{author}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
