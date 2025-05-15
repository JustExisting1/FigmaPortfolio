import FigmaFooter from "../components/Figma/FigmaFooter";
import NavBarFigma from "../components/Figma/NavBarFigma";

export default function FigmaBlog() {
  return (
    <>
      <div className="bg-white text-dark-1 font-heebo">
        <div className="w-full max-w-[1152px] place-self-center">
          <NavBarFigma />
          <div className="flex flex-col bg-white py-4 w-full">
            <div className="flex flex-col w-11/12 sm:w-4/5 place-self-center">
              <h1 className="font-bold text-[44px] pb-8">Blog</h1>
              <div className="flex flex-col gap-8">
                <Blog />
                <Blog />
                <Blog />
                <Blog />
              </div>
            </div>
          </div>
          <FigmaFooter />
        </div>
      </div>
    </>
  );
}

function Blog() {
  return (
    <>
      <div className="flex flex-col gap-4 border-b-1 border-[#E0E0E0] pb-8">
        <h1 className="font-bold text-[30px]">UI Interactions of the week</h1>
        <div className="flex flex-row divide-x-2 gap-4">
          <div className="text-[20px] pr-4">12 Feb 2019</div>
          <div className="text-[20px] text-light-1">Express, Handlebars</div>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </>
  );
}
