import { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import InfiniteScroll from 'react-infinite-scroll-component';

class News extends Component {
    API_KEY = process.env.REACT_APP_API_KEY
    constructor(props){
        super(props)
        document.title = `${props.category[0].toUpperCase()}${props.category.slice(1)} - WhatNews`
    }
    state = {
        articles: [],
        page: 1,
        totalResults: 0,
        loading: true
    }
    updateResults = async ()=>{
        this.props.setProgress(5)
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.API_KEY}&page=${this.state.page}&pageSize=12`;
        this.props.setProgress(25)
        const response = await fetch(url);
        this.props.setProgress(50)
        let data = await response.json();
        this.props.setProgress(70)
        let articles = data.articles;
        this.props.setProgress(80)
        this.setState({
            articles: articles,
            totalResults: data.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }
    componentWillMount(){
        this.updateResults()
    }
    fetchMoreDataOnScroll = async ()=>{
        this.setState({page: this.state.page += 1})
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.API_KEY}&page=${this.state.page}&pageSize=12`;
        const response = await fetch(url);
        let data = await response.json();
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults
        })
    }
    render() {
        return (
            <>
                <section>
                    <h2 className="mt-5 mb-3 text-center">Top Headlines on {this.props.category}</h2>
                    {this.state.loading && <Loading/>}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreDataOnScroll}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Loading/>}
                        endMessage= {<h3 style={{textAlign: "center", margin: "50px auto"}}>That's All</h3>}>
                    <div className="container">
                        <div className="row">
                        {
                            this.state.articles.map((news) =>{
                                let {url, title, description, urlToImage, publishedAt, author} = news;
                                return <NewsItem
                                    key={(Math.random()*100)}
                                    title={title}
                                    desc={description}
                                    uri={url}
                                    img={urlToImage}
                                    date={publishedAt}
                                    author={author}
                                />
                            })
                        }
                        </div>
                    </div>
                    </InfiniteScroll>
                </section>
            </>
        )
    }
}
export default News