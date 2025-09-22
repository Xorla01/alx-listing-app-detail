import Image from "next/image";

const accomodationTypes = [
    "Rooms", 
    "Mansion", 
    "Countryside", 
    "Villa", 
    "Apartment", 
    "Cabin"
];

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                <div className="flex items-center space-x-2">
                    <Image 
                        className="h-10 w-10 object-cover rounded-full" 
                        src="/logo.png" 
                        alt="Logo" 
                    />
                    <span className="text-2xl font-bold text-gray-800">MyStay</span>
                </div>

                <div className="flex-1 mx-4">
                    <input 
                        type="text"
                        name="search-bar"
                        placeholder="Search for accomodations..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                </div>

                <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        Sign In
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition">
                        Sign Up
                    </button>
                </div>

                <nav className="bg-gray-50 border-t border-b ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-6 py-2 overflow-x-auto">
                        {accomodationTypes.map((type) => (
                            <button key={type} className="text-gray-700 hover:text-blue-500 font-medium whitespace-nowrap">
                                {type}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
};


export default Header;