import pkg from "@/../package.json";
import Title from "@/components/Title";
import { type Metadata } from "next";
import Image from "next/image";
import FormContact from "./FormContact";
import ContactUsGifDark from "./gifs/ContactUs-dark.gif";
import ContactUsGif from "./gifs/ContactUs.gif";

export const metadata: Metadata = {
  title: `${pkg.description} | Contáctanos`,
};

export default function Contact() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8 mb-10 py-20">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl md:max-w-3xl">
        <h2 className="mt-3 text-center text-3xl font-bold leading-9 tracking-tight">
          Contactar con el equipo de{" "}
          <Title text={`¡${pkg.description}!`} isTextStatic />
        </h2>
      </div>
      <div className="flex justify-center items-center gap-16 mt-7">
        <div className="lg:flex lg:justify-center lg:items-center hidden">
          <Image
            className="dark:hidden rounded-xl -z-50"
            width={400}
            height={400}
            quality={100}
            src={ContactUsGif}
            alt="Placeholder Image"
            loading="eager"
          />
          <Image
            className="hidden dark:block rounded-xl -z-50"
            width={400}
            height={400}
            quality={100}
            src={ContactUsGifDark}
            alt="Placeholder Image"
            loading="eager"
          />
        </div>
        <div className="pb-12 w-80">
          <FormContact />
        </div>
      </div>
    </div>
  );
}
