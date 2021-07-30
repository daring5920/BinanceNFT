import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: "id",
    type: "number",
    headerName: "ID",
    width: 100,
    editable: false
  },
  {
    field: "amount",
    type: "number",
    headerName: "Prezzo",
    width: 150,
    editable: false
  },
  {
    field: "currency",
    headerName: "Valuta",
    width: 150,
    editable: false
  },
  {
    field: "title",
    headerName: "Nome",
    type: "number",
    width: 250,
    editable: false
  },
  {
    field: "tradeType",
    headerName: "Asta",
    type: "number",
    width: 150,
    editable: false
  }
];

  class App extends React.Component {
    render() {
      const rows = this.props.data.items.map((row) => {
        const { productId, ...rest } = row;
        return { id: productId, ...rest };
      });

      if (this.props.data.error) {
        return <div>Error: {this.props.data.error.message}</div>;
      } else if (!this.props.data.isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div style={{ height: 1000, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              id="productId"
              pageSize={100}
            />
          </div>
        );
      }
    }
  }


export { App };