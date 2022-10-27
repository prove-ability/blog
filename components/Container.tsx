import Head from "next/head";
import Image from "next/image";
import metadata from "../data/metadata";
import Nav from "./Nav";

export default function Container(props) {
  const meta = {
    ...metadata,
    ...props.customMeta,
  };
  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <header
        className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
      >
        <div className={`flex flex-row items-center`}>
          <Image
            src={`/profile.jpg`}
            alt="로고"
            width={40}
            height={40}
            objectFit={`cover`}
            className={`rounded-full`}
          />
          <span className={`mx-2 font-extralight text-lg`}>
            {metadata.title}
          </span>
        </div>
        <Nav />
      </header>
      {/* <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-500">
        {meta.readingTime.text}
      </span> */}
      <main className={`w-full max-w-3xl`}>{props.children}</main>
    </div>
  );
}
