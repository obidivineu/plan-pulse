import React from 'react'
import "../creatememember/createmember.css"
// import { MdDelete } from "react-icons/md";
import { MdAutoDelete } from "react-icons/md";

const Createmember = () => {
    return (
        <main className='create'>
            <div className='creatememberbox'>
                <div className='logodelete'><MdAutoDelete /></div>
                <div className='inputs'>
                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='Choose Plan' />
                    <button>Subscribe</button>
                </div>
            </div>
        </main>
    )
}

export default Createmember
