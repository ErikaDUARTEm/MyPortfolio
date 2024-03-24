import './CardSkills.css';

export function CardSkills({id, imagen, title, alt}){
    return(
        <>
            <div key={id} className="card">
                <img src={imagen} alt={alt} />
                <p>{title}</p>
            </div>                    
        </>
    )
}