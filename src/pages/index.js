import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Siddharth Gope Portfolio</title>
        <meta meta="description" content=""></meta>
        <link rel="stylesheet" href="/public/favicon.ico"></link>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <nav className="py-10 mb-12 flex justify-between">
          <h2 className="text-3xl text-gray-800 font-medium p-3 dark:text-white">
            {"<"}SID-Coder{"/>"}
          </h2>
          <ul className="flex items-center">
            <li className="p-3 rounded-xl bg-white">
              <BsFillMoonStarsFill
                onClick={() => setdarkMode(!darkMode)}
                className=" cursor-pointer text-2xl"
              />
            </li>
            <li
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-6"
              href="#"
            >
              Resume
            </li>
          </ul>
        </nav>
        <section className="flex gap-10">
          <div className="flex-1 text-center p-10 md:text-start">
            <h1 className="text-5xl text-teal-600 font-medium pb-3 md:text-6xl">
              Siddharth Gope Portfolio
            </h1>
            <h2 className="text-2xl py-2 md:text-3xl">Frontend Developer</h2>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl">
              3 years experienced software engineer skilled in building and
              maintaining web applications using{" "}
              <span className="text-teal-500">
                {" "}
                Vue.js, Nuxt.js, React.js, Next.js, HTML, CSS, and JavaScript{" "}
              </span>
              . Strong in UI/UX design, focused on creating intuitive user
              interfaces. Proficient in version control with GitHub, and
              passionate about writing high-quality code and enhancing user
              experiences.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 md:justify-start">
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
          </div>
          <div className="flex justify-center flex-1 relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:w-96 md:h-96">
            <Image
              src="/dev-ed-wave.png"
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
              alt="Siddharth Gope, Frontend Developer"
            />
          </div>
        </section>
        <section className=" mt-20">
          <div className="text-center">
            <h3 className="text-3xl py-1">Key Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              3 years experienced software engineer skilled in building and
              maintaining web applications using{" "}
              <span className="text-teal-500">
                {" "}
                Vue.js, Nuxt.js, HTML, CSS, and JavaScript
              </span>
              . Strong in UI/UX design, focus
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-wrap gap-10 justify-evenly">
              <div className="w-20 m-2">
                <Image
                  src="/javascript.png"
                  height={100}
                  width={100}
                  alt="image"
                ></Image>
                <h4 className="py-4 text-teal-600">Javascript/jQuery</h4>
              </div>
              <div className="w-20 m-2">
                <Image
                  src="/vue.png"
                  height={100}
                  width={100}
                  alt="image"
                ></Image>
                <h4 className="py-4 text-teal-600">Vue+Vuex</h4>
              </div>
              <div className="w-20 m-2">
                <Image
                  src="/react.png"
                  height={100}
                  width={100}
                  alt="image"
                ></Image>
                <h4 className="py-4 text-teal-600">React+Redux</h4>
              </div>
              <div className="w-20 m-2">
                <Image
                  src="/html.png"
                  height={100}
                  width={100}
                  alt="image"
                ></Image>
                <h4 className="py-4 text-teal-600">HTML/HTML5</h4>
              </div>
              <div className="w-20 m-2">
                <Image
                  src="/css.png"
                  height={100}
                  width={100}
                  alt="image"
                ></Image>
                <h4 className="py-4 text-teal-600">CSS/SCSS</h4>
              </div>
              <div className="w-20 m-2 relative">
                <Image
                  src="/bootstrap.png"
                  height={100}
                  width={100}
                  alt="image"
                ></Image>
                <Image
                  src="/tailwind.png"
                  height={70}
                  width={70}
                  alt="image"
                  className="absolute top-6 left-10"
                ></Image>
                <h4 className="py-4 text-teal-600 mt-3">
                  Bootstrap Tailwindcss
                </h4>
              </div>
              <div className="w-20 m-2">
                <Image
                  src="/api.png"
                  height={150}
                  width={150}
                  alt="image"
                ></Image>
                <h4 className="py-4 text-teal-600">RESTfull services</h4>
              </div>
              <div className="w-20 m-2">
                <Image
                  src="/mysql.png"
                  height={100}
                  width={100}
                  alt="image"
                ></Image>
                <h4 className="py-4 text-teal-600">mySQL</h4>
              </div>
              <div className="w-20 m-2">
                <Image
                  src="/ui-ux.png"
                  height={100}
                  width={100}
                  alt="image"
                ></Image>
                <h4 className="py-4 text-teal-600">UI/UX</h4>
              </div>

              {/* <h3 className="text-lg font-medium pt-8 pb-2 "> Abcd</h3>
              <p className="py-2">abcd</p>
              <h4 className="py-4 text-teal-600">ABCD</h4>
              <p className="text-gray-800 py-1">Abcd</p>
              <p className="text-gray-800 py-1">Abcd</p>
              <p className="text-gray-800 py-1">Abcd</p> */}
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="text-center">
            <h3 className="text-3xl py-1">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              3 years experienced software engineer skilled in building and
              maintaining web applications using{" "}
              <span className="text-teal-500">
                {" "}
                Vue.js, Nuxt.js, HTML, CSS, and JavaScript
              </span>
              . Strong in UI/UX design, focus
            </p>
          </div>
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <video
                width="100%"
                height="100%"
                controls
                preload="auto"
                autoPlay
                className="rounded-lg"
              >
                <source src="/vue-music-app.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src="/web2.png"
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
                alt=""
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src="/web3.png"
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
                alt=""
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src="/web4.png"
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
                alt=""
              ></Image>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
