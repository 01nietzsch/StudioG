import Link from "next/link";

export default function FollowUs() {
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
    <section className="w-2/3 mx-auto text-white mt-24 py-28 mb-96">
      <h2 className="leading-normal text-center text-5xl sm:text-5xl mb-14">
        Stay Tuned
      </h2>

      <p className="text-3xl text-center mb-14">Join our community!</p>

      <div className="w-full flex flex-wrap">
        <div className="text-center w-full align-baseline flex flex-row justify-evenly h-full  mx-auto">
          <img
            onClick={discordRedirect}
            className="cursor-pointer rounded-full  bg-primary-gradient p-3.5 w-16 hover:border-transparent duration-200 transition-all"
            src="/assets/imgs/discord.png"
            alt="Discord"
          />
          <img
            onClick={instagramRedirect}
            className="cursor-pointer rounded-full  bg-primary-gradient p-3.5 w-16 hover:border-transparent duration-100 transition-all"
            src="/assets/imgs/insta.png"
            alt="Instagram"
          />
          <img
            onClick={twitterRedirect}
            className="cursor-pointer rounded-full   bg-primary-gradient p-3.5 w-16 hover:border-transparent duration-200 transition-all"
            src="/assets/imgs/twitter.png"
            alt="Twitter"
          />
        </div>
      </div>
    </section>
  );
}
