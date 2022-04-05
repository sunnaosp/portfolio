import { usePrismicDocumentByUID } from "@prismicio/react";
import { useParams } from "react-router-dom";

function Project() {
    const { id = "" } = useParams();
    const [data, state] = usePrismicDocumentByUID("project", id);

    return (
        <div className="flex-row">
            <div className="flex row-direction-row">
                <h2>{data?.data.project_name[0].text}</h2>

            </div>
            <div className="flex row bg-green-500">
                <h2>{data?.data.project_name[0].text}</h2>

            </div>
            <div className="flex row  bg-red-500">
                <h2>{data?.data.project_name[0].text}</h2>

            </div>
            <div className="flex row  bg-blue-500">
                <h2>{data?.data.project_name[0].text}</h2>

            </div>
            <div className="flex row  bg-orange-500">
                <h2>{data?.data.project_name[0].text}</h2>

            </div>
        </div>)
}

export default Project;