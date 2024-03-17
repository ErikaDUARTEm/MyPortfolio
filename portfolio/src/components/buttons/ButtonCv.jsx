import './ButtonCv.css';
export function ButtonCv ({children}){
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