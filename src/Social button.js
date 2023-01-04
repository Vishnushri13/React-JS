import React from "react";
import Menu1 from './Menu1';
export default function Social(){
    return(
        <>
        <Menu1/>
        <div id="social"><br/>
        <div className="ba">
            <h1><b>Social Buttons</b></h1>
        
            <div>
                <input type={"button"} id="social1" name="social1" value={"Like"} />
                <input type={"button"} id="social2" name="social2" value={"Comment"} />
                <input type={"button"} id="social3" name="social3" value={"Share"} />
        
            </div>
        </div>
        </div>
        </>
    )
}