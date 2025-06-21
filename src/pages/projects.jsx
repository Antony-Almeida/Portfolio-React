import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							"Todo artista foi primeiro um amador." <br></br><h7>Ralph Waldo Emerson</h7>
						</div>

						<div className="subtitle projects-subtitle">
							Ao longo do tempo, participei de diversos projetos, desde workshops até trabalhos da faculdade, como o projeto de Laboratório de Programação II, que muito estudei e desenvolvi com dedicação. Esses projetos foram fundamentais para meu crescimento profissional e pessoal. Muitos deles são abertos e disponíveis para quem quiser conhecer, explorar e até colaborar. Se tiver interesse, fique à vontade para conferir, sugerir melhorias ou trocar ideias. Acredito que colaborar é uma das melhores formas de aprender e evoluir, e estou sempre aberto a novos desafios, feedbacks e parcerias.
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
