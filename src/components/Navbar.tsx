function Navbar() {
  return (
    <>
      <div className="flex flex-row bg-orange-600 opacity-75 h-20 w-full place-content-around shadow-md shadow-orange-900">
        <NavLink url="/" text="Home" />
        <NavLink url="/page" text="About Me" />
        <NavLink url="/page" text="Projects" />
      </div>
    </>
  );
}

export default Navbar;

function NavLink({ url, text }: { url: string; text: string }) {
  return (
    <div className="w-auto h-auto self-center hover:underline">
      <a href={url}>
        <p>{text}</p>
      </a>
    </div>
  );
}
