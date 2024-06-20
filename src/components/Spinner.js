import React, { Component } from "react";
import spinner from './spinner.gif';
import './style.css';

export default class Spinner extends Component {
  render() {
    return <div className="text-center">
        <img className="spinner" src={spinner} alt="Loading"/>
    </div>;
  }
}
