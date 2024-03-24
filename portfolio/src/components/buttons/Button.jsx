import './Button.css';
export function Button ({children}){
    return (
        <>
            <div className='container-button-cv'>
                <button className="button-cv">
                {children}
                </button>
            </div>
            
        </>
    )
}