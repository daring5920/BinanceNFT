import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Link from '@material-ui/core/Link';
import axios from 'axios';

export default function App(data) {

  const columns = [
    {
      field: "id",
      type: "number",
      headerName: "ID",
      width: 100,
      editable: false
    },
    {
      field: "title",
      headerName: "Name",
      width: 250,
      editable: false
    },
    {
      field: "amount",
      headerName: "Price",
      type: "number",
      width: 115,
      editable: false
    },
    {
      field: "currency",
      headerName: "Coin",
      width: 120,
      editable: false
    },
    {
      field: "usd",
      headerName: "Price USD",
      type: "number",
      width: 150,
      editable: false
    },
    {
      field: "tradeType",
      headerName: "Trade Type",
      type: "number",
      width: 150,
      editable: false
    },
    {
      field: "url",
      headerName: "URL",
      width: 250,
      renderCell: (params) => (
        <Link target="_blank" href={params.value}>{params.value}</Link>),
      editable: false
    }
  ];

  /*const newItem = []
  if (data.data.numItems > 100 ) {
    let totalItem = data.data.numItems - 100
    let page = 2
    let newBody = "{\"category\":0,\"keyword\":\"" + data.data.itemName + "\",\"orderBy\":\"list_time\",\"orderType\":-1,\"page\":" + page + ",\"rows\":100}"
    do {
      axios({
        method: 'post',
        url: 'https://www.binance.com/bapi/nft/v1/public/nft/product-list',
        headers: {
          "accept": "**",
          "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
          "clienttype": "web",
          "content-type": "application/json",
          "lang": "en"
        },
        data: newBody
      })
        .then((response) => {
          newItem.setState.Push({
            newItem: response.data.data.rows
          });
        })
        .catch((error) => 
        {
          //
        });

        page ++ 
        totalItem = totalItem -100
        newBody = "{\"category\":0,\"keyword\":\"" + data.data.itemName + "\",\"orderBy\":\"list_time\",\"orderType\":-1,\"page\":" + page + ",\"rows\":100}"
    } while (totalItem > 0)
  }*/

  const rows = data.data.items.map((row) => {
    const { productId, ...rest } = row;
    return { id: productId, ...rest };
  });
  const coins = [data.data.coins.data]

  const finalRows = [];
  console.log(finalRows)
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].tradeType === 1) {
      if (rows[i].currency === "BUSD") {
        finalRows[i] =   
      {
        id: rows[i].id,
        title: rows[i].title,
        usd:rows[i].amount,
        amount: rows[i].amount,
        currency: rows[i].currency,
        tradeType: "Auction",
        url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId="+rows[i].id+"&isOpen=true&isProduct=1"
      }
      } else if (rows[i].currency === "BNB") {
        finalRows[i] =   
        {
          id: rows[i].id,
          title: rows[i].title,
          usd: coins[0].binancecoin.usd * rows[i].amount,
          amount: rows[i].amount,
          currency: rows[i].currency,
          tradeType: "Auction",
          url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId="+rows[i].id+"&isOpen=true&isProduct=1"
        }
        } else if (rows[i].currency === "ETH") {
          finalRows[i] =   
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: coins[0].ethereum.usd * rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Auction",
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId="+rows[i].id+"&isOpen=true&isProduct=1"
          }
        }
    } else {
      if (rows[i].currency === "BUSD") {
        finalRows[i] =   
      {
        id: rows[i].id,
        title: rows[i].title,
        usd:rows[i].amount,
        amount: rows[i].amount,
        currency: rows[i].currency,
        tradeType: "Buy Now",
        url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId="+rows[i].id+"&isOpen=true&isProduct=1"
      }
      } else if (rows[i].currency === "BNB") {
        finalRows[i] =   
        {
          id: rows[i].id,
          title: rows[i].title,
          usd: coins[0].binancecoin.usd * rows[i].amount,
          amount: rows[i].amount,
          currency: rows[i].currency,
          tradeType: "Buy Now",
          url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId="+rows[i].id+"&isOpen=true&isProduct=1"
        }
        } else if (rows[i].currency === "ETH") {
          finalRows[i] =   
          {
            id: rows[i].id,
            title: rows[i].title,
            usd: coins[0].ethereum.usd * rows[i].amount,
            amount: rows[i].amount,
            currency: rows[i].currency,
            tradeType: "Buy Now",
            url: "https://www.binance.com/en/nft/goods/blindBox/detail?productId="+rows[i].id+"&isOpen=true&isProduct=1"
          }
        }
    }
  } 

  if (data.data.error) {
    return <div>Error: {data.data.error.message}</div>;
  } else if (!data.data.isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div style={{ height: 1200, width: "100%" }}>
        <DataGrid
          rows={finalRows}
          columns={columns}
          pageSize={100}
          density="compact"
        />
      </div>
    );
  }
}