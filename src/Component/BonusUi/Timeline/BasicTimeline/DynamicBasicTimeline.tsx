import { H6, LI, P } from '../../../../AbstractElements'
import { basicTimeLineDataList } from '../../../../Data/BonusUi/Timeline/Timeline'

const DynamicBasicTimeline = () => {
  return (
    <>
      {basicTimeLineDataList.map(({ color, date, time, title, span }, index) => (
        <LI className="d-flex" key={index}>
          <div className={`timeline-dot-${color}`}></div>
          <div className="w-100 ms-3">
            <P className="d-flex justify-content-between mb-2">
              <span className="date-content bg-light-primary">{date}</span>
              <span>{time}</span>
            </P>
            <H6 className="f-w-600">{title}<span className="dot-notification"></span></H6>
            <P className="font-light">{span}</P>
          </div>
        </LI>
      ))}
    </>
  )
}

export default DynamicBasicTimeline