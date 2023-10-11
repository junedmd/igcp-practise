
import React from "react";
import {useState,useEffect } from "react";
import "./TodoApp.css";


export default function TodoApp() {
    const [data,setData]=useState([]);
    const [name, setName] =useState(' ');
    const [surname, setSurname] =useState(" ");

    useEffect(()=>{
        const storeData =localStorage.getItem("mydata");
        if(storeData){
            setData(JSON.parse(storeData));
        }

    })
    

    const submitForm =(e)=>{
      e.preventDefault();
    const newData ={name ,surname};
    const updateData =[...data ,newData];
    localStorage.setItem("mydata",JSON.stringify(updateData));
    setData(updateData);
    console.log(name);
    console.log(surname);

    setName("");
    setSurname("")


   
    }
    return (
        <>
            <div className="todo-container">
                <h1 className="text-center text-light"> TodaApp </h1>
                <div className="email-box">

                <label className="label-name"> name</label>
                <input type="text" placeholder="name" className="t-input" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} /> <br />
                     <label className="label-name"> surname</label>
                <input type="text" placeholder="surname" className="t-input" value={surname}
                    onChange={(e) => {
                        setSurname(e.target.value)
                    }}
                /> <br />

                <button className="t-button" type="button" onClick={submitForm}> add name</button>
                </div>
                
                    <div>
                        <h1 className="text-danger"> contact in data</h1>
                        {
                            data.map((item)=>{
                            return(
                                <>
                                <h3 className="text-light"> name :{item.name}</h3>
                                <h3 className="text-light"> surname :{item.surname}</h3>
                                </>
                            )
                                
                            
                            })
                        }
                    </div>

            </div>


        </>
    )

}



// const newData ={name ,surname};
// const updateData=[...data ,newData];
// localStorage.setItem("myData",JSON.stringify(updateData));
// setData(updateData);
//    console.log(name)
//    console.log(surname)
//    setName("")
//    setSurname("")