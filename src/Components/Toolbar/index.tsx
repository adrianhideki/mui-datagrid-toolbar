import React, { ReactElement, useContext, useMemo, memo } from "react";

import {
  GridToolbarContainer,
  GridApiContext,
  GridRowData,
} from "@material-ui/data-grid";
import { cloneElement } from "react";
import { ToolbarButtonProps } from "./Types";

type CustomToolbarProps = {
  buttons: ReactElement<ToolbarButtonProps>[];
};

const CustomToolbar = memo(({ buttons }: CustomToolbarProps) => {
  const gridContext = useContext(GridApiContext);
  const state = gridContext?.current.getState();

  const rows: GridRowData[] = Object.entries(state?.selection ?? []).map(
    (row) => state?.rows.idRowsLookup[row[0]] ?? {}
  );

  const renderedButtons = useMemo(() => buttons.map((button) => {
    return cloneElement(button, { rows: rows, totalRows: state?.rows.totalRowCount,  key: button.props.name });
  }), [buttons, rows, state?.rows.totalRowCount]);

  return <GridToolbarContainer>{renderedButtons}</GridToolbarContainer>;
});

export default CustomToolbar;
