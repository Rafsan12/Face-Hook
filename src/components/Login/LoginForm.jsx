import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Useauth";
import Field from "../common/Field";

export default function LoginForm() {
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    // console.log(formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );
      if (response.status === 200) {
        const { user, token } = response.data;
        if (token) {
          const authToken = token.token;
          const refreshTokens = token.refreshToken;
          console.log(`Login in time ${authToken}`);
          setAuth({ user, refreshTokens, authToken });
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      setError("root.random", {
        type: "random",
        message: `User With email ${formData.email} is not found`,
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email address is Required" })}
          type="text"
          name="email"
          id="email"
          className={`auth-input ${
            errors.email ? "border-red-800" : " border-gray-600"
          }`}
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "password is Required",
            minLength: {
              value: 8,
              message: "your password must be 8 characters",
            },
            // pattern: {
            //   value:
            //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            //   message:
            //     "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
            // },
          })}
          type="password"
          name="password"
          id="password"
          className={`auth-input ${
            errors.email ? "border-red-800" : " border-gray-600"
          }`}
        />
      </Field>
      <p>{errors?.root?.random?.message}</p>
      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  );
}
