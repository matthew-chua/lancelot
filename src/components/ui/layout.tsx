import Footer from "../Footer";
import { Navbar } from "../Navbar";
import { AppSidebar } from "./app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between w-screen min-h-screen">
      <div className="flex flex-col">
        <AppSidebar />
        <Navbar />
        <div className="flex justify-center w-full py-16 px-8 lg:p-20">
          <div className="max-w-7xl w-full">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
