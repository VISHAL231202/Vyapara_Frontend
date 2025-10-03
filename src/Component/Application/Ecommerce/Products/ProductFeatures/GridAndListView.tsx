import { useAppDispatch } from '../../../../../ReduxToolkit/Hooks';
import { Link } from 'react-router-dom';
import { Href } from '../../../../../utils/Constant';
import { setColView, setListView } from '../../../../../ReduxToolkit/Reducers/FilterSlice';
import SvgIcon from '../../../../../CommonElements/SVG/SvgIcon';

const GridAndListView = () => {
  const dispatch = useAppDispatch();

  const gridLayout = () => {
    dispatch(setListView(false));
    dispatch(setColView("col-xl-3 col-lg-4 col-sm-6"));
  };

  const listLayout = () => dispatch(setListView(true));
  return (
    <>
      <div className="square-product-setting d-inline-block">
        <Link className="icon-grid grid-layout-view" to={Href} onClick={gridLayout}>
          <SvgIcon iconId='grid' className='feather' />
        </Link>
      </div>
      <div className="square-product-setting d-inline-block">
        <Link className="icon-grid m-0 list-layout-view" to={Href} onClick={listLayout}>
          <SvgIcon iconId='list' className='feather' />
        </Link>
      </div>
    </>
  )
}

export default GridAndListView