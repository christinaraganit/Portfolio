import "../style/AboutPage.css";
import StarLinkImg from "../img/star.svg";
import PortfolioImg from "../img/me.png";
import OutlineButton from "../components/OutlineButton";
import Writing from "../components/Writing";
import Navigation from "../components/Navigation";

export default function AboutPage() {
  return (
    <div className="ProjectsContainer">
      <Navigation></Navigation>

      <div className="AboutPageDiv">
        <div className="AboutMeDiv">
          <div className="DivTitle">
            <img src={StarLinkImg} />
            About me
          </div>

          <div className="AboutMeInformation AboutMePageInformation">
            <div className="AboutMeColumn AboutMeImage">
              <img src={PortfolioImg}></img>
              <div className="AboutMeImageText">
                THE STARRY-EYED STORYTELLER
              </div>
            </div>

            <div className="AboutMeColumn AboutMeQuote">
              <p className="Quote">
                "Stars shine with their own light. I've got this!"
              </p>

              <span className="Body">
                <b>Name:</b> Christina Andrea Raganit
              </span>
              <br></br>
              <span className="Body">
                <b>Pronouns:</b> she/her
              </span>
              <br></br>
              <span className="Body">
                <b>Location:</b> Surrey, British Columbia
              </span>
              <br></br>
              <span className="Body">
                <b>Birthdate:</b> March 1, 2001
              </span>
              <br></br>
              <span className="Body">
                <b>Favorite food:</b> Lasagna
              </span>
              <br></br>
              <br></br>
              <p className="Body">
                Hello, my name is <b>Christina Raganit</b>!
              </p>

              <p className="Body">
                I am a graduate from the Computer Systems Technology program at
                British Columbia Institute of Technology and I am currently in
                my second year studying for my Bachelor of Arts in Interactive
                Arts and Technology.
              </p>

              <p className="Body">
                I am currently the UI/UX designer for British Columbia-based
                startup Karma Well Health Technologies. We build products
                seeking to help people in their wellness journeys. My favourite
                UI design tool is Figma!
              </p>

              <p className="Body">
                I am also a frontend developer. Some of my favourite
                technologies include HTML, CSS, JavaScript, React, and the
                Material UI library. Most of my projects are in Google Firebase
                and I primarily use GitHub for version control.
              </p>

              <p className="Body">
                I am also a graphic designer. I began my journey eight years ago
                when I started learning Photoshop at the age of twelve (a very
                tall order for a twelve-year-old, if I have to admit). I loved
                escaping to fantasy landscapes using photomanipulation! My
                favourite design tools for graphic design include Adobe
                Photoshop, Adobe Illustrator, and Adobe After Effects.
              </p>

              <p className="Body">
                I am also a writer and a storyteller. I dream of one day being a
                published author. I write novels about feminist heroines in a
                wide variety of settings, from kingdoms of magic and dragons to
                technological wonderlands set in the future.
              </p>

              <p className="Body">
                I am passionate about creating – whether it's building websites,
                writing stories, or making user interfaces, I love it all! My
                dream job would allow me to continue learning, continue
                creating, and never stop doing. One of my favourite experiences
                in my career included working as a development support for FIFA
                21, and ever since then, I learned that I wanted to create
                something that will be enjoyed and loved by many. That is the
                legacy that I want to leave behind in this world.
              </p>

              <p className="Body">
                With that being said, I am an avid gamer with hundreds of hours
                on my two favourite video games, League of Legends and Teamfight
                Tactics. I am a Platinum 4 Seraphine main and a Hyper Roll
                enjoyer whose highest rank is Diamond 1 95 LP on Set 4.5. (Thank
                you, 6-Keeper Kennen/Xayah comp!) Message me for my in-game
                username and invite me to your ARAM lobbies!
              </p>

              <p className="Body">
                Please feel free to reach out if you have any questions for me!
                I would also love the opportunity to get to know you better!
              </p>
            </div>
          </div>

          <div className="ButtonsDiv">
            <OutlineButton
              link="https://www.linkedin.com/in/christinaraganit/"
              text="LinkedIn"
            ></OutlineButton>
            <OutlineButton
              link="mailto:christinaraganit@gmail.com"
              text="Email"
            ></OutlineButton>
            <OutlineButton
              link="https://github.com/christinaraganit"
              text="GitHub"
            ></OutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
}
