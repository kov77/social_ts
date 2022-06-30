import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field name={'login'} type="text" placeholder={'Login'} component={"input"}/></div>
        <div><Field name={'password'} type="text" placeholder={'Password'} component={"input"}/></div>
        <div><Field name={'rememberMe'} type="checkbox" component={"input"}/>Remember Me</div>
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
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;
