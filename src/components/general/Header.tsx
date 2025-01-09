import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-10 text-white">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold">
                        CareVantage
                    </Link>

                    {/* Menu */}
                    <button className="block md:hidden">
                        <span className="block w-6 h-1 bg-white mb-1"></span>
                        <span className="block w-6 h-1 bg-white mb-1"></span>
                        <span className="block w-6 h-1 bg-white mb-1"></span>
                    </button>
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-orange-500">Home</Link>
                        <Link to="/about" className="hover:text-orange-500">About</Link>
                        <Link to="/services" className="hover:text-orange-500">Services</Link>
                        <Link to="/contact" className="hover:text-orange-500">Contact</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;