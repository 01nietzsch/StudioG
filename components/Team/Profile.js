export default function Profile({ name, description, img }) {
  return (
    <div className="  text-center mt-10   justify-center px-16 py-10  text-white mx-auto bg-[#3c3c3c67]">
      <img
        className="rounded-full max-w-32 max-h-32"
        src={`/assets/imgs/${img}`}
      ></img>
      <h2 className="mt-4 text-2xl">{name}</h2>
      <p className="mt-2 w-full font-normal">{description}</p>
    </div>
  );
}
