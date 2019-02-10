import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

class AddCord extends Component{

    render(){
        return(
            <Fragment>

            </Fragment>
        );
    }
}

const styles = theme => {
    
}

AddCord.propTypes = {
    classes : PropTypes.object.isRequired
}

export default withStyles(styles)(AddCord);