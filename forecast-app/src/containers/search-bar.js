import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();

        // We need to go and fetch weather data
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onSubmit}>
                <input 
                    value={this.state.term} 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

export default SearchBar;