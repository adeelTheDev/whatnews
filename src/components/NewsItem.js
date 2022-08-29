import { Component } from "react";
import "./NewsItem.css";


class NewsItem extends Component{
    render(){
        const {title, desc, img, uri, date, author} = this.props,
        defaultImg = "https://via.placeholder.com/500",
        defaultTitle = "Title is not given",
        defaultDesc = "Description is not given"
        return(
            <>
                <div className="col col-md-3 my-3">
                    <div className="card newsItem">
                        <a href={uri}>
                            <img src={img? img : defaultImg} className="card-img-top" alt={title} style={{minHeight: "150px"}} />
                        </a>
                        <div className="card-body text-center">
                            <h5 className="card-title">
                                <a href={uri} className="news-title text-danger text-decoration-none">{(title) ? title.slice(0, 40): defaultTitle}...</a>
                            </h5>
                            <small>{date.slice(0, 10)} By {author?.length >= 1 ? author.slice(0, 21) : "Unknown"}</small>
                            <p className="card-text">{desc ? desc.slice(0, 80): defaultDesc}</p>
                            <a href={uri} className="btn btn-outline-danger">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem