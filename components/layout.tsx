import Header from "./header";
import Footer from "./footer";
import Seo from "./seo";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Seo />
      <div className="flex min-h-screen flex-col">
        <div className="flex-1">
          <Header />
          <div className="mx-auto max-w-3xl px-4">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
