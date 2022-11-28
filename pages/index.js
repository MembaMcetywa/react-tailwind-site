import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import memba from "../public/memba.jpeg";
import Image from "next/image";
import { FaReact, FaGitSquare, FaJava, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiApollographql,
  SiPhp,
  SiMysql,
  SiPrisma,
  SiAmazonaws,
  SiBugsnag,
  SiFlutter,
  SiZendesk,
  SiYarn,
  SiTailwindcss,
  SiMaterialui,
} from "react-icons/si";

import { FiMail } from "react-icons/fi";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Membathisi&apos;s Portfolio</title>
        <meta
          name="membathisi's portfolio"
          content="Membathisi's portfolio site using react and tailwind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">membaa 🍉</h1>
            <ul className="flex items-center gap-4">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="./resume.pdf"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
              <li>
                <a href="mailto:membatheone@gmail.com">
                  <FiMail size={25} />
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Membathisi Mcetywa
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and memographer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Fullstack Software Developer. Fullstack meme connoisseur.
              Fullstack Adventurer.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.twitter.com/membatheone">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/membathisi-mcetywa">
                <AiFillLinkedin />
              </a>
              <a href="https://www.github.com/MembaMcetywa">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={memba} layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About</h3>
            <p className=" py-2 leading-8 text-gray-800 dark:text-gray-200 text-lg">
              I am a junior full stack software developer. passionate about
              technology, engineering & people. My primary goal is to apply my
              technical expertise all throughout the full software life cycle to
              ensure production and delivery of products and services that meet
              the required specifications. And my experience as a junior
              software developer has directly contributed to the achievement of
              this goal by enhancing my abilities in designing, implementing,
              testing, and upgrading software. My current go to stack is React
              or React Native with TypeScript. However I am skilled in several
              other tools and languages that are mentioned in my resume. As a
              person, I enjoy remaining open to new experiences and this
              directly impacts me in my career as a software developer because
              learning new technologies is one of my favourite things to do. In
              my free time I enjoy football, hikes, and photography which can be
              accessed{" "}
              <span className="text-teal-600">
                <a
                  href="https://vsco.co/geoidesy"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </span>
            </p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as software developer I have
              been a part of several projects from being a final year IT private
              tutor, to winning hackathons, to professional development for
              startups. This wide range of clientele has allowed me to develop a
              wide set of skills to translate requirements to a live product
              that users can interact with. I believe this does give me an edge
              in developing quality and robust software as I have interacting
              with different clients with diiferent requirements Here are some
              of my personal favourite projects I&apos;ve done both in my
              personal and professional capacity.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <section>
                <div className="lg:flex gap-10">
                  <div className="text-center shadow-lg p-10 h-80 rounded-xl my-10  dark:bg-white flex-1">
                    <h3 className="text-lg font-medium pt-8 pb-2  ">
                      Facebook clone
                    </h3>
                    <p className="py-2">
                      Built using Flutter. This was an exploration of user
                      interfaces using dart. And a challenge to see how close it
                      could really get to the real product.
                    </p>
                    <a
                      href="https://github.com/MembaMcetywa/facebook_clone"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h4 className="py-4 text-teal-600">Source code</h4>
                    </a>
                  </div>
                  <div className="text-center shadow-lg h-80 p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <h3 className="text-lg font-medium pt-8 pb-2 ">
                      Rapid response
                    </h3>
                    <p className="py-2">
                      A simple reaction speed game built in Vue.Js. This is the
                      first project I built out in Vue and it is currently live
                      & can be accessed{" "}
                      <span className="text-teal-600">
                        <a
                          href="https://howquick.netlify.app/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          here
                        </a>
                      </span>
                    </p>
                    <a href="https://github.com/MembaMcetywa/rapid-response/tree/master">
                      <h4 className="py-4 text-teal-600">Source code</h4>
                    </a>
                  </div>
                  <div className="text-center shadow-lg h-80 p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <h3 className="text-lg font-medium pt-8 pb-2 ">
                      Instill Education
                    </h3>
                    <p className="py-2">
                      A mobile-first approach to teacher training and
                      development on the African continent. Instill Education
                      supports Educators and aspiring Teachers wherever they are
                      in their education journey. This project is currently in
                      Beta.
                    </p>
                    <a
                      href="https://instill.education/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h4 className="py-4 text-teal-600">Learn more</h4>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Skills</h3>
            <div className="text-lg py-2 flex flex-row gap-10 leading-8 text-gray-800 dark:text-gray-200">
              <FaReact size={80} />
              <SiTypescript size={80} />
              <SiJavascript size={80} />
              <SiApollographql size={80} />
              <SiGraphql size={80} />
              <SiPhp size={80} />
              <FaJava size={80} />
              <FaGithub size={80} />
              <SiMaterialui size={80} />
            </div>
            <div className="text-lg py-2 flex flex-row gap-10 leading-8 text-gray-800 dark:text-gray-200">
              <SiPrisma size={80} />
              <SiAmazonaws size={80} />
              <SiBugsnag size={80} />
              <SiFlutter size={80} />
              <SiZendesk size={80} />
              <SiMysql size={80} />
              <FaGitSquare size={80} />
              <SiYarn size={80} />
              <SiTailwindcss size={80} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
