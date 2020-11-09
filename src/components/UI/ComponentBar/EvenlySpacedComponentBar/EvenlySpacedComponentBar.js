import React from 'react';
import ComponentBar from "../ComponentBar";

const EvenlySpacedComponentBar = (props) => {
    let evenWidthPercentage = 100/props.children.length;
    let updatedChildren = React.Children.map(this.props.children,
        (child) => {
            return React.cloneElement(child, {width: evenWidthPercentage})
        }
    );
    return (
        <ComponentBar height={props.height}>
            {updatedChildren}
        </ComponentBar>
    );
};

export default EvenlySpacedComponentBar;