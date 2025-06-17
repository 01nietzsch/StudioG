import Profile from "../components/Team/Profile";

export default function Team() {
  return (
    <>
      <h1 className="mt-56 text-white text-5xl text-center medium">Our Team</h1>
      <div className="w-full align-baseline flex  flex-wrap mt-20 mx-auto">
        <Profile name="Alex" description="Group manager" img="Alex.jpg" />
        <Profile
          name="Mary"
          description="Materials selection officer"
          img="Mary.jpg"
        />
        <Profile
          name="Petal"
          description="Materials Selection Team"
          img="Petal.png"
        />
        <Profile
          name="Meghna"
          description="Materials Selection Team"
          img="Meghna.jpg"
        />
        <Profile
          name="Luna"
          description="Materials Selection Team"
          img="Luna.jpg"
        />
        <Profile
          name="William"
          description="Materials Selection Team"
          img="William.jpg"
        />
        <Profile
          name="Jiahe"
          description="Materials Selection Team"
          img="Jiahe.jpg"
        />
        <Profile
          name="Muizz"
          description="Materials selection officer"
          img="Muizz.jpg"
        />
        <Profile name="Luca" description="Design Team" img="Luca (2).jpg" />
        <Profile name="Harsh" description="Design Team" img="Harsh.jpg" />
        <Profile name="Marlon" description="Design Team" img="Marlon.jpg" />
        <Profile name="Temin" description="Design Team" img="Temin.jpg" />
        <Profile name="Samuel" description="Design Team" img="Samuel.jpg" />
        <Profile name="Ezekiel" description="UI officer" img="Ezekiel.jpg" />
        <Profile
          name="Vladimir"
          description="Communication officer"
          img="Vlad.jpg"
        />
      </div>
    </>
  );
}
