import React from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import foto_profissional from './assets/images/ivan-a-trabalho.png';

export default function App() {
    return (
        <>
            <Header></Header>
            <main className="flex flex-col gap-4 py-10">
                <h2>[Conteúto principal]</h2>
                <img src={foto_profissional} alt="" className="w-[10rem] rounded-full"/>
            </main>
            <Footer></Footer>
        </>
    );
}
