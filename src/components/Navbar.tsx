import { Link } from "react-router-dom";

import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useSidebar } from "@/hooks/use-sidebar";
import { Input } from "./ui/input";

export function Navbar() {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="fixed top-0 left-0 z-10 w-full p-2 border-b bg-white flex flex-col gap-2">
      <NavigationMenu className="flex justify-center items-center">
        <div className="flex justify-between items-center w-full max-w-7xl">
          <div className="flex items-center gap-2">
            <Button
              className=""
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
            >
              <Menu />
            </Button>
            <Link to="/">Lancelot</Link>
          </div>
          <Input
            placeholder="Search for your next lancelot..."
            className="w-full hidden lg:block max-w-sm"
          />
          <div className="flex items-center gap-2">
            <Button>Login</Button>
          </div>
        </div>
      </NavigationMenu>
      <Input
        placeholder="Search for your next lancelot..."
        className="w-full lg:hidden"
      />
    </div>
  );
}
