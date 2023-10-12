import React from "react";
import {useState,useEffect } from "react";
import "./TodoApp.css";


export default function TodoApp() {
    const [data,setData]=useState([]);
    const [name, setName] =useState(' ');
    const [number, setNumber] =useState(" ");

    useEffect(()=>{
        const storeData =localStorage.getItem("mydata");
        if(storeData){
            setData(JSON.parse(storeData));
        }

    })
    

    const submitForm =(e)=>{
      e.preventDefault();
    const newData ={name ,number};
    const updateData =[...data ,newData];
    localStorage.setItem("mydata",JSON.stringify(updateData));
    setData(updateData);
    console.log(name);
    console.log(number);

    setName("");
    setNumber("")

    }
    return (
        <>

            <div className="big-container"> 
            <h1 className=" text-center text-light"> contact app </h1>


            <div className="todo-container">
        
                <div className="email-box">
              
                <label className="label-name"> name</label>
                <input type="text" placeholder="name" className="t-input" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} /> <br />
                     <label className="label-name"> number</label>
                <input type="text" placeholder="number" className="t-input" value={number}
                    onChange={(e) => {
                        setNumber(e.target.value)
                    }}
                /> <br />

                <button className="t-button" type="button" onClick={submitForm}> add contact</button>
                </div>
                
                    <div>
                        <h1 className="text-danger"> contact in data</h1>
                        {
                            data.map((item)=>{
                                const {name,number}= item;
                            return(
                                <>
                                <div className="con-box">
                                <h3 className="text-light"> name :{name}</h3>
                                <h3 className="text-light"> number:{number}</h3>
                                </div>
                                
                                </>
                            )
                                
                            
                            })
                        }
                    </div>

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