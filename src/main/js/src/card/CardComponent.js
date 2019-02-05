import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    cardGrid: {
      padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    }
  });

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class CardComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            cards : [], 
            isLoading : true,
        }
    }

    async componentDidMount(){
        fetch('/api/cards')
        .then(res => res.json())
        .then(msg => { 
                this.setState({ cards:msg._embedded.cards, isLoading:false,})
            })
    }

    render(){
        const { classes } = this.props; 
        const { cards, isLoading } = this.state;

        if(isLoading){
            return (
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    <Typography>Loading ...</Typography>
                </div>    
            );
        }

        return(
            <div className={classNames(classes.layout, classes.cardGrid)}>
                <Grid container spacing={40}>
                    {cards.map(card => (
                    <Grid item key={"d_"+card.dayNumber} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                        {
                        //<CardMedia
                        //     className={classes.cardMedia}
                        //     image=""
                        //     title="Image title" />
                        }
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {card.dayNumber}
                            </Typography>
                            <Typography>
                            {card.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                            View
                            </Button>
                            <Button size="small" color="primary">
                            Edit
                            </Button>
                        </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

CardComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardComponent);