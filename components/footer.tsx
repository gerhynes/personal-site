function Footer() {
  return (
    <footer className="flex w-full justify-center gap-2 py-2 text-center font-serif text-slate-900 dark:text-white">
      <span>&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
}
export default Footer;
