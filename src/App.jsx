
import Access from './components/Access/Access'
import Awards from './components/Awards/Awards'
import BackTop from './components/BackTop/BackTop'
import Banner from './components/Banner/Banner'
import Callback from './components/Callback/Callback'
import Footer from './components/Footer/Footer'
import Get from './components/Get/Get'
import Navbar from './components/Navbar/Navbar'
import Service from './components/Service/Service'
import Spinner from './components/Spinner/Spinner'
import Testmonital from './components/Testmonital/Testmonital'
import Video from './components/Video/Video'

function App() {
    return (
    <div className = 'bg-banner'>
      <Spinner></Spinner>
      <BackTop></BackTop>
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
      <Awards></Awards>
      <Video></Video>
      <Testmonital></Testmonital>
      <Callback></Callback>
      <Access></Access>
      <Get></Get>
      <Footer></Footer>
    </div>
  )
}

export default App
