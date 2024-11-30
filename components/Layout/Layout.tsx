"use client"
import { AppSidebar } from "@/components/Layout/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { ReactNode } from "react";
import Image from 'next/image';
import logo from '/lib/assets/header-logo-removebg.jpg'; // Replace with the actual path to your image

interface Props {
    children: ReactNode;
}
export default function Layout(props: Props) {
    return (
        <SidebarProvider>
            <SidebarInset>
                <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
                    <Image
                        src={logo} // Replace with your image path
                        alt="Logo"
                        width={40} // Adjust width
                        height={40} // Adjust height
                        className="h-8 w-8 object-contain" // Adjust as needed
                    />  
                    <SidebarTrigger className="-mr-1 ml-auto rotate-180 text-primary" />
                </header>
                {props.children}
            </SidebarInset>
            <AppSidebar side="right" />
        </SidebarProvider>
    );
}
