import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import { NavBar } from '../components';

export const RegistroPageIA = () => {
  const [department, setDepartment] = useState('');
  const [province, setProvince] = useState('');
  const [municipality, setMunicipality] = useState('');

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };

  const handleMunicipalityChange = (event) => {
    setMunicipality(event.target.value);
  };

  return (
    <div>
        <NavBar/>
      <FormControl fullWidth>
        <InputLabel id="department-label">Departamento</InputLabel>
        <Select
          labelId="department-label"
          id="department"
          value={department}
          label="Departamento"
          onChange={handleDepartmentChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="province-label">Provincia</InputLabel>
        <Select
          labelId="province-label"
          id="province"
          value={province}
          label="Provincia"
          onChange={handleProvinceChange}
          disabled={!department}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="municipality-label">Municipio</InputLabel>
        <Select
          labelId="municipality-label"
          id="municipality"
          value={municipality}
          label="Municipio"
          onChange={handleMunicipalityChange}
          disabled={!province}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="body1" mt={2}>
        Selected Department: {department}
      </Typography>
      <Typography variant="body1" mt={2}>
        Selected Province: {province}
      </Typography>
      <Typography variant="body1" mt={2}>
        Selected Municipality: {municipality}
      </Typography>
    </div>
  );
};
