import { Fragment } from 'react'
import { Card, Col, Form, Input, Label, Row } from 'reactstrap'
import { Badges, P } from '../../../../../AbstractElements'
import { horizontalStyleDataList } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'
import { HorizontalStyleFormProp } from '../../../../../Type/Forms/FormControls/FormsControls'

const HorizontalStyleForm = () => {
  return (
    <Form className="mega-horizontal">
      <Row>
        {horizontalStyleDataList.map(({ megaTitle, child }, index) => (
          <Fragment key={index}>
            <Col sm="3">
              <P className="mega-title">{megaTitle}</P>
            </Col>
            {child.map(({ id, color, name, badgeTitle, digits, spanText, colClass, check, spanClass, star, cardClass }: HorizontalStyleFormProp) => (
              <Col sm="9" key={id} className={colClass}>
                <Card className={cardClass}>
                  <div className="p-20 pb-0 d-flex">
                    <Label for={`radio-${id}`} className="d-block" check>
                      <Input id={`radio-${id}`} type="radio" name={name} value="option1" defaultChecked={check} className={`radio-border-${color} radio-${color}`} />
                      {badgeTitle}
                    </Label>
                    <div className={`flex-grow-1`}>
                      <Badges color={color} className="pull-right digits">{digits}</Badges>
                    </div>
                  </div>           
                  <span className={spanClass}>
                    {star && star.map(({ id, starClass }) => <i key={id} className={`icofont icofont-star ${starClass}`}></i>)}
                    {spanText}
                  </span>
                </Card>
              </Col>
            ))}
          </Fragment>
        ))}
      </Row>
    </Form>
  )
}

export default HorizontalStyleForm