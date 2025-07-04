import * as React from "react";
import {
  GridColumnMenuSort,
  GridColumnMenuFilter,
  GridColumnMenuGroup,
} from "@progress/kendo-react-grid";
import { ProgressBar } from "@progress/kendo-react-progressbars";
import { Checkbox, Rating } from "@progress/kendo-react-inputs";
export const BudgetCell = props => {
  const {
    dataItem
  } = props;
  if (dataItem && dataItem.target !== undefined) {
    const budget = dataItem.target;
    const formattedBudget = `$${budget.toFixed(2)}`;
    return <td {...props.tdProps}>{formattedBudget}</td>;
  }
};
export const ColumnMenu = (props) => {
  return (
    <div>
      <GridColumnMenuSort {...props} />
      <GridColumnMenuFilter {...props} />
      <GridColumnMenuGroup {...props} />
    </div>
  );
};
export const PersonCell = (props) => {
  const { dataItem } = props;
  if (!dataItem || !dataItem.image) {
    return dataItem.full_name;
  }
  const imageDataUrl = dataItem.image.replace(/url\('(.*)'\)/, "$1");
  return (
    <td {...props.tdProps}>
      {/* <img src={imageDataUrl} width="34" height="34" className="contact-img" /> */}
      <span
        style={{
          display: "inlineBlock",
          paddingLeft: "10px",
          verticalAlign: "middle",
          lineHeight: "32px",
        }}
        className="person-name"
      >
        {dataItem.full_name}
      </span>
    </td>
  );
};

export const InnerPersonCell = (props) => {
  const { dataItem } = props;
  if (!dataItem || !dataItem.image) {
    return dataItem.full_name;
  }
  const imageDataUrl = dataItem.image.replace(/url\('(.*)'\)/, "$1");
  return (
    <td {...props.tdProps}>
      {/* <img src={imageDataUrl} width="34" height="34" className="contact-img" /> */}
      <span
        style={{
        //  display: "inlineBlock",
          //paddingLeft: "10px",
          //verticalAlign: "middle",
         // lineHeight: "32px",
        }}
        className="person-name"
      >
        {dataItem.job_title}
      </span>
    </td>
  );
};


export const PersonCell2 = (props) => {
  const { dataItem } = props;
  if (!dataItem || !dataItem.image) {
    return dataItem.full_name;
  }
  return (
    <td {...props.tdProps}>
      <Checkbox checked={dataItem?.is_online} />

      {/* <span
        style={{
          display: "inlineBlock",
          paddingLeft: "10px",
          verticalAlign: "middle",
         // lineHeight: "32px",
        }}
       // className="person-name"
      > 
        <Checkbox />
      </span> */}
    </td>
  );
};

// export const ProgressCell = props => {
//   const progress = props.dataItem.target;
//   if (props.rowType === 'groupHeader') {
//     return;
//   }
//   return <td {...props.tdProps}>
//             <ProgressBar style={{
//       width: '150px',
//       height: '8px',
//       marginRight: '20px'
//     }} value={progress} labelVisible={false} />
//             {progress} %<span> </span>
//         </td>;
// };
// export const RatingCell = props => {
//   const field = props.field || '';
//   const value = props.dataItem[field];
//   if (props.rowType === 'groupHeader') {
//     return null;
//   }
//   return <td {...props.tdProps}>
//             <Rating value={value === null ? '' : props.dataItem[field]} readonly={true} />
//         </td>;
// };
// export const CountryCell = props => {
//   const {
//     dataItem
//   } = props;
//   if (!dataItem || !dataItem.flag) {
//     return null;
//   }
//   return <td {...props.tdProps}>
//             <img src={dataItem.flag} width="22" height="11" alt="Flag" style={{
//       marginLeft: '12px'
//     }} />
//         </td>;
// };
