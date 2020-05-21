import React from 'react'
import Hero from '../components/common/Hero'
import styled from 'styled-components'

import raerae from '../images/banners/Rae-Rae-Banne.jpg'

import { Container, Row } from '../components/common/Grid'

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffdb61;
  margin: 10rem auto 5rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
`

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 100;
  color: #ccc;
  /* text-align: center; */
  margin-bottom: 10rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    text-align: center;
  }
`

function Feature() {
  return (
    <>
      <Hero image={raerae} line1="Feature" line2="An Artist" />
      <Container>
        <Row>
          <SectionTitle>FEATURE A MAJOR ARTIST ON YOUR NEW SINGLE</SectionTitle>
        </Row>
        <Row>
          <Text>
            Do you have a hit single that you believe in? Using the brand power
            and leverage of a major artist can advance your career like no
            other. Capture their fan base while growing yours and pushing your
            single out to the masses. Feature a major artist on your new single!
            Featuring a Major Artist on your new single release could be one of
            the most strategic and calculated moves you can make to further your
            music career. It will build leverage in your brand and could
            catapult you to stardom if you have the right hit. We get the lowest
            rates for major features anywhere! We can also book the artist to
            feature in your video shoot for the single as long as schedules
            permit and the artist believes in the single. Get started today with
            major artist features.
            <br />
            <br />
            The budget depends on the star power and exclusivity of the artist
            you choose. An a-list musician will cost anywhere from $80,000 to
            $90,000 if they approve the single. B list and C list musicians can
            cost anywhere from $35,000to $50,000 with approval of the single,
            but with the help of CASH CLAN MUSIC , you can feature with big
            artists for just $7,000 to $12,000 depending on the artist,Email us
            and let us know which artist you would like to feature on your
            single and we will ask to hear your single and discuss options for
            you to broker your deal.
            <br />
            <br />
            "As an aspiring musical artist looking to increase your bandwidth
            with listening audiences? Whatever you do, don’t fall into the trap
            of thinking that you need to do all the work yourself to be an
            “authentic” solo artist. Even Shakespeare regularly collaborated
            with others! Thinking like an entrepreneur means realizing that when
            you combine your talents with those of an artist or musical act who
            are perhaps more established, you’ll expedite your own songwriting,
            music production, and promotional success. So, what are you waiting
            for? We’ve listed seven key advantages of collaborating with your
            fellow musicians below. Increased Digital Reach When you work
            together in the promotion process, you double the social media
            profile of the song or album that you’re working on. That means
            double the follower reach, and hopefully double the commercial
            success of your tracks. This will work for both online and
            traditional media. While you monitor the likes and shares of your
            social media posts,people love double-act gigs! Better Venues = More
            Punters It’s a simple equation: the more headliners for any given
            musical event, the more audiences are brought in, and the bigger
            venues you’ll be able to play in. Basically, if you’ve managed to
            secure a collaboration with a big artist, then you’re primed to tap
            into their fan base. When you pool your funds with other artists,
            you’ll be able to gain access to larger venues that can be better
            outfitted with performance gear such as amps, sound systems, stage
            lighting and graphics. This means your audience will get to hear
            your music in the best possible sound quality, as opposed to sitting
            in a claustrophobic bar with bad acoustics. An Expanded Industry
            Network You can gain lifelong friends and incredible memories by
            collaborating with bigger artists, as well as the chance to meet
            their friends, mentors, and influencers. If your collaborator is
            further along in their musical journey, you will be able to gain
            priceless advice from them, as well as new connections to producers,
            agents, gig promoters, and music bloggers – exactly the people you
            want to be casually introduced to after a gig. Collaborating can be
            an unbeatable way to widen your industry network, express your
            willingness to learn from people with more experience than you, and
            in turn help and befriend other artists. One successful gig and its
            subsequent introductions may open the door for invitations to future
            gigs with even more experienced artists to co-create with. Two Minds
            are Better Than One You love creating music – that’s the reason you
            wanted to become a musician in the first place! The great news is
            that collaborating with bigger artists can do wonders for your own
            creativity.
            <br />
            <br />
            If you’ve been struggling with writer’s block or need a great
            harmony from another instrument, an exhilarating conversation with
            another musically-oriented mind with a different point of view may
            set up a great jam session and get your best lyrics flowing again.
            You’ll Strike New Chords Artists sometimes don’t notice when they’re
            in a rut. The most important lesson a musician can learn is to keep
            learning and evolving, because if you’re not constantly honing your
            craft and expanding your reach, you can’t expect your music to
            improve. That’s where your colleagues in the industry come in. Know
            of an artist who’s mastered those tricky drum patterns you just
            can’t get the hang of yourself? Always wondered what software a
            particular DJ uses to make their mixes? Ask them if they’d be keen
            to collaborate with you. The best thing about these types of
            collaborations is that when you both bring something entirely new
            and different to the table, you can create some truly idiosyncratic
            beats. It’s Rewarding Collaborations lead to tangible rewards –
            big-break opportunities, such as headlining on a global tour or
            being credited in a chart-topping tune. However, collaborating with
            other artists is also invaluable for the human connections you’ll
            make.
            <br />
            <br />
            As a musician, you’ll find your soulmates and friends in other
            people who are pursuing the same goals. No matter where they happen
            to be on their artistic trajectory, there’s guaranteed to be massive
            common ground between you. You may just find a lifelong friend as
            well as a close collaborator. Collaborating Teaches You Artistic
            Generosity By collaborating with bigger artists at the beginning of
            your own career, you’ll realize just how important the value of
            artistic generosity is to the survival of the industry at large.
            Better-known artists will pair up with lesser-known musicians to
            boost the latter’s chances in a cut-throat industry and also to
            nurture the new talent and sounds, which are vital to the industry’s
            future. And plus, information about newcomers can spread incredibly
            quickly within the industry, so it’s best to build up your
            reputation as a generous and professional collaborator now instead
            of waiting for later to put in the legwork.
          </Text>
        </Row>
      </Container>
    </>
  )
}

export { Feature }
