import React, {useRef} from "react";

function ButtonWithHover({children}) {
    const buttonRef = useRef()
    const styles = {
        backgroundColor: 'black',
        color: 'yellow',
        margin: 20,
        padding: 20,
    };

    const handleOnHover = (hover) => {
        let bgColor = hover ? 'red' : styles.backgroundColor;
        let color = hover ? 'white' : styles.color;

        buttonRef.current.style.backgroundColor = bgColor;
        buttonRef.current.style.color = color;
    }

    return (
        <button style={styles}
                onMouseEnter={(e) => handleOnHover(true)}
                onMouseLeave={(e) => handleOnHover( false)}
                ref={buttonRef}
        >
            <span>{children}</span>
        </button>
    )
}

export default ButtonWithHover;