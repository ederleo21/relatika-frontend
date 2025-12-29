import { useEffect, useState } from "react"
import { endpoints } from "../../../services/endpoints";
import { getListPost } from "../services/postServices";
import { setPosts } from "../slices/postsSlice";
import { setUserFeed, setGlobalFeed, startGlobalFeed, setGlobalFeedError } from "../slices/feedsSlice";
import { useDispatch, useSelector } from 'react-redux'

export const PostFeed = ({ userId = null }) => {
  const { ids, loading, error } = useSelector(state => state.feeds.global) //loadign global
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async() => {
      try{
        //Manejo de loading si es global o si es de usuario
        if(!userId){
          dispatch(startGlobalFeed());
        }

        let url = userId ? `${endpoints.posts.listPost}${userId}/` : endpoints.posts.listPost
        const res = await getListPost(url);
        dispatch(setPosts(res.results))
        const ids = res.results.map(post => post.id);

        if(userId){
          dispatch(setUserFeed({ userId, ids }))
        }else{
          dispatch(setGlobalFeed(ids))
        }

      }catch(error){
        console.log(error)

      }
    }
    fetchPosts();
  }, [userId])

  return (
    <div className="flex flex-col gap-4">
      {loading && ( <h1 className="text-3xl font-bold" >Cranagooooo</h1> )}
    </div>
  )
}
