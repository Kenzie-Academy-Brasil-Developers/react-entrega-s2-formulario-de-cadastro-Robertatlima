import { useHistory, useParams } from "react-router";
import { Button } from "@material-ui/core";

const Home = () => {
  const { name } = useParams();
  const history = useHistory();

  const handleReturn = () => {
    history.push("/");
  };
  return (
    <div>
      <img
        src="https://www.scriptutex.pt/wp-content/uploads/2018/11/boas-vindas-email-welcome-727x409.jpg"
        alt="Bemvindo"
      />
      <h1>Bem vindo(a), {name}! </h1>
      <Button
        color="primary"
        variant="contained"
        type="submit"
        onClick={handleReturn}
      >
        Voltar{" "}
      </Button>
    </div>
  );
};
export default Home;
