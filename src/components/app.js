import React, { Component } from 'react';
import { Route, Switch, NavLink,BrowserRouter } from "react-router-dom";
import Demo1 from "./demo1";
import Demo2 from "./demo2";
import Demo3 from "./demo3";
import Demo4 from "./demo4";
import Demo5 from "./demo5";
import NavBar from "./NavBar";
import Char1 from "./chart1";
import Char2 from "./chart2";
import Char3 from "./chart3";
import Char4 from "./chart4";
export default class App extends Component {
  render() {
    return (
		<div>
		   <NavBar/>

			<Switch>
			  <Route exact path='/demo1' component={Demo1} />
			  <Route exact path='/demo2' component={Demo2} />
			  <Route exact path='/demo3' component={Demo3} />
			  <Route exact path='/demo4' component={Demo4} />
			  <Route exact path='/demo5' component={Demo5} />
			  <Route exact path='/chart1' component={Char1} />
			  <Route exact path='/chart2' component={Char2} />
			  <Route exact path='/chart3' component={Char3} />
			  <Route exact path='/chart4' component={Char4} />
			</Switch>

		</div>
    );
  }
}
