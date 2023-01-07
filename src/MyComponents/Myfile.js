import React from 'react'
import { Link } from "react-router-dom";
import "./Xyz.css";


export const Myfile = () => {
  return (
    /*<div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Example label</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
    </div>*/
    <>
    
    <div className="container  my-3 , box" >
        <h3><center>Teacher Login Id</center></h3>
        <form>
            <div class="mb-3">
                <label for="title" class="form-label">Login ID</label>
                <input type="email" class="form-control" id="title" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your id with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label">Password</label>
                <input type="password" class="form-control" id="desc"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div>
                <Link to="/Subject"><center>< button type="button" class="btn btn-secondary btn-success">
                    Submit</button></center></Link>
            </div>
                <br/>
            <div>
                <Link to="/"><center><button type="button" class="btn btn-secondary btn-success">Home</button></center></Link>
            </div>
        </form>
    </div>
   
    </>
  )
}
