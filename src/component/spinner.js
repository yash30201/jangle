import React from 'react'
import Loader from 'react-loader-spinner';

function Spinner({ isVisible = true }) {
    return (
        <div className="loader">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                visible={isVisible}
            />
        </div>
    );
}

export default Spinner;