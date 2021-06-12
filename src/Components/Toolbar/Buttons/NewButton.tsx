import React, { memo } from "react";
import { Button } from "@material-ui/core";
import { InsertDriveFileOutlined as NewFileIcon } from "@material-ui/icons";

import useStyles from "./styles";
import { ToolbarButtonProps } from "../Types";

export const NewButton = memo(({ rows = [] }: ToolbarButtonProps) => {
  const classes = useStyles();
  const handleClick = () => {
    console.log("Novo", rows);
  };

  const isDisabled = rows.length > 0 ;

  return (
    <Button
      startIcon={<NewFileIcon />}
      className={classes.button}
      onClick={handleClick}
      disabled={isDisabled}
    >
      Novo
    </Button>
  );
});
