import React, {useRef, useEffect} from "react";

function Button({children}) {
    const buttonRef = useRef()
    const styles = {
        backgroundColor: 'black',
        color: 'yellow',
        margin: 20,
        padding: 20,
    };

    useEffect(() => {
        buttonRef.current.style.backgroundColor = 'red';
        buttonRef.current.style.color = 'white';
    }, [])

    return (
        <button style={styles} ref={buttonRef}>
            <span>{children}</span>
        </button>
    )
}

export default Button;