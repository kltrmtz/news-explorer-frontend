import "./About.css";
import avatar from "/src/images/avatar.svg";

function About() {
  return (
    <section className="about">
      <img className="about__image" alt="avatar" src={avatar}></img>
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          This project was completed by Kolt Metz, an aspiring software
          engineer. Versed in full-stack skills HTML, CSS, Javascript, React,
          Express, Node.js, Figma, MongoDB. Able to produce source code for
          websites, applications, & software to provide solutions for the end
          users.
          <br></br>
          <br></br>The skills acquired to develop this project was learned
          through TripleTen a professional bootcamp. A wonderful experience
          providing the knowledge & oppurtunity for an entry level career.
        </p>
      </div>
    </section>
  );
}

export default About;
