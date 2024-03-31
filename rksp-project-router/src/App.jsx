import './App.css'
import {Routes, Route, Link} from  'react-router-dom'
import {Homepage} from './pages/Homepage.jsx';
import {Blog} from './pages/Blogpage.jsx';
import {About} from './pages/Aboutpage.jsx';
import {Notfound} from './pages/Notfoundpage.jsx';

function App() {
    {/*Базовый роутинг. При помощи Link позволяет не перезагружать страницу полностью, а перерисовавет конкретную часть DOM */}
  return (
    <>
      <header>
          <Link to="/">Хомэ</Link>
          <Link to="/posts">Блог</Link>
          <Link to="/about">Эбаут</Link>
      </header>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/posts" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Notfound />} />
        </Routes>

    </>
  )
}

export default App
