import React from 'react'
import styled from 'styled-components'
import Newsitem from './NewsItem'
import { useState, useEffect } from 'react';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
box-sizing : border-box;
padding-bottom : 3rem;
width : 768px;
margin : 0 auto;
margin-top : 2rem;
@media screen and (max-width : 768px){
    width : 100%;
    padding-left : 1rem;
    padding-right : 1rem;
}`;

function Newslist({category}) {

    const [loading, response, error] = usePromise(() =>{
        const query = (category === 'all')?'':`&category=${category}`;
        return axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=79b092b6d2c140fe942d6b35a011f65f`);
    }, [category]);

    if(loading){
        return <NewsListBlock>대기 중....</NewsListBlock>;
    }
    
    if(!response){
        return null;
    }
    
    if(error)
        return <NewsListBlock>error</NewsListBlock>;
    
    const { articles } = response.data;

        return (
        <NewsListBlock>
        {articles.map(article => (<Newsitem key={article.url} article={article}/>))}
        </NewsListBlock>
    )
}
export default Newslist;