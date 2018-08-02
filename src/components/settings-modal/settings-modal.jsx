import PropTypes from 'prop-types';
import React from 'react';

import Box from '../box/box.jsx';
import Modal from '../modal/modal.jsx';

import styles from './settings-modal.css';

const SettingsModal = ({
    audioinputs,
    audiooutputs,
    videoinputs,
    onRequestClose
}) => (
    <Modal
        isOpen
        className={styles.modalContent}
        contentLabel="Settings"
        onRequestClose={onRequestClose}
    >
        <Box className={styles.body}>
            <Box>
                <label>{'Video Input'}</label>
                <select>{videoinputs.map(input => (
                    <option
                        key={`videoinput-${input.deviceId}`}
                        value={input.deviceId}
                    >
                        {input.label}
                    </option>
                ))}</select>
            </Box>
            <Box>
                <label>{'Audio Input'}</label>
                <select>{audioinputs.map(input => (
                    <option
                        key={`audioinput-${input.deviceId}`}
                        value={input.deviceId}
                    >
                        {input.label}
                    </option>
                ))}</select>
            </Box>
            <Box>
                <label>{'Audio Output'}</label>
                <select>{audiooutputs.map(output => (
                    <option
                        key={`audiooutput-${output.deviceId}`}
                        value={output.deviceId}
                    >
                        {output.label}
                    </option>
                ))}</select>
            </Box>
        </Box>
    </Modal>
);

SettingsModal.propTypes = {
    audioinputs: PropTypes.arrayOf(PropTypes.object),
    audiooutputs: PropTypes.arrayOf(PropTypes.object),
    onRequestClose: PropTypes.func,
    videoinputs: PropTypes.arrayOf(PropTypes.object)
};

export default SettingsModal;
