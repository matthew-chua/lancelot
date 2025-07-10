import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Button } from "./button";
import { Menu } from "lucide-react";
import { useSidebar } from "@/hooks/use-sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";

// Menu items.
const items = [
  {
    title: "Fitness Coaches",
    url: "/test",
    subItems: [
      {
        title: "Weight Loss",
        url: "/test",
      },
      {
        title: "Muscle Gain",
        url: "/test",
      },
    ],
  },
  {
    title: "Skils Coaches",
    url: "/test",
    subItems: [
      {
        title: "Music",
        url: "/test",
      },
      {
        title: "Art",
        url: "/test",
      },
    ],
  },
  {
    title: "Task Assistance",
    url: "/test",
    subItems: [
      {
        title: "Sub 1",
        url: "/test",
      },
      {
        title: "Sub 2",
        url: "/test",
      },
    ],
  },
  {
    title: "Home Businesses",
    url: "/test",
    subItems: [
      {
        title: "Cafes",
        url: "/test",
      },
      {
        title: "Bakeries",
        url: "/test",
      },
      {
        title: "Private Dining",
        url: "/test",
      },
    ],
  },
  {
    title: "Cat 5",
    url: "/test",
    subItems: [
      {
        title: "Sub 1",
        url: "/test",
      },
      {
        title: "Sub 2",
        url: "/test",
      },
    ],
  },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar className="z-20">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex justify-between items-center">
            <SidebarGroupLabel>Lancelot</SidebarGroupLabel>
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu />
            </Button>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subItems.map((subItem) => (
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>{subItem.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
