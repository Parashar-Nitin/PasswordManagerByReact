import React, { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

function page() {

    const [value, setValue] = useState({ site: "", email: "", password: "" })
    const [list, setList] = useState([])
    const passRef = useRef();


    let getFromLocalStorage = useEffect(() => {
        const listString = localStorage.getItem("list");
        if (listString) {
            let storedlist = JSON.parse(listString)
            setList(storedlist);
            console.log(list)
        }
    }, [])

    let store = ((item) => {
        localStorage.setItem("list", JSON.stringify(item))
    })


    let changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
        // console.log(e.target.value)
    }

    const submitHandle = () => {
        if (value.site.length > 2 & value.email.length > 2 & value.password.length > 2) {
            let updatedList = [...list, { ...value, id: uuidv4() }]
            setList(updatedList);
            store(updatedList);
            setValue({ site: "", email: "", password: "" })
        }
    }

    const deleteHandle = (e) => {
        console.log("delete")
        let updatedList = list.filter(item => item.id !== e.target.id);
        setList(updatedList);
        store(updatedList);
        console.log(updatedList);
    }

    const editHandle = (e) => {
        console.log("edit")
        let copyObj = {};
        list.map((item) => { item.id === e.target.id ? copyObj = item : null })
        console.log(copyObj)
        setValue({ site: copyObj.site, email: copyObj.email, password: copyObj.password })
        deleteHandle(e)
        console.log(copyObj.site)
    }

    const show = (e) => {
        if (e.target.src.includes("icons/eye.png")) {
            e.target.src = "icons/eyecross.png"
            passRef.current.type = "text";
        }
        else {
            e.target.src = "icons/eye.png"
            passRef.current.type = "password";
        }
    }

    // const isButtonDisabled = !(value.site.length >= 3 && value.email.length >= 3 && value.password.length >= 3);

    return (
        <div className='sm:max-w-2/5 sm:m-auto mt-[2%]'>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-900 opacity-20 blur-[100px]"></div></div>
            <div className="Header w-full flex flex-col justify-center items-center">
                <div className="logo text-5xl font-bold my-2"><span className='text-red-500 font-bold text-5xl'>P</span><span className='text-yellow-500 font-bold text-5xl'>a</span><span className='text-white font-bold text-5xl'>ss</span><span className='text-purple-600 font-bold text-5xl'>P</span><span className='text-green-400 font-bold text-5xl'>r</span><span className='text-amber-300 font-bold text-5xl'>o</span></div>
                <div className="desc my-2 text-lg">Smart way to manage your Passwords</div>
            </div>
            {/* <form action="" className='w-full my-4'> */}
            <div className='w-full my-4'>
                <input type="text" className='w-full m-3 py-1 px-4 border border-green-400 rounded-full bg-white' placeholder='Enter website URL' name='site' value={value.site ? value.site : ""} onChange={changeHandler} />
                <div className="idPass w-full flex sm:flex-row ">
                    <input type="text" className='border border-green-400 m-3 py-1 px-4 rounded-full w-full  bg-white' placeholder='email' name="email" value={value.email ? value.email : ""} onChange={changeHandler} />
                    <div className='sm:w-2/6 relative'>
                        <input type="password" ref={passRef} className='border border-green-400 m-3 py-1 px-4 pr-10 mr-0 rounded-full w-full  bg-white' placeholder='password' name='password' value={value.password ? value.password : ""} onChange={changeHandler} />
                        <img className='h-6 absolute right-0 top-4' src="icons/eye.png" alt="eye" onClick={show} />
                    </div>
                </div>
                <div className="text-center">

                    <button className='m-auto mt-4 border border-black bg-green-600 py-2 px-4 fit rounded-full flex gap-2 items-center' onClick={submitHandle}>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover" >
                        </lord-icon>
                        <div className='text-xl font-bold'>Save</div></button>
                </div>
                {/* </form> */}
            </div>
            <div className="list mt-12">
                <h1 className='text-3xl font-bold mb-3'>Your Passwords</h1>
                <table className='max-w-full'>
                    <thead>
                        <tr className='text-center text-lg font-bold bg-green-800 text-white '>
                            <th className='py-2 w-1/4'>Site</th>
                            <th className='py-2 w-1/4'>Username</th>
                            <th className='py-2 w-1/4'>Password</th>
                            <th className='py-2 w-1/4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => {
                            return <tr key={item.id} className='text-center bg-green-100 w-full'>
                                <td className='py-1 border-x border-white w-1/4'>
                                    <div className=' flex gap-2 justify-center px-4'>
                                        <a href={item.site} target='_blank' className='overflow-x-auto' title={item.site}>{item.site}</a>
                                        <div className='lordiconcopy size-7 cursor-pointer'>
                                            <lord-icon
                                                style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover"
                                                onClick={(() => { navigator.clipboard.writeText(item.site) })}>
                                            </lord-icon>
                                        </div>
                                    </div>
                                </td>
                                <td className='py-1 border-x border-white w-1/4'>
                                    <div className=' flex gap-2 justify-center px-4'>
                                        <div className='overflow-x-auto'>{item.email}</div>
                                        <div className='lordiconcopy size-7 cursor-pointer'>
                                            <lord-icon
                                                style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover"
                                                onClick={(() => { navigator.clipboard.writeText(item.email) })}>
                                            </lord-icon>
                                        </div>
                                    </div>
                                </td>
                                <td className='py-1 border-x border-white w-1/4'>
                                    <div className=' flex gap-2 justify-center px-4'>
                                        <div className='overflow-x-auto'>{item.password}</div>
                                        <div className='lordiconcopy size-7 cursor-pointer'>
                                            <lord-icon
                                                style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover"
                                                onClick={(() => { navigator.clipboard.writeText(item.password) })}>
                                            </lord-icon>
                                        </div>
                                    </div>
                                </td>
                                <td className='py-1 border-x border-white w-1/4'>
                                    <div className=' flex gap-2 justify-center px-4'>
                                        <span className='cursor-pointer mx-1' >
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}
                                                id={item.id}
                                                onClick={editHandle}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1'>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}
                                                id={item.id}
                                                onClick={deleteHandle}>
                                            </lord-icon>
                                        </span>
                                        {/* <img id={item.id} className='h-6' src="icons/heart.png" alt="" onClick={deleteHandle} />
                                        <img id={item.id} className='h-6' src="icons/heart.png" alt="" onClick={editHandle} /> */}
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default page
