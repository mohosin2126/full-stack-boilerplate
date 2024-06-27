import "./index.css"

export default function Card() {
    return (
        <>
            <div className="card">
                <img src="https://via.placeholder.com/300" alt="Avatar"/>
                <div className="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        </>
    )
}