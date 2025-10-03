import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H4, H6 } from '../../../AbstractElements';
import { IconsCommonProps2 } from '../../../Type/Icons/IconsTypes';

const ThemifyIconCard:React.FC<IconsCommonProps2> = ({ iconType, title, parentCallback }) => {
    const getITag = (tag: string | undefined) => {
      parentCallback(tag);
    };
  
    return (
      <>
        <Col xl="12">
          <Card>
            <CardHeader className='pb-0 d-flex justify-content-between align-items-center'>
              <H4>{title}</H4>
            </CardHeader>
            <CardBody>
              <Row className="icon-event iconly-icons icon-lists">
                {iconType.map((icon, i) => {
                  return (
                    <Col xxl="2" xl="3" key={i} onClick={() => getITag(icon)}>
                      <Card className="d-flex align-items-center flex-column default-border">
                        <i className={`${icon}`}></i>
                        <div className="flex-grow-1">
                         <H6>{icon}</H6>
                         </div>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  };

export default ThemifyIconCard