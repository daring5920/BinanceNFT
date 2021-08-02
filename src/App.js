import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Link from '@material-ui/core/Link';

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