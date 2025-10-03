import { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { TextColors } from '../../../../utils/Constant'
import { textColorDetail, textDataColors } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'
import CardHeaderCommon from '../../CardHeaderCommon'
import { P } from '../../../../AbstractElements'

const TextColorsCart = () => {
  return (
    <Col xl="5">
      <Card>
        <CardHeaderCommon title={TextColors} span={textColorDetail} headClass='pb-0' />
        <CardBody>
          <div className="d-flex flex-column gap-2">
            <P className="font-primary">This is a Primary text used class as .font-primary</P>
            {textDataColors.map((item, index) => (
              <Fragment key={index}>
                  <P className={item}>This is a {item} text used class as .{item}</P>
              </Fragment>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default TextColorsCart