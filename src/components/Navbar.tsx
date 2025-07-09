import { Link } from "react-router-dom";

import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu-style";
import { Menu } from "lucide-react";
import { useSidebar } from "@/hooks/use-sidebar";

export function Navbar() {
  const { toggleSidebar } = useSidebar();
  return (
    <NavigationMenu className="flex justify-center items-center fixed top-0 left-0 z-50 w-full p-2 border-b bg-white">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <div>
          <Link to="/">Lancelot</Link>
        </div>
        <NavigationMenuList className="hidden lg:flex">
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Cat 1</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link to="#">Sub Cat 1</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Sub Cat 2</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="#">Sub Cat 3</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/cat-2">Cat 2</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/cat-3">Cat 3</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/cat-4">Cat 4</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="flex items-center gap-2">
          <Button>Login</Button>
          <Button
            className="lg:hidden"
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
          >
            <Menu />
          </Button>
        </div>
      </div>
    </NavigationMenu>
  );
}
