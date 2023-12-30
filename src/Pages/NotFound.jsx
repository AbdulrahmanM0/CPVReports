import React from 'react'
import { Container } from 'reactstrap'

export default function NotFound() {
  return (
    <div className='content-page'>
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
    </div>
  )
}
