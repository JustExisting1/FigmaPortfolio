import { Link } from "react-router";
import { cn } from "../../util/merge";

export default function FeaturedWork({
  className,
  url,
  src,
  title,
  year,
  tag,
  content,
}: {
  className?: string | undefined;
  url: string;
  src: string;
  title: string;
  year: string;
  tag: string;
  content: string;
}) {
  return (
    <Link
      className={cn(
        "flex flex-col sm:flex-row w-full py-4 border-b-1 border-[#E0E0E0]",
        className
      )}
      to="/details">
      <div className="w-full sm:w-[246px] rounded-md shrink-0">
        <img className="size-full" src={src} />
      </div>
      <div className="flex flex-col place-content-start px-0 sm:px-4 space-y-4">
        <div className="text-[30px] font-bold">{title}</div>
        <div className="flex flex-row space-x-4">
          <div className="bg-dark-1 h-min rounded-full px-2 text-white text-[18px] font-bold">
            {year}
          </div>
          <div className="text-[20px] text-light-1">{tag}</div>
        </div>
        <div className="text-[16px] line-clamp-4 sm:line-clamp-3 text-ellipsis">
          {content}
        </div>
      </div>
    </Link>
  );
}
