"use client"
import { AppSidebar } from "@/components/Layout/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { ReactNode } from "react";


interface Props {
    children: ReactNode;
}
export default function Layout(props: Props) {
    return (
        <SidebarProvider>
            <SidebarInset>
                <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="font-logo text-2xl text-primary">
                                    K & K
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <SidebarTrigger className="-mr-1 ml-auto rotate-180 text-primary" />
                </header>
                {props.children}
            </SidebarInset>
            <AppSidebar side="right" />
        </SidebarProvider>
    );
}
