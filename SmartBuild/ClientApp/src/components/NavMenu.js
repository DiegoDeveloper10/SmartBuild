import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
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

class NestedList extends React.Component {
    state = { open: true };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };
}

export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {

        const { classes } = this.props;
        return (

            <div className={classes.root}>
                <List
                    component="nav"
                    subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Sent mail" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Drafts" />
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

            //<Navbar inverse fixedTop fluid collapseOnSelect>
            //  <Navbar.Header>
            //    <Navbar.Brand>
            //      <Link to={'/'}>Unimed</Link>
            //    </Navbar.Brand>
            //    <Navbar.Toggle />
            //  </Navbar.Header>
            //  <Navbar.Collapse>
            //    <Nav>
            //      <LinkContainer to={'/'} exact>
            //        <NavItem>
            //          <Glyphicon glyph='home' /> Home
            //        </NavItem>
            //      </LinkContainer>
            //      <LinkContainer to={'/Usuario'}>
            //        <NavItem>
            //          <Glyphicon glyph='user' /> Usuário
            //        </NavItem>
            //      </LinkContainer>
            //      <LinkContainer to={'/fetchdata'}>
            //        <NavItem>
            //          <Glyphicon glyph='th-list' /> Teste Lista
            //        </NavItem>
            //      </LinkContainer>
            //    </Nav>
            //  </Navbar.Collapse>
            //</Navbar>
        );
    }
}
