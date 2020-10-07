import React, { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  useMemo, 
  useCallback,
  useReducer 
} from "react";


const Constants = {
  store: 'todos',
  type: {
    todo: 'todo',
    doing: 'doing',
    done: 'done'
  }
}

const ActionContext = createContext({});

const INITIAL_STATE = [];

function reducer(state,action) {

  switch(action.type) {
    case "INIT":
      return [...state,...(action.payload ||[])]
    
    case "ADD_TODO":

      return [...state,{id:Date.now(),content:action.payload,type: Constants.type.todo}];

    case "TODO":
    case "DOING":
    case "DONE": {
        const cloneTodos = [...state];
        const itemIndex = cloneTodos.findIndex((todo) => todo.id === action.payload);
        if (cloneTodos[itemIndex]) 
          cloneTodos[itemIndex].type = Constants.type[action.type.toLowerCase()];
    
      return cloneTodos
    }
    default:
      return state;
  }

}

export function Provider({ children }) {
  
  const [todos,dispatch] = useReducer(reducer,INITIAL_STATE)
  return (
    <ActionContext.Provider value={{ todos, dispatch }}>
      {children}
    </ActionContext.Provider>
  );
}


export function useTodo() {
  
  const { todos, dispatch } = useContext(ActionContext);

  
  const handleAddTodo = useCallback(
    (todoInput) => dispatch({type:"ADD_TODO",payload: todoInput}),
    [dispatch]);

  const handleTodoClick = useCallback(
    (itemId) => dispatch({type:"TODO",payload: itemId}),
    [dispatch]);
  
  const handleDoClick = useCallback(
    (itemId) => dispatch({type:"DOING",payload: itemId}),
    [dispatch]);
    
  const handleDoneClick = useCallback(
    (itemId) => dispatch({type:"DONE",payload: itemId}),
    [dispatch]);
      
      
  useEffect(() => {
    if(!todos.length)
      dispatch({type:"INIT" , payload:JSON.parse(window.localStorage.getItem(Constants.store))});
      
  }, [dispatch,todos.length])

  useEffect(() => {
    if (todos.length)
      window.localStorage.setItem(Constants.store, JSON.stringify(todos));
  }, [ todos]);

  const state = useMemo(() => ({
    todos: todos.filter((todo) => todo.type === Constants.type.todo),
    doings: todos.filter((todo) => todo.type === Constants.type.doing),
    dones: todos.filter((todo) => todo.type === Constants.type.done)
  }), [todos])


  const dispatcher = useMemo(() => ({
    handleAddTodo,
    onTodoClick: handleTodoClick,
    onDoClick: handleDoClick,
    onDoneClick: handleDoneClick
  }), [handleAddTodo, handleDoClick, handleDoneClick, handleTodoClick])

  return [
    state,
    dispatcher
  ];
}

export default ActionContext;
