import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'reactstrap'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import ProjectTickets from '../components/ProjectDetails/ProjectTickets'
import axios from 'axios'

export default function Tickets() {
    const [data,setData] = useState(null)
    const [Token, setToken] = useState('06909e1d70')

    useEffect(()=>{
        axios.post('https://rd0.cpvarabia.com/api/CTickets.php',{Token,})
        .then(res => {
            setData(res.data.RFNO)
            console.log(res.data.RFNO)
            })
        .catch(e => console.log(e))
    },[])

    console.log(data)
  return (
    <div className='content-page'>
      <Container>
        {
            data !== null ? 
        <>
      {/* ProjectDetails component */}
        <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
          <div className='bg-secondary text-white  p-4 form-title rounded-top fw-bold'>
            RefranceNo. {data.ReferenceNo}
          </div>
          <div className='form-container shadow-lg p-4 bg-body rounded-bottom'>
            <ProjectDetails data={data}/>
          </div>
        </div>
      {/* Project Tickets */}
        <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
          {/* <div className='bg-secondary text-white  p-4 form-title rounded-top fw-bold'>
            Project Tickets
          </div>
          <div className='form-container shadow-lg p-4 bg-body rounded-bottom'> */}
            <ProjectTickets data={data}/>
          </div>
        {/* </div> */}
        </>
        :         
        <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom text-center'>
                <Spinner />
            </div>
        </div>
        }
      </Container>
    </div>
  )
}
