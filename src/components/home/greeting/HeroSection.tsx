import mainBackground from "../../../assets/background/mainBackground.png"
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

export const HeroSection = () => {
    return (
        <section className="relative">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${mainBackground})`,
                        backgroundAttachment: 'fixed'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#deccb9]"/>
            </div>

            <motion.div
                initial={{ y: 75 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className="relative z-10 container mx-auto px-4 pb-32 -mt-16">
                    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
                        <p
                            className="font-bold mb-5 lg:text-[54px]"
                            style={{color: '#15803d'}}
                        >
                            iCareVantage
                        </p>
                        <h1
                            className="text-7xl font-bold mb-4"
                            style={{color: '#3C4A58'}}
                        >
                            Get the most out of Technology
                        </h1>
                        <p
                            className="mt-4 lg:text-[21px]"
                            style={{color: '#3C4A58'}}
                        >
                            Empowering everyone with AI and software to shape a brighter future
                        </p>
                        <Link
                            to="/projects"
                            className="w-56 h-12 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-lg flex  justify-center items-center text-center"
                        >
                            <p className="text-white lg:text-[18px]">Current Projects</p>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};