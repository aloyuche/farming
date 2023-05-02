interface LayoutProp {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProp> = ({ children }) => {
  return;
  <div className="h-screen bg-black">
    <div className="container h-full mx-auto xl:px-30 max-w-6xl">
      <div className="grid grid-cols-4 h-full">
        <div>{children}</div>
      </div>
    </div>
  </div>;
};

export default Layout;
