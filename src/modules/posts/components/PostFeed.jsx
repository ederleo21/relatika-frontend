import { useEffect, useState } from "react";
import { getListPost } from "../services/postServices";
import { SectionLoader } from "../../../global/components/atoms/SectionLoader";
import { PostCard } from "./PostCard";

export const PostFeed = ({ userId = null }) => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPost = async() => {  
           try{
            setLoading(true);
            const res = await getListPost(userId);
            setPosts(res)
           }catch(err){
            setError(err);
           }finally{
            setLoading(false);
           }
        }
        fetchPost();
    }, []);
  console.log(posts)
  if(loading) return <SectionLoader/>
  if(error) return <h1>Errorcito</h1>
  if(!posts) return null

  return (
    <div className="flex flex-col gap-4">
      {posts.results.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
