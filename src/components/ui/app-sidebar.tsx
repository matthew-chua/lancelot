import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Cat 1",
    url: "#",
  },
  {
    title: "Cat 2",
    url: "#",
  },
  {
    title: "Cat 3",
    url: "#",
  },
  {
    title: "Cat 4",
    url: "#",
  },
  {
    title: "Cat 5",
    url: "#",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="lg:hidden">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Lancelot</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {/* <item.icon /> */}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
