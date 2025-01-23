export const StatisticsCard = ({title, value, change, image}:
                               {
                                   title: string;
                                   value: number | string;
                                   change: number | string;
                                   image: string;
                               }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <img
                src={image}
                alt={title}
                className="w-44 h-44 mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold text-gray-700 pt-16">{title}</h3>
            <p className="text-3xl font-bold my-2 text-green-600">{value}</p>
            <p className="text-sm text-gray-500">
                Change since last month: <span className="text-green-500 font-semibold">{change}</span>
            </p>
        </div>
    )
}