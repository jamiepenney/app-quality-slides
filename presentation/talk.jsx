import React from 'react/addons';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Quote, S, Slide, Text
} from '../src/spectacle';

import preloader from '../src/utils/preloader';

import Interactive from './interactive';

const images = {
  logo: require('./raygun_logo_1024px_flat_white.png'),
  icon: require('./raygun_icon_1024px_flat_white_transparent.png'),
  background: require('./background.jpg')
};

preloader([images.logo, images.icon, images.background]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={800}>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0">
          <Image src={images.icon.replace('/','')} height="250px"/>
          <Heading size={1}>
            Improving Your App Quality
          </Heading>
          <Appear>
            <Heading size={5} italic>
              Or: how I am able to sleep at night with a million requests knocking at my door
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0">
            <Heading size={1}>
            Jamie Penney
            </Heading>
            
            <Link href="https://twitter.com/jamiepenney"><Text>@jamiepenney</Text></Link>
            <Text>Senior Software Engineer at Raygun.io</Text>
            <Link href="https://twitter.com/raygunio"><Text>Follow @raygunio on Twitter</Text></Link>
        </Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
            notes="What is this talk about.">
            <Heading size={1}>
                What are we doing here?
            </Heading>
        </Slide>
      </Deck>
    )
  }
}
