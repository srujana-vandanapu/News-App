import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import './style.css';

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ce75d763dbfc45b08bd73aebc337ce19&page=1&pageSize=9`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
  }

  handleNext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 9)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=ce75d763dbfc45b08bd73aebc337ce19&page=${
        this.state.page + 1
      }&pageSize=9`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedata = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles,
        loading: false,
      });
    }
  };
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=ce75d763dbfc45b08bd73aebc337ce19&page=${
      this.state.page - 1
    }&pageSize=9`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.loading && <Spinner />}
        <h1 className="my-4 text-center">Stay Up to date - Today's Top News</h1>
        <div className="row mt-3">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="news-col col-md-4 col-sm-6" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            className="btn btn-dark"
            onClick={this.handleNext}
            disabled={this.state.page >= Math.ceil(this.state.totalResults / 9)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
