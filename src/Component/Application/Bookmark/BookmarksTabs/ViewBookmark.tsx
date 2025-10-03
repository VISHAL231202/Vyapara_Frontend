import { useAppDispatch } from '../../../../ReduxToolkit/Hooks'
import { LI, UL } from '../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { Href } from '../../../../utils/Constant'
import { setGridView } from '../../../../ReduxToolkit/Reducers/BookmarkTabSlice'
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon'

const ViewBookmark = () => {
    const dispatch = useAppDispatch()
    const gridBookmark = () => dispatch(()=> dispatch(setGridView(true))) 
    const listBookmark = () => dispatch(()=> dispatch(setGridView(false))) 
    return (
      <UL className='flex-row' >
        <LI>
            <Link className="grid-bookmark-view" to={Href}>
                <SvgIcon className="feather" iconId='grid' onClick={gridBookmark} />
            </Link>
        </LI>
        <LI>
            <Link className="list-layout-view" to={Href}>
                <SvgIcon className='feather' iconId='list' onClick={listBookmark} />
            </Link>
        </LI>
      </UL>
    )
}

export default ViewBookmark