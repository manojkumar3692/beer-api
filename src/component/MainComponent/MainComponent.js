import React, { PureComponent } from 'react';
import SearchBar from '../../util/Search/Search';
import PropTypes from 'prop-types';
import BeerAPI from '../../networking/BeerAPI';
import { debug } from 'util';
class MainComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      beerData: [],
      searchValue: '',
      favSel: false,
      favArr: [],
    };
    console.log(this.props)
    this.saveSearchValue = this.saveSearchValue.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.fav = this.fav.bind(this)
  }

  componentDidMount() {
    this.loader();
  }

  componentWillReceiveProps(props) {
      debugger
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  loader() {
    BeerAPI.getAllBeer()
      .then(response => {
        let beerData = response;
        beerData.map((beer,index) => {
            beer.isFav = false
        })
        this.setState({ beerData });
      })
      .catch(error => {
        console.log('Error for getting beer api');
      });
  }

  fav(selectedBeer) {
      let favArr = [];
    let data = this.state.beerData.map((beer,index) => {
        if(beer.id === selectedBeer.id) {
            beer.isFav = true
        }
        favArr.push(beer)
        return beer
    })
    this.setState({beerData:data,favArr:favArr},() => {
        window.localStorage.setItem('beerFav',this.state.favArr)
    })
  }

  saveSearchValue(searchValue) {
      this.setState({searchValue})
  }

  submitSearch() {
      BeerAPI.searchBeer(this.state.searchValue)
      .then((response) => {
          this.setState({beerData:response})
      })
      .catch((error) => {
          console.log('error in search')
      })
  }
  render() {
    const styles = require('./MainComponent.scss');
    return (
      <div>
        <SearchBar getSearchValue={this.saveSearchValue} search={this.submitSearch}  />
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
                    <i onClick={() => this.fav(beer)} className={`${beer.isFav && 'active'} ${'icon ion-md-star'}`} ></i>
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

MainComponent.propTypes = {
    submitSearch:PropTypes.func,
    getSearchValue:PropTypes.func
}

export default MainComponent;
