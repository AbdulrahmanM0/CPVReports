import React from 'react'
import { Card, CardHeader, Col, ListGroup, ListGroupItem, Row } from 'reactstrap'

export default function ProjectTickets({data}) {
    
  return (
    <div> 
        <>
        {/* TR */}
        {data.TRAR.length >= 1 &&
        <>
        <div className='bg-dark text-white  p-2 ps-4 form-title rounded-top fw-bold'>
            TR
        </div>
        <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
        {data.TRAR.map((item,i) => 
        <div className='mb-3' key={i}>    
        <Card >
            <CardHeader>
                <span className='fw-bold'>ID: {item.ID}</span>
            </CardHeader>
          <ListGroup className=' text-end' flush>

                <ListGroupItem>
                    <div>
                        <div className='mb-2 fw-bold'>:التعليق </div>
                        <div>
                            {item.Comment}
                        </div>
                    </div>
                </ListGroupItem>

                <ListGroupItem>
                    <div>
                        <div className='mb-2 fw-bold'>:التصحيح </div>
                        <div>{item.Corrective}</div>
                    </div>
                </ListGroupItem>
            </ListGroup>
        </Card>
        </div>
        )
        }
        </div>
        </>
        } 

        {/* RD5 */}
        {data.RD5AR.length >= 1 &&
        <>
            <div className='bg-dark text-white  p-2 ps-4 form-title rounded-top fw-bold'>
                RD5
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
            {data.RD5AR.map((item,i) => 
            <div className='mb-3' key={i}>    
            <Card >
                <CardHeader>
                    <span className='fw-bold'>ID: {item.ID}</span>
                </CardHeader>
            <ListGroup className='text-end' flush>

                    <ListGroupItem>
                        <div>
                        <div className='mb-2 fw-bold'>:التعليق </div>
                            <div>
                                {item.Comment}
                            </div>
                        </div>
                    </ListGroupItem>

                    <ListGroupItem>
                        <div>
                        <div className='mb-2 fw-bold'>:التصحيح </div>
                            <div>{item.Corrective}</div>
                        </div>
                    </ListGroupItem>
                </ListGroup>
            </Card>
            </div>
            )
            }
            </div>
        </>
        }

        {/* RD5 Inspection */}
        {data.RD5InspectionAR.length >= 1 &&
        <>
            <div className='bg-dark text-white  p-2 ps-4 form-title rounded-top fw-bold'>
                RD5 Inspection
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
            {data.RD5InspectionAR.map((item,i) => 
            <div className='mb-3' key={i}>    
            <Card >
                <CardHeader>
                    <span className='fw-bold'>ID: {item.ID}</span>
                </CardHeader>
            <ListGroup className='text-end' flush>

                    <ListGroupItem>
                        <div>
                        <div className='mb-2 fw-bold'>:التعليق</div>
                            <div>
                                {item.Comment}
                            </div>
                        </div>
                    </ListGroupItem>

                    <ListGroupItem>
                        <div>
                        <div className='mb-2 fw-bold1'>:التصحيح </div>
                            <div>{item.Corrective}</div>
                        </div>
                    </ListGroupItem>
                </ListGroup>
            </Card>
            </div>
            )
            }
            </div>
        </>
        }

        {/* NOTE */}
        {data.NoteAR.length >= 1 &&
        <>
            <div className='bg-dark text-white text-end  p-2 pe-4 form-title rounded-top fw-bold'>
                الملاحظات
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
                        {/* TR EN*/}
            
            {data.NoteAR.map((item,i) => 
            <div className='mb-3' key={i}>    
            <Card >
                <CardHeader>
                    <span className='fw-bold'>ID: {item.ID}</span>
                </CardHeader>
            <ListGroup className='text-end' flush>

                    <ListGroupItem>
                        <div>
                        <div className='mb-2 fw-bold'>:التعليق </div>
                            <div>
                                {item.Comment}
                            </div>
                        </div>
                    </ListGroupItem>

                </ListGroup>
            </Card>
            </div>
            )
            }
            </div>
        </>
        }
    </>
    </div>
  )
}
