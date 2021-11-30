import React from "react"
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className = "home-page">
            <div className = "home-des">Your One Stop Solution For All The Popular Dog Breeds</div>
            <Link to = "/shop"><div>SHOP</div></Link>
        </div>
    )
}

export default Home;
