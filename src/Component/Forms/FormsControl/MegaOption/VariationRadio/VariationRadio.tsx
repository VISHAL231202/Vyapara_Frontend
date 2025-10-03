import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap'
import { H6, Image } from '../../../../../AbstractElements'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import SvgIcon from '../../../../../CommonElements/SVG/SvgIcon'
import { variationRadioData, variationRadioDataList } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'
import { dynamicImage } from '../../../../../Service'
import { VariationRadioProp } from '../../../../../Type/Forms/FormControls/FormsControls'
import { VariationRadios } from '../../../../../utils/Constant'

const VariationRadio = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={VariationRadios} span={variationRadioData} headClass='pb-0' />
        <CardBody>
          <Row className="g-3">
            {variationRadioDataList.map(({ colClass, title, child }, index) => (
              <Col xl="4"  className={colClass ? colClass : ""} key={index}>
                <div className="card-wrapper default-border rounded-3 h-100 checkbox-checked">
                  <H6 className="sub-title">{title}</H6>
                  {child.map(({ id, labelText, image, icon, name, defaultChecked, iconColor }:VariationRadioProp) => (
                    <div className="payment-wrapper" key={id}>
                      <div className="payment-first">
                        <Label for={`ptm-${id}`} className="d-block">
                          <Input id={`ptm-${id}`} className="radio radio-primary"  type="radio" name={name} value="option1" defaultChecked={defaultChecked} />{labelText}
                        </Label>
                      </div>
                      {(image || icon) && (
                        <div className="payment-second">
                          {image && <Image className="img-fluid" src={dynamicImage(`${image}`)} alt="ecommerce" />}
                          {icon && <SvgIcon className={`feather stroke-${iconColor}`} iconId={icon} />}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default VariationRadio