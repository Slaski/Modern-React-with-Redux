import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyBBqg2ToTswsyRBwI8KuL0bdGDSV9M_eJQ';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));