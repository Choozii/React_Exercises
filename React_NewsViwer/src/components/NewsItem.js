import React from 'react'
import styled from 'styled-components'

/* 데이터 구조
{
      "source": {
        "id": null,
        "name": "Hani.co.kr"
      },
      "author": null,
      "title": "새달부터 75살 이상 백신접종 시작 : 의료·건강 : 사회 : 뉴스 - 한겨레",
      "description": "정부, 2분기 접종 대상자 발표 초등 1·2학년 교사도 앞당겨 “상반기에 1200만명 목표”",
      "url": "http://www.hani.co.kr/arti/society/health/986893.html",
      "urlToImage": "http://flexible.img.hani.co.kr/flexible/normal/970/687/imgdb/original/2021/0315/20210315503619.jpg",
      "publishedAt": "2021-03-15T12:24:21Z",
      "content": null
    },
     */

const NewsItemBlock = styled.div`
   display : flex;
   .thumnail{
    margin-right:1rem;   
    img{
        display : block;
        width : 160px;
        height : 100px;
        object-fit : cover;
        }
    }
    .contents{
        h2{
            margin : 0;
        }
        a{
            color:black;
        }
        p{
            margin : 0;
            line-height : 1.5;
            margin-top : 0.5rem;
            white-space : normal;
        }
    }
    &+&{
        margin-top : 3rem;
        border-bottom :3px;
    }
`;

export default function Newsitem({article}) {
    const {title, description, url, urlToImage} = article;
    
    return (
        <NewsItemBlock>
            {urlToImage && (
              <div className="thumnail">
              <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={urlToImage} alt="thumnail"/>
              </a>
              </div>
            )}
            <div className = "contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    )
}