import { useState } from "react";

function Input(){
    const style = {
        'display': 'flex',
        'flex-direction': 'column'
    }

    const [data, setData] = useState({
        name: 'Ilona',
        lastName: 'Kedracka',
        email: 'ilona.kedracka@gmail.com'
    });


    return (
        <div style={style}>
            <div><input value={data.name} 
            onChange={(e) => setData(
                {
                    ...data,
                    name: e.target.value
                }
            ) }></input>
            </div>
            <div><input value={data.lastName}
            onChange={(e) => setData(
                {
                    ...data,
                    lastName: e.target.value
                }
            )}></input></div>
            <div><input value={data.email} 
            onChange={(e)=> setData(
                {
                    ...data,
                    email: e.target.value
                }
            )}></input></div>
            <div><button onClick={() => setData({
                name:'First',
                lastName: 'Last',
                email: 'e.mail@email.com'
            })}>Hit me baby one more time!</button></div>
            <p>{data.name}</p>
            <p>{data.lastName}</p>
            <p>{data.email}</p>
        </div>
    )
}

export default Input;