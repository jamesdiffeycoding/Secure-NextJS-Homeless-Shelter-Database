"use client";
// import "./index.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { redirect } from "next/navigation";
import Header from "./babycomponents/Header";

// components
import DashboardComp from "./pagecomponents/DashboardComp";
import DisplayAllSUComp from "./pagecomponents/DisplayAllSUComp";
import DisplayOneSUComp from "./pagecomponents/DisplayOneSUComp";
import AddSUComp from "./pagecomponents/AddSUComp";
import ReferralLinksComp from "./pagecomponents/ReferralLinksComp";
import LogoForLogin from "./babycomponents/LogoForLogin";
import LockForLogin from "./babycomponents/LockForLogin";

//Supabase client setup. Exported to other pages

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseURL, supabaseKey);

//pagename and allFetchedDataAboutSpecificSU are passed in as props

export default function AuthRouter({
  pageName,
  allFetchedDataAboutSpecificSU,
  id
}) {
  
  //supabase sets up a session object. 
  //The session object contains tokens as well as the uuid and email of the person logging in
  const [session, setSession] = useState(null);
  const [staffName, setStaffName] = useState(null);

  //useeffect is needed as these are async functions in a client-side component
  //this useeffect combines 2 different async functions
  //1) one to set up the session
  //2) fetch staff name

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setSession(session);
// we are getting the uuid of the person logged in here
        const userDetails = session.user.id;
//we use this uuid to fetch the name of the staff member from supabase
        try {
          const { data, error } = await supabase
            .from("staff_profile")
            .select("first_name")
            .eq("user_id", userDetails);

          if (error) {
            console.error("Error fetching staff user:", error.message);
            return;
          }

          if (data && data.length > 0) {
            const staffName = data[0].first_name;
            setStaffName(staffName);
            console.log(staffName); // Log the fetched name
          }
        } catch (error) {
          console.error("Unexpected error:", error.message);
        }
      } catch (error) {
        console.error("Error getting session:", error.message);
      }
    };

    fetchData();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
//useeffect cleanup function
    return () => subscription.unsubscribe();
  }, []);

  const [displayStatusDummy, setDisplayStatusDummy] = useState("none");

  function handleDisplayClickDummy() {
    if (displayStatusDummy == "none") { setDisplayStatusDummy("inline");
    } else { setDisplayStatusDummy("none")}
  }

//if there is no session(not logged in), you are redirected to the login page
  if (!session) {
    return <>    <div className="login-master">
      <LogoForLogin></LogoForLogin>
      <LockForLogin></LockForLogin>
      <div className="flexbox-center"><h1 data-test="hero-heading" className="white-font">Home Horizon: Secure Homeless Shelter Database Application</h1>
      </div>
      <div className="dummy-login-container">

      <div><strong>
        <h3>Guest viewers</h3>

      Want to try using the site's features with dummy data? 
      </strong>
      <div>
        <button class="dummy-login" onClick={(handleDisplayClickDummy)}>Click here to see login details for this:
        </button>
        <div class="dummy-login-details" style={{display: displayStatusDummy}}>
          <p>Email address: jamesdiffey8@gmail.com</p>
          <p>Password: abcdef</p>

        </div>
      </div>
      </div>
      <br></br>
      </div>
      <br></br>

      {/* this is where you can customise the display of the supabase auth. */}
      <h2 className="login-heading-text">Login</h2>
      <Auth supabaseClient={supabase} appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "rgb(10, 80, 150)",
                  brandAccent: "rgba(10, 80, 150, 0.7);",
                },
              },
            },
            style: {
              label: {color: 'white', fontWeight:'bold'},
              button: {boxShadow: '2px 2px white'}
            }
            //this turns off the google, github etc... links
          }} providers={[]} showLinks={false}/>
          </div>
    </>
  }
  // redirector
  //pagename is passed in as a prop from the relevant page.js. The value of pagename decides what page component is displayed. 
  //Staffname is passed as a prop to the dashboard and header. 
  //Allfetcheddataaboutspecificsu is passed from displayallsu to the authrouter and from there to displayonesu
  switch (pageName) {
    case "dashboard":
      return <> 
      <Header staffName={staffName} />
      <DashboardComp staffName={staffName} />
        </>
    case "displayallsu":
      return <>
      <Header staffName={staffName} />
      <DisplayAllSUComp />
      </>
    case "displayonesu":
      return (<>
      <Header staffName={staffName} />
        <DisplayOneSUComp
          allFetchedDataAboutSpecificSU={allFetchedDataAboutSpecificSU}
          id={id}
        /></>
      )
    case "editsu":
      return <>
      <Header staffName={staffName} />
      <EditSUComp />
      </>
    case "addsu":
      return <>
      <Header staffName={staffName} />
      <AddSUComp />
      </>
    case "referrallinks":
      return <>
      <Header staffName={staffName} />
      <ReferralLinksComp />
      </>
    default:
      return <div>page Name passed to login as a prop wasnt matched</div>
  }
}
