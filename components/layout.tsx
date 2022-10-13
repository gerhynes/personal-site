import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Header />
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
