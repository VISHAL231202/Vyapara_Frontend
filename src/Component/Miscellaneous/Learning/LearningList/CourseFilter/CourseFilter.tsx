import { Row } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'
import { LearningFilter } from '../../../../../utils/Constant'
import CourseCategories from './CourseCategories'
import CategoriesCheckBoxes from './CategoriesCheckBoxes/CategoriesCheckBoxes'
import UpcomingCourses from './UpcomingCourses/UpcomingCourses'
import { useState } from 'react'

const CourseFilter = () => {
  const [filter,setFilter]= useState(false)
  return (
    <div className="md-sidebar">
      <Btn color="primary" className="email-aside-toggle md-sidebar-toggle" onClick={()=>setFilter(!filter)}>{LearningFilter}</Btn>
      <div className={`md-sidebar-aside job-sidebar custom-scrollbar ${filter ? "open" : ""}`}>
        <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
          <Row>
            <CourseCategories />
            <CategoriesCheckBoxes />
            <UpcomingCourses />
          </Row>
        </div>
      </div>
    </div>
  )
}

export default CourseFilter