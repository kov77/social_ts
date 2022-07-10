import React from 'react'
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
// import {Input} from "../common/FormControl/FormsControl";
import {maxLength, minLength, required} from "../../utils/valirators";
import {multiAttribute} from "../common/FormControl/FormsControl";
import {login} from "../../redux/authorization-reducer";
import { Navigate } from 'react-router-dom';
import store, { AppStateType } from '../../redux/redux-store';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const minLength2 = minLength(2)
const minLength8 = minLength(8)
const maxLength20 = maxLength(20)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field name={'email'} type="text" placeholder={'Email'} component={multiAttribute('input')} validate={[required, minLength2, maxLength20]}/></div>
        <div><Field name={'password'} type="password" placeholder={'Password'} component={multiAttribute('input')} validate={[required, minLength8, maxLength20]}/></div>
        <div><Field name={'rememberMe'} type="checkbox" component={multiAttribute('input')}/>Remember Me</div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)

    }

    if(props.isAuth) {
        return <Navigate to={"/profile"} />
    } else {
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.authorization.isAuth
})

export default connect(mapStateToProps, {login})(Login);
