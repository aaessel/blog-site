import React from "react";
import TestData from "./TestDataArray";
import RecentCard, {AllCards, MainCard} from "./card"; 

export default function PageBody(){
    const AllBlogs = TestData.map(blog=>{
        return <div className="col-12 col-md-4 " style={{paddingBottom:"1.5rem"}}><AllCards
            thumbnail={blog.thumbnail}
            title = {blog.title}
            date = {blog.date}
            author = {blog.author}
            paragraph = {blog.paragraph}
        /></div>
    })
    const Latest_three = TestData.slice(-3);
    const RecentBlogs = Latest_three.map(blog=>{
        return  <div className=" col-12 col-md-12" style={{padding:"1rem"}}>
            <RecentCard
            thumbnail={blog.thumbnail}
            title = {blog.title}
            date = {blog.date}
            author = {blog.author}
            paragraph = {blog.paragraph}
            />
        </div>
    })
    const Latest_blog = TestData[TestData.length-1]

    return(
        <div className="container " style={{marginTop:"3rem", marginBottom:"1rem",padding:0}}>
            <div className="container-fluid d-flex flex-column flex-md-row border" id="top-body" style={{padding:0}}>
                <div className="col-12 col-md-6 border border-danger" id="page-main-blog-container " style={{padding:"1rem"}}>
                <MainCard
            thumbnail={Latest_blog.thumbnail}
            title={Latest_blog.title}
            date={Latest_blog.date}
            author={Latest_blog.author}
            paragraph={Latest_blog.paragraph}
                />
                </div>
                <div className="col-12 col-md-6 " id="page-recent-blogs-container">
                    {/* <div>

                    </div>
                    <div>

                    </div>
                    <div>
                        
                    </div> */}
                    {RecentBlogs}
                </div>
            </div>
            <div className="row " id="page-all-blogs-continer" style={{padding:"1rem"}}>
                {/* <div className="col-12 col-md-4"></div>
                <div className="col-12 col-md-4"></div>
                <div className="col-12 col-md-4"></div>
                <div className="col-12 col-md-4"></div>
                <div className="col-12 col-md-4"></div>
                <div className="col-12 col-md-4"></div> */}
                {AllBlogs}
            </div>
        </div>
    )
}