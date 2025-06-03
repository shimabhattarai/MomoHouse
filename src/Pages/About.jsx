// import React from 'react'
// import greenCircle from '../assets/Home/greenCircle.png'
// import cabbagemomo from '../assets/Home/cabbagemomo.png'
// import ladyChef from '../assets/Home/ladyChef.png'
// import friedMomo from '../assets/Home/friedMomo.png'
// import lady from '../assets/Home/lady.png'
// import BlurBg from '../assets/Home/BlurBg.png'
// import shadow from '../assets/Home/shadow.png'
// import shadow0 from '../assets/Home/shadow0.png'
// import shadow1 from  '../assets/Home/shadow1.png'
// import Dots from '../assets/Home/Dots.png'


// import rectangleImage from '../assets/Home/rectangleImage.png'
// import LOVE from '../assets/Home/LOVE.png'

// import { MdPlayCircleFilled } from 'react-icons/md'
// import { ImQuotesLeft } from "react-icons/im";

// // import MomoExplanation from '../Components/MomoExplanation.png'
// import Footer from '../Pages/Footer.jsx'
// import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'


// function About() {

//   let explanations = [{
//     header: "Our momos are",
//     span: " made with love",
//     bigImg: ladyChef,
//     smallImg: greenCircle,
//     imgRight: true,
//   },
//   {
//     header: "Taste the difference with ",
//     span: "our handcrafted momos",
//     bigImg: rectangleImage,
//     smallImg: friedMomo,
//     imgRight: false,

//   },
//   {
//     header: "Our momos are the perfect ",
//     span: "blend of tradition and innovation",
//     bigImg: LOVE,
//     smallImg: cabbagemomo,
//     imgRight: true,

//   },

//   ]
//   return (
//     <div>

//       {/* Top Div */}
//       <div className='flex justify-evenly items-center px-30 '>
//         <div className=' w-126  flex flex-col  justify-center gap-y-14 ml-20'>
//           <div className='text-[#0C6967] font-Allura text-5xl '>
//             About us
//           </div>
//           <div className=' w-86 space-y-3'>
//             <h1 className='capitalize text-[#6B788E]'>WE PRIDE OURSELF ON</h1>
//             <p className='text-2xl font-semibold'><span className='text-[#D95103]'>Our authentic momo recipes</span> passed down through generations</p>
//           </div>
//         </div>


//         <div className=' w-156 h-166'>

//           <img src={Dots} alt="" width={'220px'} className='absolute mt-64 ml-18' />
//           <img src={Dots} alt="" width={'220px'} className='absolute mt-108 ml-88' />
//           <img src={greenCircle} alt="" width={'360px'} className=' absolute  mt-64 ml-36 ' />
//           <img src={ladyChef} width={'360px'} className='absolute mt-29.5 ml-36 ' />
//         </div>
//       </div>

//       {/* bts div */}
//       <div className=' bg-[url(./src/assets/Home/MadeWithLove.png)] h-[800px]  bg-no-repeat mt-20  bg-cover'>
//         <div className=' bg-[url(./src/assets/Home/shadow0.png)] h-[800px] bg-cover bg-no-repeat p-26'>
//           <div className=' w-176 space-y-12 ml-76 mt-100'>
//             <div className='text-white'>
//               <h1 className='text-4xl font-semibold'>Process behind the making</h1>
//               <p className='text-2xl font-light'>See how we make momos that you like from only the best ingredients</p>
//             </div>
//             <button className='bg-[#0C6967] rounded-3xl text-white px-5 py-2 flex justify-center items-center gap-3 hover:bg-[#0c6968e0]'>
//               <div> <MdPlayCircleFilled size={'25px'} /> </div>
//               <div className='text-center'>Watch The Video</div>
//             </button>

//           </div>
//         </div>
//       </div>

//       {/* Three momo explanation */}
//       <div className=' flex flex-col gap-y-20 items-center justify-center    w-[1100px] p-20 m-auto'>

//         {/* Made With Love */}
//         <MomoExplanation isrightside={explanations[0].imgRight}
//           bigimg={explanations[0].LOVE}
//           smallimg={explanations[0].cabbagemomo}
//           header={explanations[0].header}
//           headerSpan={explanations[0].span} />


//         <MomoExplanation isrightside={explanations[1].imgRight}
//           bigimg={explanations[1].rectangleImage}
//           smallimg={explanations[1].friedMomo}
//           header={explanations[1].header}
//           headerSpan={explanations[1].span} />


//         <MomoExplanation isrightside={explanations[2].imgRight}
//           bigimg={explanations[2].loveWithMomo}
//           smallimg={explanations[2].SteamMomo}
//           header={explanations[2].header}
//           headerSpan={explanations[2].span} />


//       </div>

//       {/* CEO Quote */}

//       <div className=' flex'>

//         <div className='  w-[1305px] bg-[url(./src\assets\Home\Bar.png)] bg-cover bg-no-repeat'>
//           <div className='backdrop-blur backdrop-brightness-50 w-[1305px] h-[627px] p-20'>
//             <div className='w-108 flex flex-col gap-y-16 m-auto text-white'>
//               <ImQuotesLeft size={'60px'} color='white' />

//               <p className='text-xl font-light'>
//                 Momo is not just about sustenance, it's about bringing people together and creating memories. At our restaurant,
//                 we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo,
//                 great company, and unforgettable experiences
//               </p>
//               <div>
//                 <h1 className='text-3xl font-semibold'>
//                   Marcus Schleifer
//                 </h1>
//                 <h2 className='font-semibold text-xl'>
//                   CEO
//                 </h2>

//                 <div className='ml-76 flex gap-2'>
//                   <button className='border border-gray-200 rounded-full w-8 h-8 flex justify-center items-center'><FaArrowLeftLong /></button>
//                   <button className='border border-gray-200 rounded-full w-8 h-8 flex justify-center items-center'><FaArrowRightLong /></button>

//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>

//         <div>
//           <img src={lady} alt="" width={'600px'} />
//         </div>
//       </div>

//       {/* Meet the team */}

//       <div className=' flex flex-col gap-12 items-center mt-20 '>

//         {/* Header */}
//         <div className='flex flex-col items-center mt-10 gap-4'>
//           <h1 className='text-3xl font-bold'>Meet The <span className='text-[#D95103]'>Team</span></h1>
//           <p className='text-[#0C6967] font-bold'>Our talented team members who delivers only the best results</p>
//         </div>


//         {/* Member Photo */}
//         <div className='flex gap-5'>

//           {/* Head Chef */}
//           <div className={'border w-58 h-86 bg-[url(./src/assets/Home/HeadChef.png)] bg-cover flex items-end'}>
//             <div className='border h-86 w-58 bg-[url(./src/assets/Home/shadow.png)] flex items-end'>
//               <h1 className='text-white font-semibold text-2xl' >Head Chef</h1>
//             </div>
//           </div>
//           {/* Assistant chef */}
//           <div className={'border w-58 h-86 bg-[url(./src/assets/Home/Bar.png)] bg-cover flex items-end'}>
//             <div className='border h-86 w-58 bg-[url(./src/assets/home/shadow0.png)] flex items-end'>
//               <h1 className='text-white font-semibold text-2xl' >Assistant Chef</h1>
//             </div>
//           </div>

//           {/* sue chef */}
//           <div className={'border w-58 h-86 bg-[url(./src/assets/Home/kitchenFire.png)] bg-cover flex items-end'}>
//             <div className='border h-86 w-58 bg-[url(./src/assets/Home/shadow1.png)] flex items-end'>
//               <h1 className='text-white font-semibold text-2xl' >Assistant Chef</h1>
//             </div>
//           </div>

//         </div>

//         {/* 0/5 and arrow */}
//         <div className=' w-184 flex justify-between'>
//           <div className='flex items-center gap-1'>
//             <h1 className='text-xl font-semibold  '>01 </h1>
//             <span className='text-[#C2C7D0]'> / 05</span>
//           </div>

//           <div className='flex gap-2'>
//             <button className='border border-gray-200 rounded-full w-7 h-7 flex justify-center items-center'><FaArrowLeftLong /></button>
//             <button className='border border-gray-200 rounded-full w-7 h-7 flex justify-center items-center'><FaArrowRightLong /></button>

//           </div>
//         </div>


//       </div>
//       {/* meet the team end */}


//         <Footer/>

//     </div>
//   )
// }

// export default About 
 
import React from 'react'

function About() {
  return (
    <div>About</div>
  )
}

export default About