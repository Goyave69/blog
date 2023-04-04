import React, {useState} from "react";

function Avatar({firstName, lastName, img}) {
    const [donuts, setDonuts] = useState(0)

    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <h4>{firstName + ' ' + lastName + '🍩 ' + donuts}</h4>
        <img src={img} alt=""/>
        <button onClick={() => setDonuts(donuts + 1)}>donut 🍩</button>
    </div>
}

export default Avatar;