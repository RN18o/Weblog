import Image from "next/image";
import blog from "@/images/home.png";

export default function Home() {
  return (
    <div className="container flex flex-col md:flex-row gap-5 h-[calc(100vh-4rem)]">
      <div className="basis-full flex flex-col justify-center md:basis-2/3">
        <p className="special-word text-xs">Write and read blog</p>
        <h1 className="pb-5">
          Write Your <span className="special-word">Thoughts</span>
        </h1>

        <p>
          Hii there! We provide one of the original and highest quality blog for
          tech and Enthusiasts industry. Read high quality blogs for free and
          just create an account and write your own blog.
        </p>
      </div>

      <div className="hidden md:block basis-1/3">
        <Image
          src={blog}
          alt="blog"
          // fill
          sizes="100vw"
          // width={500}
          // height={500}
          className=" mt-56"
        />
      </div>
    </div>
  );
}
