import {Logo} from "../../general/navbar/Logo.tsx";

export const StatisticsTopBar = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    return (
        <div className="relative top-0 left-0 right-0 pb-3 border-b border-gray-300 mb-3">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Logo/>
                <div className="text-right">
                    <p className="font-bold text-gray-700">{currentMonth} {currentYear}</p>
                    <p className="lg:text-[8px] text-gray-500">Last updated</p>
                </div>
            </div>
        </div>
    )
}