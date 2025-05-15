export default function FigmaFooter() {
  return (
    <footer className="bg-white h-[182px] w-full flex flex-col place-content-center mt-24">
      <div className="flex flex-col place-items-center gap-y-4">
        <div className="flex flex-row gap-8">
          <a>
            <img src="/fb.png" />
          </a>
          <a>
            <img src="/insta.png" />
          </a>
          <a>
            <img src="/twitter.png" />
          </a>
          <a>
            <img src="/Linkedin.png" />
          </a>
        </div>
        <div className="">Copyright ©2020 All rights reserved </div>
      </div>
    </footer>
  );
}
