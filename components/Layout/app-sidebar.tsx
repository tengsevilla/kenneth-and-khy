
import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Gem, Gift, Mail, MapPinned, Shirt, UsersRound, Camera, CircleHelp } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import useNavigationStore from "@/lib/store/useStoreNavigation";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Our Wedding",
      url: "#our-wedding",
      icon: <Gem />,
    },
    { title: "Entourage", url: "#entourage", icon: <UsersRound /> },
    { title: "Attire", url: "#attire", icon: <Shirt /> },
    { title: "Gift Guide", url: "#gift-guide", icon: <Gift /> },
    { title: "Snap and share!", url: "#snap-and-share", icon: <Camera /> },
    { title: "RSVP", url: "#rsvp", icon: <Mail /> },
    { title: "Location Map", url: "#location", icon: <MapPinned /> },
    { title: "FAQs", url: "#faqs", icon: <CircleHelp /> },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { activeUrl, setActiveUrl } = useNavigationStore();
  const { toggleSidebar } = useSidebar(); // Access toggleSidebar
  const isMobile = useIsMobile(); // Access useIsMobile

  React.useEffect(() => {
    setActiveUrl(window.location.hash)
  }, [setActiveUrl]);

  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Web Invitation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={activeUrl === item.url}
                    onClick={() => {
                      setActiveUrl(item.url);
                      if (isMobile) toggleSidebar(); // Close sidebar after selection
                    }}>
                    <a href={item.url} className="font-medium">
                      {item.icon}{item.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
