import { useEffect, useState, useMemo } from "react"
import { endpoints } from "../../../services/endpoints";
import { getListPost } from "../services/postServices";
import { addPosts } from "../slices/postsSlice";
import { setUserFeed, setGlobalFeed, startGlobalFeed, setGlobalFeedError, startUserFeed, setUserFeedError, feedState } from "../slices/feedsSlice";
import { useDispatch, useSelector } from 'react-redux'
import { PostCard } from "./PostCard";
import { ErrorState } from "../../../global/components/layout/ErrorState";

export const PostFeed = ({ userId=null }) => {

  const { ids, loading, error } = useSelector(state => {
    if(userId) return state.feeds.byUser[userId] || feedState
    return state.feeds.global
  }) 

  const postsById = useSelector(state => state.posts.byId)
  const posts = useMemo(() => {
    return ids.map(id => postsById[id]).filter(Boolean)
  }, [ids, postsById])
  
  const dispatch = useDispatch();

  useEffect(() => {
    if(ids?.length > 0) return; //no hacer llamadas si hay ids de ese usuario o el global

    const fetchPosts = async() => {
      try{
        if (userId){
          dispatch(startUserFeed(userId));
        }else {
          dispatch(startGlobalFeed());
        }

        let url = userId ? `${endpoints.posts.listPost}${userId}/` : endpoints.posts.listPost
        const res = await getListPost(url);
        dispatch(addPosts(res.results))
        
        const ids = res.results.map(post => post.id);
        if(userId){
          dispatch(setUserFeed({ userId, ids }))
        }else{
          dispatch(setGlobalFeed(ids))
        }

      }catch(error){
        if(userId){
          dispatch(setUserFeedError({ userId, error }))
        }else{
          dispatch(setGlobalFeedError(error))
        }
      }
    }
    fetchPosts();
  }, [userId, ids, dispatch])

  if(loading) return <h1>Cargandoo</h1>
  if(error) return <ErrorState error={{ status: error.status, message: error.message }} />

  return (
    <div className="flex flex-col gap-4">
      {posts.map(post => (
        <PostCard key={post.id} post={post}/>
      ))}
    </div>
  )
}
