import Image from "next/image";

export function MainContent(){
    return <div id="carousel-img" style={{position: "relative", width: "100vw", height: "100vh"}}>
            <Image src="https://www.w3schools.com/w3css/img_la.jpg" alt="" layout="fill" objectFit="cover"/>
            <div style={{position: "absolute", bottom: 0, zIndex: 8, display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", padding: 20}}>
                <h1 style={{width: "100%", textAlign: "center" , color: "white"}}>
                    Los Angeles
                </h1>
                <h3 style={{width: "100%", textAlign: "center", color: "white"}}>
                    We had the best time playing at Venice Beach!
                </h3>
            </div>
        </div>
    
}