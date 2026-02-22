// import react stuff
import { Routes, Route, Link } from "react-router"
// import pages
import BayPage from "./BayPage"
import NotFound from "./NotFound"

export default function RouteLinks() {
  return (
    <div>
      <p>This is some text made outside of the routes</p>

      <nav>
        <a href='/sash'>Learn more about Sash windows</a>
        <Link to='/bay'>Learn more about Bay windows</Link>
        <Link to='/jalousie'>Jealous Windows</Link>
      </nav>

      {/* SET UP OUR ROUTES:  */}

      <Routes>
        {/* http://localhost:5173/ */}
        <Route path={'/'} element={<p>Home page</p>}/>
        <Route path={'/sash'} element={<p>Sash windows</p>} />
        <Route path={'/bay'} element={<BayPage />} />
        <Route path={'/jalousie'} element={<p>is anyone french???</p>} />
        {/* * means match anything that isn't one of the above */}
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </div>
  )
}