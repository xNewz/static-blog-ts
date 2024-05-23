import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Pargorn.Ru - Web Developer",
};

const abourPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        {">"}About
      </div>
      <div className="text-lg text-gray-900 dark:text-gray-100">
        My name is Pargorn Ruasijan and I am a web developer. This is my&nbsp;
        <Link
          href="https://github.com/xnewz"
          className="hover:underline text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
        , where I share my projects and experiments. I am passionate about web
        development and I am always looking for new things to learn.
      </div>
      <div className="text-lg text-gray-900 dark:text-gray-100 mt-10">
        I have a vocational certificate in Information Technology from&nbsp;
        <Link
          href="https://www.uthai.ac.th/"
          className="hover:underline text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Uthai Thani Technical College
        </Link>&nbsp;
        and I am currently studying for a Bachelor of Science in Industrial
        Education Program in Engineering Education at&nbsp;
        <Link
          href="https://www.kmitl.ac.th/"
          className="hover:underline text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          King Mongkut's Institute of Technology Ladkrabang
        </Link>&nbsp;
      </div>
      <div className="text-lg text-gray-900 dark:text-gray-100 mt-10">
        I also have a&nbsp;
        <Link
          href="https://www.youtube.com/@xnewz770?sub_confirmation=1"
          className="hover:underline text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube channel
        </Link>
        , where I share videos about web development and programming.
      </div>
      <div className="text-xl lg:text-2xl font-bold mt-12 text-gray-900 dark:text-gray-100">
        {"</>"}Experience
        <ul className="list-disc list-inside text-lg text-gray-900 dark:text-gray-100 mt-4 font-normal">
          <li>
            <Link
              href="https://www.littlebeansoft.com/"
              className="hover:underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Little Bean Soft
            </Link>&nbsp;
            - Internship
          </li>
          <li>
            <Link
              href="https://www.uthai.ac.th/"
              className="hover:underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Uthai Thani Technical College
            </Link>&nbsp;
            - Teaching Practice
          </li>
        </ul>
      </div>
      <div className="text-xl lg:text-2xl font-bold mt-12 text-gray-900 dark:text-gray-100">
        <div className="text-transparent bg-clip-text bg-gradient-to-r dark:from-green-400 dark:to-blue-500 from-purple-600 to-pink-500">
          {"</>"}
          Get in contact
        </div>
        <ul className="list-disc list-inside text-lg text-gray-900 dark:text-gray-100 mt-4 font-normal">
          <li>
            <Link
              href="https://www.linkedin.com/in/pargorn-ru/"
              className="hover:underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="mailto:pargorn.ru@gmail.com"
              className="hover:underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default abourPage;
