import { NavBar } from "../components"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Container, Grid, InputLabel, MenuItem, Select, Typography,Button } from "@mui/material";
import { useForm } from "react-hook-form";

export const RegistroPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
            defaultValues: {
                departamento: "",
                municipio: "",
                provincia: "",
            }
        }
    );
    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })
  return (
    <>
        <NavBar/>
        <Container maxWidth='false' sx={{backgroundColor: "#17a2b8" }} >
            <Grid
             container direction='row'alignItems='center' justifyContent='space-between'
            >
                <Grid
                    item xs sm md
                >
                    <Button color="colorButtonBlack">
                        <ArrowBackIcon fontSize="large"/>
                    </Button>
                </Grid>
                <Grid
                    item xs={12} zeroMinWidth sm md
                >
                    <Typography noWrap variant="h1" textAlign='center' fontFamily='Handlee' color='white' fontSize='5rem'>Seleccione su Ubicacion</Typography>
                </Grid>
                <Grid
                    item xs sm md
                >
                    <Button color="colorButtonBlack" disabled="true">
                        <ArrowForwardIcon fontSize="large" onClick={onSubmit}/>
                    </Button>
                </Grid>
                    


                    
            </Grid>
            <Grid
                container   
            >

            </Grid>
        </Container>

        {/* <div className="container-fluid bg-primary px-0 px-md-1 ">
            <div className="row align-items-center px-3">
                <div className="d-flex justify-content-center align-items-center text-center">
                    <ArrowBackIcon fontSize="large"/>
                    <h1 className="col-md-10  display-3 font-weight-bold text-white">Seleccione su Ubicacion</h1>
                    <ArrowForwardIcon fontSize="large" onClick={onSubmit}/>
                </div>
            </div>
            <div className="row align-items-center px-3">
                <div className="d-flex justify-content-center align-items-center text-center align-items-center ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputLabel id="demo-simple-select-label">Departamento</InputLabel>
                        <Select
                            className="col-md-12"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Departamento"
                            value={register.departamento}
                            onChange={onSubmit}
                            {...register("departamento")}
                        >
                            <MenuItem value="SCZ">Santa Cruz</MenuItem>
                            <MenuItem value="LPZ">La Paz</MenuItem>
                            <MenuItem value="BNI">Beni</MenuItem>
                        </Select>
                        <InputLabel id="demo-simple-select-label">Provincia</InputLabel>
                        <Select
                            className="col-md-12"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Provincia"
                            value={register.provincia}
                            onChange={onSubmit}
                            {...register("provincia")}
                        >
                            <MenuItem value="Warnes">Warnes</MenuItem>
                            <MenuItem value="Vallegrande">Vallegrande</MenuItem>
                            <MenuItem value="Sucre">Sucre</MenuItem>
                        </Select>
                        <InputLabel id="demo-simple-select-label">Municipio</InputLabel>
                        <Select
                            className="col-md-12"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Municipio"
                            value={register.municipio}
                            onChange={onSubmit}
                            {...register("municipio")}
                        >
                            <MenuItem value="Warnes">Warnes</MenuItem>
                            <MenuItem value="Okinawa I">Okinawa I</MenuItem>
                        </Select>
                    </form>
                </div>
            </div>
            
        </div> */}
    </>
  )
}
