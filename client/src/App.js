import {useEffect, useState} from 'react'
import Pagination from './components/Pagination'
import Card from './components/Card'
import './App.css';

const App = ({match})=> {
  const pageNumber = match.params.pageNumber || 1

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [page, setPage] = useState(pageNumber)
  const [pages, setPages] = useState(1)

  useEffect(()=>{
    const fetchPost = async ()=>{
      setLoading(true)
      try {
        const res = await fetch(`/api/v1/posts?page=${page}`)
        const {data, pages: totalPages} = await res.json()
        setPages(totalPages)
        setPosts(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setError('Some Error occured')
      }
    }
    fetchPost()
  }, [page])
  return (
    <div className="app">
      <Pagination page={page} pages={pages} changePage={setPage} />
      <div className="app-posts">
        {posts.map((post)=>(
          <Card key={post._id} post={post} />
        ))}
      </div>
      <Pagination page={page} pages={pages} changePage={setPage} />
    </div>
  );
}

export default App;
