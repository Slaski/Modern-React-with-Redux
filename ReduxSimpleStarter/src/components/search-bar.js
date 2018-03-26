import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    onInputChange(term) {
        this.setState({term: event.target.value});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    onChange={event => this.onInputChange({term: event.target.value})} 
                    value={this.state.term}
                />
            </div>
        );
    }
}

export default SearchBar;