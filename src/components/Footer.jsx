import React from "react";
  
function Footer(){
    return(
        <footer className=" text-center " >
            built and designed by Terngu Favour. <br />
            All rights reserved. ©
            {new Date().getFullYear()}

        </footer>
    )
}

export default Footer