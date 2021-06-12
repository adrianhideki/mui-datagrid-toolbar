import React from "react";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import Box from "@material-ui/core/Box";
import Toolbar from "./Components/Toolbar";
import { NewButton } from "./Components/Toolbar/Buttons/NewButton";
import { EditButton } from "./Components/Toolbar/Buttons/EditButton";
import { DeleteButton } from "./Components/Toolbar/Buttons/DeleteButton";
import { PrintButton } from "./Components/Toolbar/Buttons/PrintButton";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Identificador",
    width: 200,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
];

const rows = [
  {
    id: "9831bih2b3139",
    name: "Adrian",
  },
  {
    id: "6861bah211a11",
    name: "Hideki",
  },
  {
    id: "31z1baa33a22a",
    name: "Teste",
  },
];

function App() {
  const NewToolbar = () => {
    return (
      <Toolbar
        buttons={[
          <NewButton name="novo" />,
          <EditButton name="editar" />,
          <DeleteButton name="deletar" />,
          <PrintButton name="imprimir" />,
        ]}
      />
    );
  };

  return (
    <div className="App">
      <Box height="400px" width="600px">
        <DataGrid
          checkboxSelection
          columns={columns}
          rows={rows}
          components={{
            Toolbar: NewToolbar,
          }}
        />
      </Box>
    </div>
  );
}

export default App;
