// Write your JS code here
import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsList: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({blogsList: updatedData})
  }

  render() {
    const {blogsList} = this.state
    return (
      <div className="blog-list-container">
        {blogsList.map(each => (
          <BlogItem key={each.id} blogDetails={each} />
        ))}
      </div>
    )
  }
}

export default BlogList
