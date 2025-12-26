import Me from './me.jpeg'
import './Image.css'
function Image(){
    return(
        <div className="profile-section">
       <div className="profile-container">
         <img src={Me} alt="My Profile" className="profile-image" />
    </div>
     <div className="profile-intro">
        <h1>Hi, I'm Muhammad Afzaal</h1>
        <h2>Frontend Web Developer</h2>
        <p>
          I design and develop modern, responsive websites using HTML, CSS, JavaScript, and React.js.
          With over 3 years of experience, I focus on building fast, user-friendly interfaces that
          not only look great but perform seamlessly across all devices.
        </p>
        <a href="https://github.com/Muhammad-afzaal881" className="btn">View My Projects</a>
      </div>
    </div>
    )
}
export default Image