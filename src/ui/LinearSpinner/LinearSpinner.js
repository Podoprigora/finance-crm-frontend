import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LinearSpinner = React.forwardRef(function LinearSpinner(props, ref) {
    const { height, primary, className, style, ...other } = props;

    return (
        <div
            className={classNames('linear-spinner', className, {
                'linear-spinner--primary': primary
            })}
            style={{ height, ...style }}
            {...other}
            ref={ref}
        >
            <div className="linear-spinner__bar" />
        </div>
    );
});

LinearSpinner.propTypes = {
    height: PropTypes.number,
    primary: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object
};

export default LinearSpinner;
