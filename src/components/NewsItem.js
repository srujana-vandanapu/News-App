import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,imgUrl,newsurl } = this.props;
    return (
      <div className="card my-3" style={{ width: "18rem" }}>
        <img src={!imgUrl?"https://www.goabadminton.com/sites/default/files/default_images/default-news.jpg":imgUrl} className="card-img-top" alt="." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <a href={newsurl} className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
