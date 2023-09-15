import React from 'react'

export const CardStudent = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Nombre del Curso</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Ano Cursado</h6>
                <h5 className="card-text">Nota Final</h5>
                {/* <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
    )
}

