import React, {Component} from 'react';
import './BaseLayout.css';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="base">
        <nav className="navbar">
      
        </nav>

        {this.props.children}

        <footer>
          <div className='footer footerText'>
            <p>Code by <a href='http://www.savannahcosby.com' alt='Portfolio for Savannah Cosby'>Savannah Cosby</a>, <a href='https://github.com/roxyfaye' alt='GitHub for Roxy DeSantis-Nunally'>Roxy DeSantis-Nunally</a>, and <a href='http://danjsul3.io' alt='Portfolio for Danny Sullivan'>Danny Sullivan</a></p>
          </div>
          <div id='roxyGif' className='footer roxyGif'>
          </div>
          <div id='savGif' className='footer savGif'>
          </div>
          <div id='dannyGif'className='footer dannyGif'>
          </div>
        </footer>
      </div>
    );
  }
}