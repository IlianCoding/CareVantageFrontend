import useServices from "../../../hooks/useServices.ts";
import Slider from "react-slick";

const ServicesCarousel = () => {
    const { services, isLoading, error } = useServices();

    if (isLoading) return <div>Loading services...</div>;
    if (error) return <div>{error}</div>;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Most Popular Services</h2>
                <Slider {...sliderSettings}>
                    {services.map(service => (
                        <div key={service.id} className="p-4">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                <img src={service.image} alt={service.title} className="w-full h-48 object-cover"/>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">{service.title}</h3>
                                    <p className="text-sm text-gray-600">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default ServicesCarousel;