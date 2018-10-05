import React, { Component } from 'react';

class AdminBillView extends Component {
  render() {
    return(
		<body>
		    <h1 style={{font-style: normal, font-weight: bold;}}>JacketPages</h1>
		    <div id="wrapper">
		        <div id="sidebar-wrapper" style={{background-color: #eeb211}}>
		            <ul className="sidebar-nav">
		                <li className="sidebar-brand"> <a href="#">Agenda</a></li>
		                <li> <a href="#">Bill 1</a></li>
		                <li> <a href="#">2 </a></li>
		                <li> <a href="#">3 </a></li>
		                <li> <a href="#">4 </a></li>
		                <li> <a href="#">5 </a></li>
		                <li> <a href="#">6 </a></li>
		                <li> <a href="#">7 </a></li>
		                <li> <a href="#">8 </a></li>
		                <li> <a href="#">9 </a></li>
		                <li> <a href="#">10</a></li>
		                <li> <a href="#">11</a></li>
		                <li> <a href="#">12</a></li>
		                <li> <a href="#">13</a></li>
		                <li> <a href="#">14</a></li>
		                <li> <a href="#">15</a></li>
		                <li> <a href="#">16</a></li>
		                <li> <a href="#">17</a></li>
		                <li> <a href="#">18</a></li>
		                <li> <a href="#">19</a></li>
		                <li> <a href="#">20</a></li>
		            </ul>
		        </div>
		        <div className="page-content-wrapper">
		            <div className="container-fluid"><a className="btn btn-link" role="button" href="#menu-toggle" id="menu-toggle"><i className="fa fa-bars"></i></a></div>
		        </div>
		    </div>
		    <div className="col-lg-9 col-xl-9 offset-lg-3">
		        <h1>Bill View</h1>
		        <p>Organization:&nbsp;</p>
		    </div>
		    <div className="col-lg-9 offset-lg-3 d-flex justify-content-center"><button className="btn btn-primary" type="button" style={{margin: 20px, background-color: rgb(238,178,17)}}>Begin Voting</button><button className="btn btn-primary" type="button" style="margin: 20px;background-color: rgb(238,178,17);">Stop Voting</button>
		        <button
		            className="btn btn-primary" type="button" style={{margin: 20px, background-color: rgb(238,178,17)}}>Show Res</button>
		    </div>
		    <div className="col-lg-9 offset-lg-3 d-flex justify-content-end"><button className="btn btn-primary" type="button" style={{background-color: rgb(238,178,17)}}>Next</button></div>
		    <script src="assets/js/jquery.min.js"></script>
		    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
		    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/js/swiper.jquery.min.js"></script>
		    <script src="assets/js/Sidebar-Menu.js"></script>
		    <script src="assets/js/Simple-Slider.js"></script>
		</body>
    );
  }
}

export default className;
