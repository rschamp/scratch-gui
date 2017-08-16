const classNames = require('classnames');
const {Keyframes, Frame} = require('react-keyframes');
const PropTypes = require('prop-types');
const React = require('react');

const greenFlagIcon = require('./icon--green-flag.svg');
const greenFlagIcon1 = require('./green-flag-01.svg');
const greenFlagIcon2 = require('./green-flag-02.svg');
const greenFlagIcon3 = require('./green-flag-03.svg');
const greenFlagIcon4 = require('./green-flag-04.svg');
const greenFlagIcon5 = require('./green-flag-05.svg');
const styles = require('./green-flag.css');

const GreenFlagComponent = function (props) {
    const {
        active,
        onClick,
        title,
        turbo,
        ...componentProps
    } = props;
    const imgProps = {
        className: classNames({
            [styles.greenFlag]: true,
            [styles.isActive]: active,
            [styles.skew]: active,
            [styles.shake]: turbo,
            [styles.shakeConstant]: turbo
        }),
        title: title,
        ...componentProps
    };
    const duration = turbo ? 75 : 200;
    return (
        <Keyframes
            loop={active ? true : 0}
            onClick={onClick}
        >
            <Frame duration={duration}>
                <img
                    {...imgProps}
                    src={greenFlagIcon1}
                />
            </Frame>
            <Frame duration={duration}>
                <img
                    {...imgProps}
                    src={greenFlagIcon2}
                />
            </Frame>
            <Frame duration={duration}>
                <img
                    {...imgProps}
                    src={greenFlagIcon3}
                />
            </Frame>
            <Frame duration={duration}>
                <img
                    {...imgProps}
                    src={greenFlagIcon4}
                />
            </Frame>
            <Frame duration={duration}>
                <img
                    {...imgProps}
                    src={greenFlagIcon5}
                />
            </Frame>
        </Keyframes>
    );
};
GreenFlagComponent.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
    turbo: PropTypes.bool
};
GreenFlagComponent.defaultProps = {
    active: false,
    title: 'Go',
    turbo: false
};
module.exports = GreenFlagComponent;
