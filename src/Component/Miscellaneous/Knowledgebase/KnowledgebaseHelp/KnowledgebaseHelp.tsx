import { Col, Form, FormGroup, Input } from 'reactstrap'
import { H3, Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { KnowledgebaseHelpQue, KnowledgebasePlaceholder } from '../../../../utils/Constant'
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon'

const KnowledgebaseHelp = () => {
  return (
    <Col xs="12" className='position-relative'>
      <div className="knowledgebase-bg">
        <Image className="bg-img-cover bg-center" src={dynamicImage(`knowledgebase/bg_1.jpg`)} alt="looginpage"/>
      </div>
      <div className="knowledgebase-search">
        <div>
          <H3>{KnowledgebaseHelpQue}</H3>
          <Form onSubmit={(e)=>e.preventDefault()} className="form-inline" method="get">
            <FormGroup className="w-100">
              <SvgIcon iconId='search' className='feather'/>
              <Input className="form-control-plaintext w-100" type="text" placeholder={KnowledgebasePlaceholder}/>
            </FormGroup>
          </Form>
        </div>
      </div>
    </Col>
  )
}

export default KnowledgebaseHelp