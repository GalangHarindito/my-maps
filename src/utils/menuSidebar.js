import { FiMapPin, FiMap, FiRefreshCw } from "react-icons/fi";
import FindLocation from "component/fragment/menuFeatures/findLocation";

export const menuSidebar = [
    {
        id: 1,
        menuLabel: 'Find Location',
        icon: <FiMapPin />,
    },
    {
        id: 2,
        menuLabel: 'Create Polygon',
        icon: <FiMap />
    },
    {
        id:3,
        menuLabel: 'Convert Coordinates',
        icon: <FiRefreshCw />
    }
]