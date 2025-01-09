import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="absolute bottom-0 left-0 w-full bg-gray-900 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; <span id="displayYear">{new Date().getFullYear()}</span> All rights reserved by{' '}
                    <a href="https://www.carevantage.com/" className="text-orange-500 hover:underline">CareVantage</a>
                </p>
                <p>
                    Privacy Policy | Terms of Service: {' '}
                    <Link to="/privacy" className="text-orange-500 hover:underline">Privacy Declaration</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer;