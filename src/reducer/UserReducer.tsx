export const initstate={
    loading:false,
    mini:"hello"
}

type IState={
    loading:boolean
    mini:string
}
type IAction={
    type:string
}
export const reducer=(state:IState,action:IAction)=>{
    switch(action.type){
        default :
            throw new Error('HELLO THIS IS ERRRO')
    }
}