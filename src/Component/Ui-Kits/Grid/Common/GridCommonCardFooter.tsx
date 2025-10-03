import { CardFooter, Table } from "reactstrap";
import { Class, ValueOfClass } from "../../../../utils/Constant";
import { GridCommonCardFooterType } from "../../../../Type/Ui-Kits/UiKitsTypes";

const GridCommonCardFooter:React.FC<GridCommonCardFooterType> = ({ className, valueClass }) => {
  return (
    <CardFooter>
      <Table className="w-100 table-borderless" responsive>
        <tbody>
          <tr>
            <th>{Class}</th>
            <th>{ValueOfClass}</th>
          </tr>
          <tr>
            <td><code>{className}</code></td>
            <td>{valueClass}</td>
          </tr>
        </tbody>
      </Table>
    </CardFooter>
  );
};

export default GridCommonCardFooter;