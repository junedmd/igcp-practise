import React,{useState,useEffect}from "react";
import axios from "axios";
import "./Home.css"

export default function Home(){

    const [news,setNews] =useState([]);
    const [search ,setSearch]=useState("pune")

    const loadNews = async ()=>{
        try{
            const response = await axios.get ( `https://newsapi.org/v2/everything?q=${search}&from=2023-10-09&to=2023-10-09&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);
            
            setNews(response.data.articles)
        }catch(error){
            console.error(
                "Error fetching news:", error
            )
        }
       
    }

    useEffect(()=>{
        loadNews()
    },[search])

   
    return(
        <>
        <h1 className="text-center"> NDTV INDIA SHORT ARTICLES</h1>
        <input type="text" value={search} onChange={(e)=>{
            setSearch(e.target.value)
        }}  className="input-news"/>

        <div className="box-container"> 
        {
            news.map((info,index)=>{
                const {title,author,url,urlToImage,publishedAt ,conten,description}= info;
                return(
                    <div className="news-container">
                        <img src={urlToImage} className="img-info" />
                        <h5> {title}</h5>
                        <h6> {author}</h6>
                        
                     <a href={url} target="blank"><button className="btn-info"> readmore</button>  </a> 
                    </div>
                )
            })
        } </div>
        
        </>
    )
}