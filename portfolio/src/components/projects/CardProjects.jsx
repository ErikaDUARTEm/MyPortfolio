import { Button } from "../buttons/Button";
import "./CardProjects.css";
export function CardProjects ({imagen, title, description, technologies, url, repo}){
    return(
        <>
            {/* <section className="section-all-projects" id="projects"> */}
                <article className="section-project">
                    <div className="container-project-img">
                        <img src={imagen}/>
                    </div>
                    <div className="container-project-description">
                    <div className="container-description">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <p>{technologies}</p>
                    </div> 
                    <div className="container-buttons">
                        <Button><a href={url} target="_blank">Ver Proyecto</a></Button>
                        <Button><a href={repo} target="_blank">Ver Código</a></Button>
                    </div>
                    </div>
                    
                </article>
            {/* </section> */}
        </>
    )
}