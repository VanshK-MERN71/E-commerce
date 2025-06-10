import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-[length:200%_200%] bg-left hover:bg-right hover:animate-gradient-x transition-all duration-700">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link
            to="/auth/register"
            className="ml-2 font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-[length:200%_200%] bg-left hover:bg-right hover:animate-gradient-x transition-all duration-700 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-gradient-to-r after:from-green-400 after:via-blue-500 after:to-purple-600 after:transition-all after:duration-500"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
