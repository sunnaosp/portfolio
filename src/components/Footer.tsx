import React from "react";

function Footer({ data }: { data?: Record<string, any> }) {
    console.log(data?.cv)
    return (<div className="font-brand text-2xl bg-brand h-24 flex flex-row items-center justify-center gap-4 py-4 w-full">
        <Icon to={data?.linkedin?.url}><img src="/linkedin.svg" alt="Check out my linkedin" /></Icon>
        <Icon to={data?.cv?.url}><img src="/cv.svg" alt="View my cv" /></Icon>
        <Icon to={data?.email_link[0].text}><img src="/email.svg" alt="Send me an email" /></Icon>
        <Icon to={data?.dribbble?.url}><img src="/dribbble.svg" alt="Browse my works on dribble" /></Icon>
    </div>)
}

const Icon = ({ children, to }: { children: React.ReactNode, to: string }) => {
    return <a href={to}><div className="bg-secondary rounded-full h-[40px] w-[40px] flex items-center justify-center ">{children}</div></a>
}

export default Footer;