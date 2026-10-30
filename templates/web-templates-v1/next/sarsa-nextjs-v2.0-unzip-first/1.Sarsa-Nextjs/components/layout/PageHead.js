import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Sarsa - News & Magazine HTML Template"}
                </title>
                <link rel="shortcut icon" href="/assets/img/favicon.png" />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=roboto:300,300i,400,400i,500,500i,700,700i,900,900i"
                    rel="stylesheet"
                />
            </Head>
        </>
    )
}

export default PageHead