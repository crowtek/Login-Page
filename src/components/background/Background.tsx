import BackgroundImage from "../../assets/background.jpg";

const Background = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${BackgroundImage})`,
                height: "97vh",
                width: "50vw",
                backgroundSize: "cover", 
                backgroundPosition: "center",
                borderRadius:25
            }}
        >
        </div>
    );
}

export default Background;