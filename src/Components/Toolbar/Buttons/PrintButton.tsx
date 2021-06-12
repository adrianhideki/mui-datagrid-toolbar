import React, { memo } from "react";
import { Button } from "@material-ui/core";
import { PrintOutlined as PrintIcon } from "@material-ui/icons";
import useStyles from "./styles";
import { ToolbarButtonProps } from "../Types";

export const PrintButton = memo(({ totalRows = 0 }: ToolbarButtonProps) => {
  const classes = useStyles();

  const handleClick = () => {
    console.log("Imprimir");
  };

  const isDisabled = totalRows === 0;

  return (
    <Button
      startIcon={<PrintIcon />}
      className={classes.button}
      onClick={handleClick}
      disabled={isDisabled}
    >
      Imprimir
    </Button>
  );
});
