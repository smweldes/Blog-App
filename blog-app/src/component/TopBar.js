import "./main.css"

function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest-p"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGIN</li>
            </div>
            <div className="topRight">
                <img className="topImage" src="https://www.gannett-cdn.com/presto/2021/07/01/USAT/d044800e-5d2d-4615-86ba-ed907b307216-GTY_1316985020.jpg?crop=4837,3225,x0,y0&width=660&height=441&format=pjpg&auto=webp" alt=""></img>
                <i className="topSearch fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar
