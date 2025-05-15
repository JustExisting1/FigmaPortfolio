import FeaturedWork from "../components/Figma/FeaturedWork";
import FigmaFooter from "../components/Figma/FigmaFooter";
import NavBarFigma from "../components/Figma/NavBarFigma";

function FigmaWorks() {
  return (
    <div className="bg-white text-dark-1 font-heebo">
      <div className="max-w-[1152px] place-self-center">
        <NavBarFigma className="sm:mb-16" />
        <div className="bg-white py-4 w-full">
          <div className="w-11/12 sm:w-4/5 place-self-center flex flex-col gap-2">
            <h1 className="text-[44px] font-bold">Work</h1>
            <FeaturedWork
              className="py-8"
              url="./details"
              src="./Featured1.png"
              title="Designing Dashboards"
              year="2020"
              tag="Dashboard"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                           Velit officia consequat duis enim velit mollit.
                           Exercitation veniam consequat sunt nostrud amet."
            />
            <FeaturedWork
              className="py-8"
              url="./details"
              src="./Featured2.png"
              title="Vibrant Portraits of 2020"
              year="2018"
              tag="Illustration"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                               Velit officia consequat duis enim velit mollit.
                               Exercitation veniam consequat sunt nostrud amet."
            />
            <FeaturedWork
              className="py-8"
              url="./details"
              src="./Featured3.png"
              title="36 Days of Malayalam type"
              year="2018"
              tag="Typography"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                               Velit officia consequat duis enim velit mollit.
                               Exercitation veniam consequat sunt nostrud amet."
            />
            <FeaturedWork
              className="py-8"
              url="./details"
              src="./Featured4.png"
              title="Components"
              year="2018"
              tag="Components, Design"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                               Velit officia consequat duis enim velit mollit.
                               Exercitation veniam consequat sunt nostrud amet."
            />
          </div>
        </div>
        <FigmaFooter />
      </div>
    </div>
  );
}

export default FigmaWorks;
