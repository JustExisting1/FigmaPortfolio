import { Link, useLocation } from "react-router";
import { cn } from "../../util/merge";

export default function NavBarFigma({
  className,
}: {
  className?: string | undefined;
}) {
  const location = useLocation();

  return (
    <div
      className={cn(
        "flex flex-row space-x-8 p-4 pr-16 place-self-end text-xl mb-12 sm:mb-36 font-bold",
        className
      )}>
      <Link
        className={`${
          location.pathname == "/" ? "text-primary-1" : "text-black"
        }`}
        to="/">
        Home
      </Link>
      <Link
        className={`${
          location.pathname == "/works" ? "text-primary-1" : "text-black"
        }`}
        to="/works">
        Works
      </Link>
      <Link
        className={`${
          location.pathname == "/blog" ? "text-primary-1" : "text-black"
        }`}
        to="/blog">
        Blog
      </Link>
      <Link
        className={`${
          location.pathname == "/contact" ? "text-primary-1" : "text-black"
        }`}
        to="/contact">
        Contact
      </Link>
    </div>
  );
}
