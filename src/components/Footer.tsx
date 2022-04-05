import React from "react";
import { ReactComponent as EmailIcon } from '../../public/email.svg'
import { ReactComponent as LinkedinIcon } from '../../public/linkedin.svg'
import { ReactComponent as CVIcon } from '../../public/cv.svg'
import { ReactComponent as DribbbleIcon } from '../../public/dribbble.svg'

function Footer() {
    return (<div className="font-brand text-2xl bg-brand h-24 flex flex-row items-center justify-center gap-4 py-4 w-full">
        <Icon to="https://www.linkedin.com/in/sunna-%C3%B6sp-%C3%BE%C3%B3rsd%C3%B3ttir-40491472/"><LinkedinIcon /></Icon>
        <Icon to="http://mbl.is"><CVIcon /></Icon>
        <Icon to="http://mbl.is"><EmailIcon /></Icon>
        <Icon to="https://dribbble.com/sunnaosp"><DribbbleIcon /></Icon>
    </div>)
}

const Icon = ({ children, to }: { children: React.ReactNode, to: string }) => {
    return <a href={to}><div className="bg-secondary rounded-full h-[40px] w-[40px] flex items-center justify-center ">{children}</div></a>
}

export default Footer;