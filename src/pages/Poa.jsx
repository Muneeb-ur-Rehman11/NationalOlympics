import React from 'react'
import poalogo from '../Components/TopLogoBar/poalogo.png'
import olympichouse from '../../src/assets/olympichouse.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Poa = () => {
    useGSAP(()=>{
      gsap.from(".head-poa",{
        x: 1000,
        duration: 1,
        ease: "power2.out",
        stagger:.8,
      })
      gsap.from(".logo",{
        x: -1000,
        duration: 2,
        ease: "power2.out",
        stagger:.8,
      })
      gsap.from(".ptag",{
        x: -1000,
        duration: 2,
        ease: "power2.out",
        opacity:0,
      })
  })
  
  return (
    <>
    <div className="poa-main px-20 my-5 
    max-sm:px-5
    ">
        <div className="top flex items-center justify-between">
            <h1 className='head-poa text-4xl font-semibold text-black'>Pakistan Olympic Association</h1>
            <div className="logo w-40" >
            <img className='w-full h-full' src={poalogo} alt="poalogo" />
            </div>
        </div>

        <div className="paras flex flex-col gap-10">
            <p className='ptag text-lg'> <strong> The Pakistan Olympic Association (POA) is the National Olympic Committee (NOC) of Pakistan.</strong> It was formed in 1948 to oversee the active participation of Pakistan at the Olympiad. Within the Country the POA remains the oldest sport body. It was the premier regulator of sport activities in Pakistan from 1948 until establishment of the Pakistan Sports Board (PSB) in 1962. The POA was recognized by the International Olympic Committee (IOC) in 1948. Subsequently, it also became member of the Association of National Olympic Committees (ANOC) and the Olympic Council of Asia (OCA) respectively.
                </p>
                
                <p className=' ptag text-lg'>
Fundamentally, the POA is the sole representative of the IOC in Pakistan and operating exclusively under the Olympic Charter, independent of any and all political, public or private organizations whatsoever. As an NOC, the POA is the first contact point between the IOC and Pakistan. The POA is responsible to bring athletes to Regional, Asian, Commonwealth and Olympic Games. It continues to develop programs in coordination with its Affiliated Member Units to promote sport at various tiers. It is also responsible for organizing the National Games every two years.</p>

        <h5 className='font-semibold text-2xl '>Formation of the Pakistan Olympic Association (POA)</h5>
        <p className='ptag text-lg'>Under the dynamic leadership of the Father of the Nation Quaid-e-Azam Muhammad Ali Jinnah, Pakistan came into being on 14th August 1947. At the time of its independence the Government machinery was confronted with colossal problems to run a new country. This included sport. Captain of the former Indian Athletic Team, Captain S.A. Hamid, who at that time was performing the duties of ADC to the Governor of Sindh, Shaikh G.H. Hidayatullah, gathered some known sport minded people and arranged a formal meeting in Karachi. Resultantly the POA was formed on 25th February 1948 and Quaid-e-Azam Muhammad Ali Jinnah, the first Governor-General of the Country was nominated as the patron-in-chief of the POA, whereas Ahmed E.H. Jaffar became its first President and Capt. S.A. Hamid its first Secretary General.</p>
        </div>

        <h5 className='font-semibold text-2xl text-center mt-5'>“The Saying of Quaid-e-Azam Muhammad Ali Jinnah on Sport”</h5>
        <p className='ptag text-lg text-center'>"Dedicate yourself to sports promotion, for when you and I are gone, leadership will go into the hands of youth, and youth is our wealth, a raw material, that must be hammered into shape, into burnished steel to strive and smite in defence - the defence of the integrity and solidarity of the Pakistan - the defence of the ideology of Pakistan”.</p>

        <h5 className='font-semibold text-2xl text-center mt-5'>Pakistan Olympic House
        </h5>
        <p className='ptag text-lg text-center'>POA Secretariat is located at 2 – Hameed Nizami Road (Old Temple Road), Lahore and is known as ‘Olympic House’. 

</p>
<div className='flex justify-center'>
<div className="olympic my-10 " >
    <img className='w-full h-full' src={olympichouse} alt="" />
</div>
</div>

    </div>
    </>
  )
}

export default Poa