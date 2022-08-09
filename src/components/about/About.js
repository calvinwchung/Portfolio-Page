import './about.css'
import Logo from '../../img/logo.png'
import Coder from '../../img/coder.png'

const About = () => {
  return (
    <div className="about">
      <div className='about-left'>
        <div className='about-card bg'></div>
        <div className='about-card'>
          <img src={Coder} alt='software engineer coding' className='about-img' />
        </div>
      </div>
      <div className='about-right'>
        <h1 className='about-title'>about me</h1>
        <h4 className='about-sub'>
          nucamp full stack developer student<br/>
          temple university graduate: finance<br/>
          senior finance associate at jpmorgan chase
        </h4>
        <p className='about-desc'>
          i graduated from temple university fox school of business with a finance degree. i worked at jpmorgan chase in the finance department for about 7-8 years before joining nucamp to pursue coding. i've learned many languages including: react, react native, javascript, html, css, bootstrap, mongo db, js node, etc. i've worked on various projects to demonstrate my proficiency in the listed languages. Please continue to scroll down to see a small list of projects I've completed or visit my github.
        </p>
        <div className='about-nucamp'>
          <img src={Logo} alt='nucamp logo' className='about-nucamp-img'/>
          <div className='about-nucamp-texts'>
            <h4 className='about-nucamp-title'>nucamp bootcamp</h4>
            <p className='about-nucamp-sub'>
              full stack developer student with a concentration on react, react native, bootstrap.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;