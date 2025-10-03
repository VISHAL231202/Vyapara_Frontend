import { Card, CardBody, Col } from 'reactstrap'
import { displayData } from '../../../../Data/Ui-Kits/Typography/Typography'
import { DisplayHeadings } from '../../../../utils/Constant'
import { H2 } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon'

const DisplayCart = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={DisplayHeadings} span={displayData} headClass='pb-0' />
        <CardBody className="d-flex flex-column gap-2">
          <H2 className="display-1 m-0">Display 1</H2>
          <H2 className="display-2 m-0">Display 2</H2>
          <H2 className="display-3 m-0">Display 3</H2>
          <H2 className="display-4 m-0">Display 4</H2>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DisplayCart