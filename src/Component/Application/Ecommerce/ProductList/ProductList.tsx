import { Card, CardBody, Col, Container, Input, Label, Row } from 'reactstrap'
import DataTable from "react-data-table-component";
import CollapseFilterData from './CollapseFilterData';
import { useMemo, useState } from 'react';
import { Ecommerce, ProductList, SearchTableButton } from '../../../../utils/Constant';
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { productListData, productListTableData, productListTableDataColumn } from '../../../../Data/Application/Ecommerce/ProductList';
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader';

const ProductListContainer = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = productListTableData.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <>
      <Breadcrumbs mainTitle={ProductList} parent={Ecommerce} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title='Individual column searching (text inputs)' span={productListData} headClass='pb-0' />
              <CardBody>
                <CollapseFilterData />
                <div className="list-product">
                  <div className="table-responsive">
                    <DataTable data={filteredItems} columns={productListTableDataColumn} striped highlightOnHover pagination subHeader subHeaderComponent={subHeaderComponentMemo} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductListContainer