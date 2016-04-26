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
  hype: require("../assets/hype.png"),
  sugar: require("../assets/sugar.jpg")
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
          <Slide transition={["zoom"]} bgColor="primary" notes="Frame in terms of new-ness and hype, but useful features">
            <Heading size={1} fit caps lineHeight={1}>
              ES6
            </Heading>
            <Heading size={1} fit caps>
              Use cases at General Assembly
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes="Ask instructors their opinions of ES6.">
            <Heading size={1} lineHeight={1}>
              What is ES6?
            </Heading>
            <Heading size={1} lineHeight={1}>
              What do you think of the hype?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="Fun fact: McKenzie was 17 when he created Babel. That was just a couple years ago.">
            <BlockQuote>
              <Quote>Suddenly the amount of users grew and grew, the philosophy that I set for the project resonated with a lot of people and 6to5 rode the ES6 hype train right to the top.</Quote>
              <Cite>Sebastian McKenzie, creator of Babel</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes="<ul><li>Giving hints about ES6 -> students get excited and curious</li><li>Writing ES6 w/React gives a purpose... even if it's a false one. Everyone does this in ES6, right guys?</li><li>Comparing constants, classes, template strings, modules, symbols. VERY easy after covering Ruby</li></ul>">
            <Heading size={1} fit caps>
              Seattle's Approach to ES6
            </Heading>
            <List>
              <Appear><ListItem>Frame the conversation, and start the conversation early</ListItem></Appear>
              <Appear><ListItem>Create a need for students to learn it (React)</ListItem></Appear>
              <Appear><ListItem>Spoonfeed the different features</ListItem></Appear>
              <Appear><ListItem>Compare features to other languages, <strong>especially Ruby</strong></ListItem></Appear>
              <Appear><ListItem>Have fun!</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="The advanced students can play around in the Babel REPL and see the conversion to ES5">
            <iframe src="https://wdi_sea.gitbooks.io/notes/content/02-js-jquery/js-inheritance/04es6classes.html"
                    width="100%" height="600" frameBorder="0" />
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="The less setup, the better for learning. We can always wean them off later.">
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
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>Variables are experimented with in the browser</li><li>Madlibs provide a fun example</li><li>Relate back to Ruby string interpolation</li></ul>">
            <Codepen user="bhague1281" hash="EKyMVz" height="500" />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>Arrow functions just replace function()... sorta</li><li>explain the lexical this later. it's a gotcha that we lie about to students</li></ul>">
            <Codepen user="bhague1281" hash="aNZPrq" height="500" />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} textColor="tertiary">
              Now in the context of React
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>Todo list</li><li>Students freak out</li></ul>">
            <Codepen user="bhague1281" hash="YwjQwW" height="500" />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>Stopwatch</li><li>Students freak less, then find that there's a tutorial of this online... whoops!</li></ul>">
            <Codepen user="bhague1281" hash="GZWMYw" height="500" />
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" textColor="tertiary" notes="<ul><li>We don't use ES6 modules yet, only CommonJS. We should though, for a quick destructuring lesson.</li><li>Students appreciate Gulp, and it's easy to find plugins.</li></ul>">
            <Heading size={1} caps fit>
              Gulp + Browserify
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Explain browserify and modules</ListItem></Appear>
              <Appear><ListItem>Gulp: More code vs. more config</ListItem></Appear>
              <Appear><ListItem>Use Gulp to apply ES6 to a project</ListItem></Appear>
              <Appear><ListItem>Show recipes for other common tasks. Read: <strong>ESLint</strong>, other concepts</ListItem></Appear>
              <Appear><ListItem><strong>Spoonfeed. </strong> Talk about incorporating ES6 + Gulp later</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <iframe src="https://wdi_sea.gitbooks.io/notes/content/10-react/react-gulp-browserify/additional-gulp-tasks.html"
                    width="100%" height="600" frameBorder="0" />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading>
              1. Should we start teaching it?
            </Heading>
            <Heading>
              2. If so, what are the features?
            </Heading>
            <Heading>
              3. When should we teach these features?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="<ul><li>We don't mention promises, just use them early on via AJAX/Sequelize. If students ask, we'll introduce $q, which is very similar</li><li>We don't go into writing the Gulpfile in ES6. Thoughts?</li></ul>">
            <Heading caps>
              Other Ideas to Think About
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Webpack instead of Gulp</ListItem></Appear>
              <Appear><ListItem>Cover more features, like destructuring, Object.assign, generators, <strong>if there's a need</strong></ListItem></Appear>
              <Appear><ListItem>TypeScript (ES7)</ListItem></Appear>
              <Appear><ListItem>Show recipes for other common tasks</ListItem></Appear>
              <Appear><ListItem>Node, Gulpfile in ES6</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="There's only so much ES6 we can teach, given our time constraints. Pick and choose wisely.">
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
              <Appear><ListItem>Introducing many ES6 features and React at the same time works</ListItem></Appear>
              <Appear><ListItem>Context for each feature allowed for easier buy-in</ListItem></Appear>
              <Appear><ListItem>Students didn't struggle with ES6. React itself however...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading fit textColor="tertiary">
              Additional Opinions? Questions?
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
