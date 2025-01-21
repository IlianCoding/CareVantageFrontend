import { Link } from "react-router-dom";
import {User} from "../../../types/User.tsx";

interface UserGreetingProps {
    user: User | null;
}

export const UserGreeting = ({ user }: UserGreetingProps) => {
    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6 max-w-md w-full">
            {user ? (
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Welcome back, {user.name}!
                    </h2>
                    <p className="text-gray-600">
                        We're glad to see you again. Check out your latest updates and manage your profile.
                    </p>
                    <Link
                        to="/profile"
                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        View Profile
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Welcome to Our Platform
                    </h2>
                    <p className="text-gray-600">
                        Create an account or sign in to access all our features and services.
                    </p>
                    <div className="space-x-4">
                        <Link
                            to="/register"
                            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Register
                        </Link>
                        <Link
                            to="/login"
                            className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};