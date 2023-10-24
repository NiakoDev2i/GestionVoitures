import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function AddCar(props) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: "",
        model: "",
        color: "",
        year: "",
        price: "",
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        props.addCar(car);
        handleClose();
    };

    const handleChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen} color="primary">
                <AddIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Ajouter une Voiture</DialogTitle>
                <DialogContent>
                    <Stack spacing={2}>
                        <TextField
                            autoFocus
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

export default AddCar;
