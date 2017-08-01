import React, { Component } from 'react';

class Results extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { data } = this.props;

        return (

            <div>
                {data && data.mood === "gloomy" ?
                    <div className="column yellow darken-2">
                        <div key={data.gifURL}>
                            <div className="col s6 offset-2"> {data.quote} </div>
                            <img className="col s6 offset-2" src={data.gifURL} />
                        </div></div>
                    : data && data.mood === "energetic" ?
                        <div>
                            <div className="col s6 offset-3 yellow darken-2" key={data.gifURL}>
                                <div> {data.quote} </div>
                                <img src={data.gifURL} />
                            </div></div>
                        : data && data.mood === "studious" ?
                            <div>
                                <div className="col s6 offset-3 yellow darken-2" key={data.gifURL}>
                                    <div> {data.quote} </div>
                                    <img src={data.gifURL} />
                                </div></div>
                            : data && data.mood === "creative" ? <div>
                                <div className="col s6 offset-3 yellow darken-2" key={data.gifURL}>
                                    <div> {data.quote} </div>
                                    <img src={data.gifURL} />
                                </div></div> 
                                : data && data.mood === "romantic" ? <div>
                                <div className="col s6 offset-3 yellow darken-2" key={data.gifURL}>
                                    <div> {data.quote} </div>
                                    <img src={data.gifURL} />
                                </div></div> 
                                : data && data.mood === "lazy" ? <div>
                                <div className="col s6 offset-3 yellow darken-2" key={data.gifURL}>
                                    <div> {data.quote} </div>
                                    <img src={data.gifURL} />
                                </div></div> 
                                : data && data.mood === "random" ? <div>
                                <div className="col s6 offset-3 yellow darken-2" key={data.gifURL}>
                                    <div> {data.quote} </div>
                                    <img src={data.gifURL} />
                                </div></div> : null }

                            }
            </div>
        );
    }
}


export default Results;
