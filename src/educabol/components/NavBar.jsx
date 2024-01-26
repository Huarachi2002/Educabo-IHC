import { Link, NavLink } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';

export const NavBar = () => {
  return (
    <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
            <NavLink to="/" className="navbar-brand font-weight-bold text-secondary "style={{ fontSize: '50px' }}>
                <i className="flaticon-043-teddy-bear"></i>
                <span className="text-white" style={{ backgroundColor: '#17a2b8', borderRadius: '10px', padding: '5px' }}>EDUCABOL</span>
            </NavLink>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>



            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav font-weight-bold mx-auto py-0">
                    <Link to="/" className="nav-item nav-link active mx-3">INICIO</Link>
                    <Link to="/" className="nav-item nav-link mx-5">PLATAFORMAS</Link>
                    <Link to="/" className="nav-item nav-link mx-5">CONTACTANOS</Link>

                    <div className="nav-item dropdown">
                        <div className="dropdown-menu rounded-0 m-0">
                            <NavLink to="/" className="dropdown-item">Blog Grid</NavLink>
                            <NavLink to="/" className="dropdown-item">Blog Detail</NavLink>
                        </div>
                    </div>
                </div>
                <form className="d-flex">
                    <input
                    type="search"
                    className="form-control me-2"
                    placeholder="Buscar"
                    aria-label="Buscar"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        <SearchIcon/>
                    </button>
                </form>
                {/* <Link to="/" className="btn btn-primary px-4">Join Class</Link> */}
            </div>
        </nav>
    </div>
  )
}
