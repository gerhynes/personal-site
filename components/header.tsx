import Link from "next/link";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="mx-auto flex max-w-3xl flex-wrap justify-between px-4 py-4 font-serif text-xl text-slate-900 dark:text-white">
      <h1 className="font-bold">
        <Link href="/">
          <a className="hover:underline">Gerard Hynes</a>
        </Link>
      </h1>
      <div className="flex justify-between gap-6">
        <span>
          <Link href="/about">
            <a className="hover:underline">about</a>
          </Link>
        </span>
        <span>
          <Link href="/projects">
            <a className="hover:underline">projects</a>
          </Link>
        </span>
        <span>
          <Link href="/writing">
            <a className="hover:underline">writing</a>
          </Link>
        </span>
      </div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        toggle
      </button>
    </header>
  );
}
export default Header;
