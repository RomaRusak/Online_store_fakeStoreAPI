import styles from './App.module.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import CardIconsWrapper from './components/CardIconsWrapper/CardIconsWrapper';
import PromoBlock from './components/PromoBlock/PromoBlock';
import CartWrapper from './components/CartWrapper/CartWrapper';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<PromoBlock />}/>
              <Route path='catalog' element={<CardIconsWrapper />}/>
              <Route path='cart' element={<CartWrapper />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
