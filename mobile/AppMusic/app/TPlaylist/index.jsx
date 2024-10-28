import React, { useState } from 'react';

const BarraDePesquisa = () => {
    const [termo, setTermo] = useState('');

    const handleInputChange = (event) => {
        setTermo(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Buscando por:', termo);
    };

    return (
        <form onSubmit={handleSearch} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <input
                type="text"
                value={termo}
                onChange={handleInputChange}
                placeholder="Digite sua pesquisa..."
                style={{
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    marginRight: '10px',
                    flex: '1',
                }}
            />
            <button type="submit" style={{
                padding: '10px 15px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: '#007BFF',
                color: 'white',
                cursor: 'pointer',
            }}>
                Pesquisar
            </button>
        </form>
    );
};

export default BarraDePesquisa;
