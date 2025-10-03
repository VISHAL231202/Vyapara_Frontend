import { useState } from 'react';
import { Card, CardHeader, Col, Container, Row } from 'reactstrap';
import { H4 } from '../../../AbstractElements';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { FlagIcon, Icons } from '../../../utils/Constant';
import IconMarkUp from '../IconMarkUp';
import FlagIconCardBody from './FlagIconCardBody';

const FlagIconsContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const getITag = (tag: string) => {
    setITag({
      iTag: '<i className="flag-icon flag-icon-' + tag + '"></i>',
    });
    setIcon({
      icon: "flag-icon flag-icon-" + tag + " fa-2x",
    });
  };

  return (
    <>
      <Breadcrumbs mainTitle={FlagIcon} parent={Icons} />
      <Container fluid>
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader className='pb-0 d-flex justify-content-between align-items-center'>
                <H4>{FlagIcon}</H4>
              </CardHeader>
              <FlagIconCardBody getITag={getITag}/>
            </Card>
          </Col>
        </Row>
      </Container>
      <IconMarkUp iTag={iTag} icons={icon} svg={false} />
    </>
  );
}

export default FlagIconsContainer