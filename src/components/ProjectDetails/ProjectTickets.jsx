import React from 'react'
import { Card, CardHeader, Col, ListGroup, ListGroupItem, Row } from 'reactstrap'

export default function ProjectTickets({data}) {
    
  return (
    <div> 
        <>
        {/* TR */}
        {data.TR.length >= 1 &&
        <>
        <div className='bg-secondary text-white  p-4 form-title rounded-top fw-bold'>
            TR
        </div>
        <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
                    {/* TR EN*/}
        {data.TR.map(item => 
        <div className='mb-3'>    
        <Card >
            <CardHeader>
                ID: {item.ID}
            </CardHeader>
          <ListGroup flush>

                <ListGroupItem>
                    <div>
                        <div className='mb-2'>Comment: </div>
                        <div>
                            <span></span>{item.Comment}
                        </div>
                    </div>
                </ListGroupItem>

                <ListGroupItem>
                    <div>
                        <div className='mb-2'>Corrective: </div>
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
        {/* TR AR */}
        {data.TR.length >= 1 &&
        <>
        <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
        {data.TRAR.map(item => 
        <div className='mb-3'>    
        <Card >
            <CardHeader>
                ID: {item.ID}
            </CardHeader>
          <ListGroup className=' text-end' flush>

                <ListGroupItem>
                    <div>
                        <div className='mb-2'>التعليق: </div>
                        <div>
                            {item.Comment}
                        </div>
                    </div>
                </ListGroupItem>

                <ListGroupItem>
                    <div>
                        <div className='mb-2'>التصحيح: </div>
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
            <div className='bg-secondary text-white  p-4 form-title rounded-top fw-bold'>
                RD5
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
                        {/* TR EN*/}
            
            {data.RD5.map(item => 
            <div className='mb-3'>    
            <Card >
                <CardHeader>
                    ID: {item.ID}
                </CardHeader>
            <ListGroup flush>

                    <ListGroupItem>
                        <div>
                            <div className='mb-2'>Comment: </div>
                            <div>
                                {item.Comment}
                            </div>
                        </div>
                    </ListGroupItem>

                    <ListGroupItem>
                        <div>
                            <div className='mb-2'>Corrective: </div>
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

        {/* RD5 AR */}
        {data.RD5.length >= 1 &&
        <>
          <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
            {data.RD5AR.map(item => 
            <div className='mb-3'>    
            <Card >
                <CardHeader>
                    ID: {item.ID}
                </CardHeader>
            <ListGroup className='text-end' flush>

                    <ListGroupItem>
                        <div>
                        <div className='mb-2'>التعليق: </div>
                            <div>
                                {item.Comment}
                            </div>
                        </div>
                    </ListGroupItem>

                    <ListGroupItem>
                        <div>
                        <div className='mb-2'>التصحيح: </div>
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
            <div className='bg-secondary text-white  p-4 form-title rounded-top fw-bold'>
                RD5 Inspection
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
                        {/* TR EN*/}
            
            {data.RD5Inspection.map(item => 
            <div className='mb-3'>    
            <Card >
                <CardHeader>
                    ID: {item.ID}
                </CardHeader>
            <ListGroup flush>

                    <ListGroupItem>
                        <div>
                            <div className='mb-2'>Comment: </div>
                            <div>
                                {item.Comment}
                            </div>
                        </div>
                    </ListGroupItem>

                    <ListGroupItem>
                        <div>
                            <div className='mb-2'>Corrective: </div>
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

        {/* RD5 Inspection AR */}
        {data.RD5Inspection.length >= 1 &&
        <>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
                        {/* TR EN*/}
            
            {data.RD5Inspection.map(item => 
            <div className='mb-3'>    
            <Card >
                <CardHeader>
                    ID: {item.ID}
                </CardHeader>
            <ListGroup className='text-end' flush>

                    <ListGroupItem>
                        <div>
                        <div className='mb-2'>التعليق: </div>
                            <div>
                                {item.Comment}
                            </div>
                        </div>
                    </ListGroupItem>

                    <ListGroupItem>
                        <div>
                        <div className='mb-2'>التصحيح: </div>
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
            <div className='bg-secondary text-white  p-4 form-title rounded-top fw-bold'>
                Notes
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
                        {/* TR EN*/}
            
            {data.Note.map(item => 
            <div className='mb-3'>    
            <Card >
                <CardHeader>
                    ID: {item.ID}
                </CardHeader>
            <ListGroup flush>

                    <ListGroupItem>
                        <div>
                            <div className='mb-2'>Comment: </div>
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

        {/* NOTE AR*/}
        {data.NoteAR.length >= 1 &&
        <>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
                        {/* TR EN*/}
            
            {data.NoteAR.map(item => 
            <div className='mb-3'>    
            <Card >
                <CardHeader>
                    ID: {item.ID}
                </CardHeader>
            <ListGroup className='text-end' flush>

                    <ListGroupItem>
                        <div>
                        <div className='mb-2'>التعليق: </div>
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
