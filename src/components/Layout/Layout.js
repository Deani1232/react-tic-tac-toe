import React from 'react';
import Aux from '../../hocs/Auxiliary/Auxiliary';
const layout = (props) => {
    return (
        <Aux>
            <main>
                {props.children}
            </main>
        </Aux>
    );
};

export default layout;