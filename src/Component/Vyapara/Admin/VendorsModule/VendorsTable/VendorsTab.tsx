import React, { useMemo, useState } from "react";
import { SearchTableButton } from "../../../../../utils/Constant";
import { Input, Label } from "reactstrap";
import DataTable, { TableColumn } from "react-data-table-component";
import { VendorsTabType } from "../../../../../Type/Vyapara/Admin/Vendors/VendorManangement";

interface ActionDataSourceProp {
  data: VendorsTabType;
}

interface PurTabProps {
  selectedStatus: number;
}

function VendorsTab({ selectedStatus }: PurTabProps) {
  const VendorTabBodyData = [
    {
      id: 1,
      vendorId: "#IH63390",
      businessName: "Elle Amberson",
      location: "Mumbai",
      mobNo: "1234567890",
      activeOrders: 12,
      action: "t-1",
    },
    {
      id: 2,
      vendorId: "#F749U8",
      businessName: "Anna Catmire",
      location: "Delhi",
      mobNo: "1234567890",
      activeOrders: 12,
      action: "t-2",
    },
    {
      id: 3,
      vendorId: "#RT5094",
      businessName: "Laura Dagson",
      location: "Hyderabad",
      mobNo: "1234567890",
      activeOrders: 8,
      action: "t-3",
    },
    {
      id: 4,
      vendorId: "#PZ7384",
      businessName: "Rachel Green",
      location: "Kolkata",
      mobNo: "1234567890",
      activeOrders: 7,
      action: "t-4",
    },
  ];

  const ActionDataSource: React.FC<ActionDataSourceProp> = ({ data }) => (
    <div className="action simple-list tb-action-flex" key={data.id}>
      <button
        className="edge-btn btn-primary tb-action-button"
        id={`btn-3`}
        // onClick={() => handleViewModal(data)}
      >
        <i className="icon-eye" /> View
      </button>
      <button
        className="edge-btn btn-secondary tb-action-button"
        id={`btn-3`}
        // onClick={() => handleViewModal(data)}
      >
        <i className="icon-pencil-alt" /> Edit
      </button>
      <button
        className="edge-btn btn-tertiary tb-action-button"
        id={`btn-3`}
        // onClick={() => handleViewModal(data)}
      >
        <i className="icon-trash" /> Delete
      </button>
    </div>
  );

  const vendorManagementColumn: TableColumn<VendorsTabType>[] = [
    {
      name: "Vendor ID",
      selector: (row) => row.vendorId,
      sortable: true,
    },
    {
      name: "Business Name",
      selector: (row) => row.businessName,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "Mobile No",
      selector: (row) => row.mobNo,
      sortable: true,
    },
    // {
    //   name: "Active Orders",
    //   selector: (row) => row.activeOrders,
    //   sortable: true,
    // },
    {
      name: "Action",
      cell: (row) => <ActionDataSource data={row} />,
      sortable: true,
      width: "25%",
    },
  ];

  const [filterText, setFilterText] = useState("");

  // ✅ Convert selectedStatus number to matching status string
  const statusMap: Record<number, string> = {
    1: "Mumbai",
    2: "Delhi",
    3: "Hyderabad",
    4: "Kolkata",
  };

  // ✅ Filter by both search & selected status
  const filteredItems = VendorTabBodyData.filter((item) => {
    const matchesStatus =
      selectedStatus === 0 || item.location === statusMap[selectedStatus];
    const matchesSearch = item.location
      .toLowerCase()
      .includes(filterText.toLowerCase());

    return matchesStatus && matchesSearch;
  });
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div
        id="basic-1_filter"
        className="dataTables_filter d-flex align-items-center"
      >
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilterText(e.target.value)
          }
          type="search"
          value={filterText}
        />
      </div>
    );
  }, [filterText]);
  return (
    <>
      <div className="table-responsive">
        <DataTable
          columns={vendorManagementColumn}
          data={filteredItems}
          pagination
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          highlightOnHover
          striped
          responsive
        />
      </div>
    </>
  );
}

export default VendorsTab;
