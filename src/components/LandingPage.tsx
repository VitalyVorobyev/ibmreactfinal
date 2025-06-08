import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing">
            <div className="landing__content">
                <div className="landing__text">
                    <h1>Welcome to Paradise Nursery</h1>
                    <p>Bring nature indoors with our vibrant collection of houseplants.</p>
                    <button onClick={() => {
                        navigate("/products");
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}>
                        Get Started
                    </button>
                </div>
                <div className="landing__about">
                    <p>At Paradise Nursery, we believe every home deserves a touch of green. From graceful ferns to resilient succulents, our hand-picked selection makes plant parenting easy and enjoyable.</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
