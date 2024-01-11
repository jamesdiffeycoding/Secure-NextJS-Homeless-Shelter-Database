import Link from "next/link";

//links with 🔖 are genuine links - other links to NHS
//links now open on a separate page (target blank). LegacyBehaviour lets us nest an <p> tag so we can do this (not possible with just LINK)

export default function ReferralLinksComp() {
  return (
    <>
      {/* WELCOME BOX */}
      <section className="global-welcome">
          <h1 className="global-heading">Frequently used referral and information links
          </h1>
        </section>
      {/* CONTENT BOX */}
      <section className="global-content">
        <section className="referrallinks-grid black-font">
        {/* grid-card */}
          <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Housing</h2>
            <div className="referrallinks-list">
              <Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><p className="referrallinks-link-text">Birmingham Community Housing🔖</p></Link> 
              <Link className="referrallinks-link-tag" href="https://amberweb.org/"  passHref legacyBehavior><p className="referrallinks-link-text">Amber Foundation- Supported Housing for Young People🔖</p></Link>
            </div>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Immigration</h2>
            <div className="referrallinks-list">
              <Link className="referrallinks-link-tag" href="https://www.migranthelpuk.org/"  passHref legacyBehavior><p className="referrallinks-link-text">Migrant Help🔖</p></Link> 
              <Link className="referrallinks-link-tag" href="https://righttoremain.org.uk/"  passHref legacyBehavior><p className="referrallinks-link-text">Right To Remain🔖</p></Link>
            </div>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Language support</h2>
            <div className="referrallinks-list">
              <Link className="referrallinks-link-tag" href="https://www.charitytranslators.org/"  passHref legacyBehavior><p className="referrallinks-link-text">Charity Translators🔖</p></Link> 
              <Link className="referrallinks-link-tag" href="https://www.london.gov.uk/programmes-strategies/communities-and-social-justice/migrants-and-refugees/english-esol-classes-london"  passHref legacyBehavior><p className="referrallinks-link-text">ESOL Classes 🔖</p></Link>
            </div>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Physical health</h2>
            <div className="referrallinks-list">
              <Link className="referrallinks-link-tag" href="https://opportunities.shp.org.uk/sport-health"  passHref legacyBehavior><p className="referrallinks-link-text">Sport for health🔖</p></Link> 
              <Link className="referrallinks-link-tag" href="https://www.watfordfccsetrust.com/project/man-on/"  passHref legacyBehavior><p className="referrallinks-link-text">Man On! Football/Mental Health🔖</p></Link>
            </div>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Mental wellbeing</h2>
            <div className="referrallinks-list">
              <Link className="referrallinks-link-tag" href="https://www.mind.org.uk/"  passHref legacyBehavior><p className="referrallinks-link-text">Mind🔖</p></Link> 
              <Link className="referrallinks-link-tag" href="https://www.anxietyuk.org.uk/"  passHref legacyBehavior><p className="referrallinks-link-text">Anxiety UK🔖</p></Link>
            </div>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Substance misuse</h2>
            <div className="referrallinks-list">
              <Link className="referrallinks-link-tag" href="https://www.changegrowlive.org/"  passHref legacyBehavior><p className="referrallinks-link-text">Change Grow Live🔖</p></Link> 
              <Link className="referrallinks-link-tag" href="https://www.cocaineanonymous.org.uk/"  passHref legacyBehavior><p className="referrallinks-link-text">Cocaine Anonymous🔖</p></Link>
            </div>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Recreation</h2>
            <div className="referrallinks-list">
              <Link className="referrallinks-link-tag" href="https://thehoneyeffect.wordpress.com/2022/07/04/homelessness-art-therapy-the-power-to-change-your-world/"  passHref legacyBehavior><p className="referrallinks-link-text">Kidderminster Unleashed - Art Therapy Group🔖</p></Link> 
              <Link className="referrallinks-link-tag" href="https://www.shp.org.uk/sound-house"  passHref legacyBehavior><p className="referrallinks-link-text">Langdon Music Therapy🔖</p></Link>
            </div>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Community</h2>
            <div className="referrallinks-list">
              <Link className="referrallinks-link-tag" href="https://homeless.org.uk/homeless-england/service/vineyard-community-centre/"  passHref legacyBehavior><p className="referrallinks-link-text">Homeless Community Centre🔖</p></Link> 
              <Link className="referrallinks-link-tag" href="https://www.home-start.org.uk/"  passHref legacyBehavior><p className="referrallinks-link-text">HomeStart🔖</p></Link>
            </div>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Employment</h2>
            <div className="referrallinks-list">
              <Link className="referrallinks-link-tag" href="https://movementtowork.com/"  passHref legacyBehavior><p className="referrallinks-link-text">Movement To Work🔖</p></Link> 
              <Link className="referrallinks-link-tag" href="https://www.lovelondonworking.com/"  passHref legacyBehavior><p className="referrallinks-link-text">Love London Working🔖</p></Link>
            </div>
          </div>
<div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Crisis situations</h2>
            <div className="referrallinks-list">
              <Link className="referrallinks-link-tag" href="https://www.nightlightcrisis.org/"  passHref legacyBehavior><p className="referrallinks-link-text">Nightlight🔖</p></Link> 
              <Link className="referrallinks-link-tag" href="https://www.sunahscrisisteam.org/"  passHref legacyBehavior><p className="referrallinks-link-text">Sunah Crisis Team🔖</p></Link>
            </div>
          </div>
{/* grid-card */}
<div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Domestic violence</h2>
            <div className="referrallinks-list">
              <Link className="referrallinks-link-tag" href="https://www.saferplaces.co.uk/"  passHref legacyBehavior><p className="referrallinks-link-text">Safer Places🔖</p></Link> 
              <Link className="referrallinks-link-tag" href="https://refuge.org.uk/i-need-help-now/how-we-can-help-you/national-domestic-abuse-helpline/"  passHref legacyBehavior><p className="referrallinks-link-text">National Domestic Abuse Helpline🔖</p></Link>
            </div>
          </div>          
        </section>
      </section>

    </>
  );
}
