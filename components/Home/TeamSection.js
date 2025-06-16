import Link from "next/link";

function TeamSection() {
  return (
    <section className=" text-white mt-8 py-28 w-2/3 mx-auto">
      <h2 className="leading-normal text-5xl sm:text-5xl">Group G</h2>
      <div className="leading-normal text-3xl mt-8 ">
        Meet our team of passionate, devoted, and hard-working materials
        scientists.
      </div>
      <Link href="/team">
        <button className="px-7 mr-4 w-auto bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition mt-10 p-3">
          Discover our team
        </button>
      </Link>
    </section>
  );
}

export default TeamSection;
