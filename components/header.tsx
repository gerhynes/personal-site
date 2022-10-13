function Header() {
  return (
    <header className="max-w-3xl mx-auto py-4 flex justify-between text-xl">
      <h1 className="font-bold">Gerard Hynes</h1>
      <div className="flex justify-between gap-4">
        <span>About</span>
        <span>Projects</span>
        <span>Writing</span>
      </div>
    </header>
  );
}
export default Header;
