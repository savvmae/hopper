import React, { Component } from 'react';
import axios from 'axios'
import '../styles/App.css';

import Results from './Results';
import moods from '../data.js';

const QUOTE_API_KEY = 'mEx4TEI7AHb_xa9U0fGSMQeF';
const GIPHY_API_KEY = '47f2aabc194a4fa9940ad49a3dd27081';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mood: '',
      gifURL: '',
      quote: '',
      quoteQuery: '',
      gifQuery: ''
    }
  }

  handleMoodChange = (e) => {
    e.preventDefault();
    let mood = e.target.value
    if (mood === "studious") {
      this.setState({ quoteQuery: moods.moods.studiousQuote, gifQuery: moods.moods.studiousGiphy });
    } else if (mood === "creative") {
      this.setState({ quoteQuery: moods.moods.creativeQuote, gifQuery: moods.moods.creativeGiphy });
    } else if (mood === "romantic") {
      this.setState({ quoteQuery: moods.moods.romanticQuote, gifQuery: moods.moods.romanticGiphy });
    } else if (mood === "gloomy") {
      this.setState({ quoteQuery: moods.moods.gloomyQuote, gifQuery: moods.moods.gloomyGiphy });
    } else if (mood === "energetic") {
      this.setState({ quoteQuery: moods.moods.energeticQuote, gifQuery: moods.moods.energeticGiphy });
    } else if (mood === "lazy") {
      this.setState({ quoteQuery: moods.moods.lazyQuote, gifQuery: moods.moods.lazyGiphy });
    }
    this.setState({ mood: e.target.value });
  }
  getQuote() {
    return axios.get('http://quotes.rest/qod.json?category=' + this.state.quoteQuery + '&api_key=' + QUOTE_API_KEY);
  }
  getGif() {
    return axios.get('https://api.giphy.com/v1/gifs/search?api_key=' + GIPHY_API_KEY + '&q=' + this.state.gifQuery + '&limit=1&offset=0&rating=G&lang=en');
  }
  getResults = (e) => {
    e.preventDefault();
    axios.all([this.getQuote(), this.getGif()])
      .then(axios.spread((quote, gif) => {
        this.setState({ quote: quote.data.contents.quotes[0].quote });
        this.setState({ gifURL: gif.data.data[0].images.original.url })
      }))
  }
  getRandomGif() {
    return axios.get('https://api.giphy.com/v1/gifs/random?api_key=' + GIPHY_API_KEY + '&tag=&rating=G');
  }

  getRandomQuote() {
    return axios.get('http://quotes.rest/quote/random.json?api_key=' + QUOTE_API_KEY);
  }
  getRandomResults = (e) => {
    e.preventDefault();

    axios.all([this.getRandomQuote(), this.getRandomGif()])
      .then(axios.spread((quote, gif) => {
        this.setState({ quote: quote.data.contents.quote, gifURL: gif.data.data.image_url, mood: "random" });
      }))
  }
  render() {
    return (
      <div>
        <form>
          <div className="choose">
          <label className="dropdown-label">All the Feels</label>
        </div>
          <select className="browser-default" onChange={this.handleMoodChange} id="mood" value={this.state.value}>
            <option selected="true" disabled="disabled" value="">Choose Your Mood</option>
            <option value="studious">Studious</option>
            <option value="creative">Creative</option>
            <option value="romantic">Romantic</option>
            <option value="gloomy">Gloomy</option>
            <option value="energetic">Energetic</option>
            <option value="lazy">Lazy</option>
          </select>
          <div className="submit">
          <button onClick={this.getResults} type="submit" className="waves-effect waves-light btn">Choose Mood and Click Here</button>
        </div>
        </form>
        <div className="random-button">
        <button onClick={this.getRandomResults} type="submit" className="waves-effect waves-light btn-large">...or Surprise Me!</button>
        </div>
        <Results data={this.state} />
      </div>

    );
  }
}

export default App;
