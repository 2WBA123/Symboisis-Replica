import React from 'react';
import { useLocation } from 'react-router';
import Header from '../../../ProductHeader/Header';
import LatestCard from '../../../Cards/LatestCard'
import { useSelector } from 'react-redux';

function AllProduct() {

    const paginationHandler=(pageNum)=>{
        this.setState({ currentPage:pageNum});
    }
    const state1 = useSelector (state=>state);
    console.log(state1)
    const {state} = useLocation(state=>state);
    console.log(state);
    // const lastIndex=this.state.currentPage*this.state.dataPerPage
        // const firstIndex=lastIndex-this.state.dataPerPage
        // const postsdata=this.state.postsData.slice(firstIndex,lastIndex)
        // var pageNumbers = [];
        // for (let i = 1; i <= Math.ceil(this.state.postsData.length / this.state.dataPerPage); i++) {
        //     pageNumbers.push(i);
        // }
    return (
        <>
            <Header compo={"Product"} nav={"Product"}/>
            <div className="w-screen grid grid-flow-row grid-cols-5">
                
                    { state1.Product.Products.map((val,index)=>(
                        <div className="flex justify-center items-center m-8">
                        <LatestCard data={val} index={index} />
                      </div>
                    ))
                    } 
                
            </div>
            <div>
                {/* <div className='mt-2 justify-center items-center'>  
                    <nav aria-label="Page navigation ">
                    <ul class="pagination">
                    {
                        this.props.nop.map((pageNum)=>(<li key={pageNum} class="page-item "><a class="page-link" onClick={()=>{
                        console.log("page 1");
                        this.props.paginationHandler(pageNum)
                    }} >{pageNum}</a></li>))}
                    </ul>
                </nav>
            </div> */}
            </div>
        </>
    )
}

export default AllProduct
