import React from 'react';

import classes from './ComponentBar.module.css';
//TODO: Add prop type validation so only Component Bar Items get put here.
const ComponentBar = (props) => {

    return (
        <div className={classes.ComponentBar} style={{height: props.height}}>
            {props.children}
        </div>
    );
};

export default ComponentBar;