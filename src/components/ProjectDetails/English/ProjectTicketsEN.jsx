import React from 'react'
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'

export default function ProjectTickets({data}) {
    
  return (
    <div> 
        <>
        {/* TR */}
        {data.TR.length >= 1 &&
        <>
        <div className='bg-dark text-white  p-2 ps-4 form-title rounded-top fw-bold'>
        Technical reservations Risks in the certificate of approval (Final Report):
        </div>
        <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
                    {/* TR EN*/}
        {data.TR.map(item => 
        <div className='mb-3'>    
        <Card >
            <CardHeader>
                <span className='fw-bold'>ID: {item.ID}</span>
            </CardHeader>
          <ListGroup flush>

                <ListGroupItem>
                    <div>
                        <div className='mb-2 fw-bold'>Comment: </div>
                        <div>
                            <span></span>{item.Comment}
                        </div>
                    </div>
                </ListGroupItem>

                <ListGroupItem>
                    <div>
                        <div className='mb-2 fw-bold'>Corrective: </div>
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
        {data.RD5.length >= 1 &&
        <>
            <div className='bg-dark text-white  p-2 ps-4 form-title rounded-top fw-bold'>
            Risks lead to work interruption report (These notes are closed by the client before the visit of the Inspection Team):
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
                        {/* TR EN*/}
            
            {data.RD5.map(item => 
            <div className='mb-3'>    
            <Card >
                <CardHeader>
                    <span className='fw-bold'>ID: {item.ID}</span>
                </CardHeader>
            <ListGroup flush>

                    <ListGroupItem>
                        <div>
                            <div className='mb-2 fw-bold'>Comment: </div>
                            <div>
                                {item.Comment}
                            </div>
                        </div>
                    </ListGroupItem>

                    <ListGroupItem>
                        <div>
                            <div className='mb-2 fw-bold'>Corrective: </div>
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
        {data.RD5Inspection.length >= 1 &&
        <>
            <div className='bg-dark text-white  p-2 ps-4 form-title rounded-top fw-bold'>
            Risks lead to work interruption report (These notes are closed by the client during the visit of the Inspection Team ):
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
                        {/* TR EN*/}
            
            {data.RD5Inspection.map(item => 
            <div className='mb-3'>    
            <Card >
                <CardHeader>
                    <span className='fw-bold'>ID: {item.ID}</span>
                </CardHeader>
            <ListGroup flush>

                    <ListGroupItem>
                        <div>
                            <div className='mb-2 fw-bold'>Comment: </div>
                            <div>
                                {item.Comment}
                            </div>
                        </div>
                    </ListGroupItem>

                    <ListGroupItem>
                        <div>
                            <div className='mb-2 fw-bold'>Corrective: </div>
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
        {data.Note.length >= 1 &&
        <>
            <div className='bg-dark text-white  p-2 ps-4 form-title rounded-top fw-bold'>
            Technical notes in the certificate of approval (Final Report).
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
                        {/* TR EN*/}
            
            {data.Note.map(item => 
            <div className='mb-3'>    
            <Card >
                <CardHeader>
                    <span className='fw-bold'>ID: {item.ID}</span>
                </CardHeader>
            <ListGroup flush>

                    <ListGroupItem>
                        <div>
                            <div className='mb-2 fw-bold'>Comment: </div>
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
