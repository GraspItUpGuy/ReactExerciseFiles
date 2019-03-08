import React, { Component}from 'react'


class Header extends Component{
render(){
    const headerstyle ={ 
        backgroundImage: "url('img/home-bg.jpg')",
      }
    return(
        <div>
            {/* <!-- Page Header --> */}
      <header className="masthead" style={headerstyle}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>GraspItUpGuy</h1>
                <span className="subheading">A Story-teller by heart...</span>
              </div>
            </div>
          </div>
        </div>
      </header>
        </div>
    )
}
}
export default Header