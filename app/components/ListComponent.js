"use client";
import React, { useEffect, useState } from 'react';

const ListComponent = () => {
    const [lists, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/lists');
                const data = await res.json();
                setList(data.data);
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) =>{
        try {
            const response = await fetch("api/lists/" + `${id}`, {
              method: "DELETE", // or 'PUT'
            });
        
            const result = await response.json();
            console.log("Success:", result);
            location.reload()
          } catch (error) {
            console.error("Error:", error);
          }
    }

    let idx = 1;

    const listDiv = lists.map((i) => (
        <tr key={i._id} className='bg-gray-900 border border-gray-900'>
            <td className='px-4 py-2'>{idx++}</td>
            <td className='px-4 py-2'>{i.createdAt}</td>
            <td className='px-4 py-2'>{i.borrower}</td>
            <td className='px-4 py-2'>{i.lender}</td>
            <td className='px-4 py-2'>{i.list}</td>
            <td className='px-4 py-2'>{i.money}</td>
            <td className='px-4 py-2'>
                <button
                    onClick={() => handleDelete(i._id)}
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                >
                    DELETE
                </button>
            </td>
        </tr>
    ));

    return (
        <div className=' flex justify-center space-y-4  text-center'>
            <table className="table-auto">
                <thead>
                    <tr className='bg-gray-800'>
                        <th className='px-4 py-2'>NO</th>
                        <th className='px-4 py-2'>Date</th>
                        <th className='px-8 py-2'>Borrower</th>
                        <th className='px-8 py-2'>Lender</th>
                        <th className='px-8 py-2'>Description</th>
                        <th className='px-8 py-2'>Price</th>
                        <th className='px-8 py-2'>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {listDiv}
                </tbody>
            </table>
        </div>
    );
};

export default ListComponent;
