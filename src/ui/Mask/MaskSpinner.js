import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MaskSpinner = React.forwardRef(function MaskSpinner(props, ref) {
    const { children, tip, className, position = 'center', primary, ...other } = props;

    const progressElement =
        children &&
        React.cloneElement(children, {
            primary
        });

    return (
        <div
            className={classNames('mask__spinner', className, {
                'mask__spinner--primary': primary,
                [`mask__spinner--${position}`]: position
            })}
            {...other}
            ref={ref}
        >
            {progressElement}
            {tip && <div className="mask__spinner-tip">{tip}</div>}
        </div>
    );
});

MaskSpinner.propTypes = {
    children: PropTypes.element,
    tip: PropTypes.string,
    className: PropTypes.string,
    position: PropTypes.oneOf(['top', 'bottom', 'center']),
    primary: PropTypes.bool
};

export default MaskSpinner;
