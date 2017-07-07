import { connect } from 'react-redux'
import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

class Index extends React.Component {
    render() {
        return (
            <div>
                <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
                <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
                <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
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


export default connect(mapStateToProps, mapDispatchToProps)(Index)