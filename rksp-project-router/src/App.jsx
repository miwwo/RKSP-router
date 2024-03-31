import './App.css';
import {Routes, Route, Link} from  'react-router-dom';
import {Homepage} from './pages/Homepage.jsx';
import {Blog} from './pages/Blogpage.jsx';
import {About} from './pages/Aboutpage.jsx';
import {Notfound} from './pages/Notfoundpage.jsx';

import { Layout } from './components/Layout.jsx';

function App() {
    {/*Базовый роутинг. При помощи Link позволяет не перезагружать страницу полностью, а перерисовавет конкретную часть DOM */}
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}> {/*Общая обертка, которая отрисовывается всегда,
            в её рамках можно динамически менять какие-то элементы; Outlet - placeholder для дочернего содержимого */}
                <Route index element={<Homepage />} />
                <Route path="posts" element={<Blog />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<Notfound />} />
            </Route>
        </Routes>

    </>
  )
}

export default App
