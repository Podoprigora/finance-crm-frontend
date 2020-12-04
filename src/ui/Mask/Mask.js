import React, { useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import useEventCallback from '../hooks/useEventCallback';

const updateAnchorStyles = (node, reset = false) => {
    if (node) {
        const { style } = node;

        style['position'] = reset ? null : 'relative';
        style['overflow'] = reset ? null : 'hidden';
    }
};

const Mask = React.forwardRef(function Mask(props, ref) {
    const { open, fixed, className, children, anchorRef, ...other } = props;

    const handleTransitionExited = useEventCallback(() => {
        if (anchorRef && anchorRef.current) {
            const node = anchorRef.current;
            updateAnchorStyles(node, false);
        }
    });

    useEffect(() => {
        if (anchorRef && anchorRef.current) {
            const node = anchorRef.current;

            if (open) {
                updateAnchorStyles(node);
            }
        }

        return undefined;
    }, [anchorRef, open]);

    return (
        <CSSTransition
            in={open}
            timeout={200}
            classNames="mask"
            unmountOnExit
            onExited={handleTransitionExited}
        >
            <div
                className={classNames('mask', className, {
                    'mask--fixed': fixed
                })}
                {...other}
                ref={ref}
            >
                {children}
            </div>
        </CSSTransition>
    );
});

Mask.propTypes = {
    open: PropTypes.bool,
    fixed: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.element,
    anchorRef: PropTypes.object
};

export default Mask;
