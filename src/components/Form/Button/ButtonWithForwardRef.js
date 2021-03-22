import React from "react";

const ButtonWithForwardRef = React.forwardRef((props, buttonRef) => {
    const {children, handleOnHover} = props;
    const styles = {
        backgroundColor: 'black',
        color: 'yellow',
        margin: 20,
        padding: 20,
    };

    return (
        <button
            style={styles}
            ref={buttonRef}
            onMouseEnter={(e) => handleOnHover(e, true)}
            onMouseLeave={(e) => handleOnHover(e, false)}
        >
            <span>{children}</span>
        </button>
    )
});

export default ButtonWithForwardRef;