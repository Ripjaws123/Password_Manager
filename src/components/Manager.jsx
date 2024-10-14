import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    const showpassword = () => {
        passwordref.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("close.png")) {
            ref.current.src = "/open.png"
            passwordref.current.type = "password"
        }
        else {
            ref.current.src = "/close.png"
            passwordref.current.type = "text"
        }
    }

    const savedetails = () => {
        toast('Your Details is Saved', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
        console.log([...passwordArray, form])
        setform({ site: "", username: "", password: "" })
    }
    const deletedetails = (id) => {
        console.log("Your pass is deleted")
        let c = confirm("Want to Delete this Password")
        if(c)
            {
            toast.success('Deletion Successful', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setPasswordArray(passwordArray.filter(item=>item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id !== id)))
        }
    }
    const editdetails = (id) => {
        toast.warn('Details are been Edited', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        console.log("Your pass is edited",id)
        setform(passwordArray.filter(item=>item.id === id)[0])
        setPasswordArray(passwordArray.filter(item=>item.id !== id))
    }

    const copydata = (text) => {
        toast('Copied to the Clipboard', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        navigator.clipboard.writeText(text)
    }


    const handledetails = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div>
                <div className="absolute top-0 -z-10 h-full w-full bg-white">
                    <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(85,101,182,0.74)] opacity-50 blur-[80px]">
                    </div>
                </div>
            </div>

            <div  className='hedding flex mx-auto justify-center items-center mt-1 flex-col' >
                <h1 className='font-bold text-3xl'>
                    <span className='text-blue-800 text-3xl'> &lt; </span>
                    <span>Pass</span>
                    <span className='text-green-800'>-Man</span>
                    <span className='text-blue-800 text-3xl'> /&gt; </span>
                </h1>
                <p className='font-medium pt-1'>Your One and Only Password Manager</p>
            </div>

            <div className="input flex flex-col justify-center items-center mx-auto mt-4 gap-5 w-[60vw] mmd:mx-6 mmd:w-[94vw] mlm:mx-3">
                <div className="input2 flex flex-col gap-5 mmd:w-[70vw] msm:w-[90vw]">
                    <input type="text" value={form.site} onChange={handledetails} placeholder='Enter the Website URL' name='site' className='border shadow-lg rounded-full pl-4 border-slate-300 w-[34vw] mmd:w-[70vw]  msm:w-[90vw] bg-blue-100 text-black placeholder-slate-400 h-8' />
                    <input type="text" value={form.username} onChange={handledetails} placeholder='Enter the Website Username' name='username' className='border shadow-lg rounded-full pl-4 border-slate-300 w-[34vw] mmd:w-[70vw]  msm:w-[90vw] bg-blue-100 text-black placeholder-slate-400 h-8' />
                    <div className="pass relative flex items-center">
                        <input type="text" value={form.password} onChange={handledetails} placeholder='Enter the Website Password' ref={passwordref} name='password' type ="password" className='border shadow-lg rounded-full pl-4 border-slate-300 w-[34vw] mmd:w-[70vw]  msm:w-[90vw] bg-blue-100 text-black placeholder-slate-400 h-8' />
                        <span className='absolute right-4 top-1 cursor-pointer' onClick={showpassword}>
                            <img ref={ref} src="/open.png" alt="eye" className='w-7' />
                        </span>
                    </div>
                </div>
                <div className="submit shadow-xl rounded-full border-blue-300">
                    <button type="submit" className=' w-[10vw] mmd:w-[18vw] mlm:w-[30vw] h-9 bg-blue-500 rounded-full font-bold flex justify-center items-center gap-1' onClick={savedetails}>
                        <lord-icon
                            src="https://cdn.lordicon.com/fowixcuo.json"
                            trigger="hover"
                            colors="primary:#30e8bd">
                        </lord-icon>
                        Save
                    </button>
                </div>
                <div className="details w-full flex justify-start gap-4 pl-3">
                    <span className='font-bold text-xl pb-1 mlm:text-base'>Your</span>
                    <span className='font-extrabold text-2xl pt-[1px] mlm:text-base'>PASSWORDS</span>
                </div>
                <div className="relative overflow-x-auto overflow-y-auto shadow-lg mmd:rounded-lg m3xl:rounded-lg w-full max-h-[33.2vh] min-h-[10vh]">
                    {passwordArray.length === 0 && <div>No Passwords to be Found</div>}
                    {passwordArray.length != 0 && <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                        <thead className="text-base text-black uppercase bg-gray-50 dark:bg-blue-400 dark:text-black">
                            <tr>
                                <th scope="col" className="px-8 py-3 justify-center">
                                    Website
                                </th>
                                <th scope="col" className="px-8 py-3 justify-center">
                                    UserName
                                </th>
                                <th scope="col" className="px-8 py-3 justify-center">
                                    Password
                                </th>
                                <th scope="col" className="px-6 py-3 flex justify-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {passwordArray.map((item, index) => {
                                return <tr key={index} className="bg-white border-b dark:bg-blue-300 dark:border-gray-700">
                                    <th scope="row" className="px-4 py-2 font-bold text-gray-900 whitespace-nowrap dark:text-black flex items-center gap-2"><a href={item.site} target='_blank'>
                                        {item.site}
                                    </a>
                                        <div className='flex items-center cursor-pointer' onClick={() => { copydata(item.site) }}>                                           <lord-icon
                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                            trigger="hover"
                                            colors="primary:#3907F5"
                                            style={{ "width": "25px", "height": "25px" }}>
                                        </lord-icon>
                                        </div>
                                    </th>

                                    <td className=" username px-4 py-2">
                                        <div className='flex items-center justify-between'>
                                            {item.username}
                                            <div className='flex items-center cursor-pointer' onClick={() => { copydata(item.username) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="hover"
                                                    colors="primary:#3907F5"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>

                                    <td className=" password px-4 py-2">
                                        <div className='flex items-center justify-between'>

                                            {item.password}
                                            <div className='flex items-center pr-2 mr-1 cursor-pointer' onClick={() => { copydata(item.password) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="hover"
                                                    colors="primary:#3907F5"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="action px-4 py-2">
                                        <div className='flex items-center justify-center gap-4'>
                                            <div className='edit cursor-pointer' onClick={()=>{editdetails(item.id)}}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/wkvacbiw.json"
                                                    trigger="hover"
                                                    colors="primary:#2516c7"
                                                    style={{ "width": "25px", "height": "25px" }}
                                                >
                                                </lord-icon>
                                            </div>
                                            <div className=' delete cursor-pointer' onClick={()=>{deletedetails(item.id)}}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    colors="primary:#2516c7"
                                                    style={{ "width": "25px", "height": "25px" }}
                                                >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager