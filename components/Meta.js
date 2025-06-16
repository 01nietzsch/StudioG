import Head from "next/head";

const Meta = ({ title, description, keywords }) => {
    return (
        <>
            <meta charSet="utf-8" />
            <meta name="keywords" content={keywords}></meta>
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta
                itemProp="image"
                content="https://ottoprotocol.fi/assets/imgs/logo.png"
            />

            <meta
                property="og:image"
                content="https://ottoprotocol.fi/assets/imgs/logo.png"
            />
            <meta
                property="og:image:secure_url"
                content="https://ottoprotocol.fi/assets/imgs/logo.png"
            />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:alt" content="logo" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ottoprotocol.fi" />
            {/* <meta property="og:title" content={`${title}`} /> */}
            {/* <meta property="og:description" content={description} /> */}

            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                names="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
            />
        </>
    );
};

Meta.defaultProps = {
    title: "Otto Protocol",
    description: "Otto is a stablecoin 100% backed by a delta-neutral position.",
    keywords: "otto, protocol, delta neutral, stablecoin, algorithmic, defi",
};

export default Meta;