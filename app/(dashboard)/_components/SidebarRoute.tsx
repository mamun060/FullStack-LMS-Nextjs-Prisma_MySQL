"use client";
import {Layout, Compass, List, BarChart } from 'lucide-react';
import SidebarItem from './SidebarItem';
import { usePathname } from 'next/navigation';

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search"
    },
]

const TeacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses"
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics"
    },
]

const SidebarRoute = () => {
    const pathaname = usePathname();
    const isTeacherPage = pathaname.includes("/teacher")

    const routes = isTeacherPage ? TeacherRoutes : guestRoutes;
    
    return (
        <div className=" flex flex-col w-full">
            {
                routes.map((route)=> ( 
                    <SidebarItem 
                        key={route.href}
                        icon={route.icon}
                        label={route.label}
                        href={route.href}
                    />
                ))
            }
        </div>
    );
}
 
export default SidebarRoute;