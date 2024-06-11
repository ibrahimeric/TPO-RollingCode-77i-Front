// OtroComponente.jsx
import React from 'react';
import FormTurnos from './FormTurnos';

function OtroComponente() {
    const userId = '...'; // Aquí obtén el userId de alguna manera
    return (
        <div>
            <FormTurnos userId={userId} />
        </div>
    );
}

export default OtroComponente;
