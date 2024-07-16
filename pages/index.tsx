import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Catalog from '../components/Catalog';
import About from "@/components/About";

const Home = () => (
  <Layout>
    <Hero />
    <Catalog />
  </Layout>
);

export default Home;