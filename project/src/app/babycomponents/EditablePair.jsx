// IMPORTS -----------------
import BackButton from "./BackButton";
import babyCompStyles from "./editablepair.css";
import serviceUserContext from "./serviceUserContext";
import { useState } from "react";
import { useContext } from "react";

// START OF DISPLAY EDITABLE PAIR COMPONENT -------------------------------------------------------------------------
export default function EditablePair({dataLabel, table, column, editMode, updateContext, type}) {
const allFetchedDataContext = useContext(serviceUserContext)
// DESTRUCTURE ALLDATA
// This allows us to more concisely write code in this file to, for example, display the SU's name and interests.
// ---- For example instead of writing "allFetchedDataContext.strengths", we can just write "strengths"
const { service_users, strengths, medical, employment_status, residence, comments, } = allFetchedDataContext;

// START OF STATE MANAGEMENT FOR INPUTS, UPDATES AND INSERTION ----------------------
// input- profile ____________________ 
const profileColumnsBlank= {first_name:"", last_name:"", age:"", gender:"", dob:"", ni_number:"", phone:"", emergency_contact_name:"", emergency_contact_relationship:"", email:"", emergency_contact_phone:"", su_image:""}; 
const [inputProfile, setInputProfile] = useState(profileColumnsBlank) 
const {first_name, last_name, age, gender, dob, ni_number, phone, emergency_contact_name, emergency_contact_relationship, email, emergency_contact_phone, su_image} = inputProfile 
const profileColumns = {first_name, last_name, age, gender, dob, ni_number, phone, emergency_contact_name, emergency_contact_relationship, email, emergency_contact_phone, su_image};
// input- strengths _____________________
const strengthsColumnsBlank = {strengths_text_one:"", strengths_text_two:"", strengths_text_three:"", interest_text_one: "", interest_text_two: "", interest_text_three:""}; 
const [inputStrengths, setInputStrengths] = useState(strengthsColumnsBlank) 
const {user_id, strengths_text_one, strengths_text_two, strengths_text_three, interest_text_one, interest_text_two, interest_text_three} = inputStrengths 
const strengthsColumns = {user_id, strengths_text_one, strengths_text_two, strengths_text_three, interest_text_one, interest_text_two, interest_text_three};
// input- medical _____________________
const medicalColumnsBlank = {medical_id: "", nhs_number: "", mental_health_disclosures: "", physical_health_disclosures: "", substance_abuse_disclosures: "", registered_medical_practice: "", blood_type: "", allergies: "", medications: "", };
const [inputMedical, setInputMedical] = useState(medicalColumnsBlank);
const { medical_id, nhs_number, mental_health_disclosures, physical_health_disclosures, substance_abuse_disclosures, registered_medical_practice, blood_type, allergies, medications, } = inputMedical;
const medicalColumns = { medical_id, nhs_number, mental_health_disclosures, physical_health_disclosures, substance_abuse_disclosures, registered_medical_practice, blood_type, allergies, medications, };
// input-employment history _____________________
const employmentStatusColumnsBlank = { employment_id: "", job_description: "", start_date: "", end_date: "", };
const [inputEmploymentStatus, setInputEmploymentStatus] = useState( employmentStatusColumnsBlank );
const { employment_id, job_description, start_date, end_date } = inputEmploymentStatus;
const employmentStatusColumns = { employment_id, job_description, start_date, end_date, };
// input-comments  _____________________
const commentsColumnsBlank = { comment_id: "", comment_text: "", comment_date: "", staff_id: "", staff_name: "", };
const [inputComments, setInputComments] = useState(commentsColumnsBlank);
const { comment_id, comment_text, comment_date } = inputComments;
const commentsColumns = { comment_id, comment_text, };
// input-residence history _____________________
const residenceColumnsBlank = { date_entry: "", current_status: "", previous_stays: "", };
const [inputResidence, setInputResidence] = useState(residenceColumnsBlank);
const { date_entry, current_status, previous_stays } = inputResidence;
const residenceColumns = { date_entry, current_status, previous_stays, };
// END OF STATE MANAGEMENT FOR INPUTS, UPDATES AND INSERTION ----------------------



// HANDLE CHANGE ON INPUT: (1) UPDATE TEXT (2) UPDATE CONTEXT
const handleChange= (event) => {
updateContext(table, column, event.target.value)
switch (table) {
  case "service_users": setInputProfile(profileColumns[column]=event.target.value); break;
  case "strengths": setInputStrengths(strengthsColumns[column]=event.target.value); break;
  case "residence": setInputResidence(residenceColumns[column]=event.target.value); break;
  case "medical": setInputMedical(medicalColumns[column]=event.target.value); break;
  case "employment_status": setInputEmploymentStatus(employmentStatusColumns[column]=event.target.value); break;
  case "comments": setInputComments(commentsColumns[column]=event.target.value); break;
  default: break; } };

  
  // SWITCH STATEMENT TO DEFINE THE INPUT, THIS AIDS THE GENERALISABILITY OF INPUT BOX 
  let inputValue=""; // blank initial input value to ensure global scope
switch (table) {
  case "service_users": inputValue=inputProfile[column]; break;
  case "strengths": inputValue=inputStrengths[column]; break;
  case "residence": inputValue=inputResidence[column]; break;
  case "medical": inputValue=inputMedical[column]; break;
  case "employment_status": inputValue=inputEmploymentStatus[column]; break;
  case "comments": inputValue=inputComments[column]; break;
  default: break; }

// START OF RETURN STATEMENT ------------------------------------------------------------------------
return (
<div className="edit-master">
{/* part 1: checking if edit mode is on */}
{editMode ? 
(<>
{/* part 2: the return if edit mode is true - before the " : " */}
<div className="onesu-flexbox-item-editpair"> <div className="onesu-data">{dataLabel}<span>:  </span> </div> 
  <div className="onesu-valueAndUpdater">
      <input placeholder={allFetchedDataContext[table]?.[0]?.[column] || "No value provided."}
        value={inputValue} 
        type={type !== undefined ? type : "text"}
        onChange={e => handleChange(e)}
        className="onesu-update-input" >
      </input>
  </div>
</div>
</>)
:
(<>
{/* part 3: the return if edit mode is false - after the " : " */}
  <div className="onesu-flexbox-item-editpair">
    <div className="onesu-data">{dataLabel}<span>:  </span> </div>
    <div className="onesu-value">{allFetchedDataContext[table]?.[0]?.[column] || "No value provided."} </div>
  </div>
</>
)}
</div>
);
}
// END OF RETURN STATEMENT
// END OF DISPLAY EDITABLE PAIR COMPONENT -------------------------------------------------------------------------
