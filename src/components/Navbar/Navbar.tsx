const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">MyApp</div>
        <div>
          <a href="/" className="px-3 py-2 rounded hover:bg-gray-700">
            Home
          </a>
          <a href="/about" className="px-3 py-2 rounded hover:bg-gray-700">
            About
          </a>
          {/* Add other links here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
