import { useState } from "react";
import { Logo } from "./Logo.tsx";
import { MenuButton } from "./MenuButton";
import {NavigationMenu} from "./NavigationMenu.tsx";

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Logo/>
                    <MenuButton
                        isOpen={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>
            </nav>
            <NavigationMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    );
};