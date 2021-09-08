import './contact.css'

const Contact = () => {
    return (
        <div className="contact">
        <div className="container">
          <h1 className="name">Ankush Humane</h1>
  
          <h3 className="work">Web Developer</h3>
          <p className="links">Contact links</p>
          <p className="lead">
          
              <a href="https://github.com/humneankush">
              <i className="topIcon fab fa-github-square">
          </i>
              </a>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
          </p>
          <hr className="my-4" />
          <p>
            I am a web developer this blog website is done by me in mern stack.
          </p>
  
          <p>Name : Ankush Humane</p>
          <p>email : humneankush@gmail.com</p>
          <p>phone : 8656837541</p>
          <p>Profession : Web developer</p>
          <p className="lead">
            <a className="" href role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    )
}

export default Contact
