import React from "react";
import "./card.css"
import firstPhoto from "../images/people.jpg"
import beautifulWoman from "../images/beautiful-woman.jpg"
import car from "../images/aston-martin-db5.png"

export default function RecentCard(props){
    console.log(props)
    return(
        <div className="container-md " id="Recentcard">
            <div className="d-flex flex-row" id="inner-card" >
                <div className="col-6" id="image-container">
                    <img src={props.thumbnail} alt="#"/>
                    
                </div>
                <div className="col-6 border border-warning" id="details">
                    <p className="text-muted" >
                        <span>{props.author}</span>
                        <span> . </span>
                        <span>{props.date}</span>
                    </p>
                    <h>{props.title}</h>
                    <div id="paragraph-container">
                        <p id="blog-details">{props.paragraph}</p>
                    </div>
                    <div className="container" id="tag-container" style={{paddingLeft:0}}>
                    <div className="rounded-pill border border-danger " style={{height: '0.5rem', display: "inline",padding:"2px", fontSize:"10px", fontWeight:"bold"}}>Watashi no</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


//Card for displaying All blog posts
export function AllCards(props){
    return(
        <div className="container-md " id="AllCards">
            <div className="col border border-warning" id="inner-card">
                <div className="row" id="image-container">
                    <img src={props.thumbnail} alt="#"/>
                </div>
                <div className="row border border-success" id="details">
                    <div style={{padding:0}}>
                            <p className="text-muted">
                                <span>{props.author}</span>
                                <span> . </span>
                                <span>{props.date}</span>
                            </p>
                    </div>
                    <div className="blog-title" style={{height: '1.6rem', display: "inline"}}>
                        <h>{props.title}</h>
                    </div>
                    <div className="border border-danger" id="paragraph-container" style={{padding:0}}>
                        <p id="blog-details">{props.paragraph}</p>
                    </div>
                    <div className="container" style={{padding:0}}>
                    <div className="rounded-pill border border-danger " style={{height: '0.5rem', display: "inline",padding:"2px", fontSize:"10px", fontWeight:"bold"}}>Watashi no</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//for displaying the mainest card
export function MainCard(props){
    return(
        <div className="container-md " id="MainCard">
                <div className="col" id="inner-card">
                    <div className="row " id="image-container">
                        <img src={props.thumbnail} alt="#"/>
                    </div>
                    <div className="row" id="details">
                        <div style={{padding:0}}>
                            <p className="text-muted">
                                <span>{props.author}</span>
                                <span> . </span>
                                <span>{props.date}</span>
                            </p>
                        </div>
                        <div className="blog-title" style={{height: '1.6rem', display: "inline"}}>
                            <h >{props.title}</h>
                        </div>
                        <div id="paragraph-container" style={{padding:0}}>
                            <p id="blog-details">{props.paragraph}</p>
                        </div>
                        <div className="container" style={{padding:0}}>
                            <div className="rounded-pill border border-danger " style={{height: '0.5rem', display: "inline",padding:"2px", fontSize:"10px", fontWeight:"bold"}}>Watashi no</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}