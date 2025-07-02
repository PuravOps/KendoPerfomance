import React, { useState } from "react";
import { employees } from "./employees";
// import { PersonCell2 } from "./components/custom-cells";
import CGrid from "./components/CGrid";
import CBasicGrid from "./components/CBasicGrid";
const DATA_ITEM_KEY = "id";


import {
    TreeView,
    // TreeViewExpandChangeEvent,
    // TreeViewCheckChangeEvent,
    // TreeViewItemClickEvent,
    //  TreeViewCheckDescriptor,
    //  TreeViewOperationDescriptor,
    // TreeViewCheckChangeSettings,
     processTreeViewItems,
     handleTreeViewCheckChange
} from '@progress/kendo-react-treeview';



const App = () => {

  const tree = [
    {
        text: 'Furniture',
        items: [{ text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
    },
    {
        text: 'Decor',
        items: [{ text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
    }
];

    const [select, setSelect] = useState(['']);
    const [check, setCheck] = useState([]);
     const [expand, setExpand] = useState({
        ids: ['Item2'],
        idField: 'text'
    });



     const onItemClick = (event) => {
        setSelect([event.itemHierarchicalIndex]);
    };

    const onExpandChange = (event) => {
        const ids = expand.ids ? expand.ids.slice() : [];
        const index = ids.indexOf(event.item.text);

        index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
        setExpand({ ids, idField: 'text' });
    };

    const onCheckChange = (event) => {
        const settings = {
            singleMode: false,
            checkChildren: false,
            checkParents: false
        };
        setCheck(handleTreeViewCheckChange(event, check, tree, settings));
    };


  return (
    <>
      <CGrid
        data={employees}
        DetailComponent={(props) => <CBasicGrid data={employees} />}
      />
       {/* <TreeView
            data={processTreeViewItems(tree, {
                select: select,
                check: check,
                expand: expand
            })}
            expandIcons={true}
            onExpandChange={onExpandChange}
            aria-multiselectable={true}
            onItemClick={onItemClick}
          //  checkboxes={true}
            onCheckChange={onCheckChange}
        /> */}
    </>
  );
};
export default App;
