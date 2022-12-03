import {Link} from 'react-router-dom'
import '../src/style/Header.css';
function Header() {
    return (
        <div className = "navbar">
            <ul class="nav">
                <li class="nav-item">
                    <div class="nav-link active">
                        <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="nav-link active" aria-current="page">
                        <Link to="/Calendar" style={{ textDecoration: "none" }}>Calendar</Link>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="nav-link active" aria-current="page">
                        <Link to="/Todo" style={{ textDecoration: "none" }}>To-Do List</Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Header;