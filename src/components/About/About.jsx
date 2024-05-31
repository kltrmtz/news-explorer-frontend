import "./About.css";
import avatar from "/src/images/avatar.svg";

function About() {
  return (
    <section className="about">
      <img className="about__image" alt="avatar" src={avatar}></img>
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          His name is John Cena!! You can't see me... Im a software guy. I like
          turtles.
        </p>
      </div>
    </section>
  );
}

export default About;
