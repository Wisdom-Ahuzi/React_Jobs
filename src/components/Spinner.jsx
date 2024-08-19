import React from 'react'
import { HashLoader } from 'react-spinners';

const override = {
    display: "block",
    margin: "100px auto"
};

const Spinner = ({ loading }) => {
    return (
        <HashLoader
            color="#4338ca"
            loading={loading}
            cssOverride={override}
            size={50}
        />
    )
}

export default Spinner