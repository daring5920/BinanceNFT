import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: "id", 
    headerName: "ID", 
    width: 100,
    editable: false
  },
  {
    field: "amount",
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
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://www.binance.com/bapi/nft/v1/public/nft/product-list", {
      "headers": {
        "accept": "*/*",
        "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
        "clienttype": "web",
        "content-type": "application/json",
        "lang": "en",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
      "referrer": "https://www.binance.com/en/nft/market",
      "referrerPolicy": "origin-when-cross-origin",
      "body": "{\"category\":0,\"keyword\":\"MOBOX Collectible MOMOs\",\"orderBy\":\"list_time\",\"orderType\":-1,\"page\":1,\"rows\":100}",
      "method": "POST",
      "mode": "cors"
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data.rows
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    /*  this.setState(prevState => ({
        ...prevState,
        items : {
          ...prevState.items,
          coverUrl : "https://www.binance.com/"
        }
    }))
    console.log(this.state); */
  }

  render() {
    const { error, isLoaded, items } = this.state;

    const rows = items.map((row) => {
      const { productId, ...rest } = row;
      return { id: productId, ...rest };
    });
     
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={{ height: 1000 , width: "100%" }}>
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