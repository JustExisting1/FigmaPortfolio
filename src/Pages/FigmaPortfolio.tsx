function FigmaPortfolio() {
  return (
    <>
      <div className="bg-white text-black p-2">
        <div className="flex flex-row space-x-8 p-4 pr-16 place-self-end text-xl mb-36">
          <NavLink url="/" text="Works" />
          <NavLink url="/" text="Blog" />
          <NavLink url="/" text="Contact" />
        </div>

        <div className="flex flex-row h-fit w-4/5 place-self-center place-content-between">
          <div className="flex flex-col w-1/2 place-content-evenly ">
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
          <div className="flex w-2/5 shrink-0 grow-0 place-items-center place-content-center order-first sm:order-last">
            <img className="size-[243px] rounded-full z-10" src="/Ellipse 1.png" />
            <svg className="absolute -translate-x-1 translate-y-3 z-0" height={243} width={243}>
              <ellipse className="fill-light-1" cx={243/2} cy={243/2} rx={243/2} ry={243/2}/>"
            </svg>
          </div>
        </div>
        <div className="justify-self-center w-4/5 mb-16">
          <button className="py-2 px-4 text-sm bg-primary-1 text-white">
            Download Resume
          </button>
        </div>

        <div className="bg-light-1">
          <div className="w-4/5 place-self-center">
            <div className="flex place-content-between">
              <div>Recent Posts</div>
              <a>
                <div>View all</div>
              </a>
            </div>
            <div className="flex flex-row space-x-4 py-2">
              <PostBox />
              <PostBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PostBox() {
  return (
    <div className="flex flex-col grow bg-white drop-shadow-md">
      <div className="font-bold">Title</div>
      <div className=" flex flex-row divide-x-2">
        <div>date</div>
        <div>Tags</div>
      </div>
      <div>Cotent</div>
    </div>
  );
}

function NavLink({ url, text }: { url: string; text: string }) {
  return (
    <div className="w-auto h-auto self-center hover:underline">
      <a href={url}>
        <p>{text}</p>
      </a>
    </div>
  );
}

export default FigmaPortfolio;
