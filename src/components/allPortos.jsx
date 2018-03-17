import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { allPortos } from '../actions/allPortos'
import { Card, Image } from 'semantic-ui-react'

class Portos extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('ini this prpos', this.props)
    this.props.allPortos()
  }
  render() {
    const loader = {
      "border": " 16px solid #f3f3f3",
      "borderTop": " 16px solid #3498db",
      "borderRadius": "50%",
      "width": "120px",
      "height": "120px",
      "animation": "spin 2s linear infinite"
    }

    const styles = {
      display: "flex",
      flex: 1,
      flexWrap: "wrap"
    }

    const item ={
      display: "flex",
      flex: 1,
      flexWrap: "wrap",
      margin:"50px 30px 50px 30px"
    }

    if (this.props.allData.isLoading) {
      return (
        <div>
          <center>
            <div style={loader}>loading</div>
          </center>
        </div>
      )
    } else if (this.props.allData.isError) {
      return (
        <div>ERROR......</div>
      )
    } else {
      return (
        <div style={styles}>
          {this.props.allData.getPortosDone.map(porto => {
            return (
              <Card key={porto.id} style={item}>
                <Image src={porto.image} />
                <Card.Content>
                 {porto.description} <br/>
                 <a href={porto.url} target="_blank">Click me</a>
                </Card.Content>
              </Card>
            )
          })}
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    allData: state.allPortos
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    allPortos,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Portos)