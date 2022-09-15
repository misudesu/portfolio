import React,{useState} from 'react';
import { BiAlarm } from "react-icons/bi";
export default function Home(){
   const Home={ 
   pageone:[ {
        title:"Get an amazing Logo  for your startup in 60 seconds",
        paragraph:"A delightful new way to make logos for your internet startup is coming soon",
        image:'https://www.ejada.com/documents/35656/154460/core-values-beliefs.jpg/973d148e-5ea9-272c-23cb-3b81aa7bf6ba?t=1617542575172',
   }
]
}
    return(
        <>
        <div className=" container flex flex-wrap justify-center items-center mx-auto  mt-5 gap-4">
            {Home.pageone.map((item)=>(
                <> 
 <div className="w-30 h-30 rounded-full">
  <img class=" aspect-video ...  " src={item.image} />
 </div>
         <div className=""> 
<h1 className="text-2xl mx-8 text-blue-600 font-semibold lg:text-blue-600 lg:text-3xl font-semibold text-white  md:text-4xl ">{item.title}</h1>
<p className="mx-8 lg:text-lg  font-medium lg:text-slate-500">{item.paragraph}</p>
<div className=' grid grid-cols-2 gap-2 m-8'>
<input class=" placeholder:italic placeholder:text-slate-400 block bg-white w-50 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your email year..." type="email" />
<button class=" text-sm  text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
 
</div>
</div>
        </>    ))}
        </div>
           {/* ourService  */}
<div className="text-center mx-auto space-x-4  mt-8">
    <h1 className='text-5xl mb-5 text-blue-500'>What we provide <span className="text-red-500">?</span></h1>
<p className='text-sm text-slate-700'>Save time Save Money Do it your way</p>
<p className='text-sm text-slate-700'>The new way to make a logo for your website or app
coming soon</p>
</div>
        <div className=' container flex flex-wrap sm:w-full justify-center lg:justify-between items-center mx-auto px-8 mt-5 gap-5 text-center '>
<div>
<div className="flex w-full justify-center ">
<svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="2em"
      width="1.5em"
    >
      <path d="M8.5 5.5a.5.5 0 00-1 0v3.362l-1.429 2.38a.5.5 0 10.858.515l1.5-2.5A.5.5 0 008.5 9V5.5z" />
      <path d="M6.5 0a.5.5 0 000 1H7v1.07a7.001 7.001 0 00-3.273 12.474l-.602.602a.5.5 0 00.707.708l.746-.746A6.97 6.97 0 008 16a6.97 6.97 0 003.422-.892l.746.746a.5.5 0 00.707-.708l-.601-.602A7.001 7.001 0 009 2.07V1h.5a.5.5 0 000-1h-3zm1.038 3.018a6.093 6.093 0 01.924 0 6 6 0 11-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 014.387 1.86 2.5 2.5 0 000 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 013.527 3.527A2.5 2.5 0 0013.5 1z" />
    </svg>
</div>
    <h1 className='lg:text-xl sm:text-2xl  md:text-4xl text-blue-500'>Real logos.Real Fast</h1>
<p className="lg:text-sm  md:text-xl md:leading-loose text-gray-400">Get your logo yesterday with our<br/>
super-fast-logo maker made just<br/>
for startups and side projects</p>
</div>
<div>
<div class="flex w-full justify-center ">
<svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1.5em"
  
    >
      <path d="M1.5 0A1.5 1.5 0 000 1.5v7A1.5 1.5 0 001.5 10H6v1H1a1 1 0 00-1 1v3a1 1 0 001 1h14a1 1 0 001-1v-3a1 1 0 00-1-1h-5v-1h4.5A1.5 1.5 0 0016 8.5v-7A1.5 1.5 0 0014.5 0h-13zm0 1h13a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5zM12 12.5a.5.5 0 111 0 .5.5 0 01-1 0zm2 0a.5.5 0 111 0 .5.5 0 01-1 0zM1.5 12h5a.5.5 0 010 1h-5a.5.5 0 010-1zM1 14.25a.25.25 0 01.25-.25h5.5a.25.25 0 110 .5h-5.5a.25.25 0 01-.25-.25z" />
    </svg>
</div>
<h1 className='lg:text-xl sm:text-2xl md:text-4xl text-blue-500'>Do it yourself and save</h1>
<p className="lg:text-sm  md:text-xl md:leading-loose text-gray-400">Create an amazing logo yourself <br/>
and save loads with our logo<br/>
maker made just for you</p>
</div>
<div>
<div class="flex w-full justify-center ">
<svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1.5em"
   
    >
      <path d="M15.854.146a.5.5 0 01.11.54l-5.819 14.547a.75.75 0 01-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 01.124-1.33L15.314.037a.5.5 0 01.54.11zM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493z" />
    </svg>
</div>
<h1 className='lg:text-xl sm:text-2xl md:text-4xl text-blue-500'>Get website-ready logos</h1>
<p className="lg:text-sm  md:text-xl md:leading-loose text-gray-400">Instantly download PNG and SVG<br/>
files ready for use on your<br/>
startup or side projects website</p>
</div>
        </div>
        <div className="  m-8 flex flex-wrap   md:grid grid-cols-2 gap-5  mt-8 mx-8  lg:justify-center mx-auto mx-8 mt-5 gap-5 sm:w-full text-center justify-between  ">
       <div><h1 className='text-2xl lg:text-5xl text-blue-500 '>Launch Your website<br/>
faster with a new <br/>
logo from Logobly</h1>
<p className='text-sm text-red-300 lg:mt-5 text-lg text-gray-800'>Logobly the impressive new logo maker for internet<br/>
startup is coming soon</p>
<div className=' grid grid-cols-2 gap-2 m-8'>
<input class=" placeholder:italic placeholder:text-slate-400 block bg-white w-50 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your email year..." type="email" />
<button class=" text-sm  text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
 
</div>
</div>
<div className=''>
<img class="p-5xl aspect-video ... " src='https://th.bing.com/th/id/OIP.IiOhZbTbER7MVHcAxwwPKAHaE8?pid=ImgDet&rs=1' />
 
</div>
        </div>
        {/* ourProject  */}
<div className="text-center mx-auto space-x-4 ">
    <h1 className='text-5xl mb-5'>Our Projects</h1>
<p className='text-sm text-slate-700'>Save time Save Money Do it your way</p>
<p className='text-sm text-slate-700'>The new way to make a logo for your website or app
coming soon</p>
</div>
{/* list of service */}
<div className="container flex flex-wrap justify-between items-center mx-auto px-8 mt-5 gap-5">
<div className="text-center   md:grid grid-cols-4 gap-4 m-8 lg:grid grid-cols-4 gap-4 m-8">
    <div className="mb-4 font-semibold rounded-md border border-slate-200">
<img  className="max-h-72 w-auto" src="https://th.bing.com/th/id/R.ea6f6ebd6b5966927fbdda20bd6272e1?rik=I3AzJiGK5VhLHQ&pid=ImgRaw&r=0" />
<p className='text-sm text-slate-700'>Setting up an ideal photography studio is certainly not a basic errand. There are scarcely any significant elements,
</p>
    </div>
    <div className="mb-4 font-semibold rounded-md border border-slate-200">
    <img className="max-h-72 w-auto" src="https://th.bing.com/th/id/R.b52254b25da9b7e1f5879d34a72a5846?rik=hwZyRtAcxiJGHg&pid=ImgRaw&r=0" />
<p className='text-sm text-slate-700'>Create dozens of creative logo
design with ease using our logo
maker just for startups and side projects</p>
    </div>
    <div className="mb-4 font-semibold rounded-md border border-slate-200">
    <img className="max-h-72 w-auto" src="https://th.bing.com/th/id/OIP.ktNZIwVGrykqc2FRWngPCQHaHa?pid=ImgDet&rs=1" />
<p className='text-sm text-slate-700'>Our logo maker uses only high
quality fonts to produce
delightful logo designs for your
website in flash </p>
    </div>
    <div className=" mb-4 font-semibold rounded-md border border-slate-200 ">
      <img className="max-h-72 w-auto " src="https://th.bing.com/th/id/R.8909f9d53f6be7c18679675892fe067b?rik=kGjIh7xEkrx5Fg&pid=ImgRaw&r=0" alt="Man looking at item at a store"/>
    <p className='text-sm text-slate-700'>Our logo maker uses quality logo
marks and icons to create
beautiful logo designs for your website or app</p>
    </div>
</div>
</div>
     {/* contact  */}
     <div className=" text-center mx-auto space-x-4 ">
    <h1 className='text-5xl mb-5'>Contact Us</h1>
<p className='text-sm text-slate-700'>Can we help you?</p>

</div>
<div className='container bg-gray-50 flex flex-wrap justify-center mx-auto gap-4 w-4/5 m-4 '>
  <div className='grid grid-cols-1 place-content-center mb-4'>

  <div>
    <input class="mb-4 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your email year..." type="email" />
<p className='text-sm font-light mx-4'>Please, enter the email address where you wish to receive our answer. If you are a registered user of freepik, please include the email address you used when you registered if possible to help us locate your account as soon as possible.</p>
<div class="mt-1">
 <textarea id="about" name="about" rows="3" class="mt-4 mb-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="you@example.com"></textarea>
            <p className='font-light text-sm mx-4'>Please enter the details of your request and, if you have any questions regarding our Terms of Use, please include specific samples of the usage you wish to give our resouces. If you’re reporting a problem, make sure to include as much information as possible. Please include any screenshots or videos of issues since this will also help us resolve problems much sooner. Once your request is submitted, a member of our support staff will respond as soon as possible.</p>
            <div class=" px-4 py-3 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
          </div>
              </div>
</div>
  
  </div>

 </div>
 
        </>
    )
}