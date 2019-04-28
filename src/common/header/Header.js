import React,{PureComponent} from 'react';


class Header extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = import('./header.scss');
        return (
            <div className="header">
                <div className="header_left">
                    <h1>Beer Pong</h1>
                </div>
                <div className="header_right">
                    <ul>
                        <li>Home</li>
                        <li>Favorite</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;