import {User} from "../../types/User.tsx";
import {HeroSection} from "./greeting/HeroSection.tsx";
import {NavBar} from "../general/navbar/Navbar.tsx";

export const HomePage = () => {
    const user: User | null = null;

    return (
        <div className="min-h-screen bg-[#f5f0eb]">
            <NavBar />
            <HeroSection user={user} />
        </div>
    );
};