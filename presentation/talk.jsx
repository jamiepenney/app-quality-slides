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
  ostrich2: require('./IMG_0437.jpg'),
  slacknotification: require('./raygun_slacknotification.png'),
  errordetails: require('./raygun_errordetails.png'),
  errordetails2: require('./raygun_errordetails2.png'),
  intercomcrazy: require('./raygun_intercomcrazy.png'),
  affectedusers: require('./raygun_affectedusers.png'),
  affecteduser_alex: require('./raygun_affecteduser_alex.png'),
  integrations: require('./raygun_integrations.png')
};

preloader([images.logo, images.icon, images.background, images.ostrich1, images.ostrich2, images.errordetails]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={[]}>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start">
          <Heading size={1} caps>
            Improving App Quality
          </Heading>
          <Appear>
            <Heading size={5} italic>
              Or: how I am able to sleep at night with a million requests knocking at my door
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0">
            <Heading size={1} caps>
            Jamie Penney
            </Heading>
            <Link href="https://twitter.com/jamiepenney"><Text>@jamiepenney</Text></Link>
            <Image src={images.icon.replace('/','')} height="150px"/>
            <Text>Senior Software Engineer at Raygun.io</Text>
            <Link href="https://twitter.com/raygunio"><Text>Follow @raygunio on Twitter</Text></Link>
        </Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start">
            <Heading size={1} caps>
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
            <Heading size={1} caps>
                How did we end up here?
            </Heading>
        </Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
            notes="It doesn't have to be like this. There is a better way">
            <Heading size={1} caps>
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
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start">
            <Heading size={1} caps>
                My daily slog
            </Heading>
			<Appear>
				<List>
					<ListItem>Read the daily digest</ListItem>
					<ListItem>Check the support queue</ListItem>
					<ListItem>Read the notifications</ListItem>
					<ListItem>Check the support queue</ListItem>
					<ListItem>Repeat until death</ListItem>
				</List>
			</Appear>
        </Slide>
		<Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="Shows the errors that have happened in the last 24 hours">
            <Heading size={1} caps>
                The Daily Digest
            </Heading>
        </Slide>
		<Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="Customers seem surprised and happy when I say we've seen their error and assigned it already. I'M USING THE SAME TOOL AS YOU GUYS!">
            <Heading size={1} caps>
                Support
            </Heading>
			<Heading size={4}>
				Probably the easiest way to gain a customer for life
			</Heading>
        </Slide>
		<Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="We use Slack and email - Email is probably redundant but I can split Apps across notification systems">
            <Heading size={1} caps>
                Notifications
            </Heading>
            <Appear>
                <Image src={images.slacknotification.replace('/','')} height="75px" margin="50px"/>
            </Appear>
        </Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="URL and stack trace help me triage and assign errors">
            <Heading size={1} caps>
                Error details
            </Heading>
		</Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="URL and stack trace help me triage and assign errors">
            <Image src={images.errordetails.replace('/','')} height="500px"/>
		</Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="URL and stack trace help me triage and assign errors">
            <Image src={images.errordetails2.replace('/','')} height="500px"/>
		</Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="">
            <Heading size={1}>
                Oh it's that guy
            </Heading>
            <Appear>
                <Image src={images.intercomcrazy.replace('/','')} height="75px" margin="50px"/>
            </Appear>
		</Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="">
            <Heading size={1}>
                Never mind then
            </Heading>
		</Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="">
            <Heading size={1}>
                Speaking of tin foil hats...
            </Heading>
		</Slide>
		<Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="This is how I know which users are experiencing errors">
            <Heading size={1} caps>
                User tracking
            </Heading>
            <Appear>
                <Heading size={5} italic>
				But not in a creepy way
                </Heading>
            </Appear>
		</Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="">
            <Image src={images.affectedusers.replace('/','')} height="250px"/>
            <Text>At least this error has only happened to this guy</Text>
		</Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="">
            <Heading size={1}>Here's a non-bot user</Heading>
		</Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="">
            <Image src={images.affecteduser_alex.replace('/','')} height="400px"/>
		</Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="">
            <Heading size={2}>This is all opt-in.</Heading>
            <Text size={2}>You don't have to give all this info to us, we get the rest from an external service called Full Contact.</Text>
            <Text size={2}>You can turn this off in the app or by not sending us email addresses if you have compliance issues around PII.</Text>
		</Slide>
		<Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="We use Slack internally - different apps report to different channels">
            <Heading size={1} caps>
                Integrations
            </Heading>
		</Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="We use Slack internally - different apps report to different channels">
            <Heading size={2}>
                Have I mentioned our Slack integration?
            </Heading>
            <Text italic>God I love Slack. Death to email!</Text>
		</Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="We use Slack internally - different apps report to different channels">
            <Heading size={1}>
                We also have heaps of other integrations
            </Heading>
		</Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="">
            <Image src={images.integrations.replace('/','')} height="500px"/>
		</Slide>
        <Slide bgColor="primary" bgImage={images.background.replace('/','')} bgDarken="0" align="center flex-start"
			notes="We use Slack internally - different apps report to different channels">
            <Heading size={2}>
                Too many to talk about
            </Heading>
		</Slide>
      </Deck>
    )
  }
}
