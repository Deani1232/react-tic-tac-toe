import React from 'react';
import classes from './ComponentBarItem.module.css';

const ComponentBarItem = (props) => {
    return (
        <div className={classes.ComponentBarItem}
             style={
                 {
                     width: props.width+"%",
                     backgroundColor: props.color
                 }
             }>
            {props.children}
        </div>
    );
};

export default ComponentBarItem;