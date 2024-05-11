import { AuthContext } from "@/Provider/AuthProvider";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const form = useForm();
  //@ts-ignore
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //@ts-ignore
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signIn(email, password)
      //@ts-ignore
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Login Successfully...");
        navigate(from, { replace: true });
      })
      //@ts-ignore
      .catch((err) => console.error(err));
  };

  return (
    <Container className="flex flex-col items-center">
      <h1 className="text-secondary text-3xl md:text-4xl font-semibold text-center my-6 md:my-12">
        Login <span className="text-primary">Here</span>
      </h1>
      <div className="w-full max-w-md px-5 py-8 rounded-md shadow-md border mb-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="w-full text-lg" type="submit">
              Login
            </Button>
          </form>
          <p className="text-center pt-2">
            New User?
            <span className="text-sm text-secondary ml-2">
              <NavLink to="/register">Register Here</NavLink>
            </span>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
