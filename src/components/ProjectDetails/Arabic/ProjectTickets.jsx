import React from 'react'
import { Card, CardHeader, Col, ListGroup, ListGroupItem, Row } from 'reactstrap'

export default function ProjectTickets({data}) {
    
  return (
    <div> 
        <>
        {/* TR */}
        {data.TRAR.length >= 1 &&
        <>
        <div className='bg-dark text-white  p-2 ps-4 form-title rounded-top fw-bold text-end'>
    :    مخاطر تؤدى إلى تحفظات فنية في شهادة تأكيد السلامة (التقرير النهائي)
        </div>
        <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
        {data.TRAR.map((item,i) => 
        <div className='mb-3' key={i}>    
        <Card >
            <CardHeader>
                <span className='fw-bold'>ID: {item.ID}</span>
            </CardHeader>
          <ListGroup className=' text-end' flush dir='rtl'>

                <ListGroupItem>
                    <div>
                        <div className='mb-2 fw-bold'>التعليق :</div>
                        <div>
                            {item.Comment}
                        </div>
                    </div>
                </ListGroupItem>
                {item.Corrective &&
                <ListGroupItem>
                    <div>
                        <div className='mb-2 fw-bold'>التصحيح : </div>
                        <div>{item.Corrective}</div>
                    </div>
                </ListGroupItem>
                }
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
            <div className='bg-dark text-white  p-2 ps-4 form-title rounded-top fw-bold text-end'>
        :       ملاحظات تؤدي الى توقف العمل ويتم حلها بإرسال العميل المطلوب قبل زيارة الفاحص الفني إلى الموقع
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
            {data.RD5AR.map((item,i) => 
            <div className='mb-3' key={i}>    
            <Card >
                <CardHeader>
                    <span className='fw-bold'>ID: {item.ID}</span>
                </CardHeader>
            <ListGroup className='text-end' flush dir='rtl'>

                    <ListGroupItem>
                        <div>
                        <div className='mb-2 fw-bold'>التعليق :</div>
                            <div>
                                {item.Comment}
                            </div>
                        </div>
                    </ListGroupItem>
                    {item.Corrective &&
                    <ListGroupItem>
                        <div>
                        <div className='mb-2 fw-bold'>التصحيح : </div>
                            <div>{item.Corrective}</div>
                        </div>
                    </ListGroupItem>
                    }
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
            <div className='bg-dark text-white  p-2 ps-4 form-title rounded-top fw-bold text-end'>
        :       ملاحظات تؤدي الى توقف العمل ويتم حلها بإرسال العميل المطلوب أثناء زيارة الفاحص الفني إلى الموقع
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
            {data.RD5InspectionAR.map((item,i) => 
            <div className='mb-3' key={i}>    
            <Card >
                <CardHeader>
                    <span className='fw-bold'>ID: {item.ID}</span>
                </CardHeader>
            <ListGroup className='text-end' flush dir='rtl'>

                    <ListGroupItem>
                        <div>
                        <div className='mb-2 fw-bold'>التعليق :</div>
                            <div>
                                {item.Comment}
                            </div>
                        </div>
                    </ListGroupItem>
                    {item.Corrective &&
                    <ListGroupItem>
                        <div>
                        <div className='mb-2 fw-bold'>التصحيح : </div>
                            <div>{item.Corrective}</div>
                        </div>
                    </ListGroupItem>
                    }
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
        .    ملاحظات فنية في شهادة تأكيد السلامة (التقرير النهائي)
            </div>
            <div className='form-container shadow-lg p-4 bg-body rounded-bottom mb-4'>
                        {/* TR EN*/}
            
            {data.NoteAR.map((item,i) => 
            <div className='mb-3' key={i}>    
            <Card >
                <CardHeader>
                    <span className='fw-bold'>ID: {item.ID}</span>
                </CardHeader>
            <ListGroup className='text-end' flush dir='rtl'>

                    <ListGroupItem>
                        <div>
                        <div className='mb-2 fw-bold'>التعليق :</div>
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
