import { P } from '../../../../AbstractElements'
import { blockquote } from '../../../../Data/Ui-Kits/Typography/Typography'

const DynamicBlockquotes = () => {
  return (
    <>
      {blockquote.map(({ text, name, className,color }, index) => (
        <div className={`figure text-${className} d-block dark-blockquote`} key={index}>
          <blockquote className={`blockquote mb-2 bg-light-${color} ${index === 1 ? "b-r-tertiary" : ""}`}>
            <P className={`mb-0 f-16`}>{text}</P>
            <span className="blockquote-footer">{name}</span>
          </blockquote>
        </div>
      ))}
    </>
  )
}

export default DynamicBlockquotes