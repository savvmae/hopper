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
            <p>Code by Savannah Cosby, Roxy DeSantis-Nunally, Danny Sullivan</p>
          </div>
          <div className='footer roxyGif'>
            
          </div>
          <div className='footer savGif'>
            
          </div>
          <div className='footer dannyGif'>
            
          </div>
        </footer>
      </div>
    );
  }
}