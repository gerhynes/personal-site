import Link from "next/link";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="mx-auto max-w-3xl px-4 py-4 font-serif text-xl text-slate-900 dark:text-white sm:flex sm:flex-wrap sm:items-center sm:justify-between">
      <h1 className="mb-2 font-bold sm:mb-0">
        <Link href="/" className="hover:underline">
          Gerard Hynes
        </Link>
      </h1>
      <div className="mb-2 flex justify-between gap-6 sm:mb-0">
        <span>
          <Link href="/about" className="hover:underline">
            about
          </Link>
        </span>
        <span>
          <Link href="/projects" className="hover:underline">
            projects
          </Link>
        </span>
        <span>
          <Link href="/writing" className="hover:underline">
            writing
          </Link>
        </span>
      </div>
      <div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full bg-slate-200 p-2 dark:bg-slate-700"
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
              focusable="false"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
              focusable="false"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
          <span className="sr-only">Dark Mode toggle</span>
        </button>
      </div>
    </header>
  );
}
export default Header;
