import React, { useEffect, useState } from 'react'
import PropertyCard from './PropertyCard';

const Data = () => {

    const [properties, setProperties] = useState([])

    const propertiesRequest = async () => {
        const url = 'http://localhost:3000/properties'
        const response = await fetch(url);
        const responseJson = await response.json();
        setProperties(responseJson)
    }

    useEffect(() => {
        propertiesRequest();
    }, [])

    

    return (

        <div className="flex flex-wrap space-x-2 space-y-1 ">
            {properties.map((property, i) =><PropertyCard price={property.price} 
                state={property.state} address={property.address} image={property.image}
                sqft={property.sqft} beds={property.beds} county={property.county}
                neighborhood={property.neighborhood} type={property.property_type}
            />)}
        </div>












    )
}

export default Data
