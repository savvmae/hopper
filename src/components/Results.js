import React, {Component} from 'react';

class Results extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {data} = this.props;

    return (

      <div>
        {data.gifURL && data.mood === "gloomy"
          ? <div className="container column #fbc02d yellow darken-2">
              <div className="col s12">
                <div key={data.gifURL}>
                  <div className="white-text quote">
                    {data.quote}</div>
                </div>
                <div className="col s6 gif">
                  <img src={data.gifURL} className="gifURL"/>
                </div>
              </div>
            </div>
          : data.gifURL && data.mood === "energetic"
            ? <div className="container column #ffcdd2 red lighten-4">
                <div className="col s12">
                  <div key={data.gifURL}>
                    <div className="white-text quote">
                      {data.quote}
                    </div>
                    <img src={data.gifURL} className="gifURL"/>
                  </div>
                </div>
              </div>
            : data.gifURL && data.mood === "studious"
              ? <div className="container column #9ccc65 light-green lighten">
                  <div className="col s12">
                    <div key={data.gifURL}>
                      <div className="white-text quote">
                        {data.quote}
                      </div>
                      <img src={data.gifURL} className="gifURL"/>
                    </div>
                  </div>
                </div>
              : data.gifURL && data.mood === "creative"
                ? <div className="container column #42a5f5 blue lighten">
                    <div className="col s12">
                      <div key={data.gifURL}>
                        <div className="white-text quote">
                          {data.quote}
                        </div>
                        <img src={data.gifURL} className="gifURL"/>
                      </div>
                    </div>
                  </div>
                : data.gifURL && data.mood === "romantic"
                  ? <div className="container column #f8bbd0 pink lighten-4">
                      <div className="col s12">
                        <div key={data.gifURL}>
                          <div className="black-text quote">
                            {data.quote}
                          </div>
                          <img src={data.gifURL} className="gifURL"/>
                        </div>
                      </div>
                    </div>
                  : data.gifURL && data.mood === "lazy"
                    ? <div className="container column #cddc39 lime">
                        <div className="col s12">
                          <div key={data.gifURL}>
                            <div className="#f4ff81 lime accent-1-text quote">
                              <div>
                                {data.quote}
                              </div>
                              <img src={data.gifURL} className="gifURL"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    : data.gifURL && data.mood === "random"
                      ? <div className="#ffa726 orange lighten-1">
                        <div className="col s12">
                          <div key={data.gifURL}>
                            <div>
                              <div>
                                {data.quote}
                              </div>
                              <img src={data.gifURL} className="black-text quote"/>
                            </div>
                          </div>
                        </div>
                      </div> : null
                    }
              </div>
                    )
}
}
export default Results;
