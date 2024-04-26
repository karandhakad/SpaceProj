import { React,useEffect,useState } from 'react'
function Navbar() {

    const cards = [
        { text: "The Galactic Time Travelers",buttonText: "New",buttonColor: "#1C84FF", imgLink:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTg-ng0UtWns7Q3IF_A14QjTGLKmzuwLmG3eyrKrkEa1oGBNnUS" },
        { text: "Mystery of the Robot Planet",buttonText: "In Progress",buttonColor: "#F8C51D",imgLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWtL_zq66oZ2ao0rQ9figUFJzeoQ2WRVaW_8RB6immnCmT-aF1" },
        { text: "Choose the synonym",buttonText: "Completed",buttonColor: "#0CFA4B",imgLink:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRxuBYOHXMsGG1lTj5lq1YtzW7aD1iLFzedhGhh9plDFIGwqCUS" },
        { text: "Ultimate Time Zone",buttonText: "New",buttonColor: "#1C84FF",imgLink:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVkwMdgdfYa8oQOPaLyZxZwnKFZ0LC_tRkqjGK_mtaGTq0rvHj" },
        { text: "Choose the synonym",buttonText: "New",buttonColor: "#1C84FF",imgLink:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpr7bMgTx4imQ_B59D0Ck2mVBU6SvQ3_fNRR98KeNrVPa5abSS" },
        { text: "Ultimate Time Zone",buttonText: "In Progress",buttonColor: "#F8C51D",imgLink:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTglwF6uV4qaEaNLmbVtP0nNiISn2G4JJo-9p3Bst8WUQxcwbYf" },
        { text: "Mystery of the Robot Planet",buttonText: "Completed",buttonColor: "#0CFA4B",imgLink:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTh7RRsWRf6SlHytmDiKg38_4VHegvTq7RcxIDErdOW3-9USjYE" },
        { text: "The Galactic Time Travelers",buttonText: "New",buttonColor: "#1C84FF",imgLink:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTa34RrMQLHvIndcDJtwb5nxMbk3oDOke8Q9Xdwgk9kYCCFJjTL" },
    ]

    const [imgData,setImgData] = useState([])

// Provided API url for images not working

    useEffect(()=>{
        fetch('https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D').then((res)=>{
            return res.json();
        }).then((data)=>{
            setImgData(data); 
        }).catch((err)=>{
            console.log("API Fetch error",err)
        })
    },[])

// -----------------------
  return (
    <>
        <div className="container">
            <div className="navbar-box">
                <h1 className='logo'>BrainyLingo</h1>
                <ul className="menu">
                    <li className="menu-item">Home</li>
                    <li className="menu-item">Leaderboard</li>
                    <li className="menu-item">Daily Quize</li>
                    <li className="menu-item">Genre</li>
                </ul>
                <button className='nav-btn'>Sign Out</button>
            </div>

            <h1 className="headline">
                Science Fiction Stories
            </h1>
            <div className="btn-group">
                <button className='group-btn1'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNuxCpvEUwyl5WqbmEI4qyYRnVGRZHuslN6w&s"/> New</button>
                <button className='group-btn2'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNuxCpvEUwyl5WqbmEI4qyYRnVGRZHuslN6w&s"/>In Progress</button>
                <button className='group-btn3'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNuxCpvEUwyl5WqbmEI4qyYRnVGRZHuslN6w&s"/>Completed</button>
                <button className='group-btn4'>Clear All</button>
            </div>
        </div>
            <div className="cards">
                {
                    cards.map((data,index)=>{
                        return(
                            <div className="card" key={index}>
                                <img src={data.imgLink} alt="" />
                                <h4>{data.text}</h4>
                                <button className="card-btn" style={{color:data.buttonColor}}>
                                    {data.buttonText}
                                </button>
                            </div>
                        )
                    })
                }
                
            </div>

            <div className="bottom-btns">
                <h4 className='bottom-btn'>&#11164; Previous</h4>
                <h4 className='bottom-btn'>Next &#11166;</h4>
            </div>
    </>
  )
}

export default Navbar