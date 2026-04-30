const Sidebar = () => {
  return (
    <div className="lg:block hidden">
      <div className="bg-amber-600  fixed left-0 h-screen ">
        <div className="flex flex-col justify-center h-screen items-center text-[16px] p-10">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Product</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
