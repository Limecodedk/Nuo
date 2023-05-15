import Head from 'next/head'
import useResponsiveLayout from '../Hooks/useResponsiveLayout'
import MobileHome from '../Components/MobileView/whatwedoM';
import DesktopHome from '../Components/DesktopView/whatwedo'

const Whatwedo = () => {
  const isMobile = useResponsiveLayout();
  return (
    <>
      <Head>
        <title>Nuö - What We Do</title>
        <meta name="description" content="Care for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isMobile ? <MobileHome /> : <DesktopHome />}
      </main>
    </>
  );
}
export default Whatwedo;
