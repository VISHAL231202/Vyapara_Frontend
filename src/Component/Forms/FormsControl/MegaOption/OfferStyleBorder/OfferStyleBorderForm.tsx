import { Card, Col, Form, Input, Label, Row } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { offerBorderStyleDataList } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'
import { dynamicImage } from '../../../../../Service'

const OfferStyleBorderForm = () => {
  return (
    <Form className="mega-inline offer-style">
      <Row className="flex-column">
        {offerBorderStyleDataList.map(({id,image,spanText,check},index) => (
          <Col xs="12" key={index}>
            <Card>
              <div className="p-20">
                <div className='form-check'>
                  <Input id={`checkbox-${id}`} type="checkbox" defaultChecked={check}/>
                  <Label for={`checkbox-${id}`} className="my-0" check>
                    <div className='flex-grow-1'>
                      <span className="d-flex list-behavior-1">
                        <span className="flex-shrink-0">
                          <Image className="tab-img b-r-0 img-fluid" src={dynamicImage(`${image}`)} alt="image"/>
                        </span>
                        <span className="flex-grow-1">
                          <span className="mb-0">{spanText}</span>
                        </span>
                      </span>
                    </div>
                  </Label>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Form>
  )
}

export default OfferStyleBorderForm