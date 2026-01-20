import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { HomePage } from "./pages/HomePage";
// import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectPage } from "./pages/ProjectPage";

function App() {
    useRevealOnScroll();

    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<HomePage />} />
                {/* <Route path='projects' element={<ProjectsPage />} /> */}
                <Route path='projects/:slug' element={<ProjectPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
