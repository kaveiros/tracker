// import React, { Component } from 'react'
// import CssBaseline from '@material-ui/core/CssBaseline';

// import clsx from 'clsx';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import MenuIcon from '@material-ui/icons/Menu';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import { connect } from 'react-redux';
// import * as APPACTIONS from '../actions/AppActions'
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import WorkTab from './WorkTab'
// import {Router, Link as ReachLink} from '@reach/router'

// const drawerWidth = 240;

// const useStyles = theme => ({
//     root: {
//         display: 'flex',
//       },
//       appBar: {
//         transition: theme.transitions.create(['margin', 'width'], {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//       },
//       appBarShift: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//         transition: theme.transitions.create(['margin', 'width'], {
//           easing: theme.transitions.easing.easeOut,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//       },
//       menuButton: {
//         marginRight: theme.spacing(2),
//       },
//       hide: {
//         display: 'none',
//       },
//       drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//       },
//       drawerPaper: {
//         width: drawerWidth,
//       },
//       drawerHeader: {
//         display: 'flex',
//         alignItems: 'center',
//         padding: theme.spacing(0, 1),
//         // necessary for content to be below app bar
//         ...theme.mixins.toolbar,
//         justifyContent: 'flex-end',
//       },
//       content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create('margin', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: -drawerWidth,
//       },
//       contentShift: {
//         transition: theme.transitions.create('margin', {
//           easing: theme.transitions.easing.easeOut,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//       },
//     });



// class Menu extends Component {

//     constructor(){
//         super()
//     }

//     componentDidMount = () => {
//         this.props.onFetchState()
//     }

//     toggleDrawer = () => {

//         var isOpen = this.props.isOpen
//         if (!isOpen) {

//             this.props.onOpenDrawer()
//         }
//         else {

//             this.props.onCloseDrawer()
//         }

//     }

//     render() {
//         // const classes =  this.props.useStyles()
//         return (
//             <div className={useStyles.root}>
//                 <CssBaseline/>
//             <AppBar position="fixed" 
//              className={clsx(useStyles.appBar, {
//                 [useStyles.appBarShift]: this.props.open,
//               })}>
//                 <Toolbar>
//                     <IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu" onClick={this.toggleDrawer}>
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" className={useStyles.title}>
//                         Εργολάβος
//                  </Typography>
//                 </Toolbar>
                
//             </AppBar >
//                 <Drawer open={this.props.isOpen} variant="persistent" anchor="left"  
//                 classes={{paper: useStyles.drawerPaper}}>
//                     <div className={useStyles.drawerHeader}>
//                         <IconButton onClick={this.toggleDrawer}>
//                            <ChevronRightIcon />
//                         </IconButton>
//                     </div>
//                     <Divider />
//                     <List>
                     
//                       <ListItem button color="primary" component={ReachLink} to="/">
//                       <ListItemIcon>
//                          <MailIcon/>
//                       </ListItemIcon>
//                          <ListItemText primary="WorkTab" />
//                       </ListItem>
//                         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//                             <ListItem button key={text}>
//                                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                                 <ListItemText primary={text} />
//                             </ListItem>
//                         ))}
                      
//                     </List>
//                 </Drawer>
//                 <Router>
//                   <WorkTab path="/worktab"/>
//                 </Router>

//             </div>
//         )

//     }
// }

// const mapStateToProps = state => {
//     return {
//         isOpen: state.drawrerOpen
//     }
// }

// const mapDispatchToProps = dispatch => {

//     return {
//         onFetchState: () => dispatch(APPACTIONS.fetchDrawerState()),
//         onOpenDrawer: () => dispatch(APPACTIONS.openDrawer()),
//         onCloseDrawer: () => dispatch(APPACTIONS.closeDrawer())
//     }

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Menu)