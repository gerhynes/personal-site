import Link from "next/link";
export default function Custom404() {
  return (
    <main>
      <div className="mt-10">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          So it looks like that page doesn't exist
        </h1>
        <div className="flex flex-col items-center justify-center">
          <p className="mb-6 inline-block text-xl leading-7 text-slate-700 dark:text-slate-300">
            Were you looking for?
          </p>
          <ul className="mb-6 text-lg leading-7 text-slate-700 dark:text-slate-300">
            <li className="mb-4 text-teal-700 underline dark:text-teal-300">
              <Link href="/about">Information about me</Link>
            </li>
            <li className="mb-4 text-teal-700 underline dark:text-teal-300">
              <Link href="/projects">Personal projects I've built</Link>
            </li>
            <li className="text-teal-700 underline dark:text-teal-300">
              <Link href="/writing">Articles I've written</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
