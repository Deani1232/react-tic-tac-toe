import React from 'react';
import Aux from '../../hocs/Auxiliary/Auxiliary';
const layout = (props) => {
    return (
        <Aux>
            <div>
                topbar
            </div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
};

export default layout;