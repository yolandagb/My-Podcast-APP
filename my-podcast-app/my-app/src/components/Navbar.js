import { Link } from "react-router-dom"


export default function Navbar() {
  return < nav className="nav">
    <Link to="/" className="site-title">Podcaster</Link>
    <ul>
      {/* <li>
        <Link to="/episode">Episode</Link>
      </li>
      <li>
        <Link to="/podcast"> Podcast</Link>
      </li> */}
    </ul>
  </nav>
}