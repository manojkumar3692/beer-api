import React,{PureComponent} from 'react';


class SearchBar extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ''
        }
        this.setValue = this.setValue.bind(this);
    }

    setValue(event) {
       this.setState({searchValue:event.target.value},() => {
           this.props.getSearchValue(this.state.searchValue)
       })
    }

    render() {
        const styles = import('./Search.scss')
        return (
            <div className="search">
                <input placeholder="search here and click enter" onChange={this.setValue}/>
                <button onClick={this.props.search}>Search</button>
            </div>
        )
    }
}

export default SearchBar;