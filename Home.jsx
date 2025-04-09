import React from 'react'
import BedImage from '../Images/Bed1.jpeg'
import img1 from './ImagesHome/img1.jpeg'
import img6 from './ImagesHome/img6.jpeg'
import img3 from './ImagesHome/img3.jpeg'
import img2 from './ImagesHome/img2.jpeg'
import img4 from './ImagesHome/img4.jpeg'
import img5 from './ImagesHome/img5.jpeg'
import img7 from './ImagesHome/img7.jpg'
import img8 from './ImagesHome/img8.jpg'
import img9 from './ImagesHome/img9.jpg'
import img10 from './ImagesHome/img10.jpg'
import img11 from './ImagesHome/img11.jpg'
import { NavLink } from 'react-router-dom'



function Home() {
    return (
        <div className='relaive top-0 w-full'>
        <div className='w-full h-[40rem] bg-cover bg-center flex items-center px-32 pt-20' style={{backgroundImage: `url(${BedImage})`}}>
             <div className='flex flex-col items-center gap-6'>
                <p className='text-4xl'>Affordable and Comfortable</p>
                <p className='text-4xl font-bold font-[Cinzel]'><span className='text-5xl'>H</span>OSTEL <span className='text-5xl'>R</span>OOMS</p>
                <NavLink to='/Signup' className='bg-[#49455c] px-7 py-2 rounded-full text-white mt-2 cursor-pointer'>
                    Enquiry Now
                </NavLink>
             </div> 
        </div>

        <div className='w-full h-[74rem] flex flex-col items-center py-16 '>
            <h1 className='text-3xl font-bold font-[Cinzel]'><span className='text-4xl'>S</span>ERVICES</h1>
            <div className=' w-[90%] h-[72rem] py-4 flex flex-col gap-8'>
                <div className='flex w-full h-[30rem] '>
                    <div className=' flex flex-col h-full w-[28rem] hover:shadow-xl items-center gap-3 rounded-xl'>
                        <img src={img1} alt="furicture" className='h-[50%] w-[50%] rounded-2xl' />
                        <p className='text-2xl'>Furnished Rooms</p>
                        <p className='text-[1.1rem] px-4 text-center '>We provide fully furnished rooms with quality mattresses, tables, closets and other required facilities.</p>
                        <NavLink to='/Signup' className='px-7 py-3 rounded-full bg-[#49455c] text-white text-xs mt-2 cursor-pointer'>Enquiry Now</NavLink>
                    </div>
                    <div className=' flex flex-col h-full w-[29rem] hover:shadow-xl items-center gap-3 rounded-xl'>
                        <img src={img2} alt="furicture" className='h-[50%] w-[50%] rounded-2xl' />
                        <p className='text-2xl'>WIFI</p>
                        <p className='text-[1.1rem] px-4 text-center '>We provide wireless high speed internet so that you can stay connected with your friends and family.</p>
                        <NavLink to='/Signup' className='px-7 py-3 rounded-full bg-[#49455c] text-white text-xs mt-8 cursor-pointer'>Enquiry Now</NavLink>
                    </div>
                    <div className=' flex flex-col h-full w-[29rem] hover:shadow-xl items-center gap-3 rounded-xl'>
                        <img src={img3} alt="furicture" className='h-[50%] w-[50%] rounded-2xl' />
                        <p className='text-2xl'>Canteen</p>
                        <p className='text-[1.1rem] px-4 text-center '>We cater to your food requirements as well. We provide breakfast, lunch & dinner services in our canteen.</p>
                        <NavLink to='/Signup' className='px-7 py-3 rounded-full bg-[#49455c] text-white text-xs mt-2 cursor-pointer'>Enquiry Now</NavLink>
                    </div>
                </div>
                <div className='flex w-full h-[30rem] '>
                    <div className=' flex flex-col h-full w-[28rem]  hover:shadow-xl items-center gap-3 rounded-xl'>
                        <img src={img4} alt="furicture" className='h-[50%] w-[50%] rounded-2xl' />
                        <p className='text-2xl'>Housekeeping</p>
                        <p className='text-[1.1rem] px-4 text-center '>We also provide housekeeping services like laundry, dish cleaning and room cleaning based on requirements.</p>
                        <NavLink to='/Signup' className='px-7 py-3 rounded-full bg-[#49455c] text-white text-xs mt-2 cursor-pointer'>Enquiry Now</NavLink>
                    </div>
                    <div className=' flex flex-col h-full w-[29rem]  hover:shadow-xl items-center gap-3 rounded-xl'>
                        <img src={img5} alt="furicture" className='h-[50%] w-[50%] rounded-2xl' />
                        <p className='text-2xl'>Watchmen</p>
                        <p className='text-[1.1rem] px-4 text-center '>Depending on the purpose of keeping a close watch on the visitors and passersby we provide efficient watchmen.</p>
                        <NavLink to='/Signup' className='px-7 py-3 rounded-full bg-[#49455c] text-white text-xs mt-2 cursor-pointer'>Enquiry Now</NavLink>
                    </div>
                    <div className=' flex flex-col h-full w-[29rem]  hover:shadow-xl items-center gap-3 rounded-xl'>
                        <img src={img6} alt="furicture" className='h-[50%] w-[50%] rounded-2xl' />
                        <p className='text-2xl'>Armed Guards</p>
                        <p className='text-[1.1rem] px-4 text-center '>Our security agency facilitates guards who have prolific knowledge in handling licensed arms to tackle situations.</p>
                        <NavLink to='/Signup' className='px-7 py-3 rounded-full bg-[#49455c] text-white text-xs mt-2 cursor-pointer'>Enquiry Now</NavLink>
                    </div>
                </div>
            </div>
        </div>  

        <div className='w-full h-[40rem]  flex justify-center items-center'>
            <div className='w-[90%]  h-[80%] flex justify-between items-center gap-5'>
                <div className='text-center px-[2rem] flex flex-col gap-5'>
                    <h1 className='text-3xl font-bold font-[Cinzel] mb-4'><span className='text-4xl'>A</span>BOUT <span className='text-4xl'>U</span>S</h1>
                    <p className='w-[100%]'>We, dummy company, located in area, city, state offer a pocket friendly stay to each patron and welcome them with complete warmth and hospitality. We offer an array of all essential services that are rendered by the hostel for a hassle free stay at no extra costs. For accommodation, the property offers spacious, airy and well-lit rooms, featuring sophisticated and welcoming ambience with the warmth and comfort of home. We take utmost care of the safety and security of individuals and their belongings staying in our hostel.</p>
                </div>
                <img src={img7} alt="Beds" className='w-[50%] rounded-2xl'/>
            </div>
        </div>

        <div className='w-full h-[50rem] flex flex-col items-center'>
            <h1 className='text-3xl font-bold font-[Cinzel]'><span className='text-4xl'>G</span>ALLERY</h1>
            <div className=' w-[90%] h-[50%] my-[2rem] flex items-center justify-between '>
                <img src={img8} alt="Beds" className='h-[70%] w-[32%] rounded-2xl'/>
                <img src={img9} alt="Beds" className='h-[70%] w-[32%] rounded-2xl'/>
                <img src={img10} alt="Beds" className='h-[70%] w-[32%] rounded-2xl'/>
            </div>
            <div className=' w-[90%] h-[50%] my-[2rem] flex items-center gap-[5rem] '>
                <img src={img11} alt="Beds" className='h-[70%] w-[32%] rounded-2xl'/>
                <div className='w-[50%] flex justify-evenly'>
                    <div  className='h-[70%] w-[40%] rounded-2xl'>
                        <h2 className='text-2xl'>Aditya Khosla</h2>
                        <p>I stayed in their hostel for almost 7 months and they provided excellent service.</p>
                    </div>
                    <div  className='h-[70%] w-[40%] rounded-2xl'>
                        <h2 className='text-2xl'>Nikita Pradhan</h2>
                        <p>The facilities they have in their hostel rooms are really good. You will feel like you are at home.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.838181914376!2d73.80716807491721!3d18.490987570077767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfdad7143a4f%3A0xabd31c8f9e6eca9a!2sMarathwada%20Mitra%20Mandal's%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1740244893141!5m2!1sen!2sin"
        className=' my-10 w-[90%] h-[30rem]'
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
        </div>
    )
}

export default Home
