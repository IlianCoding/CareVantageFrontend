import {StatisticsCard} from "./StatisticsCard.tsx";
import {StatisticsTopBar} from "./StatisticsTopBar.tsx";

export const CareVantageStatistics = () => {
    const statistics = [
        {
            title: 'Active Projects',
            value: 25,
            change: '+3',
            image: "/icons/projectIcon.png",
        },
        {
            title: 'Total clients',
            value: 58,
            change: '+12',
            image: "/icons/clientIcon.png",
        },
        {
            title: 'Client Satisfaction',
            value: '85%',
            change: '+15%',
            image: "/icons/satisfactionIcon.png",
        }
    ];

    return (
        <div className="relative -mt-60 pb-24 flex justify-center items-center">
            <div className="bg-white w-auto h-auto rounded-lg shadow-lg p-8">
                <StatisticsTopBar/>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-5xl">
                    {statistics.map((stat, index) => (
                        <StatisticsCard
                            key={index}
                            title={stat.title}
                            value={stat.value}
                            change={stat.change}
                            image={stat.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};