import React, { useState } from "react";


export function useWindowScroll() {
    const [ scroll, setScroll ] = useState( { scrollY: window.scrollY, scrollX: window.scrollX } );

    const handleScroll = () => {
        setScroll( { scrollY: window.scrollY, scrollX: window.scrollX } );
    };

    React.useEffect( () => {

        window.addEventListener( 'scroll', handleScroll );

        return () => {
            window.removeEventListener( 'scroll', handleScroll );
        };
    }, [] );

    return scroll;
}

