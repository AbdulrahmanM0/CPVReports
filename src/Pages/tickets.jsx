import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'reactstrap'
import ProjectDetails from '../components/ProjectDetails/Arabic/ProjectDetails'
import ProjectDetailsEN from '../components/ProjectDetails/English/ProjectDetailsEN'
import ProjectTickets from '../components/ProjectDetails/Arabic/ProjectTickets'
import ProjectTicketsEN from '../components/ProjectDetails/English/ProjectTicketsEN'
import axios from 'axios'
import Select from 'react-select'
import SaudiIcon from '../assets/images/saudi-arabia.png'
import USIcon from '../assets/images/united-states.png'
import { useSearchParams } from 'react-router-dom'
import ProjectContact from '../components/ProjectDetails/English/ProjectContact'
import ProjectContactAR from '../components/ProjectDetails/Arabic/ProjectContact'

export default function Tickets() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("Tr");
    const [data,setData] = useState(null)
    const [lang,setLang] = useState(1)
    const [errorMSG , setErrorMSG] = useState(false)

    useEffect(()=>{
        axios.post('https://rd0.cpvarabia.com/api/CTickets.php',{Token:token,lang: lang == 1 ? "" : "EN"})
        .then(res => {
            setData(res.data.RFNO)
            if(res.data.error){
              setErrorMSG(true)
            }
            })
        .catch(e => { console.log(e)})
    },[lang])

    const options = [
      {value:1 , label:<span><img src={SaudiIcon} alt='SaudiArabia' width={18}/> العربية</span>},
      {value:2 , label:<span><img src={USIcon} alt='US' width={18}/> English</span>}
    ]

  return (
    <div className='content-page'>
      {!errorMSG ? 
      <Container>
        {
            data !== null && data != undefined ?
        <>
      {/* ProjectDetails component */}
        <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
          <div className='text-end'>
            <div className='d-flex justify-content-end mb-2'>
                <div style={{width: '130px'}}>
                  <Select styles={{width: '40px'}} defaultValue={options[0]} options={options} onChange={(e)=>{setLang(e.value)}}/>
                </div>
            </div>
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
        <>
          <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            {/* Arabic */}
            <ProjectTickets data={data}/>
          </div>

          <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            {/* Arabic */}
            <ProjectContactAR />
          </div>

        </>
      :
        <>
          <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            {/* English */}
            <ProjectTicketsEN data={data}/>
          </div>

          <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            {/* English */}
            <ProjectContact />
          </div>
        </>
      }
        </>
        :         
        <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom text-center'>
                <Spinner />
                {/* {data == undefined && setTimeout(()=>history.push('/not-found'))} */}
            </div>
        </div>
        }
      </Container>
      :
      <Container>
      <div className='col-lg-11 col-md-10 col-sm-12 m-auto mb-4'>
          <div className='bg-secondary text-white  p-4 form-title rounded-top fw-bold'>
              Error 404
          </div>
          <div className='form-container shadow-lg p-4 bg-body rounded-bottom d-flex align-items-center text-center justify-content-center' style={{height:'200px'}}>
              <h4>This page is Not Found</h4>
          </div>
      </div>
      </Container>
      }
    </div>
  )
}
