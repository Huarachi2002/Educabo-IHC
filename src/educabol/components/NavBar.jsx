import { NavLink } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import { NavListDrawer } from "./NavListDrawer";
import { useState } from "react";
import { AppBar,Tab, Box, Drawer,Button, IconButton, Toolbar, Typography, Tabs } from "@mui/material";
import { MenuOpen } from "@mui/icons-material";


const navLinks = [
    {
        title: "INICIO",
        path: '/',
        value: 0
    },
    {
        title: "CONTACTANOS",
        path: '/',
        value: 1
    },
    {
        title: "PLATAFORMAS",
        path: '/',
        value: 2
    },
]

export const NavBar = () => {
    const [open, setopen] = useState(false)
    const [page, setPage] = useState(0)

    const handleChange = (e,value) => {
        setPage(value);    
    }
  return (
    <>
        <AppBar
            position="static"
            
        >
            <Toolbar
                sx={{height:90}}
            >
                <IconButton
                    color='#00000'
                    size="large"
                    onClick={()=>setopen(true)}
                    sx={{display:{sm:'none',xs:'block'}}}
                >
                    <MenuOpen/>
                </IconButton>
                <Box>
                    <Typography variant="h1" fontSize={50} sx={{padding:0.5, backgroundColor:'background.default', borderRadius:5}}>EDUCABOL</Typography>
                </Box>
                <Box sx={{display: {xs:'none', sm: 'block'}}} width='100%'>
                    <Typography 
                        component='div'
                        width='100%'
                        sx={{alignItems:'center', justifyItems:'center',justifyContent:'space-evenly',alignContent:'space-evenly',display:'flex'}}
                    >
                        <Tabs
                            value={page}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >
                        {
                            navLinks.map((item) => (                              
                                <Tab key={item.title} value={item.value} label={item.title} sx={{fontSize:18}}/>
                                
                            ))
                        }
                        </Tabs>
                    </Typography>
                </Box>
                
            </Toolbar>
        </AppBar>
        <Drawer 
            open={open} 
            anchor="left"
            onClose={()=> setopen(false)}    
        >
            <NavListDrawer navlist={navLinks}/>

        </Drawer>   
    </>
    // <div className="container-fluid bg-light position-relative shadow">
    //     <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
    //         <NavLink to="/" className="navbar-brand font-weight-bold text-secondary "style={{ fontSize: '50px' }}>
    //             <i className="flaticon-043-teddy-bear"></i>
    //             <span className="text-white" style={{ backgroundColor: '#17a2b8', borderRadius: '10px', padding: '5px' }}>EDUCABOL</span>
    //         </NavLink>
    //         <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
    //             <span className="navbar-toggler-icon"></span>
    //         </button>



    //         <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
    //             <div className="navbar-nav font-weight-bold mx-auto py-0">
    //                 <Link to="/" className="nav-item nav-link active mx-3">INICIO</Link>
    //                 <Link to="/" className="nav-item nav-link mx-5">PLATAFORMAS</Link>
    //                 <Link to="/" className="nav-item nav-link mx-5">CONTACTANOS</Link>

    //                 <div className="nav-item dropdown">
    //                     <div className="dropdown-menu rounded-0 m-0">
    //                         <NavLink to="/" className="dropdown-item">Blog Grid</NavLink>
    //                         <NavLink to="/" className="dropdown-item">Blog Detail</NavLink>
    //                     </div>
    //                 </div>
    //             </div>
    //             <form className="d-flex">
    //                 <input
    //                 type="search"
    //                 className="form-control me-2"
    //                 placeholder="Buscar"
    //                 aria-label="Buscar"
    //                 />
    //                 <button className="btn btn-outline-success" type="submit">
    //                     <SearchIcon/>
    //                 </button>
    //             </form>
    //             {/* <Link to="/" className="btn btn-primary px-4">Join Class</Link> */}
    //         </div>
    //     </nav>
    // </div>
  )
}
