import { useState } from 'react'
import { Btn, Popovers } from '../../../../AbstractElements';
import { CommonPopoverProp } from '../../../../Type/Ui-Kits/UiKitsTypes';

const CommonPopover:React.FC<CommonPopoverProp> = ({ item }) => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);
  return (
    <>
      <Btn size={item.size} color={item.btnColor} className="example-popover mb-0 me-0" id={`${"Popover-" + item.id}`}>{item.btnText}</Btn>
      <Popovers placement={item.placement} isOpen={popover} target={"Popover-" + item.id} toggle={toggle} trigger={item.trigger} title={item.popoverHeader}>
        {item.popoverBody}
      </Popovers>
    </>
  )
}

export default CommonPopover