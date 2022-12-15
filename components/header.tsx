import Link from "next/link";

function Header() {
  return (
    <header className="mx-auto flex max-w-3xl flex-wrap justify-between px-4 py-4 font-serif text-xl text-slate-800">
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
    </header>
  );
}
export default Header;
