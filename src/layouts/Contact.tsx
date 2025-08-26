import React from 'react';

export default function Contact() {
    return (
        <section>
            <div id="contact_title">
                <h3>
                    <span aria-hidden="true" className="cli-text">ivan@portfolio:~$ </span>
                    <span className="title-text">Entre em Contato</span>
                </h3>
            </div>

            <div id="contact_data">
                <form action="" method="post">
                    <div>
                        <label htmlFor="username">Nome</label>
                        <input type="text" name="username" id="username" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="message">Mensagem</label>
                        <textarea name="message" id="message" cols={30} rows={10}></textarea>
                    </div>

                    <div><button type="submit">Enviar</button></div>
                </form>
            </div>
        </section>
    )
}
