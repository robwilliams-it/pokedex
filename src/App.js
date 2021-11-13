// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import Banner from './components/sections/banner.js';
import About from './components/pages/about.js';
// import Order from './components/sections/order.js';
// import Contact from './components/sections/contact.js';

function App() {
  return (
    <div className="App" style={{overflowY:'hidden' }}>

      <Banner />
      <About />

    </div>
  );
}

export default App;
