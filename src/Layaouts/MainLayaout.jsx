import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayaout = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayaout;