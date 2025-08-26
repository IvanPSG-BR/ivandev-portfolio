import React from 'react';
import Header from './layouts/Header';
import Hero from './layouts/Hero';
// import About from './layouts/About';
// import Projects from './layouts/Projects';
// import Contact from './layouts/Contact';
import Footer from './layouts/Footer';

export default function App() {
    return (
        <>
            <Header></Header>
            <main className="flex flex-col gap-4 py-10">
                <Hero></Hero>
            </main>
            <Footer></Footer>
        </>
    );
}
