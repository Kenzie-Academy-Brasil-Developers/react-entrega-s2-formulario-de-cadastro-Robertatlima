import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const FormRegister = () => {
  const history = useHistory({});

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatoório")
      .matches(
        "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
        "Nome deve conter apenas letras"
      ),
    email: yup.string().required("campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "A senha precisa ter mínimo de 8 caracteres")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "É Necessário ter letras, números e ao menos um símbolo."
      ),
    passwordconfirmed: yup
      .string()
      .required("É necessário confirmar senha")
      .oneOf([yup.ref("password")], "As senhas não são iguais"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleForm = (data) => {
    history.push(`/home/${data.name}`);
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <h2>Cadastre-se</h2>
      <div>
        <TextField
          label="Nome"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </div>
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />{" "}
      </div>
      <div>
        <TextField
          label="Password"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />{" "}
      </div>
      <div>
        <TextField
          label="Confirm Password"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("passwordconfirmed")}
          error={!!errors.passwordconfirmed}
          helperText={errors.passwordconfirmed?.message}
        />{" "}
      </div>
      <Button color="primary" type="submit" variant="contained">
        Enviar{" "}
      </Button>
    </form>
  );
};
export default FormRegister;
