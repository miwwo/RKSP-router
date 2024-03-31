import { Link, Outlet } from  'react-router-dom';

const Layout = () => {
  return (
      <>
      <header>
          <Link to="/">Хомэ</Link>
          <Link to="/posts">Блог</Link>
          <Link to="/about">Эбаут</Link>
      </header>

        <Outlet />

      <footer></footer>
      </>
  )
}
export {Layout}