import { usePrismicDocumentByUID } from "@prismicio/react";
import { useParams } from "react-router-dom";

function Project() {
    const { id = "" } = useParams();
    // get the project data
    const [data, state] = usePrismicDocumentByUID("project", id);
    //Render the project sections with the data.
    return (
        <div className="flex-row">
            <div className="flex justify-center min-h-[600px]">
                <img src={data?.data?.banner_image?.url} alt="logo" className='w-f' />
            </div>
            <div className="flex py-10">
                <div className="pr-8 flex items-center justify-center gap-2">
                    <img src="/dribbble.svg" className="flex" alt="My role in this project" />
                    <p>Role: {data?.data?.project_role[0]?.text}</p>
                </div>
                <div className="pr-8 flex items-center justify-center gap-2">
                    <img src="/dribbble.svg" className="flex" alt="My role in this project" />
                    <p>Timeline: {data?.data?.project_timeline[0]?.text}</p>
                </div>
                <div className="pr-8 flex items-center justify-center gap-2">
                    <img src="/dribbble.svg" className="flex" alt="My role in this project" />
                    <p>Tools: {data?.data?.project_role[0]?.text}</p>
                </div>
                <div className="flex-auto items-center flex gap-2">
                    <img src="/dribbble.svg" className="flex" alt="My role in this project" />
                    <a href={data?.data?.project_link.url}>{data?.data?.project_name[0]?.text}</a>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-f py-10 min-h-[350px]">
                <h1 className="flex font-brand text-4xl pb-10">The mission</h1>
                <p className="flex w-1/2 justify-center items-center text-center leading-7 text-lg">
                    {data?.data?.the_mission[0]?.text}
                </p>
            </div>
            <div className="flex justify-between items-center py-10 min-h-[350px]">
                <div className='w-[405px] h-[277px] flex-col font-sans-600 text-sm font-semibold text-brand'>
                    <img className='w-[405px] h-[277px] pb-3' src={data?.data?.middle_image_left?.url} />
                    {data?.data?.image_text_left[0]?.text}
                </div >
                <div className='w-[405px] h-[277px] flex-col font-sans-600 text-sm font-semibold text-brand'>
                    <img className='w-[405px] h-[277px] pb-3' src={data?.data?.middle_image_middle?.url} />
                    {data?.data?.image_text_middle[0]?.text}
                </div >
                <div className='w-[405px] h-[277px] flex-col font-sans-600 text-sm font-semibold text-brand'>
                    <img className='w-[405px] h-[277px] pb-3' src={data?.data?.middle_image_right?.url} />
                    {data?.data?.image_text_right[0]?.text}

                </div >
            </div>
            <div className="flex flex-col justify-center items-center w-f py-10 min-h-[350px]">
                <h1 className="flex font-brand text-4xl pb-8">The outcome</h1>
                <p className="flex w-1/2 justify-center items-center text-center leading-7 text-lg">
                    {data?.data?.the_outcome[0]?.text}
                </p>
            </div>
            <div className="flex justify-center items-center max-h-60 min-h-[350px]">
                <img className='max-h-60' src={data?.data.bottom_image.url} />
            </div>
        </div>)
}

export default Project;