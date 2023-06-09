import { ActionTypes } from "../constants/action-types"

export const setPosts = (posts) => {
    return {
        type: ActionTypes.SET_POSTS,
        payload: posts,
    }
};

export const selectedPost = (post) => {
    return {
        type: ActionTypes.SELECTED_POST,
        payload: post,
    }
};