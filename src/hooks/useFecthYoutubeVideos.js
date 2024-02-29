import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularVideos } from "../utils/youtubeSlice";

const useFetchYoutubeVideos = () => {
    const dispatch = useDispatch()


    const fetchYoutubeVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        dispatch(addPopularVideos(json.items));

      }
    
      useEffect(()=>{
        fetchYoutubeVideos();
      },[])

}

export default useFetchYoutubeVideos;