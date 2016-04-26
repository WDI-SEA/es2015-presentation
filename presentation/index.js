// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "../themes/ga";

// Import custom component
import Interactive from "../assets/interactive";

import Codepen from "react-codepen";

// Require CSS
require("normalize.css");
require("../themes/ga/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  hype: require("../assets/hype.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff0021"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              ES2015
            </Heading>
            <Heading size={1} fit caps>
              Use cases at General Assembly
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Heading size={1} lineHeight={1}>
              What do you think of the hype?
            </Heading>
            <br />
            <img src={images.hype} />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Suddenly the amount of users grew and grew, the philosophy that I set for the project resonated with a lot of people and 6to5 rode the ES6 hype train right to the top.</Quote>
              <Cite>Sebastian McKenzie, creator of Babel</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps>
              Our Approach to ES2015
            </Heading>
            <List>
              <Appear><ListItem>Frame the conversation, and start the conversation early</ListItem></Appear>
              <Appear><ListItem>Create a need for students to learn it (React)</ListItem></Appear>
              <Appear><ListItem>Spoonfeed the different features</ListItem></Appear>
              <Appear><ListItem>Compare features to other languages</ListItem></Appear>
              <Appear><ListItem>Have fun!</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1}>
              Seattle WDI Doppio
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary">
              We Like CodePen
            </Heading>
            <Heading size={3} caps textColor="tertiary">
              No tooling, no setup. Just Babel + SCSS
            </Heading>
            <Heading size={4} textColor="tertiary">
              (Spoonfeeding)
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Codepen user="bhague1281" hash="EKyMVz" height="500" />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Codepen user="bhague1281" hash="aNZPrq" height="500" />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Codepen user="bhague1281" hash="YwjQwW" height="500" />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Codepen user="bhague1281" hash="GZWMYw" height="500" />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="secondary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading fit>
              But students are quick to point out...
            </Heading>
            <Heading caps>
              What about production code?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="tertiary">
            <Appear>
              <Heading size={1} caps fit>
                Gulp + Browserify
              </Heading>
            </Appear>
            <List textColor="tertiary">
              <Appear><ListItem>Explain browserify and modules</ListItem></Appear>
              <Appear><ListItem>Gulp: More code vs. more config</ListItem></Appear>
              <Appear><ListItem>Use Gulp to apply ES2015 to a project</ListItem></Appear>
              <Appear><ListItem>Show recipes for other common tasks. Read: <strong>ESLint</strong>, other concepts</ListItem></Appear>
              <Appear><ListItem><strong>Spoonfeed. </strong> Talk about incorporating ES2015 + Gulp later</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <iframe src="https://wdi_sea.gitbooks.io/notes/content/10-react/react-gulp-browserify/additional-gulp-tasks.html"
                    width="100%" height="600" frameBorder="0" />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading caps>
              Classes?
            </Heading>
            <Heading size={2}>
              Week 2
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <iframe src="https://wdi_sea.gitbooks.io/notes/content/02-js-jquery/js-inheritance/04es6classes.html"
                    width="100%" height="600" frameBorder="0" />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading caps>
              What could we do better?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading caps>
              Ideas to Think About
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Webpack instead of Gulp</ListItem></Appear>
              <Appear><ListItem>Cover more features, like destructuring, Object.assign, generators, <strong>if there's a need</strong></ListItem></Appear>
              <Appear><ListItem>TypeScript (ES2016)</ListItem></Appear>
              <Appear><ListItem>Show recipes for other common tasks</ListItem></Appear>
              <Appear><ListItem><strong>Spoonfeed. </strong> Talk about Gulpfile + Babel later</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading caps fit>
              What we can prevent
            </Heading>
            <br />
            <Appear>
              <Heading caps fit>
                JavaScript Fatigue <br /> and...
              </Heading>
            </Appear>
            <Appear>
              <Heading caps fit>
                Lack of Discovery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps>
              Seattle Trends
            </Heading>
            <List>
              <Appear><ListItem>Introducing many ES2015 features and React at the same time works</ListItem></Appear>
              <Appear><ListItem>Context for each feature allowed for easier buy-in</ListItem></Appear>
              <Appear><ListItem>Students didn't struggle at all. React itself however...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading fit textColor="tertiary">
              Your Opinion? Questions?
            </Heading>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with &hearts; in Seattle, WA
            </Heading>
            <Heading size={5} caps fit lineHeight={1.5} textColor="secondary">
              Created with Spectable, a React presentation library by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
