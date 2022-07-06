import React from "react";
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength, minLength, required } from '../../../utils/valirators';
import {TextArea} from "../../common/FormControl/FormsControl";

export type myPostPropsType = {
    addPost: (newValue: string) => void
    postData: postDataArr[]
}

type postDataArr = {
    id: number
    message: string
    likesCount: number
}

const maxLength30 = maxLength(30)
const minLength2 = minLength(2)

const PostForm = (props:InjectedFormProps) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={TextArea} name={"profilePost"} validate={[required, maxLength30, minLength2]}></Field>
        <button>ADD POST</button>
    </form>
}

const PostReduxForm = reduxForm({form: 'profilePost'})(PostForm)



const MyPosts = (props: myPostPropsType) => {

    const onSubmit = (data: any) => {
        props.addPost(data.profilePost)
    }
    return (
        <div>
            <PostReduxForm onSubmit={onSubmit}/>
            {props.postData.map((el, index) => <Post key={index} message={el.message} likesCount={el.likesCount}/>)}
        </div>
    )
}
export default MyPosts;
