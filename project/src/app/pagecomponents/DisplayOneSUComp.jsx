// IMPORTS ------------------------------------------------------------------
import Link from "next/link";
import Image from "next/image.js";
import { useState, useEffect } from "react";
import EditablePair from "../babycomponents/EditablePair";
import React from "react";
import ServiceUserContext from "../babycomponents/serviceUserContext";
import { toast } from "sonner";
import { supabase } from "../AuthRouter";
export const dynamic = "force-dynamic"; //forces next js to revaluate data preventing caching
export const revalidate = 0; //tells supabase to not use caching


// START OF DISPLAY ONE SU COMPONENT -------------------------------------------------------------------------
// prop taken in: allFetchedDataAboutSpecificSU. This is passed from the "/displayOneSu/page.js" file to the AuthRouter to here through prop drilling.
// ---- The reason for this is that fetching using an async function and await does NOT work in a jsx file.
export default function DisplayOneSUComp({ allFetchedDataAboutSpecificSU, id }) {
  
  // STATE FOR EDITING DATA
  const [suDataState, setSuDataState] = useState(allFetchedDataAboutSpecificSU);
  // STATE FOR DATA LOAD
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //try catch to catch errors
      try {
        //supabase-specific syntax for a SQL query .from('service_users').select('*') instead of SELECT * from service_users
        // data from supabase is fetched as an object - this is deconstructed as data and error
        const { data, error } = await supabase
          .from("service_users")
          .select("*")
          .eq("user_id", id);
        console.log("data fetched on viewONEsu", data);
        const profileResponse = await supabase
        .from("service_users")
        .select("*")
        .eq("user_id", id);
    
      const strengthsResponse = await supabase
        .from("strengths")
        .select("*")
        .eq("user_id", id);
    
      const medicalResponse = await supabase
        .from("medical")
        .select("*")
        .eq("user_id", id);
    
      const employment_statusResponse = await supabase
        .from("employment_status")
        .select("*")
        .eq("user_id", id);
    
      const residenceResponse = await supabase
        .from("residence")
        .select("*")
        .eq("user_id", id);
    
      const commentsResponse = await supabase
        .from("comments")
        .select("*")
        .eq("user_id", id);
    
      const service_users = profileResponse?.data;
      const strengths = strengthsResponse?.data;
      const medical = medicalResponse?.data;
      const employment_status = employment_statusResponse?.data;
      const residence = residenceResponse?.data;
      const comments = commentsResponse?.data;
    
      let fetchedData = {
        service_users,
        strengths,
        medical,
        employment_status,
        residence,
        comments,
      };
      console.log("WITHIN UE")

      console.log(fetchedData)
      setSuDataState(fetchedData);
        if (error) {
          throw error;
        }

        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data on viewONEsu:", error.message);
      }
    }

    fetchData();
  }, []);
  
  console.log("data state----")
  console.log(data)
  console.log("all data fetched state old --------")
  console.log(allFetchedDataAboutSpecificSU)
  console.log(id)


// DESTRUCTURING ALLFETCHEDDATAABOUTSPECIFIC SU

// DECLARATION OF USERID VALUE, WHICH WILL BE PASSED AS A PROP IN EVERY USECONTEXT() FUNCTION AND SUPABASEUPDATEORINSERTDATA() QUERY BELOW
  let userID = allFetchedDataAboutSpecificSU.service_users[0].user_id;

// START OF STATE AND FUNCTION DECLARATION FOR HANDLING DISPLAY TOGGLING FOR EACH TABLE
// Example: displayStatusStrengths is the CSS display value provided for the strengths container's EditablePair components.
// ------- pressing the Strengths title or drop-down arrow button toggles whether the EditablePair components (which can return divs or inputs) display or are hidden.
// ------- note: 'inline' is the default display option, but we are setting their initial "useState" value to "none", so they are hidden by default.
// ------- handleClickStrengths is the function that is called when the title or drop-down arrow button is clicked.
  const [displayStatusProfile, setDisplayStatusProfile] = useState("inline");
  const [displayStatusStrengths, setDisplayStatusStrengths] = useState("none");
  const [displayStatusEmergencyContact, setDisplayStatusEmergencyContact] = useState("none");
  const [displayStatusMedical, setDisplayStatusMedical] = useState("none");
  const [displayStatusEmployment, setDisplayStatusEmployment] = useState("none");
  const [displayStatusResidence, setDisplayStatusResidence] = useState("none");
  const [displayStatusComments, setDisplayStatusComments] = useState("none");

  function handleDisplayClickProfile() {
    if (displayStatusProfile == "none") { setDisplayStatusProfile("inline");
    } else { setDisplayStatusProfile("none")}
  }
  function handleDisplayClickMedical() {
    if (displayStatusMedical == "none") { setDisplayStatusMedical("inline");
    } else { setDisplayStatusMedical("none")}
  }
  function handleDisplayClickResidence() {
    if (displayStatusResidence == "none") { setDisplayStatusResidence("inline");
    } else { setDisplayStatusResidence("none")}
  }
  function handleDisplayClickStrengths() {
    if (displayStatusStrengths == "none") { setDisplayStatusStrengths("inline");
    } else { setDisplayStatusStrengths("none")}
  }
  function handleDisplayClickComments() {
    if (displayStatusComments == "none") { setDisplayStatusComments("inline");
    } else { setDisplayStatusComments("none")}
  }
  function handleDisplayClickEmergencyContact() {
    if (displayStatusEmergencyContact == "none") { setDisplayStatusEmergencyContact("inline");
    } else { setDisplayStatusEmergencyContact("none")}
  }
  function handleDisplayClickEmployment() {
    if (displayStatusEmployment == "none") { setDisplayStatusEmployment("inline");
    } else { setDisplayStatusEmployment("none")}
  }
// END OF STATE AND FUNCTION DECLARATION FOR HANDLING DISPLAY TOGGLING FOR EACH TABLE


// START OF STATE AND FUNCTION DECLARATION FOR HANDLING 'EDIT MODE' OF EACH TABLE
// Example: editStatusStrengths is the editMode value passed as a prop from for the strengths container's EditablePair components.
// ------- pressing the edit button toggles whether the EditablePair component returns 'input boxes' for editing or 'divs' for display-only.
// edit_strengths
  const [editStatusStrengths, setEditStatusStrengths] = useState(false);
  function handleEditStrengths() {
    setDisplayStatusStrengths("inline");
    if (editStatusStrengths == false) { setEditStatusStrengths(true);
    } else { setEditStatusStrengths(false)}
  }
// edit_profile
  const [editStatusProfile, setEditStatusProfile] = useState(false);
  function handleEditProfile() {
    setDisplayStatusProfile("inline");
    if (editStatusProfile == false) { setEditStatusProfile(true);
    } else { setEditStatusProfile(false)}
  }
// edit_employment  
  const [editStatusEmployment, setEditStatusEmployment] = useState(false);
  function handleEditEmployment() {
    setDisplayStatusEmployment("inline");
    if (editStatusEmployment == false) { setEditStatusEmployment(true);
    } else { setEditStatusEmployment(false)}
  }
// edit_comments
  const [editStatusComments, setEditStatusComments] = useState(false);
  function handleEditComments() {
    setDisplayStatusComments("inline");
    if (editStatusComments == false) { setEditStatusComments(true);
    } else { setEditStatusComments(false)}
  }
// edit_medical
  const [editStatusMedical, setEditStatusMedical] = useState(false);
  function handleEditMedical() {
    setDisplayStatusMedical("inline");
    if (editStatusMedical == false) { setEditStatusMedical(true);
    } else { setEditStatusMedical(false)}
  }
// edit_emergency
  const [editStatusEmergencyContact, setEditStatusEmergencyContact] =
    useState(false);
  function handleEditEmergencyContact() {
    setDisplayStatusEmergencyContact("inline");
    if (editStatusEmergencyContact == false) { setEditStatusEmergencyContact(true);
    } else { setEditStatusEmergencyContact(false)}
  }
// edit_residence
  const [editStatusResidence, setEditStatusResidence] = useState(false);
  function handleEditResidence() {
    setDisplayStatusResidence("inline");
    if (editStatusResidence == false) { setEditStatusResidence(true);
    } else { setEditStatusResidence(false)}
  }
// END OF STATE AND FUNCTION DECLARATION FOR HANDLING 'EDIT MODE' OF EACH TABLE


// START OF FUNCTION FOR UPDATING CONTEXT VALUES OF SU INFORMATION BEFORE SENDING TO DATABASE
function updateContext(table, column, newInputValue) {
  data[table][0][column] = newInputValue;
  let updatedData = data;
  setSuDataState(updatedData);
  console.log(suDataState);
}
// END OF FUNCTION FOR UPDATING CONTEXT VALUES OF SU INFORMATION BEFORE SENDING TO DATABASE


// START OF FUNCTION TO UPDATE/INSERT DATA, INCLUDING TOAST POPUP
async function supabaseUpdateOrInsertData(table) {
  console.log(table);
  toast("Success", { className: "success-toast", description: "Successfully Edited Service User", duration: 2000, position: "top-left", // onAutoClose: window.location.reload(), //will reload page(after toast disappears)
    style: { background: "#f5f5f5", color: "#111111", border: "3px solid #111111", },
  });
  // part 1: checking to see if data exists
  const { data, error } = await supabase .from(table) .select("*") .eq("user_id", userID);
  // part 2: if there is data, run an UPDATE query for a specific input value
  if (data.length >= 1) {
    await supabase.from(table).update(suDataState[table][0]).eq("user_id", userID);
    console.log( `Data already existed, so data will be updated for user no. "${userID}""` );
  }
  // if there is no data, -> INSERT
  else {
    await supabase .from("strengths") .insert(suDataState[table][0]) .eq("user_id", userID);
    console.log( `Data did not exist , so data will be inserted for user no. "${userID}".` );
  }
}
// END OF FUNCTION TO UPDATE/INSERT DATA, INCLUDING TOAST POPUP


// START OF RETURN STATEMENT
return (
<>
{/* START OF CONTENT BOX */}
<section className="global-content">
  <div className="onesu-flexbox-top">
      <Link href="/displayallsu">
        <div className="onesu-flexbox-item-serviceusername">
          <img className="global-button-shadow" src="/backarrow.png" alt="back button icon" />
        </div>
      </Link>
    {/* MINI WELCOME BOX (2) DISPLAYING PROFILE NAME. */}
      <section className="global-welcome">
        <h1 className="global-heading">{suDataState.service_users[0]?.first_name}'s profile </h1>
        <p className="global-description">{suDataState.service_users[0]?.first_name} loves {suDataState.strengths[0]?.interest_text_one.toLowerCase()
              || "something peculiar"}, {suDataState.strengths[0]?.interest_text_two.toLowerCase() || "something musical"} and {suDataState.strengths[0]?.interest_text_three.toLowerCase() || "something surprising"}. 
              </p>
      </section>
      <div className="onesu-avatar global-rounded-border">
        <Image src={"/placeholderperson.png"} alt="su avatar" width={50} height={50} priority className="onesu-avatar-pic global-rounded-border" />
      </div>
    </div>
  
    {/* PROFILE BOX */}
    <div className="onesu-toggle-container">
      <div className="onesu-toggle-header">
        <div className="onesu-toggle-title" onClick={handleDisplayClickProfile}>
          <span>Basic Info</span>
          <Image src={displayStatusProfile === "none"? "/arrowup.png": "/arrowdown.png"} alt="collapse headings button" width="50" height="15" className="link"/>
        </div>
        <div className="onesu-toggle-edit" onClick={handleEditProfile}>          Edit        </div>
      </div>
      <div className="onesu-toggle-information-flexbox black-font" style={{ display: displayStatusProfile }}      >
        <ServiceUserContext.Provider value={suDataState}>
          <EditablePair dataLabel="First name" table={"service_users"} column={"first_name"} updateContext={updateContext} editMode={editStatusProfile} ></EditablePair>
          <EditablePair dataLabel="Last name" table={"service_users"} column={"last_name"} updateContext={updateContext} editMode={editStatusProfile} ></EditablePair>
          <EditablePair dataLabel="Age" table={"service_users"} column={"age"} type="number" updateContext={updateContext} editMode={editStatusProfile} ></EditablePair>
          <EditablePair dataLabel="Gender" table={"service_users"} column={"gender"} updateContext={updateContext} editMode={editStatusProfile} ></EditablePair>
          <EditablePair dataLabel="DOB" table={"service_users"} column={"dob"} type={"date"} updateContext={updateContext} editMode={editStatusProfile} ></EditablePair>
          <EditablePair dataLabel="NI Number" table={"service_users"} column={"ni_number"} updateContext={updateContext} editMode={editStatusProfile} ></EditablePair>
          <EditablePair dataLabel="Phone" type={"tel"} table={"service_users"} column={"phone"} updateContext={updateContext} editMode={editStatusProfile} ></EditablePair>
          <EditablePair dataLabel="Email" table={"service_users"} column={"email"} type={"email"} updateContext={updateContext} editMode={editStatusProfile} ></EditablePair>
          <EditablePair dataLabel="Language requirements" table={"service_users"} column={"languages"} updateContext={updateContext} editMode={editStatusProfile} ></EditablePair>
          <EditablePair dataLabel="Accomodation needs" table={"service_users"} column={"accomodation_needs"} updateContext={updateContext} editMode={editStatusProfile} ></EditablePair>
          <br></br>
          <div className="onesu-update-container">
            <div className="onesu-update-btn" style={{ display: editStatusProfile ? "inline" : "none" }} onClick={function () { supabaseUpdateOrInsertData("service_users"); setEditStatusProfile(false)}} >
              UPDATE
            </div>
          </div>
        </ServiceUserContext.Provider>
      </div>
    </div>

    {/* STRENGTHS/INTERESTS BOX */}
    <div className="onesu-toggle-container">
      <div className="onesu-toggle-header">
        <div className="onesu-toggle-title" onClick={handleDisplayClickStrengths} >
          <span>Strengths & Interests</span>
          <Image src={ displayStatusStrengths === "none" ? "/arrowup.png" : "/arrowdown.png" } alt="collapse headings button" width="50" height="15" className="link" />
        </div>
        <div className="onesu-toggle-edit" onClick={handleEditStrengths}> Edit </div>
      </div>
      <div className="onesu-toggle-information-flexbox" style={{ display: displayStatusStrengths }} >
        <ServiceUserContext.Provider value={suDataState}>
          <EditablePair dataLabel="Strength 1" table={"strengths"} column={"strengths_text_one"} updateContext={updateContext} editMode={editStatusStrengths} ></EditablePair>
          <EditablePair dataLabel="Strength 2" table={"strengths"} column={"strengths_text_two"} updateContext={updateContext} editMode={editStatusStrengths} ></EditablePair>
          <EditablePair dataLabel="Strength 3" table={"strengths"} column={"strengths_text_three"} updateContext={updateContext} editMode={editStatusStrengths} ></EditablePair>
          <hr></hr>
          <EditablePair dataLabel="Interest 1" table={"strengths"} column={"interest_text_one"} updateContext={updateContext} editMode={editStatusStrengths} ></EditablePair>
          <EditablePair dataLabel="Interest 2" table={"strengths"} column={"interest_text_two"} updateContext={updateContext} editMode={editStatusStrengths} ></EditablePair>
          <EditablePair dataLabel="Interest 3" table={"strengths"} column={"interest_text_three"} updateContext={updateContext} editMode={editStatusStrengths} ></EditablePair>
          <br></br>
          <div className="onesu-update-container">
            <div className="onesu-update-btn" style={{ display: editStatusStrengths ? "inline" : "none" }} onClick={function () { supabaseUpdateOrInsertData("strengths")}} >
              UPDATE
            </div>
          </div>
        </ServiceUserContext.Provider>
      </div>
    </div>


    {/* EMERGENCY BOX */}
    <div className="onesu-toggle-container">
      <div className="onesu-toggle-header">
        <div className="onesu-toggle-title" onClick={handleDisplayClickEmergencyContact} >
          <span>Emergency Contact</span>
          <Image src={ displayStatusEmergencyContact === "none" ? "/arrowup.png" : "/arrowdown.png" } alt="collapse headings button" width="50" height="15" className="link" />
        </div>
        <div className="onesu-toggle-edit" onClick={handleEditEmergencyContact} > Edit </div>
      </div>
      <div className="onesu-toggle-information-flexbox" style={{ display: displayStatusEmergencyContact }} >
        <ServiceUserContext.Provider value={suDataState}>
          <EditablePair dataLabel="Name" table={"service_users"} column={"emergency_contact_name"} updateContext={updateContext} editMode={editStatusEmergencyContact} ></EditablePair>
          <EditablePair dataLabel="Relationship to user" table={"service_users"} column={"emergency_contact_relationship"} updateContext={updateContext} editMode={editStatusEmergencyContact} ></EditablePair>
          <EditablePair dataLabel="Phone" table={"service_users"} type="tel" column={"emergency_contact_phone"} updateContext={updateContext} editMode={editStatusEmergencyContact} ></EditablePair>
          <br></br>
          <div className="onesu-update-container">
            <div className="onesu-update-btn" style={{ display: editStatusEmergencyContact ? "inline" : "none", }} onClick={function () { supabaseUpdateOrInsertData("service_users"); setEditStatusEmergencyContact(false)}} >
              UPDATE
            </div>
          </div>
        </ServiceUserContext.Provider>
      </div>
    </div>
    {/* MEDICAL BOX */}
    <div className="onesu-toggle-container">
      <div className="onesu-toggle-header">
        <div className="onesu-toggle-title" onClick={handleDisplayClickMedical} >
          <span>Medical</span>
          <Image src={ displayStatusMedical === "none" ? "/arrowup.png" : "/arrowdown.png" } alt="collapse headings button" width="50" height="15" className="link" />
        </div>
        <div className="onesu-toggle-edit" onClick={handleEditMedical}> Edit </div>
      </div>
      <div className="onesu-toggle-information-flexbox" style={{ display: displayStatusMedical }} >
        <ServiceUserContext.Provider value={suDataState}>
          <EditablePair dataLabel="NHS number" table={"medical"} column={"nhs_number"} updateContext={updateContext} editMode={editStatusMedical} ></EditablePair>
          <EditablePair dataLabel="Mental health" table={"medical"} column={"mental_health_disclosures"} updateContext={updateContext} editMode={editStatusMedical} ></EditablePair>
          <EditablePair dataLabel="Physical health" table={"medical"} column={"physical_health_disclosures"} updateContext={updateContext} editMode={editStatusMedical} ></EditablePair>
          <EditablePair dataLabel="Substance misuse" table={"medical"} column={"substance_abuse_disclosures"} updateContext={updateContext} editMode={editStatusMedical} ></EditablePair>
          <EditablePair dataLabel="Registered medical practice" table={"medical"} column={"registered_medical_practice"} updateContext={updateContext} editMode={editStatusMedical} ></EditablePair>
          <EditablePair dataLabel="Blood type" table={"medical"} column={"blood_type"} updateContext={updateContext} editMode={editStatusMedical} ></EditablePair>
          <EditablePair dataLabel="Allergies" table={"medical"} column={"allergies"} updateContext={updateContext} editMode={editStatusMedical} ></EditablePair>
          <EditablePair dataLabel="Medications" table={"medical"} column={"medications"} updateContext={updateContext} editMode={editStatusMedical} ></EditablePair>
          <br></br>
          <div className="onesu-update-container">
            <div className="onesu-update-btn" style={{ display: editStatusMedical ? "inline" : "none" }} onClick={function () { supabaseUpdateOrInsertData("medical"); setEditStatusMedical(false)}} >
              UPDATE
            </div>
          </div>
        </ServiceUserContext.Provider>
      </div>
    </div>
    {/* EMPLOYMENT BOX */}
    <div className="onesu-toggle-container">
      <div className="onesu-toggle-header">
        <div className="onesu-toggle-title" onClick={handleDisplayClickEmployment} >
          <span>Employment history</span>
          <Image src={ displayStatusEmployment === "none" ? "/arrowup.png" : "/arrowdown.png" } alt="collapse headings button" width="50" height="15" className="link" />
        </div>
        <div className="onesu-toggle-edit" onClick={handleEditEmployment}> Edit </div>
      </div>
      <div className="onesu-toggle-information-flexbox" style={{ display: displayStatusEmployment }} >
        <ServiceUserContext.Provider value={suDataState}>
          <EditablePair dataLabel="Job title" table={"employment_status"} column={"job_description"} updateContext={updateContext} editMode={editStatusEmployment} ></EditablePair>
          <EditablePair dataLabel="Start date" table={"employment_status"} column={"start_date"} type={"date"} updateContext={updateContext} editMode={editStatusEmployment} ></EditablePair>
          <EditablePair dataLabel="End date" table={"employment_status"} column={"end_date"} type={"date"} updateContext={updateContext} editMode={editStatusEmployment} ></EditablePair>
          <br></br>
          <div className="onesu-update-container">
            <div className="onesu-update-btn" style={{ display: editStatusEmployment ? "inline" : "none" }} onClick={function () { supabaseUpdateOrInsertData("employment_status"); setEditStatusEmployment(false)}} >
              UPDATE
            </div>
          </div>
        </ServiceUserContext.Provider>
      </div>
    </div>
    {/* COMMENTS */}
    <div className="onesu-toggle-container">
      <div className="onesu-toggle-header">
        <div className="onesu-toggle-title" onClick={handleDisplayClickComments} >
          <span>Comments</span>
          <Image src={ displayStatusComments === "none" ? "/arrowup.png" : "/arrowdown.png" } alt="collapse headings button" width="50" height="15" className="link" />
        </div>
        <div className="onesu-toggle-edit" onClick={handleEditComments}> Edit </div>
      </div>
      <div className="onesu-toggle-information-flexbox" style={{ display: displayStatusComments }} >
        <ServiceUserContext.Provider value={suDataState}>
          <EditablePair dataLabel="Comment Text" table={"comments"} column={"comment_text"} updateContext={updateContext} editMode={editStatusComments} ></EditablePair>
          <EditablePair dataLabel="Comment Date" table={"comments"} column={"comment_date"} updateContext={updateContext} editMode={editStatusComments} ></EditablePair>
          <EditablePair dataLabel="Staff Name" table={"comments"} column={"staff_name"} updateContext={updateContext} editMode={editStatusComments} ></EditablePair>
          <br></br>
          <div className="onesu-update-container">
            <div className="onesu-update-btn" style={{ display: editStatusComments ? "inline" : "none" }} onClick={function () { supabaseUpdateOrInsertData("comments"); setEditStatusComments(false)}} >
              UPDATE
            </div>
          </div>
        </ServiceUserContext.Provider>
      </div>
    </div>

    {/* RESIDENCE */}
    <div className="onesu-toggle-container">
      <div className="onesu-toggle-header">
        <div className="onesu-toggle-title" onClick={handleDisplayClickResidence} >
          <span>Residence history</span>
          <Image src={ displayStatusComments === "none" ? "/arrowup.png" : "/arrowdown.png" } alt="collapse headings button" width="50" height="15" className="link" />
        </div>
      <div className="onesu-toggle-edit" onClick={handleEditResidence}> Edit </div>
      </div>
      <div className="onesu-toggle-information-flexbox" style={{ display: displayStatusResidence }} >
        <ServiceUserContext.Provider value={suDataState}>
          <EditablePair dataLabel="Date entry" table={"residence"} column={"date_entry"} updateContext={updateContext} editMode={editStatusResidence} ></EditablePair>
          <EditablePair dataLabel="Current status" table={"residence"} column={"current_status"} updateContext={updateContext} editMode={editStatusResidence} ></EditablePair>
          <EditablePair dataLabel="Previous stays" table={"residence"} column={"previous_stays"} updateContext={updateContext} editMode={editStatusResidence} ></EditablePair>
          <br></br>
          <div className="onesu-update-container">
            <div className="onesu-update-btn" style={{ display: editStatusResidence ? "inline" : "none" }} onClick={function () { supabaseUpdateOrInsertData("residence"); setEditStatusResidence(false)}} >
              UPDATE
            </div>
          </div>
        </ServiceUserContext.Provider>
      </div>
      </div>
</section>

  </>
);
// END OF RETURN STATEMENT

}
// END OF DISPLAY ONE SU COMPONENT -------------------------------------------------------------------------
