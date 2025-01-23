import {HeroSection} from "./greeting/HeroSection.tsx";
import {NavBar} from "../general/navbar/Navbar.tsx";
import {StatisticsOverview} from "./statistics/StatisticsOverview.tsx";
import { motion } from "framer-motion";

export const HomePage = () => {

    return (
        <div className="min-h-screen bg-[#deccb9]">
            <NavBar/>
            <HeroSection/>
            <motion.div
                initial={{ y: 75 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5 }}
            >
                <StatisticsOverview/>
            </motion.div>
        </div>
    );
};