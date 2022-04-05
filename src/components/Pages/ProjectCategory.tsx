import { usePrismicDocumentByUID } from "@prismicio/react";
import { Link, useParams } from "react-router-dom";

function ProjectCategory() {
    const { id = "" } = useParams();
    const [data, state] = usePrismicDocumentByUID('ux_design_page', id);
    return (<>
        {
            state?.state === 'loaded' ?
                (
                    <div>
                        <h2 className='text-4xl font-brand pb-16 '>{data?.data.title[0].text}</h2>
                        <SelectedWorks items={data?.data.body[0].items} />
                    </div>) :
                <p>loading</p>
        }
    </>);
}

const SelectedWorks = ({ items = [5] }: { items: any[] }) => {
    const item0 = items[0];
    const item1 = items[1];
    const item2 = items[2];
    const item3 = items[3];
    const item4 = items[4];
    return (
        <div className='flex gap-6 items-center justify-center'>
            <div className='flex flex-col gap-6'>
                <div className="flex flex-row gap-6">
                    <Project projectId={item0.featured_project.uid} seat={0} />
                    <Project projectId={item1.featured_project.uid} seat={1} />
                </div>
                <div className="flex flex-row gap-6">
                    <Project projectId={item3.featured_project.uid} seat={3} />
                    <Project projectId={item4.featured_project.uid} seat={4} />
                </div>
            </div>
            <div className="flex flex-col">
                <Project projectId={item2.featured_project.uid} seat={2} />
            </div>
        </div>);
}

const Project = ({ projectId, seat }: { projectId: string, seat: number }) => {
    const [data, state] = usePrismicDocumentByUID("project", projectId);
    const { width, height } = seatSize(seat);
    const backgroundColor = data?.data?.background_color ? data?.data?.background_color : "#ffff";
    return (<>
        {
            state?.state === 'loaded' ?
                (
                    <Link to={`/project/${projectId}`}>
                        <div className="flex items-center justify-center transition-colors" style={{ backgroundColor: backgroundColor, width: width, height: height }}>
                            <div className='opacity-0  flex items-end justify-center hover:opacity-100 hover:bg-opacity-50 absolute bg-black' style={{ width: width, height: height }}>
                                <p className='flex text-3xl text-white mb-8'>
                                    {data?.data.project_name[0]?.text}
                                </p>
                            </div>
                            <img src={data?.data.logo.url} />
                        </div >
                    </Link>
                )
                :
                (<div className='w-[277px] h-[277px] flex items-center justify-center bg-brand opacity-30 transition-colors'></div>)
        }
    </>
    )
}

function seatSize(seat: number): { width: string, height: string } {
    switch (seat) {
        case 0:
        case 1: return { width: "460px", height: "280px" };
        case 2: return { width: "305px", height: "600px" };
        case 3: return { width: "346px", height: "295px" };
        case 4: return { width: "574px", height: "295px" };
    }
    return { width: "277px", height: "277px" };
}
export default ProjectCategory;