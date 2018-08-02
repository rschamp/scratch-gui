import bindAll from 'lodash.bindall';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SettingsModalComponent from '../components/settings-modal/settings-modal.jsx';
import {
    closeSettings
} from '../reducers/modals';

class SettingsModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'updateDevices'
        ]);
        this.state = {
            videoinputs: [],
            audioinputs: [],
            audiooutputs: []
        };
        this.updateDevices();
    }
    componentDidMount () {
        navigator.mediaDevices.addEventListener('devicechange', this.updateDevices);
    }
    componentWillUnmount () {
        navigator.mediaDevices.removeEventListener('devicechange', this.updateDevices);
    }
    updateDevices () {
        navigator.mediaDevices.enumerateDevices().then(devices => {
            this.setState({
                videoinputs: devices.filter(device => device.kind === 'videoinput'),
                audioinputs: devices.filter(device => device.kind === 'audioinput'),
                audiooutputs: devices.filter(device => device.kind === 'audiooutput')
            });
        });
    }
    render () {
        return (
            <SettingsModalComponent
                audioinputs={this.state.audioinputs}
                audiooutputs={this.state.audiooutputs}
                videoinputs={this.state.videoinputs}
                onRequestClose={this.props.onRequestClose}
            />
        );
    }
}

SettingsModal.propTypes = {
    onRequestClose: PropTypes.func
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    onRequestClose: () => {
        dispatch(closeSettings());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsModal);
