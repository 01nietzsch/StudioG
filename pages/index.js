import First from "../components/Home/First";
import PilarsOfStabilitySection from "../components/Home/PilarsOfStabilitySection";
import TrilemmaSection from "../components/Home/TrilemmaSection";
// import OttoProtocol from "../components/Home/OttoProtocol";
import TeamSection from "../components/Home/TeamSection";
import FollowUs from "../components/Home/FollowUs";

export default function Home() {
  function twitterRedirect() {
    window.open("https://www.twitter.com/otto_protocol", "_blank");
  }

  function discordRedirect() {
    window.open("https://discord.com/invite/gmfwBWyTMJ", "_blank");
  }

  function instagramRedirect() {
    window.open("https://www.instagram.com/otto_protocol/", "_blank");
  }

  function appRedirect() {
    window.open("https://app.ottoprotocol.fi/", "_blank");
  }

  return (
    <>
      <First />

      <PilarsOfStabilitySection />

      <TrilemmaSection />

      {/* <OttoProtocol /> */}

      <TeamSection />
    </>
  );
}
