import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { HomePage } from "./pages/HomePage";
// import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectPage } from "./pages/ProjectPage";
import { Page_controls } from "./components/page_controls/Page_controls";
import { LanguageProvider } from "./i18n/LanguageProvider";

function App() {
  useRevealOnScroll();

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Page_controls />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          {/* <Route path='projects' element={<ProjectsPage />} /> */}
          <Route path="projects/:slug" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
