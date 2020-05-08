import React, {Component} from 'react';


import Footer from './Footer'
import Cta from './Cta'
import Banner from './Banner'
import contactBanner from './img/Portfolio.png'
import ProCard from './ProCard'
import ProData from './ProData'




class Check extends Component {

 constructor() {
      super();
       this.state = {
            data: [],
            currentPage: 1,
            perPage: 12
        }
         this.handleChange = this.handleChange.bind(this)
      this.hello= this.hello.bind(this)
      this.pageFirst= this.pageFirst.bind(this)
      this.allshow= this.allshow.bind(this)


}

pageFirst(){
       window.scrollTo(0, 0);
}

componentDidMount(){
       this.pageFirst();
 this.hello();
this.setState({data:ProData})

}

allshow(){
  let pagination = document.getElementsByClassName('pagination')[0];
 pagination.style.display = 'block';

}


hello(){
     // filter
    let boxs = document.getElementsByClassName('single-port');
    let pagination = document.getElementsByClassName('pagination')[0];
    let allShow = document.getElementById('all-show');
    let activeCls = 'all';

    let buttons = document.getElementsByClassName('filter-btn');


    // filter function
    const filter  = () => {
        if (activeCls === 'all') {
            for (let box of boxs) {
              box.style.display = 'block';
            }
        } else {
            hideAll();

            for (let box of boxs) {
                if (box.classList.contains(activeCls)) {
                   box.style.display = 'block';
                }
            }

        }

    }

    // hide all box
  const hideAll  = () => {
        for (let box of boxs) {
            box.style.display = 'none';
        }
        pagination.style.display = 'none';
    }

    // remove active class
    const removeActClass = () =>{
        for (let btn of buttons) {
            btn.classList.remove('active')
        }
    }

    // window load filter
    window.onload = function () {
        filter();
    }

   for (let btn of buttons) {
        btn.addEventListener('click', function () {
            removeActClass();
            this.classList.add('active');
            activeCls = this.getAttribute('data-filter');
            filter();
        })
    }

}

  handleChange(e) {
 this.hello();
        this.setState({currentPage: Number(e.target.id)})
    }


    render() {


      // logic for pagination
        const {data,currentPage,perPage} = this.state;
        const indexLast = this.state.currentPage * perPage;
        const indexFirst = indexLast - perPage;
        const currentPosition = data.slice(indexFirst, indexLast);

        const renderCard = currentPosition.map((data, index) => {
            return (
                 <ProCard key={index} name={data.name} img={data.img}  link={data.url} catagory={data.catagory}
                                                 bgcolor={data.color}/>
            )
        });



        const pageNumber = [];
        for (let i = 1; i <= Math.ceil(data.length / perPage); i++) {
            pageNumber.push(i)
        }


        const renderPageNumber = pageNumber.map(number => {
                return (

                    <li  className={(currentPage === number? 'current-active': '')} key={number} id={number} onClick={this.handleChange}>
                        {number}

                    </li>

                )


        })





        return (
            <div>


                <Banner bannerImg={contactBanner} bannerTitle="OUR PORTFOLIO"
                        bannerDescription="Web Apps Revolutioni is a Web Design and Development Company founded in 2020. We will provide website development and desing for small to big size comapnies."
                        breadCrumb="Our Portfolio"/>


                <section className="portfolio-area">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-xl-6">

                                <div className="section-title">
                                    <h2><span>Our </span>work</h2>
                                    <p>See our works</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <div className="port-btns">
                                    <li id="all-show" onClick={this.allshow} className="filter-btn active" data-filter="all">All</li>
                                    <li className="filter-btn" data-filter="design">Design</li>
                                    <li className="filter-btn" data-filter="dev">Development</li>
                                    <li className="filter-btn" data-filter="wp">WordPress</li>
                                    <li className="filter-btn" data-filter="email">Email</li>
                                    <li className="filter-btn" data-filter="bugfix">Bug Fix</li>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {renderCard}
                        </div>
                        <div className="row d-flex justify-content-center">
                            <ul className="pagination" data-filter="all">
                            {renderPageNumber}
                            </ul>
                        </div>
                    </div>
                </section>


                <Cta/>

                <Footer/>

            </div>

        )
    }
}









export default Check;
