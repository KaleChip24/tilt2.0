import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import Venues from "../../components/Venues/Venues"

const Home = () => {
  return (
    <Layout>
      <div className='landing-page'>
        <p className='intro'>If you’re like me and are alwasy searching for the best spot to play some pinball then this is the site for you! Explore the bars/arcades in your city, and if you don’t see you favorite spot add it to the list! </p>
        {/* <Venues /> */}
      </div>

    </Layout>
  );
};

export default Home;