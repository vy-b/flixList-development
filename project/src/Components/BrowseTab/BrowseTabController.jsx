import React from 'react';
import BrowseTabView from './BrowseTabView'
class BrowseTabController extends React.Component {
    render() {
        return(
            <BrowseTabView username={this.props.username}/>
        )
    }
}

export default BrowseTabController