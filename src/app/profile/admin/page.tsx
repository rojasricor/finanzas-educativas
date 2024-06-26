import pkg from "@/../package.json";
import { AdminIcon } from "@/components/NavBar/icons";
import Title from "@/components/Title";
import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProfileAdminPage() {
  const session = await getServerSession(authOptions);

  if (session?.user?.email !== "admin@gmail.com") {
    redirect("/profile/user");
  }

  return (
    <div className="mb-20">
      <div className="relative isolate px-6 pb-20 lg:py-0 lg:pl-36 lg:flex lg:justify-between lg:items-center lg:gap-10 lg:h-screen">
        <div className="h-screen lg:h-full flex flex-col justify-center items-center">
          <div className="flex mb-8 justify-center">
            <div className="relative rounded-full px-5 py-1 text-sm leading-6 text-gray-600 dark:text-gray-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-zinc-200/10 dark:hover:ring-gray-200/20 text-center">
              Completar mi información personal.{" "}
              <Link
                href="/financial-education"
                className="font-semibold text-boston-blue-600"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Completar Perfíl <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="relative text-center">
            <h1 className="mb-5 sm:mb-10 text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="block w-full">¡Bienvenido a </span>
              <span className="text-sushi-500">{`¡${pkg.description}!`}</span>{" "}
              <Title />
            </h1>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              ❝Empodérate Financieramente: Tu Futuro, Tu Control. Tu futuro
              financiero está en tus manos. ¡Únete a nosotros y haz que cada
              decisión cuente!❞
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/profile/admin/dashboard"
                className="rounded-md bg-boston-blue-600 hover:bg-sushi-500 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-300 flex items-center justify-center gap-x-2"
              >
                IR AL PANEL DE ADMINISTRADOR
                <AdminIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative rounded-lg overflow-hidden flex justify-center items-center">
          <Image
            width={600}
            height={400}
            quality={100}
            src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="photo"
            className="object-cover aspect-square transform hover:scale-105 hover:brightness-105 transition-all duration-300 cursor-pointer rounded-lg"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
