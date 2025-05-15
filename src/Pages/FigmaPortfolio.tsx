import FeaturedWork from "../components/Figma/FeaturedWork";
import FigmaFooter from "../components/Figma/FigmaFooter";
import NavBarFigma from "../components/Figma/NavBarFigma";

function FigmaPortfolio() {
  return (
    <>
      <div className="bg-white text-dark-1 font-heebo">
        {/* Landing */}
        <div className="max-w-[1152px] place-self-center">
          <NavBarFigma />
          <div className="flex flex-col sm:flex-row h-fit w-10/12 sm:w-4/5 space-y-4  place-self-center place-content-between">
            <div className="flex flex-col w-full sm:w-2/3 text-center sm:text-left place-self-center sm:place-content-evenly ">
              <div className="text-[44px] font-bold">
                Hi, I am John,
                <br />
                Creative Technologist
              </div>
              <div className="text-[16px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
            <div className="flex w-full sm:w-2/5 mb-12 sm:mb-0 shrink-0 grow-0 place-items-center place-content-center order-first sm:order-last">
              <img
                className="size-[243px] rounded-full z-10"
                src="./Ellipse 1.png"
              />
              <svg
                className="absolute -translate-x-1 translate-y-3 z-0"
                height={243}
                width={243}>
                <ellipse
                  className="fill-[#EDF7FA]"
                  cx={243 / 2}
                  cy={243 / 2}
                  rx={243 / 2}
                  ry={243 / 2}
                />
              </svg>
            </div>
          </div>
          <div className="justify-self-center flex place-content-center sm:place-content-start w-4/5 mb-16">
            <button className="py-2 px-4 rounded-sm text-[22px] bg-primary-1 text-white w-fit">
              Download Resume
            </button>
          </div>
          {/* Recent Posts */}
          <div className="bg-[#EDF7FA] py-4 w-full">
            <div className="w-11/12 sm:w-4/5 place-self-center">
              <div className="flex place-content-center sm:place-content-between">
                <div className="text-[22px]">Recent Posts</div>
                <a className="place-self-center">
                  <div className="hidden sm:inline">View all</div>
                </a>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 space-x-4 py-2">
                <PostBox
                  title="Making a design system from scratch"
                  date={new Date(1581465602000)}
                  tags="Design, Pattern"
                  content="Amet minim mollit non deserunt ullamco est sit aliqua
                   dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet."
                />
                <PostBox
                  title="Creating pixel perfect icons in Figma"
                  date={new Date(1581465602000)}
                  tags="Figma, Icon Design"
                  content="Amet minim mollit non deserunt ullamco est sit aliqua
                   dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet."
                />
              </div>
            </div>
          </div>
          {/* Featured Works */}
          <div className="bg-white py-4 w-full">
            <div className="w-11/12 sm:w-4/5 place-self-center">
              <div className="text-[22px] place-self-center sm:place-self-start">
                Featured Works
              </div>
              <div className="space-y-4">
                <FeaturedWork
                  url="/"
                  src="./Featured1.png"
                  title="Designing Dashboards"
                  year="2020"
                  tag="Dashboard"
                  content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                   Velit officia consequat duis enim velit mollit.
                   Exercitation veniam consequat sunt nostrud amet."
                />
                <FeaturedWork
                  url="/"
                  src="./Featured2.png"
                  title="Vibrant Portraits of 2020"
                  year="2018"
                  tag="Illustration"
                  content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                   Velit officia consequat duis enim velit mollit.
                   Exercitation veniam consequat sunt nostrud amet."
                />
                <FeaturedWork
                  url="/"
                  src="./Featured3.png"
                  title="36 Days of Malayalam type"
                  year="2018"
                  tag="Typography"
                  content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                   Velit officia consequat duis enim velit mollit.
                   Exercitation veniam consequat sunt nostrud amet."
                />
              </div>
            </div>
          </div>
          {/* Footer */}
          <FigmaFooter />
        </div>
      </div>
    </>
  );
}



function PostBox({
  title,
  date,
  tags,
  content,
}: {
  title: string;
  date: Date;
  tags: string;
  content: string;
}) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate: string = date.toLocaleDateString(undefined, options);

  return (
    <div className="flex flex-col w-full space-y-4 sm:space-y-8 sm:w-1/2 g-fit sm:h-[295px] bg-white drop-shadow-md p-4">
      <div className="font-bold text-[22px] sm:text-[26px] line-clamp-2">
        {title}
      </div>
      <div className="flex flex-row divide-x-2 gap-4 text-[16px] sm:text-[18px]">
        <div className="pr-4 shrink-0">{formattedDate}</div>
        <div className="line-clamp-1">{tags}</div>
      </div>
      <div className="text-[16px] line-clamp-5 sm:line-clamp-4">{content}</div>
    </div>
  );
}
export default FigmaPortfolio;
