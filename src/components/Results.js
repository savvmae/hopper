import React, { Component } from 'react';


class Results extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { data } = this.props;

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

export default Results;

