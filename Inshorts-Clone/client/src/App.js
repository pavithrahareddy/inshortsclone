import { Box, makeStyles } from '@material-ui/core'
import {BrowserRouter,Router,Routes,Switch,Route,Link} from 'react-router-dom'


//components
import Header from './components/Header'
import InfoHeader from './components/InfoHeader'
import Articles from './components/Articles'
import Notes from './components/Notes'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 90,
    width: '70%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      width: '75%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '85%',
    },
  },
}))

function App() {
  const classes = useStyles()

  
  return (
    
    <BrowserRouter>
   <Header />
    <Switch>
    
    <Route exact path="/">
    <Box>
      
      <Box className={classes.container}>
        <InfoHeader />
        <Articles />
        {/* <Notes/> */}
      </Box>
    </Box>
    </Route>
    <Route path="/bookmarks">
    <Box>
      
      <Box className={classes.container}>
        <InfoHeader />
        <Notes/>
      </Box>
    </Box>
    </Route>
    
    </Switch>
    
    </BrowserRouter>
    
  )
}

export default App
