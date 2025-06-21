import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Trabalhos"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./Energisa.png"
								alt="Energisa Paraíba"
								className="work-image"
							/>
							<div className="work-title">Energisa Paraíba</div>
							<div className="work-subtitle">
								Estagiário
							</div>
							<div className="work-duration">2025 - Presente </div>
						</div>

						<div className="work">
							<img
								src="./Energisa.png"
								alt="Energisa Paraíba"
								className="work-image"
							/>
							<div className="work-title">Energisa Paraíba</div>
							<div className="work-subtitle">
								Jovem Aprendiz
							</div>
							<div className="work-duration">2023 - 2024 </div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
