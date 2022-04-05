import React from "react";
import SignatureLogo from '../signatureLogo.svg'
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="flex flex-row items-center w-full px-20 bg-secondary border-b border-brand">
            <div className="flex-1">
                <Link to={"/"}><SignatureLogo /></Link>
            </div>
            <div className="flex flex-row gap-5">
                <ProjectLink to={"/category/uxdesign"}>UX design</ProjectLink>
                <ProjectLink to={"/category/webdesign"}>Web projects</ProjectLink>
                <ProjectLink to={"/category/visualdesign"}>Visual design</ProjectLink>
            </div>
        </div>
    );
}

const ProjectLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
    return <NavLink to={to} className="hover:underline underline-offset-2 decoration-2 decoration-brand">{children}</NavLink>
}


export default Header;