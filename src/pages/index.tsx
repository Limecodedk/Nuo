import Head from 'next/head'
import useResponsiveLayout from '../Hooks/useResponsiveLayout'
import MobileHome from '../Components/MobileView/HomePage';
import DesktopHome from '../Components/DesktopView/HomePage'

const Home = () => {
  const isMobile = useResponsiveLayout();
  return (
    <>
      <Head>
        <title>Nuö</title>
        <meta name="description" content="care for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isMobile ? <MobileHome /> : <DesktopHome />}
      </main>
    </>
  );
}
export default Home;