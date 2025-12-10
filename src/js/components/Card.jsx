export const Card = ({ personajes }) => {

    console.log(personajes);

    return (
        <div className="col-sm-6 col-md-6 col-lg-3 p-2">
            <div className="card bg-dark p-2 text-light bg-opacity-50">
                <div className="d-flex justify-conten-center " style={{ width: "100%", overflow:"hidden", aspectRatio: "3/4" }}>
                    <img src={personajes.img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title"><strong>Nombre: </strong>{personajes.name}</h5>
                    <p className="card-text"><strong>Casa: </strong>{personajes.casa}</p>
                    <p className="card-text"><strong>Título: </strong>{personajes.title}</p>
                    <p className="card-text"><strong>Dragón: </strong>{personajes.dragon}</p>
                    <p className="card-text"><strong>Padre: </strong>{personajes.padre}</p>
                    <p className="card-text"><strong>Madre: </strong>{personajes.madre}</p>
                </div>
            </div>
        </div>
    )
}