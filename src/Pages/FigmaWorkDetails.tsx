import FigmaFooter from "../components/Figma/FigmaFooter";
import NavBarFigma from "../components/Figma/NavBarFigma";

export default function FigmaWorkDetails() {
  return (
    <>
      <div className="bg-white text-dark-1 font-heebo">
        <div className="max-w-[1152px] place-self-center">
          <NavBarFigma />
          {/* Main Body */}
          <div className="bg-white py-4 w-full">
            <div className="flex flex-col w-11/12 sm:w-4/5 place-self-center gap-6">
              <div className="font-bold text-[34px]">
                Designing Dashboards with usability in mind
              </div>
              <div className="flex flex-row gap-4">
                <div className="h-fit bg-primary-1 text-white font-bold text-[18px] rounded-2xl px-3">
                  2020
                </div>
                <label className="text-[20px]">
                  Dashboard, User Experience Design
                </label>
              </div>
              <p className="text-[16px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <img className="size-full" src="./Details1.png" />
              <h1 className="text-[30px] font-bold">Heading 1</h1>
              <h2 className="text-[24px] font-bold">Heading 2</h2>
              <p className="text-[16px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <img className="size-full" src="./Details2.png" />
              <img className="size-full" src="./Details3.png" />
            </div>
          </div>
          <FigmaFooter />
        </div>
      </div>
    </>
  );
}
