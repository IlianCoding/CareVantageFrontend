import {useEffect, useState} from "react";
import axios from "axios";

export interface Service {
    id: string;
    title: string;
    description: string;
    available: boolean;
    image: string;
}

const API_URL = "http://localhost:5149/api/Service/top-5-services";

const useServices = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(`${API_URL}`);
                setServices(response.data);
                setIsLoading(false);
            } catch (error) {
                setError('Failed to fetch the services from the backend server with the following error: ' + error);
                setIsLoading(false);
            }
        };
        fetchServices().then();
    }, []);
    return { services, isLoading, error };
}

export default useServices;