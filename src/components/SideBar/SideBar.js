import { Link } from 'react-router-dom';
export default function SideBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">🏴 Home</Link>
                </li>
                <li>
                    <Link to="/use-transition">✅ use-transition</Link>
                </li>
            </ul>
        </nav>
    );
}
