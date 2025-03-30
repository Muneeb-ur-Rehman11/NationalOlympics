import React from 'react'
import cm from '../../src/assets/cm.jpg'
import pakmap from '../../src/assets/blochistan.jpg'
import governer from '../../src/assets/governor.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Host = () => {
    const paras =[
        {
            ptag:"Balochistan, the largest of the four provinces of Pakistan, spreads over an area of 347,190 Sq, Kms., forming 43.6 per cent of the total area of Pakistan. It has clustered population and is smallest in proportion as compared to that of other provinces. Its population, according to 1998 census, is xx million, having a low density per square kilometer. Physically, Balochistan is an extensive plateau of rough terrain divided into basins by ranges of sufficient heights and ruggedness. Broadly, Balochistan geographic area can be divided in to four distinct zones: Upper high lands, lower high lands, plains, and deserts.",
            imgtag:cm,
            underpic:"Abdul Quddus Bazinjo Chief Minister",
        },
        {
            ptag:"Balochistan, the largest of the four provinces of Pakistan, spreads over an area of 347,190 Sq, Kms., forming 43.6 per cent of the total area of Pakistan. It has clustered population and is smallest in proportion as compared to that of other provinces. Its population, according to 1998 census, is xx million, having a low density per square kilometer. Physically, Balochistan is an extensive plateau of rough terrain divided into basins by ranges of sufficient heights and ruggedness. Broadly, Balochistan geographic area can be divided in to four distinct zones: Upper high lands, lower high lands, plains, and deserts.",
            imgtag:pakmap,
            underpic:"Abdul Quddus Bazinjo Chief Minister",
        },
        {
            ptag:"The Lower High Lands have an altitude ranging from 1970 to 3940 ft (600 to 1200 M). They are located in the south-eastern Balochistan, except eastern part of Kachi, the southern end of Dera Bugti and Nasirabad districts. Some are extension of lower high lands that exist at boundaries of Gwadar, Turbat, Panjgur, Kharan and Chaghi districts.Balochistan has relatively small area of plains as compared to its total land area. They include the Kachi plain, situated to the south of Sibi and extending into Nasirabad Division, the southern part of Dera Bugti district, and narrow plain area along the Mekran coast stretching from Kachi to the Iranian border. The plains of Kachi, Las Bela and that of river Dasht cover sizable area. Mountains dominate the terrain, and valley floors, and piedmont plain make up only 15% of the landscape.The western part of the province, mostly in Kharan and Chaghi districts, consists of vast plains covered with black gravel surface and broad expanses of sand dunes.The coastal-line is about 760 Kilometers long, with a number of peninsulas and promontories. The coastal area is not effectively connected with the interior; the steep hills rise abruptly beyond the narrow costal plain. Ports, such as Somiani, Pasni and Gwadar are unsheltered. Federal and provincial governments have comprehensive development plans that feature a deep sea port at Gwadar and a coastal highway.",
            imgtag:governer,
            underpic:"Malik Abdul Wali Khan Kakar Governor",
        },
    ];

     useGSAP(()=>{
        gsap.from(".host-head",{
          x: 1000,
          duration: 1,
          ease: "power2.out",
          stagger:.8,
        }),
        gsap.from(".ptag",{
            x: 1000,
            duration: 1,
            ease: "power2.out",
            stagger:.8,
          })
          gsap.from(".side-img",{
            x: -1000,
            duration: 1,
            ease: "power2.out",
            stagger:.8,
          })
      })
  return (
    <>
    <section className="host-main px-20 mt-5">
        <div className="host-head">
            <h1 className='text-4xl font-semibold text-black'>34th National Games 2023 Host Province Balochistan
            </h1>
        </div>
        {paras.map((item,key)=>{
            return(
    <div key={key} className="part mt-7 flex items-center justify-between gap-10">
    <div className="ptag w-[70%] ">
    <p className='text-md '>{item.ptag} </p>
    </div>

            <div className="side-img w-1/4 rounded-5xl ">
                <img className='w-full h-full' src={item.imgtag} alt="" />
                <p className='font-semibold text-2xl text-center'>{item.underpic}</p>
            </div>
        </div>
            )
        })}
        
    </section>
    </>
  )
}

export default Host