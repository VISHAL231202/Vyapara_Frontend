import React, { useState } from 'react'
import { Btn, ToolTip } from '../../../../AbstractElements';
import { CommonTooltipProp } from '../../../../Type/Ui-Kits/UiKitsTypes';

const CommonTooltip:React.FC<CommonTooltipProp> = ({ item,outline,pill }) => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  return (
    <>
      <Btn outline={outline} color={item.btnColor? item.btnColor:""} id={"Tooltip-" + item.id} className={`mb-0 me-0 ${pill ? "rounded-pill" : ""}`}>{item.btnText}</Btn>
      <ToolTip placement={item.placement} isOpen={tooltip} target={"Tooltip-" + item.id} toggle={toggle}>{item.tooltip}</ToolTip>
    </>
  )
}

export default CommonTooltip