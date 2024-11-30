import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    ></form>
  );
}
