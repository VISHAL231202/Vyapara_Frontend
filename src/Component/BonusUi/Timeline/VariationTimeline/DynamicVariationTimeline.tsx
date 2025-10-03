import { H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { variationTimeLineDataList } from '../../../../Data/BonusUi/Timeline/Timeline'
import { dynamicImage } from '../../../../Service'

const DynamicVariationTimeline = () => {
  return (
    <>
      {variationTimeLineDataList.map((data, index) => (
        <LI className={`d-flex ${data.className}`} key={index}>
          <div className={`activity-dot-${data.color}`}></div>
          <div className="w-100 ms-3">
            <P className="d-flex justify-content-between mb-2">
              <span className="date-content bg-light-primary">{data.date}</span>
              <span>{data.time}</span>
            </P>
            <H6 className="f-w-600">
              {data.title}
              <span className="dot-notification"></span>
            </H6>
            <P className={data.subTitleClass ? data.subTitleClass : ""}>{data.subTitle}</P>
            {data.image && (
              <div className="recent-images">
                <UL className='flex-row'>
                  {data.image.map((item, index) => (
                    <LI key={index}>
                      <div className="recent-img-wrap">
                        <Image src={dynamicImage(`${item}`)} className="img-fluid" alt="chair" />
                      </div>
                    </LI>
                  ))}
                </UL>
              </div>
            )}
          </div>
        </LI>
      ))}
    </>
  )
}

export default DynamicVariationTimeline