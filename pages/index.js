import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <Head>
        <title>NextJs Tailwind Template 🔥</title>
      </Head>
      <img
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--JXlFx1ne--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/f30hrij5h3j7gt2klbcu.jpg"
        alt="Tailwind Logo"
        className="w-1/4"
      />
      <h1 className="text-gray-900 text-5xl">NextJS Tailwind Template 🔥</h1>
      <small className="my-3 text-gray-600 text-md absolute bottom-10">
        Made with 💙 by{" "}
        <a
          href="https://www.github.com/shaan71845"
          target="_blank"
          rel="noreferrer"
          className="text-green-600 underline"
        >
          Shaan Alam
        </a>
      </small>
    </div>
  );
}
