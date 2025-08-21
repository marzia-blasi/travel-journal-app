import { Link, NavLink } from "react-router-dom";
export default function Jumbotron() {
  return (
    <>
      {/* Jumbotron */}
      <div className="jumbotron p-5 mb-4 rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Grandi ritorni</h1>
          <p className="col-md-8 fs-4">
            Più che una vacanza è stata una sfacchinata. Erano più di 10 anni
            che non facevo trekking nel bosco dal momento che a partire dagli
            anni 20 la vita mi ha regalato qualche problemuccio alla schiena, ma
            il mio compagno non l'aveva mai fatto così l'ho portato
            all'avventura.
          </p>
          <Link to="/Sentieri">
            <button className="btn btn-avocado btn-lg" type="button">
              Vieni a sperderti
            </button>
          </Link>
        </div>
      </div>
      {/* end Jumbotron */}
    </>
  );
}
