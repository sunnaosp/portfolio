import * as prismic from "@prismicio/client";
import Home from './components/Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrismicProvider, usePrismicDocumentByUID } from '@prismicio/react';
import Header from "./components/Header";
import './index.css';
import Footer from "./components/Footer";
import Project from "./components/Pages/Project";
import ProjectCategory from "./components/Pages/ProjectCategory";

function App() {

    const endpoint = prismic.getEndpoint("sunnacv");
    const client = prismic.createClient(endpoint);
    return (
        <>
            <PrismicProvider client={client}>
                <AppContent />
            </PrismicProvider>
        </>
    );
}

function AppContent() {
    const [data, state] = usePrismicDocumentByUID('frontpage', 'frontpage');
    return (<BrowserRouter>
        <div className="flex flex-col h-f min-h-screen bg-secondary items-center justify-center">
            <Header />
            <div className="flex-1 py-16 max-w-screen-2xl w-full">
                <Routes>
                    <Route path="/" element={<Home data={data?.data} state={state?.state} />} />
                    <Route path="category/:id" element={<ProjectCategory />} />
                    <Route path="project/:id" element={<Project />} />
                </Routes>
            </div>
            <Footer data={data?.data} />
        </div>
    </BrowserRouter>);
}

export default App;