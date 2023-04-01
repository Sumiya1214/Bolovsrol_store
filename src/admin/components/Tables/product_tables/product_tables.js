import React from "react";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import { AiTwotoneDelete } from "react-icons/ai";

const Producttables =()=>{
    const [opened, { open, close }] = useDisclosure(false);
    return(
        <div>
            <div>
            <div className="flex justify-end space-x-2">
                <button
                    type="button"
                    onClick={open}
                    className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                    <h2 className="text-[black]">Мэдээлэл нэмэх</h2>
                </button>
            </div>
            </div>
            <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                        <th scope="col" className="px-6 py-4">Брэндийн нэр</th>
                        <th scope="col" className="px-6 py-4">Зураг</th>
                        <th scope="col" className="px-6 py-4">Үйлдэл</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td className="whitespace-nowrap px-6 py-4">Apple</td>
                        <td className="whitespace-nowrap px-6 py-4">
                           <div>
                            <img className="w-[80px] h-[80px] object-contain" src="https://th.bing.com/th?id=OIP.6x6s1sTIRrU8my_FCLwPqwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="/" />
                           </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4"><div><AiTwotoneDelete className="w-[20px] h-[20px] text-[red]"/></div></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
            <Modal opened={opened} onClose={close} title="Брэнд нэмэх" centered>
                {/* Modal content */}
            </Modal>
        </div>

    )
}
export default Producttables