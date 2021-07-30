import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { App } from './App';

class Core extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      body: "",
      error: null,
      isLoaded: false,
      items: []
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'https://www.binance.com/bapi/nft/v1/public/nft/product-list',
      headers: {
        "accept": "*/*",
        "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
        "clienttype": "web",
        "content-type": "application/json",
        "lang": "en"
      },
      data: this.state.body
    })
      .then((response) => {
        this.setState({
          isLoaded: true,
          items: response.data.data.rows
        });
      })
      .catch((error) => 
      {
        this.setState({
          isLoaded: true,
          error
        });
      });

  }
  myChangeHandler = (event) => {
    this.setState({
      body: "{\"category\":0,\"keyword\":\"" + event.target.value + "\",\"orderBy\":\"list_time\",\"orderType\":-1,\"page\":1,\"rows\":100}",
      showComponent: true
    });
  }
  render() {

    return (
      <div>
      <form onSubmit={this.mySubmitHandler}>
        <p>Enter Box name, and submit:</p>

        <TextField
          onChange={this.myChangeHandler}
          id="standard-basic"
          label="Search mystery box"
          style={{ margin: 10 }} />
        <Button
          style={{ margin: 12 }}
          variant="contained"
          color="primary"
          onChange={this.myChangeHandler}
          type='submit'
        >
          Search
        </Button>
      </form>
      {this.state.showComponent ?
      <App data={this.state}/> :
      null
     }
     </div>
    );
  }
}

export { Core };