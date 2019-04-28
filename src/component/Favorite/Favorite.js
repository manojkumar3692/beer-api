import React, { PureComponent } from 'react';

class Favorite extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      beerData: [],
    };
  }

  componentDidMount() {
    this.loader();
  }

 
  loader() {
    
    let data = window.localStorage.getItem('beerFav');
    JSON.parse(data)
    debugger
  }

  render() {
    const styles = require('../MainComponent/MainComponent.scss');
    return (
      <div>
        <div className="beerContainer">
        {
            this.state.beerData.map((beer,index) => {
                return (
                    <div className="beerList" key={index}>
                    <div className="beerImage" >
                    <img src={beer.image_url}/>
                    </div>
                    <div className="beerDetails">
                    {/* icon ion-md-star */}
                      <h1>{beer.name}</h1>
                      <p>{beer.description}</p>
                    </div>
                  </div>
                )
            })
        }
        </div>
      </div>
    );
  }
}


export default Favorite;
