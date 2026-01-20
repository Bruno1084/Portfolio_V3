import type { ReactNode } from "react";
import { Header } from "../components/header/Header";
import { Cv_Header } from "../components/cv_header/Cv_Header";
import { About } from "../components/about/About";
import { Projects } from "../components/projects/Projects";
import { Experience } from "../components/experience/Experience";
import { Education } from "../components/education/Education";
import { Stack } from "../components/stack/Stack";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export function HomePage(): ReactNode {
    useRevealOnScroll();

    return (
        <>
            <main>
                <Header />
                <div id="main--container">
                    <Cv_Header />
                    <About />
                    <Experience />
                    <Projects />
                    <Education />
                    <Stack />
                    <Contact />
                    <Footer />
                </div>

            </main>
        </>
    );
}