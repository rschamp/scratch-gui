import paper from '@scratch/paper';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import bindAll from 'lodash.bindall';
import Modes from '../lib/modes';
import {MIXED} from '../helper/style-path';

import {changeFillColor, DEFAULT_COLOR} from '../reducers/fill-color';
import {changeMode} from '../reducers/modes';
import {clearSelectedItems, setSelectedItems} from '../reducers/selected-items';
import {clearSelection, getSelectedLeafItems} from '../helper/selection';
import OvalTool from '../helper/bit-tools/oval-tool';
import OvalModeComponent from '../components/bit-oval-mode/bit-oval-mode.jsx';

class BitOvalMode extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'activateTool',
            'deactivateTool'
        ]);
    }
    componentDidMount () {
        if (this.props.isOvalModeActive) {
            this.activateTool(this.props);
        }
    }
    componentWillReceiveProps (nextProps) {
        if (this.tool && nextProps.color !== this.props.color) {
            this.tool.setColor(nextProps.color);
        }
        if (this.tool && nextProps.selectedItems !== this.props.selectedItems) {
            this.tool.onSelectionChanged(nextProps.selectedItems);
        }

        if (nextProps.isOvalModeActive && !this.props.isOvalModeActive) {
            this.activateTool();
        } else if (!nextProps.isOvalModeActive && this.props.isOvalModeActive) {
            this.deactivateTool();
        }
    }
    shouldComponentUpdate (nextProps) {
        return nextProps.isOvalModeActive !== this.props.isOvalModeActive;
    }
    activateTool () {
        clearSelection(this.props.clearSelectedItems);
        // Force the default brush color if fill is MIXED or transparent
        const fillColorPresent = this.props.color !== MIXED && this.props.color !== null;
        if (!fillColorPresent) {
            this.props.onChangeFillColor(DEFAULT_COLOR);
        }
        this.tool = new OvalTool(
            this.props.setSelectedItems,
            this.props.clearSelectedItems,
            this.props.onUpdateImage);
        this.tool.setColor(this.props.color);
        this.tool.activate();
    }
    deactivateTool () {
        this.tool.deactivateTool();
        this.tool.remove();
        this.tool = null;
    }
    render () {
        return (
            <OvalModeComponent
                isSelected={this.props.isOvalModeActive}
                onMouseDown={this.props.handleMouseDown}
            />
        );
    }
}

BitOvalMode.propTypes = {
    clearSelectedItems: PropTypes.func.isRequired,
    color: PropTypes.string,
    handleMouseDown: PropTypes.func.isRequired,
    isOvalModeActive: PropTypes.bool.isRequired,
    onChangeFillColor: PropTypes.func.isRequired,
    onUpdateImage: PropTypes.func.isRequired,
    selectedItems: PropTypes.arrayOf(PropTypes.instanceOf(paper.Item)),
    setSelectedItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    color: state.scratchPaint.color.fillColor,
    isOvalModeActive: state.scratchPaint.mode === Modes.BIT_OVAL,
    selectedItems: state.scratchPaint.selectedItems
});
const mapDispatchToProps = dispatch => ({
    clearSelectedItems: () => {
        dispatch(clearSelectedItems());
    },
    setSelectedItems: () => {
        dispatch(setSelectedItems(getSelectedLeafItems()));
    },
    handleMouseDown: () => {
        dispatch(changeMode(Modes.BIT_OVAL));
    },
    onChangeFillColor: fillColor => {
        dispatch(changeFillColor(fillColor));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BitOvalMode);
