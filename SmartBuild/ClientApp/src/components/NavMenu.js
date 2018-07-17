import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
//Icones
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { ExpandLess, ExpandMore, Home, Person} from '@material-ui/icons';
import StarBorder from '@material-ui/icons/StarBorder';
 

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class NestedList extends Component {
    state = { open: true };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };    

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List component="nav"
                //subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText inset primary="Home" onClick={() => this.props.history.push("/")} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText inset primary="Usuario" onClick={() => this.props.history.push("/Usuario")} />
                    </ListItem>

                    <ListItem button onClick={this.handleClick}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Inbox" />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText inset primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>

                </List>
            </div>          
        );
    }
}


export default withRouter(withStyles(styles)(NestedList));