import React from 'react'

function Table({data}) {
  return (
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item,index)=>{
                return (
                    <tr key={index} className="item">
                        <td>
                            {item.title}
                        </td>
                        <td>
                            {item.body}
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}

export default Table