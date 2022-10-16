import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component"
import Spiner from './Spiner'

export default function News(props) {
  var [articles, setarticles] = useState([])
  var [totalResults, settotalResults] = useState(0)
  var [page, setpage] = useState(1)

  async function getAPIData() {

   setpage(1)
    var rawdata
    if (props.search === '')
      rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=4e4da869c8084f3aa1661aa6db1aa691`)
    else
      rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=4e4da869c8084f3aa1661aa6db1aa691`)
    var result = await rawdata.json()
    setarticles(result.articles)
    settotalResults(result.totalResults)
  }
  const fetchMoreData = async () => {
    setpage(page+1)
    var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${page + 1}&apiKey=4e4da869c8084f3aa1661aa6db1aa691`)
    var result = await rawdata.json()
    setarticles(articles.concat(result.articles))

  }
  useEffect(() => {
    getAPIData()
  }, [props.language, props.pageSize, props.search, props.q])
 
    return (
      <>
        <div className='container-fluid'>
          {props.search ?
            <h5 className='background edit fs-3'>News Realated to {props.search} </h5> :
            <h5 className='background edit fs-3'>{props.q} News Section</h5>
          }
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length < totalResults}
            loader={<Spiner />}
          >
            <div className='row'>
              {
                articles.map((item, index) => {
                  return <NewsItem
                    key={index}
                    title={item.title}
                    source={item.source.name}
                    description={item.description}
                    url={item.url}
                    pic={item.urlToImage}
                    date={item.publishedAt}
                  />
                })
              }
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }

