import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { Alerts, P } from '../../../../AbstractElements'
import { Href } from '../../../../utils/Constant'
import { lightThemeList } from '../../../../Data/Ui-Kits/Alert/AlertData'

const LightThemeLeftSection = () => {
  return (
    <Col lg="6">
      <P className="mb-0">Primary Alert</P>
      <Alerts color="light-primary">
        <P className="mb-0">This is a
          <Link className="alert-link font-primary" to={Href}> Primary alert </Link>
          with an example link.Check it out.
        </P>
      </Alerts>
      {lightThemeList.map((title, index) => (
        <Fragment key={index}>
          <P className="mb-0">{title} Alert</P>
          <Alerts className={`alert-light-${title.toLocaleLowerCase()} border-0`}>
            <P className={"mb-0"}>{`This is a `}
              <Link className={`alert-link font-${title.toLocaleLowerCase()}`} to={Href}>{title} alert </Link> with an example link. Check it out.
            </P>
          </Alerts>
        </Fragment>
      ))}
    </Col>
  )
}

export default LightThemeLeftSection