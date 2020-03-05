import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
// import {createMuiTheme} from 'material-ui/styles'
// import { ThemeProvider } from '@material-ui/core/styles';
// import { blueGrey, lightGreen } from 'material-ui/colors'
import { hot } from 'react-hot-loader'
// import { StylesProvider } from '@material-ui/core'

// Create a theme instance.
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//     light: '#8eacbb',
//     main: '#607d8b',
//     dark: '#34515e',
//     contrastText: '#fff',
//   },
//   secondary: {
//     light: '#e7ff8c',
//     main: '#b2ff59',
//     dark: '#7ecb20',
//     contrastText: '#000',
//   },
//     openTitle: blueGrey['400'],
//     protectedTitle: lightGreen['400'],
//     type: 'light'
//   }
// })

const App = () => (
  <BrowserRouter>
  {/* <StylesProvider injectFirst> */}
    {/* <ThemeProvider theme={theme}> */}
      <MainRouter/>
    {/* </ThemeProvider> */}
  {/* </StylesProvider> */}
  </BrowserRouter>
)

export default hot(module)(App)
