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
  background: require('./background.jpg'),
  ostrich1: require('./IMG_0436.jpg'),
  ostrich2: require('./IMG_0437.jpg')
};

preloader([images.logo, images.icon, images.background, images.ostrich1, images.ostrich2]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={[]}>
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
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start">
            <Heading size={1}>
                Ostriches
            </Heading>
        </Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0">
            <Image src={images.ostrich1.replace('/','')} height="500px" />
        </Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0">
            <Image src={images.ostrich2.replace('/','')} height="500px" />
        </Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
            notes="Deploying to production can feel like being chased by a herd of Ostriches. I didn't ask for this.">
            <Heading size={1}>
                How did we end up here?
            </Heading>
        </Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
            notes="It doesn't have to be like this. There is a better way">
            <Heading size={1}>
                Monitoring
            </Heading>
            <Heading size={4} italic>
                Taking back our sanity
            </Heading>
        </Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start">
            <BlockQuote>
                <Quote textColor="white" textSize="2.5em">
                    Reports that say that something hasn't happened are always interesting to me, because as we know, there are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns – the ones we don't know we don't know.
                </Quote>
                <Cite>Donald Rumsfeld</Cite>
            </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
