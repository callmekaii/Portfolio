import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
// components/app-sidebar.jsx

export function AppSidebar({ setView }) { // Receive the prop
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            
            {/* Home Button */}
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setView("home")}>
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Projects Button */}
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setView("projects")}>
                <span>Projects</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}