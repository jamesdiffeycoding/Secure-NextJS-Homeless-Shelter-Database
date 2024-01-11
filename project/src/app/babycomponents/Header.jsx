import BackButton from "./BackButton";
import babyCompStyles from "./header.css";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

export default function Header({ staffName }) {

  return (
      <div className="flexbox-container">
        <div className="flexbox-item-home">
          <BackButton />
        </div>
        <div>
          <div className="flexbox-container-logoforlogin">
                <Image src="/lock.png" alt="security lock" width="50" height="50" className="security lock"/>
        <Image
              src="/placeholderpersonblue.png"
              alt="profile image"
              width="55"
              height="60"
        />
            </div>
            
          </div>
      </div>
  );
}
