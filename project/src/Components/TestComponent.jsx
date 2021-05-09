import React from 'react';
import { withRouter } from 'react-router-dom';
class TestComponent extends React.Component {    


    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
            </div>
        )
    }
}

export default withRouter(TestComponent)
