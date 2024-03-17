import { ButtonCv } from "../buttons/ButtonCv";
import "./Projects.css";
export function Projects ({img, title, description, technologies, url, repo}){
    return(
        <>
            <section className="section-all-projects">
                <article className="section-project">
                    <div className="container-project-img">
                        <img src={img}/>
                    </div>
                    <div className="container-project-description">
                    <div className="container-description">
                        <h2>{title}</h2>
                        <h3>{description}</h3>
                        <h3>{technologies}</h3>
                    </div> 
                    <div className="container-buttons">
                        <ButtonCv><a href={url} target="_blank">Ver App</a></ButtonCv>
                        <ButtonCv><a href={repo} target="_blank">Ver Repositorio</a></ButtonCv>
                    </div>
                    </div>
                    
                </article>
            </section>
        </>
    )
}