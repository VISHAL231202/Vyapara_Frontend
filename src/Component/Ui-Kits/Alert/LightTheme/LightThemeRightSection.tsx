import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { Alerts, P } from '../../../../AbstractElements'
import { Href } from '../../../../utils/Constant'
import { lightThemeLists } from '../../../../Data/Ui-Kits/Alert/AlertData'

const LightThemeRightSection = () => {
  return (
    <Col lg="6">
      <P className="mb-1">Warning Alert</P>
      <Alerts color="light-warning" className="border-0">
        <P className="mb-0">{`This is a `}
          <Link className="alert-link font-warning" to={Href}>warning alert</Link>
          with an example link. Check it out.
        </P>
      </Alerts>
      {lightThemeLists.map(({title,color}, index) => (
        <Fragment key={index}>
          <P className="mb-1">{title}</P>
          <Alerts color={color}>
            <P className={"mb-0"}>{`This is a `}
              <Link className={`alert-link`} to={Href}>{title}</Link> with an example link. Check it out.
            </P>
          </Alerts>
        </Fragment>
      ))}
    </Col>
  )
}

export default LightThemeRightSection