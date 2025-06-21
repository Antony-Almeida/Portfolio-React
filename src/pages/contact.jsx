import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Vamos Conversar: Formas de Entrar em Contato Comigo
						</div>

						<div className="subtitle contact-subtitle">
							Obrigado pelo seu interesse em entrar em contato comigo!
							Fico feliz em receber feedbacks, perguntas e sugestões.
							Se quiser conversar sobre algum projeto ou tiver algo específico em mente, sinta-se à vontade para me enviar um e-mail diretamente em:
							&nbsp;{""}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. Faço o possível para responder todas as mensagens dentro de 24 horas, embora em períodos mais corridos isso possa demorar um pouco mais. Por fim, se preferir, podemos nos conectar pelas redes sociais. Você me encontra em:{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. Não hesite em entrar em contato!
							Mais uma vez, agradeço pelo interesse e fico no aguardo do seu contato!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
