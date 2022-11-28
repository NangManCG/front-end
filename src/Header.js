import {Link} from 'react-router-dom'
import '../src/style/Header.css';
function Header() {
    return (
        <div className = "navbar">
            <ul class="nav">
                <li class="nav-item">
                    <div class="nav-link active">
                        <Link to="/">Home</Link>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="nav-link active" aria-current="page">
                        <Link to="/Calendar">Calendar</Link>
                    </div>
                </li>
                <li class="nav-item">
                    <div class="nav-link">
                        <Link to="/To-DoList">Todo</Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Header;