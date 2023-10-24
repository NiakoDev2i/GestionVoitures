import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../constants';
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import AddCar from './AddCar';
import EditCar from './EditCar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

function Carlist() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = () => {
        fetch(SERVER_URL + "api/cars")
            .then(response => response.json())
            .then(data => setCars(data._embedded.cars))
            .catch(err => console.error(err));
    };

    const rows = cars.map((car) => ({
        id: car.id, // Utilisez l'identifiant comme clé
        brand: (
            <Link to={`/car/${car.id}`}>
                {car.brand}
            </Link>
        ),
        model: car.model,
        color: car.color,
        year: car.year,
        price: car.price,
    }));

    const columns = [
        { field: 'brand', headerName: 'Marque', width: 200 },
        { field: 'model', headerName: 'Modèle', width: 200 },
        { field: 'color', headerName: 'Couleur', width: 200 },
        { field: 'year', headerName: 'Année', width: 150 },
        { field: 'price', headerName: 'Prix', width: 150 },
        {
            field: "_links.car.href",
            headerName: "",
            sortable: false,
            filterable: false,
            renderCell: (row) => <EditCar data={row} updateCar={updateCar} />,
        },
        {
            field: "_links.self.href",
            headerName: "",
            sortable: false,
            filterable: false,
            renderCell: (row) => (
                <IconButton onClick={() => oneDelClick(row.id)}>
                    <DeleteIcon color="error" />
                </IconButton>
            ),
        },
    ];

    const [open, setOpen] = useState(false);

    const addCar = (car) => {
        fetch(SERVER_URL + "api/cars", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(car),
        })
            .then((response) => {
                if (response.ok) {
                    fetchCars();
                } else {
                    alert("Un problème est survenu lors de la création! Réessayez :(");
                }
            });
    };

    const updateCar = (car, link) => {
        fetch(link, {
            method: "PUT",
            headers: { "Content-Type": "application.json" },
            body: JSON.stringify(car),
        })
            .then((response) => {
                if (response.ok) {
                    fetchCars();
                } else {
                    alert("Un problème est survenu lors de la modification! Réessayez :(");
                }
            })
            .catch((err) => console.error(err));
    };

    const oneDelClick = (url) => {
        if (window.confirm("Etes-vous sûr de vouloir supprimer la voiture? :(")) {
            fetch(url, { method: "DELETE" })
                .then((response) => {
                    if (response.ok) {
                        fetchCars();
                        setOpen(true);
                    } else {
                        alert("Un problème est survenu lors de la suppression! Réessayez :(");
                    }
                })
                .catch((err) => console.error(err));
        }
    };

    return (
        <React.Fragment>
            <Stack mt={2} mb={2}>
                <AddCar addCar={addCar} />
            </Stack>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    disableRowSelectionOnClick={true}
                    getRowId={(row) => row.id}
                />
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={() => setOpen(false)}
                    message="Voiture supprimée"
                />
            </div>
        </React.Fragment>
    );
}

export default Carlist;
