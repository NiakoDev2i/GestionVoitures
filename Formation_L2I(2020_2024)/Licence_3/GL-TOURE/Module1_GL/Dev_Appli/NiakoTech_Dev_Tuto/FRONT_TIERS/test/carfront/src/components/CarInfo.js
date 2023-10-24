import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './CarInfo.css'; // Importez le fichier CSS

function CarInfo({ carData }) {
    const data = {
        labels: ['Kilométrage', 'Puissance', 'Consommation'],
        datasets: [
            {
                data: [carData.kilometers, carData.power, carData.consumption],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    return (
        <div className="car-info-container">
            <h2>Statistiques de la voiture</h2>
            <Doughnut data={data} />
            <p className="car-description">Description de la voiture : {carData.description}</p>
        </div>
    );
}

export default CarInfo;
