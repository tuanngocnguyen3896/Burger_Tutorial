import React, { Component } from "react";
import "./burger.css";
import { connect } from "react-redux";
class BurgerRedux extends Component {
  renderBreadMid = () => {
    let { burger } = this.props;
    let content = [];
    for (let propBurger in burger) {
      let breadMid = [];
      for (let i = 0; i < burger[propBurger]; i++) {
        breadMid.push(<div key={i} className={propBurger}></div>);
      }
      content.push(breadMid);
    }
    return content;
  };
  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propMenu}</td>
          <td>
            <button
              onClick={() => {
                this.props.addBreadMid(propMenu, 1);
              }}
              className="btn btn-success mx-2"
            >
              +
            </button>
            {burger[propMenu]}
            <button
              onClick={() => {
                this.props.addBreadMid(propMenu, -1);
              }}
              className="btn btn-warning mx-2"
              disabled={!burger[propMenu]}
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[propMenu] * price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url("./images/bgburger.jpg")`,
          width: "100%",
          height: 800,
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat'
        }}
        className="container-fluid"
      >
        <div className="container ">
          <div className="row">
            <div className="col-7" style={{marginTop:150}}>
              <div className="breadTop"></div>
              {this.renderBreadMid()}
              <div className="breadBottom"></div>
            </div>
            <div className="col-5" style={{marginTop:150}}>
              <table style={{fontSize:20}} className="table text-center text-white">
                <thead>
                  <tr>
                    <th>Food</th>
                    <th></th>
                    <th>Price</th>
                    <th>Cost</th>
                  </tr>
                  {this.renderMenu()}
                </thead>
                <tfoot>
                  <tr>
                    <td colSpan="2"></td>
                    <td>Total</td>
                    <td>{this.props.total}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetToProps = (state) => ({
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total
})
const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propBurger, amount) => {
      dispatch({
        type: "ADD_BREADMID",
        propBurger,
        amount,
      });
    },
  };
};
export default connect(mapStatetToProps, mapDispatchToProps)(BurgerRedux);
