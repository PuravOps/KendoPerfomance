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
  InnerPersonCell,
  PersonCell,
  // ProgressCell,
  // RatingCell,
  // CountryCell,
} from "./custom-cells";
//import { employees } from "./employees";
import { PersonCell2 } from "./custom-cells";
const DATA_ITEM_KEY = "id";
const CBasicGrid = (_props) => {

    const { DetailComponent, data} = _props;

  return (
    <Grid
      style={{
        height: "400px",
      }}
      dataItemKey={DATA_ITEM_KEY}
      data={data ?? []}
      autoProcessData={true}
      sortable={true}
      pageable={{
        pageSizes: true,
      }}

      selectable={true}
      defaultTake={10}
      defaultSkip={0}
    //  detail={() => DetailComponent ? <DetailComponent /> : <span>-</span>}
    >     
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
          data: InnerPersonCell,
        }}        
       // width="250px"
      />
      <Column
        field="is_online"
        title="Online"
        columnMenu={ColumnMenu}
        cells={{
          data: PersonCell2,
        }}
        //width="250px"
      />
    </Grid>
  );
};
export default CBasicGrid;
