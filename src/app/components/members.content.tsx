

export function Members(){
    return <div style={{
        width: "100",
        height: 'auto',
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        }}> 
        <div style={{ width: "100%", textAlign: "center" , color: "black", margin: 30, display: "flex"}}>
                <h1>Band Members</h1>
            </div>
        <div style={{width: "100%", height: 'auto', color: "black", margin: 30}}>
            <img src="https://www.w3schools.com/w3css/img_bandmember.jpg" alt="Band Member" />
            <h4 style={{textAlign: "center"}}>Paul</h4>
        </div>
        <div style={{width: "100%", height: 'auto', color: "black", margin: 30}}>
            <img src="https://www.w3schools.com/w3css/img_bandmember.jpg" alt="Band Member" />
            <h4 style={{textAlign: "center"}}>Paul</h4>
        </div>
        <div style={{width: 251, height: 'auto', color: "black", margin: 30}}>
            <img src="https://www.w3schools.com/w3css/img_bandmember.jpg" alt="Band Member" />
            <h4 style={{textAlign: "center"}}>Paul</h4>
        </div>
    </div>
}