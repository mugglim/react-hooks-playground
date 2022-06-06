import { Link, Outlet } from 'react-router-dom';

export default function UseTransition() {
    return (
        <div>
            <h1>use-transition</h1>
            <ul>
                <li>
                    <Link to="/use-transition">Without UseTransition</Link>
                </li>
                <li>
                    <Link to="/use-transition/activation">
                        With UseTransition
                    </Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
}
