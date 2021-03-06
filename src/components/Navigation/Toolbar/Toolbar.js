import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToogle from '../SideDrawer/DriwerToogle/DriwerToogle'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToogle clicked={props.drawerToogleClicked} />
        <div className={classes.Logo}>
            <Logo /> 
        </div>
        <nav className={classes.DesctopOnly}>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default toolbar;