import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const circleSize = 50;

const CircularSpinner = React.forwardRef(function CircularSpinner(
    { size = 'medium', primary, className, style },
    ref
) {
    return (
        <div
            className={classNames('circular-spinner', className, {
                'circular-spinner--primary': primary,
                [`circular-spinner--${size}`]: size
            })}
            style={style}
            ref={ref}
        >
            <svg viewBox={`0 0 ${circleSize} ${circleSize}`} className="circular-spinner__svg">
                <circle
                    className="circular-spinner__svg-circle"
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                    r={circleSize / 2 - 5}
                />
            </svg>
        </div>
    );
});

CircularSpinner.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    conteinerSize: PropTypes.number,
    strokeWidth: PropTypes.number,
    style: PropTypes.object,
    className: PropTypes.string,
    primary: PropTypes.bool
};

export default CircularSpinner;
