import './Skills.css';

export function Skills({id, imagen, title}){
    return(
        <>
            <div key={id} className="card">
                <img src={imagen} />
                <p>{title}</p>
            </div>                    
        </>
    )
}