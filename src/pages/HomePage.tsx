import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { setFlag} from "../redux/news/newsSlice";
import {getNews} from "../redux/news/selectors";

const HomePage = () =>{
  const news = useSelector(getNews);
  const dispatch = useDispatch()

  useEffect(()=>{
    if(news.length!==0){
      dispatch(setFlag(true))
    }
  },[dispatch])

  return <div>HomePage</div>;
}
export default HomePage;
