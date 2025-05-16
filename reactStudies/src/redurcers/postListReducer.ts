import { PostType } from "@/components/exercise/postList/PostListContext";

type AddAction = {
    type: 'add';
    payload: {
        title: string;
        body: string;
    }
}

type EditAction = {
    type: 'edit';
    paylaod: {
        id: number;
        title: string;
        body: string;
    }
}

type RemoveAction = {
    type: 'remove';
    payload: {
        id: number;
    }
}

export type PostListActions = AddAction | EditAction | RemoveAction;

export const postListReducer = (postList: PostType[], actions: PostListActions) => {
    switch(actions.type) {
        case 'add':

            if(postList.length === 0) return [{
                id: 0, 
                title: actions.payload.title.trim(), 
                body: actions.payload.body.trim()
            }];
    
            return [{
                id: postList[0].id + 1,
                title: actions.payload.title.trim(),
                body: actions.payload.body.trim()
            }, ...postList];
            
        case 'edit':

            return postList.map(post => {
                if(actions.paylaod.id === post.id){ 
                    if(actions.paylaod.title.trim() && actions.paylaod.body.trim()){
                        return {
                            ...post, 
                            title: actions.paylaod.title.trim(), 
                            body: actions.paylaod.body.trim()
                        }
                    }
                }

                return post;
            });

        case 'remove':
            
            return postList.filter(post => post.id !== actions.payload.id);
        
        default: return postList;
    }
}