import { ButtonCv } from "../buttons/ButtonCv";
import "./Projects.css";
export function Projects ({imagen, title, description, technologies, url, repo}){
    return(
        <>
            <section className="section-all-projects">
                <article className="section-project">
                    <div className="container-project-img">
                        <img src={imagen}/>
                    </div>
                    <div className="container-project-description">
                    <div className="container-description">
                        <h2>{title}</h2>
                        <h3>{description}</h3>
                        <h3>{technologies}</h3>
                    </div> 
                    <div className="container-buttons">
                        <ButtonCv><a href={url} target="_blank">Ver Proyecto</a></ButtonCv>
                        <ButtonCv><a href={repo} target="_blank">Ver Código</a></ButtonCv>
                    </div>
                    </div>
                    
                </article>
            </section>
        </>
    )
}