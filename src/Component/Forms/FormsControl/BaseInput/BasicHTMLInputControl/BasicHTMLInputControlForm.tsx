import { CardBody, Form} from 'reactstrap'
import BasicPlaceholderInput from './BasicPlaceholderInput'
import BasicTelephoneInput from './BasicTelephoneInput'
import BasicDateInput from './BasicDateInput'
import BasicColorPickerInput from './BasicColorPickerInput'

const BasicHTMLInputControlForm = () => {
  return (
    <CardBody>
      <Form onSubmit={(event) => event.preventDefault()} className="theme-form g-3 row">
        <BasicPlaceholderInput />
        <BasicTelephoneInput />
        <BasicDateInput />
        <BasicColorPickerInput />
      </Form>
    </CardBody>
  )
}

export default BasicHTMLInputControlForm