import './App.css'
import Collection from './Components/Collection'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Pre from './Components/Pre'
import Products from './Components/Products'
import Text from './Components/Text'
import Video from './Components/Video'

function App() {
  return <div className='Container'>
    <Navbar></Navbar>
    <div className='Show-model'>
        <Text/>
        <div className='pic'>
          <img src='/pngegg.png'></img>
        </div>
    </div>
    <Video/>
    <div className='Col'>
      <Collection/>
    </div>
    <div className='Pre'>
      <Pre/>
    </div>
    <div className='Pro'>
      <Products/>
    </div>
    <div className='Foot'>
      <Footer/>
    </div>
  </div>
}

export default App
