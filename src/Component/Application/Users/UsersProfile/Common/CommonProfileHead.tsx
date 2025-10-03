import { UserPropsType } from '../../../../../Type/Application/Users/UsersProfile'
import { Col, Row } from 'reactstrap'
import { H5, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'

const CommonProfileHead = ({ activeTime ,image}: UserPropsType) => {
  return (
    <Row>
      <Col sm="8">
        <div className="d-flex">
          <Image className="img-thumbnail rounded-circle me-3" src={dynamicImage(`${image === "1" ? "user" : "avatar" }/${image}.jpg`)} alt="GenericPlaceholder" />
          <div className="flex-grow-1 align-self-center">
            <H5 className="mt-0 user-name">{'JOHAN DIO'}</H5>
          </div>
        </div>
      </Col>
      <Col sm="4" className="align-self-center">
        <div className="float-sm-end">
          <small className="font-light">{activeTime}</small>
        </div>
      </Col>
    </Row>
  )
}

export default CommonProfileHead