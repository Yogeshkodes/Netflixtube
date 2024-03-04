import Header from "./Header";
import Background from "../image/Background.jpg";

function Login() {
  return (
    <div>
      <Header />
      <div>
        <img src={Background} alt="Background-image" />
      </div>
    </div>
  );
}

export default Login;
