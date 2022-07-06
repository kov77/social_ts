import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
// import {Input} from "../common/FormControl/FormsControl";
import {maxLength, minLength, required} from "../../utils/valirators";
import {multiAttribute} from "../common/FormControl/FormsControl";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const minLength2 = minLength(2)
const minLength8 = minLength(8)
const maxLength20 = maxLength(20)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field name={'login'} type="text" placeholder={'Login'} component={multiAttribute('input')} validate={[required, minLength2, maxLength20]}/></div>
        <div><Field name={'password'} type="text" placeholder={'Password'} component={multiAttribute('input')} validate={[required, minLength8, maxLength20]}/></div>
        <div><Field name={'rememberMe'} type="checkbox" component={multiAttribute('input')}/>Remember Me</div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


const Login = () => {
    const onSubmit = (formData: FormDataType) => {
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;
