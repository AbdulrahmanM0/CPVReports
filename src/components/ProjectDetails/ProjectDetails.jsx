import React from 'react'
import { Row, Table, Col} from 'reactstrap'

export default function ProjectDetails({data}) {
    console.log(data)
  return (
    <div>
        <Table
            bordered
            className='text-center'
            >
            <thead>
            </thead>
            <tbody>
                <tr>
                    <th className='table-secondary' scope="row">
                        Owner Name - اسم المالك 
                    </th>
                    <td>
                        {data && data.ProjectDetails[0] && data.ProjectDetails[0].OwnerName}
                    </td>
                </tr>
                <tr>
                    <th className='table-secondary' scope="row">
                        Contractor name - اسم المقاول
                    </th>
                    <td>
                        {data && data.ProjectDetails[0] && data.ProjectDetails[0].ConstructorName}
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}
