import React from 'react';
import '.././ProfileTab.css'
import { FaUserPlus } from 'react-icons/fa'

class UserSearchView extends React.Component {
    state= {
        searchUser: ''
    }
    onSubmit = () => {
        const {searchUser} = this.state;
        this.props.onRequest(searchUser)
        this.setState({searchUser: ''})
    }
    onInput = (event) => {
        event.preventDefault();
        const searchUser = event.target.value;
        this.setState({searchUser});
    }
    onSearch = (event) => {
        if (event.keyCode === 13){
            event.preventDefault();
            this.onSubmit();
        }
    }
    render() {
        const {searchUser} = this.state;
        const {error, success} = this.props
        return (
            <div className="search">
                <div className="input-group mb-3">
                    <input className="form-control search-box" type="text" onChange={this.onInput} onKeyDown={this.onSearch} placeholder="Friend Username" value={searchUser}/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-secondary" onClick={this.onSubmit} value="Add">
                            <FaUserPlus className="addUserIcon" /> Add
                        </button>
                    </div>
                </div>
                <div className="message">
                    <div className="error">{error}</div>
                    <div className="success">{success}</div>
                </div>
            </div>
        )
    }
}
export default UserSearchView;