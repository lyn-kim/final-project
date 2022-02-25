import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className="navbar">
          <div className="row space-between">
            <div>
              <span className="display-flex"><i className="fas fa-mountain logo"></i>
              <a href="#" className="logo-font"> DogTrails</a>
              </span>
            </div>
            <ul className="nav-list">
              <li className="nav-links"><a href="#saved">SAVED</a></li>
              <li className="nav-links"><a href="#all-list">LIST</a></li>
              <li className="nav-links">
                {
                <a onClick={() => this.props.onOpenAuthModal()}><i className="fas fa-user"></i></a>
                }
              </li>
            </ul>
          </div>
        </div>
    );
  }
}
