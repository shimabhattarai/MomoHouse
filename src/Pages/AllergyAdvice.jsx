
import React from 'react'
import circle from '../assets/Allergy/circle.png'
import Chef from '../assets/Allergy/Chef.png'
import Dots  from '../assets/Allergy/Dots.png'
import Dots1 from '../assets/Allergy/Dots1.png'
import Dots2 from '../assets/Allergy/Dots2.png'
import Dots3 from '../assets/Allergy/Dots3.png'
import BrushLeft from '../assets/Allergy/BrushLeft.png'
import BrushRight from '../assets/Allergy/BrushRight.png'

import Vector from '../assets/Allergy/Vector.png'
import Vector1 from '../assets/Allergy/Vector1.png'
import Spices from '../assets/Allergy/Spices.png'
import QR from '../assets/Allergy/QR.png'
import { IoIosPhonePortrait } from "react-icons/io";
// import Footer from '../Components/Footer'





function AllergyAdvice() {
  return (
    <div>
      {/* Top Div */}
      <div className=' flex justify-between items-center px-88 '>
        <div className='  w-126  flex flex-col  justify-center gap-y-14 ml-35'>
          <div className='text-[#0C6967] font-Allura text-5xl '>
            Allergy Advices
          </div>
          <div className='   w-110 space-y-3'>
            <h1 className='capitalize text-[#6B788E] text-2xl'>AT OUR RESTAURANT</h1>
            <p className='text-2xl font-semibold'> We use only the freshest and highest quality ingredients in all our dishes,<br />
              <span className='text-[#D95103]'>and offer transparency in our ingredient labeling.</span></p>
          </div>
        </div>


        <div className=' w-156 h-166'>

          <img src={Dots} alt="" width={'220px'} className='absolute mt-64 ml-18' />
          <img src={Dots1} alt="" width={'220px'} className='absolute mt-108 ml-88' />
          <img src={circle} alt="" width={'339px'} className=' absolute  mt-64 ml-36 ' />
          <img src={Chef} width={'360px'} className='absolute mt-41.5 ml-30 ' />
        </div>
      </div>
      {/* Top div ends */}

      {/* Ingredients useed start */}
      <div className=' mt-20  flex flex-col items-center'>
        {/* Header Sstarts */}
        <div className='flex items-center'>
          <img src={BrushLeft} width={'150px'} />
          <h1 className='text-2xl font-bold'><span className='text-[#D95103]'>Ingredient's</span> Used</h1>
          <img src={BrushRight} width={'150px'} />
        </div>
        {/* Header Ends */}



        {/* Circle Img starts */}
        <div className=' mt-20 mr-68 '>
          <img src={Vector} width={'300px'} />
        </div>
        {/* Circle Img Ends */}


        {/* spices bg */}
        <div>
          <img src={Spices} width={'1000px'} className='mt-32 ml-4' />
        </div>
        {/* spices bg */}

        {/* Circle Img starts */}
        <div className=' mt-30 ml-158 '>
          <img src={Vector1} width={'250px'} />
        </div>
        {/* Circle Img Ends */}


        {/* Ingredient lists and box starts */}
        <div className=' absolute mt-32 space-y-10 ml-14'>

          {/* Top Lists starts */}
          <div className='border-3 border-[#388482] w-128  px-10 py-8 rounded-2xl bg-white space-y-3'>
            <h1 className='text-xl font-semibold'>For the Dough</h1>
            <ul className='list-disc list-inside space-y-3 '>
              <li>120 gms refined flour</li>
              <li>1/4 tsp baking powder</li>
              <li>1/2 tsp salt water (for kneading)</li>
            </ul>
          </div>
          {/* Top Lists Ends */}



          {/* Second starts */}
          <div className='border-3 border-[#388482] w-128  px-10 py-8 rounded-2xl bg-white space-y-3'>
            <h1 className='text-xl font-semibold'>For the Chicken Filling:</h1>
            <ul className='list-disc list-inside space-y-3'>
              <li>1 cup chicken (minced)</li>
              <li>1/2 cup onions, finely chopped</li>
              <li>1/4 tsp black pepper powder</li>
              <li>1 tbsp oil</li>
              <li>1/2 tsp soya sauce</li>
              <li>Salt</li>
              <li>1/4 tsp vinegar</li>
            </ul>
          </div>

          {/* Second ends */}



          {/* Third Starts */}
          <div className='border-3 border-[#388482] w-128  px-10 py-8 rounded-2xl bg-white space-y-3'>
            <h1 className='text-xl font-semibold'>For the Vegetarian Filling:</h1>
            <ul className='list-disc list-inside space-y-3'>
              <li>1 cup cabbage and carrots, grated</li>
              <li>2 tbsp onions , finely chopped</li>
              <li>1/2 tsp garlic, finely chopped</li>
              <li>1 tbsp oil</li>
              <li>1/4 tsp vinegar</li>
              <li>1/2 tsp soya sauce</li>
              <li>to taste salt</li>
              <li>to taste pepper</li>
              <li>1 tbsp cornflour</li>
            </ul>
          </div>

          {/* Third Ends */}


          {/* Fourth Starts */}
          <div className='border-3 border-[#388482] w-128  px-10 py-8 rounded-2xl bg-white space-y-3'>
            <h1 className='text-xl font-semibold'>For Chilli Sauce:</h1>
            <ul className='list-disc list-inside space-y-3'>
              <li>25 gram garlic, peeled</li>
              <li>6 gms whole red chillies</li>
              <li>3 tbsp vinegar</li>
              <li>3 tbsp vinegar</li>
              <li>1 tbsp oil</li>
              <li>to taste salt</li>
              <li>to taste salt</li>
              <li>to taste sugar</li>
            </ul>
          </div>

          {/* Fourth Ends */}
        </div>
        {/* Ingredient lists and box ends */}
      </div>

      {/* Ingredients useed Ends */}

      {/* Allergy Advice Starts */}

      <div className='flex flex-col items-center mt-20 gap-16'>

        {/* Header */}
        <div className='flex items-center'>
          <img src={Dots2} width={'150px'} />
          <h1 className='text-2xl font-bold'><span className='text-[#D95103]'>Allergy</span> Advice</h1>
          <img src={Dots3} width={'150px'} />
        </div>
        {/* Header */}

        <div className=' w-238 space-y-4 text-[#252D43]'>
          <p>
            Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida
            . Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl.
            In viverra diam dis montes orci congue vulputate magna ullamcorper
            . Semper tellus ipsum felis maecenas ultrices turpis amet euismod malesuada. Amet sed neque vitae malesuada quis sed urna.
          </p>

          <p>

            Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis bibendum tortor varius sit. Volutpat nunc nisl quisque elit.
            Ac est ultricies risus et sed. Donec auctor tristique quam morbi pellentesque et.
            Scelerisque dui id arcu laoreet iaculis nunc et nulla sed. Aliquet nullam vulputate quis ut mi placerat auctor.
            Ipsum massa suspendisse netus mollis interdum.
          </p>

          <p>
            Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec dignissim aenean congue justo et. Parturient elit adipiscing non vitae mattis.
            Congue senectus urna cursus nisi nisl nisl tincidunt rhoncus. Congue sit etiam vestibulum elit aenean leo enim volutpat.
            Aliquet vitae condimentum bibendum ullamcorper vel cursus libero netus bibendum. Lorem id ut proin tincidunt. Nibh nunc amet odio est et.
            Sem dui nunc morbi leo quisque viverra ultrices. Mattis at tempus ultricies ut feugiat nunc dignissim. Urna turpis purus turpis elit risus.
          </p>

          <p>
            Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus mauris senectus odio blandit diam nunc.
            Urna volutpat ut potenti ut mus orci neque sem. Mattis amet at amet faucibus nisl morbi aenean ac.
            Justo turpis bibendum donec lacinia. Enim integer ornare nibh urna enim tortor arcu sit lacinia.
            Dapibus praesent vitae dolor cursus fringilla hac facilisis pellentesque. Elementum lacus varius et neque amet aliquam donec sed.
            Ultrices euismod commodo id vehicula commodo. Amet lorem eros nulla mauris.
            Sit arcu enim sit nunc mi sed aenean. Ornare enim vitae volutpat est dui tortor. Viverra habitant et consequat vitae elit aliquet iaculis in tristique.
          </p>

          <p>
            Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie arcu nulla convallis interdum proin dui ut porta.
            Amet potenti praesent pulvinar scelerisque vitae habitant eget. Senectus hac id aliquam ipsum urna.
            Est ut amet nec sollicitudin nunc viverra nec ipsum suspendisse. Etiam risus ultricies dictum nisl.
            Bibendum ultrices elementum feugiat erat suspendisse mi fermentum magna suspendisse. Nisi mattis consequat nec donec eu amet nulla a.
            At blandit vulputate morbi tortor amet. Hac nec gravida tempor ac. Senectus nunc libero scelerisque quisque. Risus condimentum mattis massa integer.
          </p>

        </div>


      </div>

      {/* Allergy Advice Ends */}


      {/* Scan start */}
      <div className='flex flex-col items-center mt-26 w-238 p-10 rounded-2xl bg-[#FAFBFB] m-auto gap-8'>
        <div className='text-center'>
          <h1 className='text-2xl font-semibold text-[#0C6967]'>Scan the QR code</h1>
          <p className='text-[#252D43]'>You can also check the allergy advices using your phone as well</p>
        </div>

        <div className='flex flex-col items-center'>
          <img src={QR} width={'100px'} className='border-4 rounded-xl'/>
          <div className='flex items-center'>
            <h1 className='font-bold'><span className='text-[#D95103]'>SCAN </span>ME!</h1>
            <IoIosPhonePortrait/>
          </div>
        </div>

      </div>
      {/* Scan End */}

      <Footer/>

    </div>
  )
}

export default AllergyAdvice ;
