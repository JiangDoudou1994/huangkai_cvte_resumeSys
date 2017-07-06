import { connect } from 'react-redux';
import React from 'react';

class App extends React.Component{
    render() {

        return (
            <div className='app-wrap'>
            {this.props.children}    
      </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)