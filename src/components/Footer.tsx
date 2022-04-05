import React from "react";

function Footer() {
    return (<div className="font-brand text-2xl bg-brand h-24 flex flex-row items-center justify-center gap-4 py-4 w-full">
        <Icon to="https://www.linkedin.com/in/sunna-%C3%B6sp-%C3%BE%C3%B3rsd%C3%B3ttir-40491472/"><img src="/linkedin.svg" alt="An SVG of an eye" /></Icon>
        <Icon to="http://mbl.is"><img src="/cv.svg" alt="An SVG of an eye" /></Icon>
        <Icon to="http://mbl.is"><img src="/email.svg" alt="An SVG of an eye" /></Icon>
        <Icon to="https://dribbble.com/sunnaosp"><img src="/dribbble.svg" alt="An SVG of an eye" /></Icon>
    </div>)
}

const Icon = ({ children, to }: { children: React.ReactNode, to: string }) => {
    return <a href={to}><div className="bg-secondary rounded-full h-[40px] w-[40px] flex items-center justify-center ">{children}</div></a>
}

export default Footer;