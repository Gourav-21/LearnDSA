import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        {/* <link rel='icon' href='/next-logo.svg' /> */}
        <link rel="icon" href="/favicon.ico" />

        <title>LearnDSA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This website offers a comprehensive DSA syllabus to assist users in learning and practicing coding problems with  integrated AI, which helps the users in understanding code and explanations of complex concepts."
        />
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={3000}
		transition={Slide}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
