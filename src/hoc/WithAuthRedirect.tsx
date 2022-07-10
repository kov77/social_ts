import React, {ComponentType} from 'react'
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import { AppStateType } from '../redux/redux-store';

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: any): MapStatePropsType => {
    return {
        isAuth: state.authorization.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: any) {

        let{isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>

        return <Component {...restProps as T} />

    }


    return connect(mapStateToProps) (RedirectComponent)
}
