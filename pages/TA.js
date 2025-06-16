import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section className="w-full text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="vertical-center"
          >
            <h1 className="mt-8 sm:mt-16 mb-6 text-4xl sm:text-6xl text-center font-extrabold text-white">
              Terms & Agreements
            </h1>
            <div className="w-full align-middle justify-center z-0 relative mr-96 sm:mx-6">
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white mt-12">
                1. Terms of Service
              </h2>
              <p className="text-base sm:text-lg text-white mt-2 sm:mx-12">
                a. Introduction
              </p>
              <p className="text-base sm:text-lg text-white sm:mx-12">
                i. Welcome to our website. By using our site, you agree to these
                terms and conditions of use. If you do not agree with these
                terms and conditions, please do not use our site.
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white mt-12">
                2. Use of the Site
              </h2>
              <p className="text-base sm:text-lg text-white mt-2 sm:mx-12">
                a. The content of our site, including text, images, graphics,
                and other materials, is for informational purposes only and
                should not be used as the sole basis for making decisions. You
                are responsible for ensuring that any information obtained from
                our site is accurate and up-to-date.
              </p>
              <p className="text-base sm:text-lg text-white sm:mx-12">
                i. Intellectual Property
              </p>
              <p className="text-base sm:text-lg text-white sm:mx-12">
                All content on the site, including text, images, videos,
                graphics, logos, trademarks, trade names, and other materials,
                is the property of our company or our content providers and is
                protected by intellectual property laws. You may not reproduce,
                distribute, publicly display, modify, create derivative works
                from, sell, or exploit any content on the site without our prior
                written permission.
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white mt-12">
                3. Disclaimer of Warranties
              </h2>
              <p className="text-base sm:text-lg text-white mt-2 sm:mx-12">
                a. Our company does not warrant that the site will be error-free
                or uninterrupted, or that defects will be corrected. We do not
                guarantee that the site will be compatible with your hardware or
                software, or that the site or the server that makes it available
                will be free of viruses or other harmful components.
              </p>
              <p className="text-base sm:text-lg text-white sm:mx-12">
                b. The content of this site is provided "as is" and "as
                available," without any warranties, express or implied. To the
                fullest extent permitted by applicable law, our company
                disclaims all warranties, express or implied, including but not
                limited to implied warranties of merchantability and fitness for
                a particular purpose, non-infringement, or title.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
