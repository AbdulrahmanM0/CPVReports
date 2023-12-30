import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'reactstrap'
import ProjectDetails from '../components/ProjectDetails/Arabic/ProjectDetails'
import ProjectDetailsEN from '../components/ProjectDetails/English/ProjectDetailsEN'
import ProjectTickets from '../components/ProjectDetails/Arabic/ProjectTickets'
import ProjectTicketsEN from '../components/ProjectDetails/English/ProjectTicketsEN'
import axios from 'axios'

export default function Tickets() {
    const [data,setData] = useState(null)
    const [Token, setToken] = useState('72de9eac67')
    const [lang,setLang] = useState(1)

    useEffect(()=>{
        axios.post('https://rd0.cpvarabia.com/api/CTickets.php',{Token,lang: lang == 1 ? "" : "EN"})
        .then(res => {
            setData(res.data.RFNO)
            console.log(res.data.RFNO)
            })
        .catch(e => console.log(e))
    },[lang])

    console.log(data)
  return (
    <div className='content-page'>
      <Container>
        {
            data !== null ? 
        <>
      {/* ProjectDetails component */}
        <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
          <div className='text-end'>
          <select className='p-1 rounded' onChange={(e)=>{setLang(e.target.value),console.log(e.target.value)}}>
            <option value={1}>العربية</option>
            <option value={2}>English</option>
          </select>
          </div>
          <div className='bg-dark text-white  p-3 form-title rounded-top fw-bold'>
            RefranceNo. {data.ReferenceNo}
          </div>

          {lang == 1 ?
          <div className='form-container shadow-lg p-4 bg-body rounded-bottom'>
            {/* {Arabic} */}
            <ProjectDetails data={data}/>
          </div>
          :
          <div className='form-container shadow-lg p-4 bg-body rounded-bottom'>
            {/* English */}
            <ProjectDetailsEN data={data}/>
          </div>
          }
        </div>







      {/* Project Tickets */}
      {lang == 1 ? 
          <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            <ProjectTickets data={data}/>
          </div>
      :
          <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            <ProjectTicketsEN data={data}/>
          </div>
      }
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
