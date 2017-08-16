const bindAll = require('lodash.bindall');
const PropTypes = require('prop-types');
const React = require('react');

const VM = require('scratch-vm');

const GreenFlagComponent = require('../components/green-flag/green-flag.jsx');

class GreenFlag extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleClick',
            'handleKeyDown',
            'handleKeyUp',
            'onProjectRunStart',
            'onProjectRunStop'
        ]);
        this.state = {
            projectRunning: false,
            shiftKeyDown: false,
            turbo: props.vm.runtime.turboMode
        };
    }
    componentDidMount () {
        this.props.vm.addListener('PROJECT_RUN_START', this.onProjectRunStart);
        this.props.vm.addListener('PROJECT_RUN_STOP', this.onProjectRunStop);
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }
    componentDidUpdate (prevProps, prevState) {
        if (this.state.turbo !== prevState.turbo) {
            this.props.vm.setTurboMode(this.state.turbo);
        }
    }
    componentWillUnmount () {
        this.props.vm.removeListener('PROJECT_RUN_START', this.onProjectRunStart);
        this.props.vm.removeListener('PROJECT_RUN_STOP', this.onProjectRunStop);
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keyup', this.handleKeyUp);
    }
    onProjectRunStart () {
        this.setState({projectRunning: true});
    }
    onProjectRunStop () {
        this.setState({projectRunning: false});
    }
    handleKeyDown (e) {
        this.setState({shiftKeyDown: e.shiftKey});
    }
    handleKeyUp (e) {
        this.setState({shiftKeyDown: e.shiftKey});
    }
    handleClick (e) {
        e.preventDefault();
        if (this.state.shiftKeyDown) {
            this.setState({turbo: !this.props.vm.runtime.turboMode})
        } else {
            this.props.vm.greenFlag();
        }
    }
    render () {
        const {
            vm, // eslint-disable-line no-unused-vars
            ...props
        } = this.props;
        return (
            <GreenFlagComponent
                active={this.state.projectRunning}
                turbo={this.state.turbo}
                onClick={this.handleClick}
                {...props}
            />
        );
    }
}

GreenFlag.propTypes = {
    vm: PropTypes.instanceOf(VM)
};

module.exports = GreenFlag;
