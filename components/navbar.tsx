import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { SidebarOpen } from "lucide-react";
import MobileSidebar from "@/components/mobile-sidebar";

export default function Navbar(){
    return (
        <div className="flex items-center p-4">
            <MobileSidebar/>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>

    )
}