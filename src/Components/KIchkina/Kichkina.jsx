import React from 'react'
import "./Kichkina.css"

const Kichkina = () => {
    // const uchta =[
    //     {title: "Hayratlanarli Plyaj", text:"Zamonaviy plyajlarni kashf eting va quyosh ostida dam oling."},
    //     {title: "Hayratlanarli Plyaj", text:"Zamonaviy plyajlarni kashf eting va quyosh ostida dam oling."},
    //     {title: "Hayratlanarli Plyaj", text:"Zamonaviy plyajlarni kashf eting va quyosh ostida dam oling."},
    // ]
    return (
        <main className='kichkina '>
            <div className='contayner'>
                <ul className='kichkina__list flex justify-between max-w-5xl mt-12 h-50'>
                    {/* <li>{uchta.title} {uchta.text}</li> */}
                    <li className='kichkina__item  w-80 pt-[25px]'>
                        <h2 className='kichkina__title'><b> Hayratlanarli Plyaj</b></h2>
                        <i className='kichkina__text'>Zamonaviy plyajlarni kashf eting va quyosh ostida dam oling.</i>
                    </li>
                    <li className= 'kichkina__item w-80'>
                        <h2 className='kichkina__title'><b> Tog' Sarguzashtlari </b></h2>
                        <i className='kichkina__text'>Hayajonli tog' sayohatiga chiqib, tabiatni o'rganing.</i>
                    </li>
                    <li className='kichkina__item w-80'>
                        <h2 className='kichkina__title'><b>Shahar Turlari </b></h2>
                        <i className='kichkina__text'>Hayajonli tog' sayohatiga chiqib, tabiatni o'rganing.</i>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Kichkina
