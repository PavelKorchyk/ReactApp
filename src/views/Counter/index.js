import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { styles } from './styles.js';

const Counter = (props) => {
    const { classes } = props;
    return (
        <section className = {classes.container}>
            <div className = {`${classes.wrapper} ${classes.text}`}>                
               {props.counterNum}
            </div>
            <div className = {classes.wrapper}>
                <Button color = "primary" onClick = {props.increaseCounter}>+</Button>
                <Button color = "secondary" onClick = {props.resetCounter}>Reset</Button>
                <Button color = "primary" onClick = {props.decreaseCounter}>-</Button>
            </div>
        </section>
    )
}

Counter.propTypes = {
    counterNum: PropTypes.number.isRequired,
    increaseCounter: PropTypes.func.isRequired,
    resetCounter: PropTypes.func.isRequired,
    decreaseCounter: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Counter);