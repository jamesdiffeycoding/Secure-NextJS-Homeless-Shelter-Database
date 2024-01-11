import { createClient } from "@supabase/supabase-js";
// import { supabase } from "../AuthRouter";

// SUPABASE KEY, URL AND CLIENT ---------------------------------------------
const supaurl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supaurl, supakey);

// DATE CONVERTER _________________________________________________________________
export function formatDate(dateString) {
  // If dateString is undefined or null, return an empty string
  if (!dateString) {
    return "";
  }
  const arrayDate = dateString.split("-");
  const dayWithZeros = arrayDate[2];
  const parsedDay = parseInt(dayWithZeros);
  const dayWithoutZeros = parsedDay.toString();

  const monthsTextArray = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const monthIndex = arrayDate[1] - 1;
  const monthText = monthsTextArray[monthIndex];

  const year = arrayDate[0];

  return `${dayWithoutZeros} ${monthText} ${year}`;
}


// FETCH SPECIFIC SU DATA FROM SUPABASE --------------------------------------
export async function fetchSpecificSUDataFromSupabase(id) {
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
  return {
    props: {
      fetchedData,
    },
    // Set cache control headers to prevent caching
    headers: {
      'Cache-Control': 'no-store',
    },
  };
}

// GENERATE STATIC PARAMS ----------------------------------------------------
export async function generateStaticParams() {
  try {
    const res = await supabase.from("service_users").select("user_id");
    const userData = res.data[0]; //This only fetches one result
    if (userData) {
      return [{ id: userData.user_id.toString() }];
    } else {
      // Handles the case where no user with the user_id is found
      // Throws an error if this happens
      return [];
    }
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    throw error;
  }
}


// DUMMY RESET DATA

export const dummyResetData = {
  comments: [
      [ { "user_id": 1, "comment_text": "Profile completed", "comment_date": "2023-02-01", "comment_id": "ed8d7a55-02e7-4b07-961a-4ded42464c61", "staff_name": "James Diffey" },
      { "user_id": 1, "comment_text": "Welcome meeting held today", "comment_date": "2023-01-01", "comment_id": "ef55b9ef-1bd7-4a12-9f07-1babe256cb82", "staff_name": "Matthew Kirke"}]
      [{ "user_id": 2, "comment_text": "Profile completed", "comment_date": "2023-03-03", "comment_id": "db418aa8-065b-46fa-8dfd-25632f7433b0", "staff_name": "Matthew Kirke" },
      { "user_id": 2, "comment_text": "Welcome meeting held", "comment_date": "2023-10-10", "comment_id": "759ba102-6b4c-4039-a776-2eb4bbede683", "staff_name": "Sara T" },
      { "user_id": 2, "comment_text": "Welcome meeting held", "comment_date": "2024-01-21", "comment_id": "7a7414e2-46b9-4100-a428-a253a7974a77", "staff_name": "Alexander Carr" }],
      [ { "user_id": 4, "comment_text": "Profile completed", "comment_date": "2022-11-01", "comment_id": "f5bb152d-152f-41c6-bab0-557ff8df3164", "staff_name": "Victoria Eyres" },
      { "user_id": 4, "comment_text": "Welcome meeting held", "comment_date": "2023-08-29", "comment_id": "51795d6a-2e44-4326-97cf-095c370f7815", "staff_name": "Sara T" }, ],
      [ { "user_id": 5, "comment_text": "Welcome meeting held", "comment_date": "2023-02-01", "comment_id": "ad9b18d2-6c1e-4940-9362-65c2a0b0b7b6", "staff_name": "Md Jasim Chowdhury" },
      { "user_id": 5, "comment_text": "Profile completed", "comment_date": "2023-12-07", "comment_id": "bd8f94f9-888d-450e-80c9-38b81fd45b6f", "staff_name": "Md Jasim Chowdhury" }, ],
      [ { "user_id": 6, "comment_text": "Welcome meeting held", "comment_date": "2023-05-10", "comment_id": "12e5f1b4-e34d-4205-b6b0-78c018cf843c", "staff_name": "Md Jasim Chowdhury" },
      { "user_id": 6, "comment_text": "Profile completed", "comment_date": "2023-12-02", "comment_id": "1c24c326-a7d2-4628-a53e-7806fee30dda", "staff_name": "Alexander Carr" }
      ]
    ],
  medical: [
        { "medical_id": 1, "user_id": 1, "nhs_number": "AB123456C", "mental_health_disclosures": "None disclosed", "physical_health_disclosures": "No chronic conditions", "substance_abuse_disclosures": "No history of substance abuse", "registered_medical_practice": "General Practitioner", "blood_type": "O+", "allergies": "None", "medications": "Aspirin" },
        { "medical_id": 2, "user_id": 2, "nhs_number": "ZZ9999999\r\n", "mental_health_disclosures": "Anxiety", "physical_health_disclosures": "Hypertension", "substance_abuse_disclosures": "No history of substance abuse", "registered_medical_practice": "Cardiologist", "blood_type": "A-", "allergies": "Pollen", "medications": "Beta blockers" },
        { "medical_id": 3, "user_id": 3, "nhs_number": "GH567890D", "mental_health_disclosures": "Depression", "physical_health_disclosures": "Asthma", "substance_abuse_disclosures": "Social drinking occasionally", "registered_medical_practice": "Pulmonologist", "blood_type": "B+", "allergies": "Penicillin", "medications": "Inhaler" },
        {"medical_id": 4, "user_id": 4, "nhs_number": "IJ678901E", "mental_health_disclosures": "Bipolar", "physical_health_disclosures": "Diabetes", "substance_abuse_disclosures": "No history of substance abuse", "registered_medical_practice": "Endocrinologist", "blood_type": "AB-", "allergies": "fish", "medications": "Insulin" },
        { "medical_id": 5, "user_id": 5, "nhs_number": "KL789012F", "mental_health_disclosures": "PTSD", "physical_health_disclosures": "No chronic conditions", "substance_abuse_disclosures": "No history of substance abuse", "registered_medical_practice": "Psychiatrist", "blood_type": "O-", "allergies": "Dust mites", "medications": "Antidepressants" },
        { "medical_id": 6, "user_id": 6, "nhs_number": "MN901234G", "mental_health_disclosures": "Eating disorder", "physical_health_disclosures": "No chronic conditions", "substance_abuse_disclosures": "No history of substance abuse", "registered_medical_practice": "Nutritionist", "blood_type": "A+", "allergies": "Gluten", "medications": "None" },
 ],
 employment_status: [
  { "employment_id": 1, "user_id": 1, "job_description": "Construction Worker", "start_date": "2022-01-15", "end_date": "2023-06-30" },
  { "employment_id": 2, "user_id": 2, "job_description": "Marketing Specialist", "start_date": "2021-09-10", "end_date": "2022-12-31" },
  { "employment_id": 3, "user_id": 3, "job_description": "Receptionist", "start_date": "2022-01-15", "end_date": "2023-06-30" },
  { "employment_id": 4, "user_id": 4, "job_description": "Receptionist", "start_date": "2022-01-15", "end_date": "2023-06-30" },
  { "employment_id": 5, "user_id": 5, "job_description": "Bricklayer", "start_date": "2022-01-15", "end_date": "2023-06-30" },
  { "employment_id": 6, "user_id": 6, "job_description": "Apprentice", "start_date": "2022-01-15", "end_date": "2023-06-30" },
 ],

 residence: [
  { "user_id": 1, "date_entry": "2023-02-25", "current_status": "Current guest", "previous_stays": 2 },
  { "user_id": 2, "date_entry": "2023-11-11", "current_status": "Current guest", "previous_stays": 4 },
  { "user_id": 3, "date_entry": "2023-10-10", "current_status": "Current guest", "previous_stays": 4 },
  { "user_id": 4, "date_entry": "2023-10-04", "current_status": "Current guest", "previous_stays": 22 },
  { "user_id": 5, "date_entry": "2023-05-05", "current_status": "Current guest", "previous_stays": 0 },
  { "user_id": 6, "date_entry": "2023-10-06", "current_status": "Current guest", "previous_stays": 3 },
 ], 
 service_users: [
   { "user_id": 1, "first_name": "Jack", "last_name": "Smith", "age": "54", "gender": "Male", "dob": "1996-01-01", "ni_number": "AB123456C", "phone": "01234567890", "emergency_contact_name": "Jane Doe", "emergency_contact_relationship": "Sibling", "email": "john.doe@example.com", "emergency_contact_phone": "0987654321", "su_image": "su1.png", "accomodation_needs": "None specified", "languages": "Sign language" },
   { "user_id": 2, "first_name": "Mary", "last_name": "Johnson", "age": "31", "gender": "Female", "dob": "1992-02-02", "ni_number": "ZZ9999999", "phone": "07991892131", "emergency_contact_name": "Malcom Johnson", "emergency_contact_relationship": "Husband", "email": "mary.johnson@example.com", "emergency_contact_phone": "02087453131", "su_image": "su4.png", "accomodation_needs": "None specified", "languages": null },
   { "user_id": 3, "first_name": "Emma", "last_name": "Lee", "age": "22", "gender": "Female", "dob": "1999-03-10", "ni_number": "GH567890D", "phone": "07823263541", "emergency_contact_name": "David Monroe", "emergency_contact_relationship": "Cousin", "email": "emma.j@example.com", "emergency_contact_phone": "08765432101", "su_image": "su3.png", "accomodation_needs": "None specified", "languages": null },
   { "user_id": 4, "first_name": "William", "last_name": "Richardson", "age": "26", "gender": "Male", "dob": "1987-12-05", "ni_number": "IJ678901E", "phone": "07756891454", "emergency_contact_name": "Olivia Brown", "emergency_contact_relationship": "Aunt", "email": "william.b@example.com", "emergency_contact_phone": "07654321098", "su_image": "su8.png\n", "accomodation_needs": "None specified", "languages": null },
   { "user_id": 5, "first_name": "Alex", "last_name": "Alsar", "age": "28", "gender": "Female", "dob": "1993-09-18", "ni_number": "KL789012F", "phone": "04567890123", "emergency_contact_name": "Ethan Miller", "emergency_contact_relationship": "Uncle", "email": "sophia.m@example.com", "emergency_contact_phone": "6543210987", "su_image": "su9.png", "accomodation_needs": "None specified", "languages": null },
   { "user_id": 6, "first_name": "Pat", "last_name": "Wilson", "age": "5", "gender": "Male", "dob": "1990-06-25", "ni_number": "MN901234G", "phone": "05678901234", "emergency_contact_name": "Ava Wilson", "emergency_contact_relationship": "Grandparent", "email": "james.w@example.com", "emergency_contact_phone": "5432109876", "su_image": "su7.png", "accomodation_needs": "None specified", "languages": null }],
   strengths: [
    { "strengths_id": 1, "user_id": 1, "strengths_text_one": "Reading", "strengths_text_two": "Great with children", "strengths_text_three": "Qualified Mechanic", "interest_text_one": "Languages", "interest_text_two": "Games", "interest_text_three": "Travelling" },
    { "strengths_id": 2, "user_id": 2, "strengths_text_one": "Reading", "strengths_text_two": "Great with children", "strengths_text_three": "Qualified Mechanic", "interest_text_one": "Languages", "interest_text_two": "Games", "interest_text_three": "Travelling" },
    { "strengths_id:": 3, "user_id": 3, "strengths_text_one": "Effective Communication", "strengths_text_two": "Skilled Public Speaker", "strengths_text_three": "Confident Presenter", "interest_text_one": "Horses", "interest_text_two": "Nature", "interest_text_three": "Archery" },
    { "strengths_id": 4, "user_id": 4, "strengths_text_one": "Eating", "strengths_text_two": "napping", "strengths_text_three": "running", "interest_text_one": "making pens", "interest_text_two": "playing quizzes", "interest_text_three": "journaling" },
    { "strengths_id": 5, "user_id": 5, "strengths_text_one": "Eating", "strengths_text_two": "napping", "strengths_text_three": "running", "interest_text_one": "making pens", "interest_text_two": "playing quizzes", "interest_text_three": "journaling" },
    { "strengths_id": 6, "user_id": 6, "strengths_text_one": "Eating", "strengths_text_two": "napping", "strengths_text_three": "running", "interest_text_one": "making pens", "interest_text_two": "playing quizzes", "interest_text_three": "journaling" }
  ],
}