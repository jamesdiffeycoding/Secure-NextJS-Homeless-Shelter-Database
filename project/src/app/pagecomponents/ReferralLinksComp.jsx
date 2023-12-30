import compStyles from "./referrallinks.css";
import Link from "next/link";

//links with 🔖 are genuine links - other links to NHS
//links now open on a separate page (target blank). LegacyBehaviour lets us nest an <a> tag so we can do this (not possible with just LINK)

export default function ReferralLinksComp() {
  return (
    <>
      {/* WELCOME BOX */}
      <section className="global-welcome">
          <h1 className="global-heading">Referral Links
          </h1>
          <p className="global-description">Click the links below.</p>
        </section>
      {/* CONTENT BOX */}
      <section className="global-content">
        <section className="referrallinks-grid black-font">
        {/* grid-card */}
          <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Housing</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Birmingham Community Housing</p></a></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://amberweb.org/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Amber Foundation- Supported Housing for Young People🔖</p></a></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Immigration</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.migranthelpuk.org/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Migrant Help🔖</p></a></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://righttoremain.org.uk/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Right To Remain🔖</p></a></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Language support</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.charitytranslators.org/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Charity Translators🔖</p></a></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Sussex College ESOL Classes</p></a></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Physical health</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">StayFit Gym</p></a></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.watfordfccsetrust.com/project/man-on/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Man On! Football/Mental Health🔖</p></a></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Mental wellbeing</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.mind.org.uk/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Mind🔖</p></a></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.anxietyuk.org.uk/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Anxiety UK🔖</p></a></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Substance misuse</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.changegrowlive.org/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Change Grow Live🔖</p></a></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.cocaineanonymous.org.uk/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">CA🔖</p></a></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Recreation</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Kidderminster Unleashed - Art Therapy Group</p></a></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Langdon Music Therapy</p></a></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Community</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">West Sussex Community Centre</p></a></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.home-start.org.uk/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">HomeStart🔖</p></a></Link></li>
            </ul>
          </div>
        {/* grid-card */}
        <div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Employment</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://movementtowork.com/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Movement To Work🔖</p></a></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.lovelondonworking.com/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Love London Working🔖</p></a></Link></li>
            </ul>
          </div>
<div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Crisis situations</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.nightlightcrisis.org/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Nightlight🔖</p></a></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://www.nhs.uk"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">North Cumbrian Mental Health Crisis Team</p></a></Link></li>
            </ul>
          </div>
{/* grid-card */}
<div className="referrallinks-grid-card">
            <h2 className="referrallinks-section-heading">Domestic violence</h2>
            <ul>
              <li><Link className="referrallinks-link-tag" href="https://www.saferplaces.co.uk/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">Safer Places🔖</p></a></Link> </li>
              <li><Link className="referrallinks-link-tag" href="https://refuge.org.uk/i-need-help-now/how-we-can-help-you/national-domestic-abuse-helpline/"  passHref legacyBehavior><a target="_blank"><p className="referrallinks-link-text">National Domestic Abuse Helpline🔖</p></a></Link></li>
            </ul>
          </div>          
        </section>
      </section>
      

    </>
  );
}
