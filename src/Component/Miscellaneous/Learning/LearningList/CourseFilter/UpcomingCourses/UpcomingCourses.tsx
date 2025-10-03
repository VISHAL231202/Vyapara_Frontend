import { Card, CardBody, Col, Collapse } from 'reactstrap'
import CommonLearningHeader from '../../Common/CommonLearningHeader'
import { CourseBy, Href, UpcomingCoursesHeading } from '../../../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { H5 } from '../../../../../../AbstractElements'
import { Rating } from "react-simple-star-rating";
import { useState } from 'react'
import { upcomingCourseData } from '../../../../../../Data/Miscellaneous/Learning/Learning'

const UpcomingCourses = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <CommonLearningHeader heading={UpcomingCoursesHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className="upcoming-course">
            {upcomingCourseData.map((data, index) => (
              <div className="d-flex" key={index}>
                <div className="flex-grow-1">
                  <span className="f-w-600">{data.courseHeading}</span>
                  <span className="d-block">
                    {CourseBy} <Link to={Href} className='font-primary'>{data.courseTeam}</Link>
                  </span>
                  <span className="d-block">
                    <Rating className="ms-1" fillColor={"#F0AD4E"} initialValue={Math.random() * 5} size={18} />
                  </span>
                </div>
                <div>
                  <H5 className="mb-0 font-primary">{data.courseDate}</H5>
                  <span className="d-block">{data.courseMonth}</span>
                </div>
              </div>
            ))}
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  )
}

export default UpcomingCourses