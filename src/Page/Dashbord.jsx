
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import image from '../img/misu-1.jpg'
import secondimg from '../img/R (1).jpg'
import folder from '../img/pic_2.png'
import { MdFolderOpen } from "react-icons/md";

export default function Dashbord(){
    const data={
        dashbord:[
{name:"Home",Icon:""},
{name:"My Files",Icon:""},
{name:"Recent Files",Icon:""},
{name:"Shard File",Icon:""},
{name:"File request",Icon:""},
{name:"Trash",Icon:""},
        ], 
        table:[
{name:"Travel Landing Page",woners:"5 members",lastModified:"mar 8,2020",icon:""},
{name:"Ture Photos",woners:"12 members",lastModified:"mar 8,2020",icon:""},       
{name:"Dashboard Structure",woners:"10 members",lastModified:"mar 9,2020",icon:""},
{name:"Character Illustration",woners:"3 members",lastModified:"mar 10,2020",icon:""},
],      
    }
    return(
        <div className="flex-auto">
        <div className="flex items-centerd justify-center py-6 px-8 hidden">
        <h1>MISAEL</h1>
        </div>
       <div className="flex columens-3 ">
        <div className="bg-blue-300 w-56 h-screen ">
        <h1 className="mx-2 py-5 px-5 text-lg">DashBord</h1>
       <div className="mx-8">
     
            <ul role="list" className="mt-6 space-y-6">
                {data.dashbord.map((dashbord,index)=>(
            <Link to="/" > <li key={index} className="text-sm mb-5" >{dashbord.name}</li> </Link> 
                ))}
  
            </ul>
            <button className="bg-indigo-400 text-white rounded-md pl-3 pr-3">+ Create New</button>
       </div>
        </div>
        <div className="flex-auto bg-gray-900  text-white py-6 px-8 ">
            <div className="flex grow  bg-gray-900 rounded-md">
               <p className='bg-indigo-900 mb-3 rounded-l-md pl-2 pr-1'> search</p>
                <input type="text" placeholder="search..." className="w-full mb-3 rounded-r-md "/></div>
        <h1 className="   font-medium mb-5">Recently Used</h1>
        <div className="grid grid-cols-3 gap-3 text-2xl">
          {/* start card 1 */}
            <div className="bg-indigo-100 text-black  rounded-md p-1  ">
              
                <div className="flex  item-center justify-center mb-2 mt-3 mr-1">
                <MdFolderOpen  className=" w-10 h-10"/>
            
<div className="flex ml-8"> 
               <img src={image} className="rounded-full w-10 h-10"/>
                <img src={secondimg} className="rounded-full w-10 h-10 absolute mx-5"/>
               </div>
               
                </div>
                <h1 className="   font-medium lg:text-slate-700">App Project</h1>
                <p className=" text-sm text-slate-500  mb-1">Created 20.02.2020</p>
            </div>
            {/* end of card 1 */}
             {/* start card 2 */}
             <div className="bg-indigo-100 text-black  rounded-md p-1  ">
              
              <div className="flex  item-center justify-center mb-2 mt-3  mr-1">
              <MdFolderOpen  className=" w-10 h-10"/>
            
<div className="flex ml-8"> 
               <img src={image} className="rounded-full w-10 h-10"/>
                <img src={secondimg} className="rounded-full w-10 h-10 absolute mx-5"/>
               </div>
             
              </div>
              <h1 className="   font-medium lg:text-slate-700">Project:fitbit</h1>
              <p className=" text-sm text-slate-500  mb-1">Created 28.02.2020</p>
          </div>
          {/* end of card 2 */}
           {/* start card 3 */}
           <div className="bg-indigo-100 text-black  rounded-md p-1  ">
              
              <div className="flex  item-center justify-center mb-2 mt-3  mr-1">
              <MdFolderOpen  className=" w-10 h-10"/>
            
<div className="flex ml-8"> 
             <img src={image} className="rounded-full w-8 h-8"/>
              <img src={secondimg} className="rounded-full w-8 h-8 absolute mx-3"/>
              <div  className="bg-indigo-200 rounded-full w-8 h-8 absolute mx-6 flex item-center justify-center font-bold mx-auto"> +3</div>
            
             </div>
             
              </div>
              <h1 className="   font-medium lg:text-slate-700">Clint Documents</h1>
              <p className=" text-sm text-slate-500  mb-1">Created 4.03.2020</p>
          </div>
          {/* end of card 3 */}
        </div>
        {/* recent file section */}
        <h1 className="   font-medium mb-5 mt-8">Recently Files</h1>
        <div className="container ">
<table className="w-full">
<thead>
    <tr className="text-sm font-medium text-gray-500 border-gray-200">
<td className="pl-10"> 
<span>Name </span>
</td>

<td className="pl-10"> 
<span>Woners </span>
</td>
<td className="pl-10"> 
<span>Last Modified </span>
</td>
    </tr>
    </thead>
    <tbody >
        {data.table.map((table,index)=>(
<>

        <tr className=" text-sm pl-10 " key={index}>
<td className="p-1 bg-indigo-100 text-black   "><p>{table.name}</p> </td>
<td className="pl-10 bg-indigo-400 text-black  ">{table.woners}</td>
<td className="pl-10 bg-indigo-100 text-black  rounded-r-md">{table.lastModified}</td>
      
        </tr>
        <hr />
          </>
         ))}
    </tbody>
</table>
        </div>
        {/* ende of recent last section */}
        <h1 className="   font-medium mb-5 mt-8">Share with me</h1>
        <div className="grid grid-cols-3 gap-3">
          {/* start card 1 */}
            <div className="bg-indigo-200 text-black  rounded-md p-1  ">
              
                <div className="flex  item-center justify-center  mt-1 ml-5 mr-5">
                <img src={folder} className=" w-6 h-6"/>
            
<div className="flex ml-8"> 
               <img src={image} className="rounded-full w-5 h-5"/>
                <img src={secondimg} className="rounded-full w-5 h-5 absolute mx-2.5"/>
               </div>
               
                </div>
                <h1 className=" text-sm  font-medium lg:text-slate-700">Landing Page</h1>
                <p className=" text-sm text-slate-500  ">12 File</p>
            </div>
            {/* end of card 1 */}
             {/* start card 2 */}
             <div className="bg-indigo-200 text-black  rounded-md p-1  ">
              
              <div className="flex  item-center justify-center  mt-1 ml-5 mr-10">
              <img src={folder} className=" w-6 h-6"/>
          
<div className="flex ml-8"> 
             <img src={image} className="rounded-full w-5 h-5"/>
              <img src={secondimg} className="rounded-full w-5 h-5 absolute mx-2.5"/>
             </div>
             
              </div>
              <h1 className=" text-sm  font-medium lg:text-slate-700">Illustration Pack</h1>
              <p className=" text-sm text-slate-500  ">24 Files</p>
          </div>
          {/* end of card 2 */}
           {/* start card 3 */}
           <div className="bg-indigo-200 text-black  rounded-md  p-1 ">
              
              <div className="flex  item-center justify-center  mt-1 ml-5 mr-5">
              <img src={folder} className=" w-6 h-6"/>
          
<div className="flex ml-8"> 
             <img src={image} className="rounded-full w-5 h-5"/>
              <img src={secondimg} className="rounded-full w-5 h-5 absolute mx-2.5"/>
             </div>
             
              </div>
              <h1 className="  text-sm font-medium lg:text-slate-700">CV Design</h1>
              <p className=" text-sm text-slate-500  ">6 Files</p>
          </div>
          {/* end of card 3 */}
        </div>
       {/* end */}
        </div>
        <div className='w-48 bg-blue-300 m-right'>

            <h1 className=" flex item-center jestify-center text-2xl bg-blue-300 py-5 pt-5">Storage</h1>
<div className="flex item-center justify-center">
  <div className="  rounded-full w-32 h-32 bg-indigo-100  ">
<h1 className="text-3xl mt-8 flex items-center justify-center font-medium ">85%</h1>
<p className='text-sm text-slate-700 ml-10'>Used</p>
  </div>
  
</div>
<p className='flex justify-center text-sm text-slate-700 mt-3'>420.2 GB of 500 GB used</p>
 <div className="grid grid-cols-1">
    <table>
    <tbody className="">
        <tr className="text-sm pl-10">
<td>
    <div className="flex items-center justify-center gap-2">
    <img src={image} className="w-5 h-5"/>
    <div>
        <h1 className="text-sm">Docoments</h1>
        <p className="text-sm">720 file</p>
    </div>
    <div className=" bg-indigo-100 rounded-md pl-2 pr-2"><span className="text-sm font-medium">200 GB</span></div>
   </div>
   {/*  */}
   </td>

    </tr>
    <tr>
    <td>
   <div className="flex items-center justify-center gap-2">
    <img src={image} className="w-5 h-5"/>
    <div>
        <h1 className="text-sm">Videos</h1>
        <p className="text-sm">124 file</p>
    </div>
    <div className=" bg-indigo-100 rounded-md pl-2 pr-2"><span className="text-sm font-medium">125 GB</span></div>
   </div>
   {/*  */}
   </td>
    </tr>
    <tr>
    <td>
   <div className="flex items-center justify-center gap-2">
    <img src={image} className="w-5 h-5"/>
    <div>
        <h1 className="text-sm">Images</h1>
        <p className="text-sm">1200 file</p>
    </div>
    <div className=" bg-indigo-100 rounded-md pl-2 pr-2"><span className="text-sm font-medium">75 GB</span></div>
   </div>
   {/*  */}
   </td>
    </tr>
        <tr className="pl-10 ">
        <td>
   <div className="flex items-center justify-center gap-2 ">
    <img src={image} className="w-5 h-5"/>
    <div>
        <h1 className="text-sm">Other</h1>
        <p className="text-sm">30 file</p>
    </div>
    <div className=" bg-indigo-100 rounded-md pl-2 pr-2"><span className="text-sm font-medium">50 GB</span></div>
   </div>
   </td>
   </tr>
    </tbody>

    </table>
 
 </div>
        </div>
       </div>
        </div>
    )
}