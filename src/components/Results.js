import React, { Component } from 'react';


class Results extends Component {
    constructor(props) {
        super(props)


    render() {
        let { data } = this.props;
        console.log(data.mood);

        if (data.mood === "gloomy") {
        return (

            <div className="col s6 offset-3 yellow darken-2" >
                 { data ?
                    <div key={data.gifURL}>
                    <div> {data.quote} </div>
                    <img src={data.gifURL} />
                </div>
                 : null }
            </div>
        );
      }  else if (data.mood === "energetic") {
        return (

            <div>
                 { data ?
                    <div key={data.gifURL}>
                    <div> {data.quote} </div>
                    <img src={data.gifURL} />
                </div>
                 : null }
            </div>
        );
      }
      else if (data.mood === "studious") {
        return (

            <div>
                 { data ?
                    <div key={data.gifURL}>
                    <div> {data.quote} </div>
                    <img src={data.gifURL} />
                </div>
                 : null }
            </div>
        );
      }
      else if (data.mood === "creative") {
        return (

            <div>
                 { data ?
                    <div key={data.gifURL}>
                    <div> {data.quote} </div>
                    <img src={data.gifURL} />
                </div>
                 : null }
            </div>
        );
      }
      else if (data.mood === "romantic") {
        return (

            <div>
                 { data ?
                    <div key={data.gifURL}>
                    <div> {data.quote} </div>
                    <img src={data.gifURL} />
                </div>
                 : null }
            </div>
        );
      }
      else if (data.mood === "lazy") {
        return (

            <div>
                 { data ?
                    <div key={data.gifURL}>
                    <div> {data.quote} </div>
                    <img src={data.gifURL} />
                </div>
                 : null }
            </div>
        );
      }
      else if (data.mood === "random"){
        return (

            <div>
                 { data ?
                    <div key={data.gifURL}>
                    <div> {data.quote} </div>
                    <img src={data.gifURL} />
                </div>
                 : null }
            </div>
        );

      }
    }
}}

export default Results;
