import { Link } from 'react-router-dom'
import { H6, P } from '../../../../../AbstractElements'
import { useAppDispatch, useAppSelector } from '../../../../../ReduxToolkit/Hooks'
import { setHistory } from '../../../../../ReduxToolkit/Reducers/ContactSlice'
import { ContactCreated, ContactHistory, Href } from '../../../../../utils/Constant'

const HistoryClass = () => {
  const {history} = useAppSelector((state)=>state.contact)
  const dispatch = useAppDispatch()
  return (
    <div id="right-history" className={history ? "show":""}>
      <div className="modal-header p-20 border-bottom">
        <H6 className="modal-title w-100">{ContactHistory}
          <span className="pull-right">
            <Link className="closehistory" to={Href} onClick={()=>dispatch(setHistory())}>
              <i className="icofont icofont-close"></i>
            </Link>
          </span>
        </H6>
      </div>
      <div className="history-details">
        <div className="text-center">
          <i className="icofont icofont-ui-edit"></i>
          <P>{'Contact has not been modified yet.'}</P>
        </div>
        <div className="d-flex">
          <i className="icofont icofont-star"></i>
          <div className="flex-grow-1 mt-0">
            <H6 className="mt-0">{ContactCreated}</H6>
            <P className="mb-0">{'Contact is created via mail'}</P>
            <span className="f-12">Sep 10, 2022 4:00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryClass