import "./style.css";
import React from "react";
// import { GridPDFExport } from '@progress/kendo-react-pdf';
// import { ExcelExport } from '@progress/kendo-react-excel-export';
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
  GridSearchBox,
} from "@progress/kendo-react-grid";
import {
  // BudgetCell,
  ColumnMenu,
  PersonCell,
  // ProgressCell,
  // RatingCell,
  // CountryCell,
} from "./custom-cells";
//import { employees } from "./employees";
import { PersonCell2 } from "./custom-cells";
import { BudgetCell } from "./custom-cells";
const DATA_ITEM_KEY = "id";
const CGrid = (_props) => {
  const { DetailComponent, data } = _props;

  return (
    <Grid
      style={{
        height: "670px",
      }}
      dataItemKey={DATA_ITEM_KEY}
      data={data ?? []}
      autoProcessData={true} // client side filtering
     // onDataStateChange={(_e)=>console.table(_e)}
      sortable={true}
      pageable={{
        pageSizes: true,
      }}
      onFilterChange={(_e)=>console.table(_e)}
      on
      selectable={false}
      defaultTake={10}
      defaultSkip={0}
      onRowDoubleClick={(e) => {
        alert("Double clciked");
      }}
      detail={() => (DetailComponent ? <DetailComponent /> : <span>-</span>)}
    >
      <GridToolbar>
        <GridSearchBox
          style={{
            width: 210,
          }}
        />
        <ButtonGroup>
          <Button themeColor={"base"}>Export to Excel</Button>
          <Button themeColor={"base"}>Export to PDF</Button>
        </ButtonGroup>
      </GridToolbar>
      <Column
        filterable={false}
        groupable={false}
        width={50}
        columnType="checkbox"
      />
      <Column
        field="full_name"
        title="Contact Name"
        columnMenu={ColumnMenu}
        cells={{
          data: PersonCell,
        }}
        //width="250px"
      />
      <Column
        field="budget"
        title="Budget"
        columnMenu={ColumnMenu}
        cells={{
          data: BudgetCell,
        }}
        //width="250px"
      />
      <Column
        field="full_name"
        title="Contact Name"
        columnMenu={ColumnMenu}
        cells={{
          data: PersonCell,
        }}
        //width="250px"
      />
      <Column
        field="budget"
        title="Budget"
        columnMenu={ColumnMenu}
        cells={{
          data: BudgetCell,
        }}
        //width="250px"
      />
      <Column
        field="full_name"
        title="Contact Name"
        columnMenu={ColumnMenu}
        cells={{
          data: PersonCell,
        }}
        //width="250px"
      />
      <Column
        field="budget"
        title="Budget"
        columnMenu={ColumnMenu}
        cells={{
          data: BudgetCell,
        }}
        //width="250px"
      />
      <Column
        field="full_name"
        title="Contact Name"
        columnMenu={ColumnMenu}
        cells={{
          data: PersonCell,
        }}
        //width="250px"
      />
      <Column
        field="budget"
        title="Budget"
        columnMenu={ColumnMenu}
        cells={{
          data: BudgetCell,
        }}
        //width="250px"
      />
    </Grid>
  );
};
export default CGrid;
