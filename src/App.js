import { BrowserRouter } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./config/Routes";
import "./fonts/CaslonTwoBlackSSK-Regular.ttf"
import { Application } from 'react-rainbow-components';

function App() {

  return (
    <Application>
    <BrowserRouter>
            <Header/>
              <AppRoutes/>
              {/* <Footer/> */}
        </BrowserRouter>
        </Application>
  );
}

export default App;