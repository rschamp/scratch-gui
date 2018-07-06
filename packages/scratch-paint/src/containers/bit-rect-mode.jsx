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
import RectTool from '../helper/bit-tools/rect-tool';
import RectModeComponent from '../components/bit-rect-mode/bit-rect-mode.jsx';

class BitRectMode extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'activateTool',
            'deactivateTool'
        ]);
    }
    componentDidMount () {
        if (this.props.isRectModeActive) {
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

        if (nextProps.isRectModeActive && !this.props.isRectModeActive) {
            this.activateTool();
        } else if (!nextProps.isRectModeActive && this.props.isRectModeActive) {
            this.deactivateTool();
        }
    }
    shouldComponentUpdate (nextProps) {
        return nextProps.isRectModeActive !== this.props.isRectModeActive;
    }
    activateTool () {
        clearSelection(this.props.clearSelectedItems);
        // Force the default brush color if fill is MIXED or transparent
        const fillColorPresent = this.props.color !== MIXED && this.props.color !== null;
        if (!fillColorPresent) {
            this.props.onChangeFillColor(DEFAULT_COLOR);
        }
        this.tool = new RectTool(
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
            <RectModeComponent
                isSelected={this.props.isRectModeActive}
                onMouseDown={this.props.handleMouseDown}
            />
        );
    }
}

BitRectMode.propTypes = {
    clearSelectedItems: PropTypes.func.isRequired,
    color: PropTypes.string,
    handleMouseDown: PropTypes.func.isRequired,
    isRectModeActive: PropTypes.bool.isRequired,
    onChangeFillColor: PropTypes.func.isRequired,
    onUpdateImage: PropTypes.func.isRequired,
    selectedItems: PropTypes.arrayOf(PropTypes.instanceOf(paper.Item)),
    setSelectedItems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    color: state.scratchPaint.color.fillColor,
    isRectModeActive: state.scratchPaint.mode === Modes.BIT_RECT,
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
        dispatch(changeMode(Modes.BIT_RECT));
    },
    onChangeFillColor: fillColor => {
        dispatch(changeFillColor(fillColor));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BitRectMode);
