import React, {useState} from 'react';

import {Button, ButtonWithHover, ButtonWithForwardRef} from './components/Form'

function App() {
    const [bgColor, setBgColor] = useState();
    const [color, setColor] = useState();

    const buttonRef = React.createRef();
    const handleOnHover = (event, hover) => {
        // set default colors in state
        setBgColor(event.target.style.backgroundColor);
        setColor(event.target.style.color);

        buttonRef.current.style.backgroundColor = hover ? 'red' : bgColor;
        buttonRef.current.style.color = hover ? 'white' : color;
    }

    return (
        <>
            <Button>
                First Button - on app loaded
            </Button>
            <ButtonWithHover>
                Second Button - with hover
            </ButtonWithHover>
            <ButtonWithForwardRef
                {...{handleOnHover}}
                ref={buttonRef}
            >
                Third Button - with forwardRef
            </ButtonWithForwardRef>
        </>
    );
}

export default App;
