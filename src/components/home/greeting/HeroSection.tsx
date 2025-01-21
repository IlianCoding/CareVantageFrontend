import { UserGreeting } from './UserGreeting';
import {User} from "../../../types/User.tsx";
import mainBackground from "../../../assets/background/mainBackground.png"

interface HeroSectionProps {
    user: User | null;
}

export const HeroSection = ({ user }: HeroSectionProps) => {
    return (
        <section className="relative min-h-screen">
            <div className="absolute inset-0 z-0">
                <img
                    src={ mainBackground }
                    alt="Background image"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d7c0ac]/30 to-[#deccb9]"
                     style={{background: 'linear-gradient(to bottom, transparent 0%, #d7c0ac 100%)'}}/>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="min-h-screen pt-32 pb-16 flex justify-center items-center">
                    <UserGreeting user={user}/>
                </div>
            </div>
        </section>
    );
};