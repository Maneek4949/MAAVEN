import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../services/AuthService';
import Input from '../ui/Input';
import Button from '../ui/Button';
import AuthImageContainer from '../ui/AuthImageContainer';


function SignUp() {
    const [email, setEmail] = useState('');
    const [name, setName] =useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg,setErrorMsg] = useState("");

    const navigate = useNavigate();
    
    const handleSubmit = async (event:any) => {
      event.preventDefault();
      setIsSubmitting(true);
      try{
        if (password !== confirmPassword){
          setIsSubmitting(false);
          setErrorMsg("Passwords are not Same")
          return ;
        }
        
        await signUp(email,name,password);
        navigate('/login', { replace: true });
      }
      catch(error){
      setErrorMsg('Email or Password Not Correct')
      setIsSubmitting(false);
      console.log("Firebase Error:",error)
      }
      finally{
        setIsSubmitting(false);
      }
        
    }

  return (
      <section className="m-auto grid min-h-[calc(100vh-65px)] w-full grid-cols-10">
      <div className="col-span-10 flex h-full w-full grow flex-col items-center justify-center bg-white shadow-slate-50 drop-shadow-md lg:col-span-4">
        <div className="mb-14 flex-col items-center text-center">
          <h2 className="mb-2 text-3xl font-bold">Get started</h2>
          <p className="text-slate-500">Create your account now.</p>
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
        </div>
        <div className="flex flex-col items-center">
          <form className="flex w-full max-w-sm flex-col" onSubmit={handleSubmit}>
            <Input
              labelText="Email"
              type="email"
              className="mb-3"
              setValue={setEmail}
            />

            <Input
              labelText="Name"
              type="text"
              className="mb-3"
              setValue={setName}
            />

            <Input
              labelText="Password"
              type="password"
              className="mb-3"
              setValue={setPassword}
            />

            <Input
              labelText="Confirm Password"
              type="password"
              className="mb-3"
              setValue={setConfirmPassword}
            />
            <Button
              buttonType='submit'
              disabled={isSubmitting}
              text="Create account"
              className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600"
            />
          </form>
          <div className="mt-10 text-slate-500">
            Already have an account?
            <Link to="/login" className="p-2 font-semibold text-violet-500">
              Log in
            </Link>
          </div>
        </div>
      </div>
      <AuthImageContainer
        image="/images/register.webp"
        firstText="Unlock the Shopping World,"
        secondText="Register Today"
      />
    </section>
    

  )
}

export default SignUp