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
        <header className="sticky top-0 z-50 bg-white shadow-sm max-w-full">
  <div className=" mx-auto px-6 flex items-center justify-between h-20 space-x-6">
    <div className="flex items-center space-x-2 flex-shrink-0">
      <div className="relative w-10 h-10">
        <Image
          src="/assets/HeroImages/Image1.png"
          alt="Logo"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <span className="text-2xl font-extrabold text-blue-600 tracking-tight">
        MyStay
      </span>
    </div>

    <div className="flex-1 max-w-md">
      <input
        type="text"
        name="search-bar"
        placeholder="🔍 Search for accommodations..."
        className="w-full border border-gray-300 rounded-full px-5 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <nav className="hidden md:flex items-center space-x-4">
      {accomodationTypes.map((type) => (
        <button
          key={type}
          className="text-gray-700 hover:text-blue-500 font-medium whitespace-nowrap transition-colors"
        >
          {type}
        </button>
      ))}
    </nav>

    <div className="flex items-center space-x-3 flex-shrink-0">
      <button className="px-5 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition">
        Sign In
      </button>
      <button className="px-5 py-2 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition">
        Sign Up
      </button>
    </div>
  </div>
</header>
    );
};


export default Header;