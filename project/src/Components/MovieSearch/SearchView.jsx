import React from 'react';
import '../SignUp/SignUp.css'
import "bootstrap/dist/css/bootstrap.min.css";
import '../SignUp/SignUp.css'
import { FaSearch } from 'react-icons/fa';

class SearchView extends React.Component {
    state= {
        title: ''
    }
    onSubmit = () => {
        const {title} = this.state;
        this.props.onRequest(title)
        this.setState({title: ''})
    }
    onInput = (event) => {
        event.preventDefault();
        const title = event.target.value;
        this.setState({title});
    }
    onSearch = (event) => {
        if (event.keyCode === 13){
            event.preventDefault();
            this.onSubmit();
        }
    }
    render() {
        const {title} = this.state;
        const {error} = this.props
        return (
            <div className="search">
                <div className="input-group mb-3">
                    <input className="form-control search-box" type="text" onChange={this.onInput} onKeyDown={this.onSearch} placeholder="Movie Title" value={title}/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-secondary" onClick={this.onSubmit} value="Search">
                            <FaSearch className="searchIcon" /> Search 
                        </button>
                    </div>
                </div>
                <div className="error">{error}</div>
            </div>
        )
    }
}
export default SearchView;
