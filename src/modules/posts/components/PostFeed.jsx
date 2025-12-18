import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { endpoints } from "../../../services/endpoints";

import { getListPost } from "../services/postServices";
import { SectionLoader } from "../../../global/components/atoms/SectionLoader";
import { MiniLoader } from "../../../global/components/layout/MiniLoader";
import { PostCard } from "./PostCard";
import { setGeneralFeed, addGeneralFeed, setGeneralLoading, setGeneralError } from "../slices/postSlice";
import { ErrorState } from "../../../global/components/layout/ErrorState";

export const PostFeed = ({ userId = null }) => {
  const dispatch = useDispatch();
  const { posts, loading, error, nextUrl, hasMore, page } = useSelector((state) => state.posts.generalFeed);
  const loaderRef = useRef(null);

    //Primera paginacion e indicacion si hay mas (hasMore)
    useEffect(() => {
        const fetchPost = async() => {  
           try{
            dispatch(setGeneralLoading());
            const url = userId ? endpoints.posts.listPost + userId : endpoints.posts.listPost 
            const res = await getListPost(url);
            dispatch(setGeneralFeed({ posts: res.results, page: 1, nextUrl: res.next}))
           
          }catch(err){
            dispatch(setGeneralError({message: err.message, status: err.status}))
           }
        }
        fetchPost();
    }, []);

    //Cargar sigueinte pagina cuando loader es visible
    useEffect(() => {
      if(!hasMore) return;

      const observer = new IntersectionObserver(
        async (entries) => {
          if(entries[0].isIntersecting && !loading){
            try{
              dispatch(setGeneralLoading());
              const res = await getListPost(nextUrl);
              dispatch(addGeneralFeed({ posts: res.results, page: page + 1, nextUrl: res.next }))
            }catch (err){
              dispatch(setGeneralError({message: err.message, status: err.status}));
            }
          }
        },
        { threshold: 1.0 }
      );

      if(loaderRef.current) observer.observe(loaderRef.current);

      return () => {
        if(loaderRef.current) observer.unobserve(loaderRef.current);
      };

    }, [loaderRef, nextUrl, hasMore, loading]);
  
  if (error) return <ErrorState error={error} />
  if (!posts) return null

  return (
    <div className="flex flex-col gap-4">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}

      <div
        ref={loaderRef}
        className="h-16 flex justify-center items-center"
      >
        {loading && <MiniLoader />}
      </div>
    </div>
  )
}
