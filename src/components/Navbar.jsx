const Navbar = () => {
  return (
    <nav
      aria-label="navigation"
      className="flex border border-accent-border items-center justify-between px-5"
    >
      <h1 className="header">Logo</h1>
      <div className="flex gap-4">
        <button className="bg-accent-bg text-accent border border-accent-border px-4 py-1 rounded-xl hover:bg-accent hover:text-accent-text font-bold">
          Login
        </button>
        <button className="bg-accent-bg text-accent border border-accent-border px-4 py-1 rounded-xl hover:bg-accent hover:text-accent-text font-bold">
          Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
