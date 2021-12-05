
//returns the Header component which includes my contact details and links to my github and LinkedIn profile
function Header() {
  return (
    <div className = "header">
        <h3 className = "headerItems">0637749947</h3>
        <h3 className = "headerItems">mattvh2001@gmail.com</h3>
        <h3 className = "headerItems"><a  href = "https://www.linkedin.com/in/matthew-van-helsdingen-577b54217">LinkedIn</a></h3>
        <h3 className = "headerItems" ><a href = "https://github.com/mattvh2001">Github</a></h3>
    </div>
  );
}

export default Header;
