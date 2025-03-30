import React from 'react'

const MedalTable = () => {
  const medalData = [
    { id: 1, img: "/images/Tableimgs/1.png", unit: "Azad Jammu and Kashmir", gold: 0, silver: 0, bronze: 0, total: 0 },
    { id: 2, img: "/images/Tableimgs/2.png", unit: "Pakistan Army", gold: 199, silver: 133, bronze: 66, total: 398 },
    { id: 3, img: "/images/Tableimgs/3.png", unit: "Government of Pakistan", gold: 0, silver: 0, bronze: 0, total: 0 },
    { id: 5, img: "/images/Tableimgs/5.png", unit: "Islamabad", gold: 0, silver: 0, bronze: 7, total: 7 },
    { id: 6, img: "/images/Tableimgs/6.png", unit: "Khyber Pakhtunkhwa", gold: 4, silver: 6, bronze: 39, total: 49 },
    { id: 7, img: "/images/Tableimgs/7.png", unit: "Punjab", gold: 3, silver: 11, bronze: 53, total: 67 },
    { id: 8, img: "/images/Tableimgs/8.png", unit: "Sindh", gold: 4, silver: 16, bronze: 23, total: 43 },
    { id: 9, img: "/images/Tableimgs/9.png", unit: "Pakistan Police", gold: 1, silver: 2, bronze: 12, total: 15 },
    { id: 10, img: "/images/Tableimgs/10.png", unit: "Pakistan Railways", gold: 3, silver: 8, bronze: 25, total: 36 },
    { id: 11, img: "/images/Tableimgs/11.png", unit: "Balochistan", gold: 2, silver: 18, bronze: 30, total: 50 },
    { id: 12, img: "/images/Tableimgs/12.png", unit: "HEC", gold: 8, silver: 17, bronze: 93, total: 118 },
    { id: 13, img: "/images/Tableimgs/13.png", unit: "Gilgit-Baltistan", gold: 0, silver: 0, bronze: 0, total: 0 },
    { id: 14, img: "/images/Tableimgs/14.png", unit: "WAPDA", gold: 109, silver: 101, bronze: 80, total: 290 }
];

  return (
    <>
    <div className="table-section px-40 my-10
    max-md:px-10 
    max-sm:px-5
    ">
        <div className="table-head">
            <h2 className='text-3xl text-center font-semibold flex justify-center py-5'>Medal Tally-34 National Games 2023</h2>
        </div>
    <div className="overflow-x-auto ">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border px-4 py-2">Units</th>
            <th className="border px-4 py-2 text-yellow-600">G</th>
            <th className="border px-4 py-2 text-gray-500">S</th>
            <th className="border px-4 py-2 text-orange-600">B</th>
            <th className="border px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {medalData.map((item) => (
            <tr key={item.id} className="border">
              <td className="border px-4 py-2 flex items-center gap-4 *:
              max-[400px]:flex-col max-[400px]:justify-center max-[400px]:items-center max-[400px]:text-center max-[400px]:px-0
              "> <img className='w-10' src={item.img} alt="" /> {item.unit}</td>
              <td className="border px-4 py-2 text-yellow-600">{item.gold}</td>
              <td className="border px-4 py-2 text-gray-500">{item.silver}</td>
              <td className="border px-4 py-2 text-red-600">{item.bronze}</td>
              <td className="border px-4 py-2 font-bold">{item.total}</td>
            </tr>
          ))}
          <tr className="bg-gray-300 font-bold">
            <td className="border px-4 py-2">Total</td>
            <td className="border px-4 py-2 text-yellow-600">
              {medalData.reduce((sum, item) => sum + item.gold, 0)}
            </td>
            <td className="border px-4 py-2 text-gray-500">
              {medalData.reduce((sum, item) => sum + item.silver, 0)}
            </td>
            <td className="border px-4 py-2 text-orange-600">
              {medalData.reduce((sum, item) => sum + item.bronze, 0)}
            </td>
            <td className="border px-4 py-2">
              {medalData.reduce((sum, item) => sum + item.total, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bottom-table-text flex justify-center py-3 bg-sky-300">
        <h3 className='text-black font-bold text-center'>Note: Mr. Nooh Butt won Gold Medal in Weightlifting +109 KG as an independent Athlete under the flag of POA</h3>
    </div>
    </div>
    

    </>
  )
}

export default MedalTable