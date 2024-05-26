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
import { FieldValues, useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { toast } from "sonner";
import { useContext } from "react";
import { AuthContext } from "@/Provider/AuthProvider";

const Registration = () => {
  const form = useForm();
  //@ts-ignore
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";

  const onSubmit = (data: FieldValues) => {
    const email = data.email;
    const userName = data.username;
    const password = data.password;

    createUser(email, password)
      //@ts-ignore
      .then((result) => {
        const loggedUser = result.user;
        toast.success("User Created Successfully....");
        updateUserData(loggedUser, userName);
        navigate(from, { replace: true });
      })
      //@ts-ignore
      .catch((err) => console.error(err));
  };
  //@ts-ignore
  const updateUserData = (user, name) => {
    updateProfile(user, { displayName: name })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="flex flex-col items-center">
      <h1 className="text-secondary text-3xl md:text-4xl font-semibold text-center my-6 md:my-12">
        Registration <span className="text-primary">Here</span>
      </h1>
      <div className="w-full max-w-md px-5 py-8 rounded-md shadow-md border mb-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
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
                    <Input placeholder="Password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="w-full text-lg" type="submit">
              Registration
            </Button>
          </form>
          <p className="text-center pt-2">
            Already Have An Account?
            <span className="text-sm text-secondary ml-2">
              <NavLink to="/login">Login now</NavLink>
            </span>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default Registration;
