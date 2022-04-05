import { usePrismicDocumentByUID } from "@prismicio/react";
import { useParams } from "react-router-dom";

function Project() {
    const { id = "" } = useParams();
    const [data, state] = usePrismicDocumentByUID("project", id);

    return (<div>{data?.data.project_name[0].text}</div>)
}

export default Project;