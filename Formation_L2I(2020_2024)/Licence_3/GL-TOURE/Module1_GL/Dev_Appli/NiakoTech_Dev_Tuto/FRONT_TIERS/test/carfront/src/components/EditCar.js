import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function EditCar(props) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: "",
        model: "",
        color: "",
        year: "",
        price: "",
    });

    const handleClickOpen = () => {
        setCar({
            brand: props.data.row.brand,
            model: props.data.row.model,
            color: props.data.row.color,
            year: props.data.row.year,
            price: props.data.row.price,
        });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        props.updateCar(car, props.data.id);
        handleClose();
    };

    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen} color="primary">
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Éditer la Voiture</DialogTitle>
                <DialogContent>
                    <Stack spacing={2}>
                        <TextField
                            label="Marque"
                            name="brand"
                            value={car.brand}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Modèle"
                            name="model"
                            value={car.model}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Couleur"
                            name="color"
                            value={car.color}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Année"
                            name="year"
                            value={car.year}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Prix"
                            name="price"
                            value={car.price}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Annuler</button>
                    <button onClick={handleSave}>Enregistrer</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditCar;
