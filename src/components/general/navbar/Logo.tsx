import { Link } from 'react-router-dom'
import CVLogo from '../../../assets/logo/careVantageLogo.png'

export const Logo = () => {
    return (
        <Link to="/" className="inline-block">
            <img
                src= { CVLogo }
                alt="Company Logo"
                className="h-12 w-auto"
            />
        </Link>
    );
};