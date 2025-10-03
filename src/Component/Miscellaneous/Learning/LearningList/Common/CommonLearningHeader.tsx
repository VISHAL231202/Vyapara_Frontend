import React from 'react'
import { CardHeader } from 'reactstrap'
import { Btn, H5 } from '../../../../../AbstractElements'
import { ChevronDown, ChevronUp } from 'react-feather'
import { CommonLearningHeaderProp } from '../../../../../Type/Miscellaneous/Learning/Learning'

const CommonLearningHeader:React.FC<CommonLearningHeaderProp> = ({heading,isOpen,setIsOpen}) => {
  return (
    <CardHeader>
      <H5 className="mb-0">
        <Btn color="transparent" className="btn-link d-flex align-items-center gap-2 justify-content-between d-block w-100" onClick={() => setIsOpen(!isOpen)}>{heading}
        {isOpen ? <ChevronDown className="m-0" /> : <ChevronUp className="m-0" />}
        </Btn>
      </H5>
    </CardHeader>
  )
}

export default CommonLearningHeader