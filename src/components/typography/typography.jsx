import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './typography.css';

const elementWrapper = function (elementName) {
    const element = ({
        className,
        children,
        ...componentProps
    }) => (
        React.createElement(elementName, {
            className: classNames(styles[elementName], className),
            ...componentProps
        }, children)
    );
    element.displayName = elementName;
    element.propTypes = {
        children: PropTypes.node,
        className: PropTypes.string
    };
    return element;
};

const P = elementWrapper('p');
const H2 = elementWrapper('h2');

export {
    P,
    H2
};
