import { useSelector } from "react-redux"
import Posts from "../components/Posts"

export default function Home() {
  const {friendsPosts} = useSelector(state=>state.posts)
  return (
    <>
      <h1>Feed</h1>
      <Posts posts={friendsPosts}/>
    </>
  )
}
