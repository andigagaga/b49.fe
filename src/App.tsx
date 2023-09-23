import React from "react";

interface Data {
  name: string,
  username: string,
  email: string
}

interface State {
  data: Data[] | null;
  loading: boolean;
  error: string | null
}

export default class App extends  React.Component<{value: string}, State> {
  constructor(props: {value:""}) {
    super(props);
    this.state = {
      data: null,
      loading: false,
      error: null
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    this.setState({loading: true, error:null})

    fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
        
      }
      return response.json();
    })
    .then((data) => {

      // versi untk data array berdasarkan id nya
    const dataArray = Array.isArray(data) ? data : [data]
    this.setState({data: dataArray, loading: false})

    // versi untuk semua data
    // this.setState({data, loading: false})
    })
    .catch((error) => {
      this.setState({error: error.message, loading:false})
    })
  }
  render() {
    const { data, loading, error} = this.state
    return(
      <React.Fragment>
        <div>
          {loading && <p>loading....</p>}
          {error && <p>Error: {error}</p>}
          {data && data.map((data) => (
            <div>
              <h1>{data?.name}</h1>
              <h3>{data?.username}</h3>
              <p>{data?.email}</p>
              <hr />
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}