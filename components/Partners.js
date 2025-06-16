export default function Partners(){
    return(
        <section className="w-full text-white mt-72">
        <h2 className="leading-normal text-5xl sm:text-5xl text-center gotham-thin mt-96">
          Our Partners
        </h2>
        <div className="w-full flex flex-row justify-evenly mt-28 ">
          <div className="leading-normal text-2xl sm:text-2xl text-center gotham-thin  w-1/4">
            Decrypt
            <img
              className="w-1/6 text-center mx-auto"
              src="/assets/imgs/Decrypt.png"
              alt="Decrypt"
            />
          </div>

          <div className="leading-normal text-2xl sm:text-2xl text-center gotham-thin  w-1/4">
            {" "}
            Synthetix
            <img
              className="w-1/4 text-center mx-auto"
              src="/assets/imgs/Synthetix.png"
              alt="Synthetix"
            />
          </div>

          <div className="leading-normal text-2xl sm:text-2xl text-center gotham-thin w-1/4">
            Tether
            <img
              className="w-1/4  text-center mx-auto"
              src="/assets/imgs/Tether.png"
              alt="Tether"
            />
          </div>

          <div className="leading-normal text-2xl sm:text-2xl text-center gotham-thin  w-1/4">
            Dai
            <img
              className="w-1/4 text-center mx-auto"
              src="/assets/imgs/Dai.png"
              alt="Dai"
            />
          </div>

          <div className="leading-normal text-2xl sm:text-2xl text-center gotham-thin  w-1/4">
            Paxos
            <img
              className="w-1/6 text-center mx-auto"
              src="/assets/imgs/Paxos.png"
              alt="Paxos"
            />
          </div>
        </div>
        <div className="w-full flex flex-row justify-evenly"></div>
      </section>
    )
}