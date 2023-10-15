import React from "react";
import "./Todo.css";
import { useState ,useEffect} from "react";
import Card from "../../components/Card/Card";

export default function Todo(){
       
       
    const [data,setData]=useState([
        {
            name:"mobile repair",
            description:" pimpri jaake reapair karo",
            priority:"high"
        },
        {
            name:"mobile repair",
            description:" pimpri jaake reapair karo",
            priority:"high"
        },
      

    ])
    const [name,setName]=useState(" ");
    const [description,setDescription] =useState(" ");
    const [priority,setPriority]=useState(" ");
    const[task ,setTask]=useState(true)

    useEffect(()=>{
        const storageData =localStorage.getItem("my task");
      
        const dataStore =JSON.parse(storageData);
     
        setData(dataStore)
      
    })

    const SaveTo=(item)=>{
        localStorage.setItem("my task",JSON.stringify(item))
    }

    
    const addTask = ()=>{
            const newData ={
                name:name,description:description ,priority:priority
            }
            const updateData =([...data ,newData]);
            // localStorage.setItem("my task",JSON.stringify(updateData))
            setData(updateData);
            SaveTo(updateData)
            InputEmpty();
    }

    const deleteTask= (name)=>{
            let indexa;
            data.forEach((item,index)=>{
                if(item.name === name){
                    indexa=index;
                    console.log(indexa)
                }
            })

            const newData = data;
            newData.splice(indexa ,1);
            // localStorage.setItem("my task",JSON.stringify(newData));
            setData(newData);
            SaveTo(newData)
    }
    const updateInput =(name)=>{
            let updateItem ;
            data.forEach((item ,index)=>{
                if(item.name === name){
                    updateItem=item;
                }
            })
           
           
            setName(updateItem.name);
            setDescription(updateItem.description);
            setPriority(updateItem.priority)
            setTask(false)
           
           
    }

    const SaveUpdateTask=()=>{
        let newIndex;
        data.forEach((item ,index)=>{
            if(item.name===name){
                newIndex=index;
            }
        })

        const tempData =[...data] ;
        tempData[newIndex]={
            name:name,description:description,priority:priority
        };
        // localStorage.setItem("my task",JSON.stringify(tempData));
        setData(tempData);
        setTask(true)
        SaveTo(tempData)
        InputEmpty();
    }
    const InputEmpty =()=>{
        setName("");
        setDescription("")
        setPriority("")
    }

    
    return(
        <>
            <div className="main-container">
                    <h1 className="text-center "> Todo app</h1>

                    <div className="app-conatiner">
                        <div className="input-cnatiner"> 
                            <input type="text"   value={name} onChange={(e)=>{
                                setName(e.target.value)
                            }} 
                             placeholder='name'
                             className="name-input"
                             /><br/>
                            <input type="text"  value={description} onChange={(e)=>{
                                setDescription(e.target.value)
                            }} 
                            className="name-input"  
                            placeholder='description'
                            /><br/>

                          <input type="text"    value={priority} onChange={(e)=>{
                                setPriority(e.target.value)
                            }} 
                            className="name-input"  
                            placeholder='priority'
                            /><br/>

                           
                            {
                               task?   ( <button className="btn-task" type="button" onClick={addTask}> add task</button>):
                               ( <button className="btn-task" type="button" onClick={SaveUpdateTask}> update task</button>) 
                            }
                          
                        </div>
                        
                        <div className="task-container">
                                {
                                 data.map( (detail)=>{

                                    const {name,description,priority }=detail;
                                        return(
                                           <Card name={name} 
                                           description={description}
                                            deleteTask={deleteTask}
                                            priority={priority}
                                            updateInput={updateInput} 
                                            SaveUpdateTask={SaveUpdateTask}/> 
                                        )
                                        

                                 })
                                }
                        </div>

                    </div>
            </div>







        </>



    )
}





// useEffect(()=>{

//     const storage =localStorage.getItem("my task")
//     if(storage){
//         const newData =JSON.parse(storage);
//         setData(newData)
//     }
        
// })


// const addTask =()=>{
 
//     const newdata ={
//      name,description,priority
//     };
//     console.log(newdata)
//   const updateData =[...data ,newdata];
//   localStorage.setItem("my task", JSON.stringify(updateData))
//   console.log(updateData)
//   setData(updateData)
 

//   setName( " ")
//   setDescription(" ")
//   setPriority( " ")
// }

// const deleteTask =(name)=>{
//         let indexa;
//         data.forEach((item,index)=>{
//             if(item.name===name){
//                 indexa=index;
//                 console.log(indexa)
//             }
//          const newUpdata= [...data];
//          newUpdata.splice(indexa,1);
//         localStorage.setItem("my task",JSON.stringify(newUpdata))

//          setData(newUpdata)
            
//         })
// }

// const updateTask= (name)=>{
//         let newData ;
//         data.forEach((item)=>{
//             if(item.name ===name){
//                 newData=item;
//             }
//         })

//         setName(newData.name);
//         setDescription(newData.description);
//         setPriority(newData.priority);

//         console.log(newData);
// }

// const SaveUpdateTask = ()=>{
//         let changePosition ;
   
//         data.map((item ,index)=>{
//             if(item.name === name){
//                 changePosition=index;
//             }
//         })
//             let tempArray =data;
//         tempArray[changePosition]={
//             name:name,
//             description:description,
//             priority:priority

//         }
//         setData([...tempArray])
//         localStorage.setItem("my task", JSON.stringify(tempArray))
//         setDescription("");
//         setName("")
//         setPriority("")

// }
