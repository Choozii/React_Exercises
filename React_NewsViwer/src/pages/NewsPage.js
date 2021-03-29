import React from 'react'
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import styled from 'styled-components';

function NewsPage({match}) {
    //console.log(match)
    const category = match.params.category || 'all';
    const NewsHeader = styled.div`
        background-color: #0f4c67;
        color : white;
    `;
    return (
        <>
        <NewsHeader>
        <Categories/>
        </NewsHeader>
        <NewsList category = {category} />        
        </>
    )
};

export default NewsPage
