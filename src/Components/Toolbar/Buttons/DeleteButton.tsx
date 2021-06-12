import React, { memo } from "react";
import { Button } from "@material-ui/core";
import { DeleteOutline as DeleteIcon } from "@material-ui/icons";
import useStyles from "./styles";
import { ToolbarButtonProps } from "../Types";

export const DeleteButton = memo(({ rows = [] }: ToolbarButtonProps) => {
  const classes = useStyles();

  const handleClick = () => {
    console.log("Excluir", rows);
  };

  const isDisabled = !(rows.length > 0);

  return (
    <Button
      startIcon={<DeleteIcon />}
      className={classes.button}
      onClick={handleClick}
      disabled={isDisabled}
    >
      Excluir
    </Button>
  );
});
