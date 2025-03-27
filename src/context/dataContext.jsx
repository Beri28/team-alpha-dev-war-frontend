// import { createContext, useEffect, useState } from "react";

// export const DataContext=createContext()

// const DataContextProvider=async ({children})=>{
//     let localCart=localStorage.getItem('YahustleJobs')
//     localCart=JSON.parse(localCart)
//     if(!localCart || localCart.length<1) localCart=[]
//     const [jobs,setJobs]=useState(localCart)
//     const addJob=(job)=>{
//         let itemIds=jobs.map(({id})=>{return id})
//         if(itemIds.includes(job.id)){
//             console.log("Already exist in cart")
//             return
//         }
//         localStorage.setItem('YahustleJobs',JSON.stringify([...jobs,job]))
//         setJobs([...jobs,job])
//     }
//     const deleteJob=(job)=>{
//         setJobs([...jobs.filter((jobT)=>jobT.id!==job.id)])
//         localStorage.setItem('YahustleJobs',JSON.stringify(jobs))
//         console.log(jobs)
//     }
//     useEffect(async()=>{
        
        
//     },[jobs])
//     return (
//         <DataContext.Provider value={{jobs,addJob,deleteJob}}>
//             {children}
//         </DataContext.Provider> 
//     )
// }
// export default DataContextProvider