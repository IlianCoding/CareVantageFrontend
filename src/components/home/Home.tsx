import { Link } from 'react-router-dom';
// import ServicesCarousel from "./carousel/ServicesCarousel.tsx";

const HomePage = () => {
    return (
        <div className="bg-amber-50">
            <section
                className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
            >
                <div className="text-center bg-black bg-opacity-50 text-white p-6 max-w-lg">
                    <h1 className="text-4xl font-bold mb-4">Your Voice Matters</h1>
                    <p className="text-lg mb-6">Unlock Insights. Empower Change.</p>
                    <Link
                        to="/projects"
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
                    >
                        Look at the current projects!
                    </Link>
                </div>
            </section>
            {/*<ServicesCarousel />*/}
        </div>
    );
};

export default HomePage;