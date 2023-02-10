import "./Landing.scss";
import { Navbar, Hero, Footer } from "../../Components";

const Landing = () => {
    return (
        <div className="landing">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
};

export default Landing;