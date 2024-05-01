//스타일 문서 import
import TodoItem from './TodoItem'
import './TodoList.scss'

const TodoList= (props)=>{ // props 는 제작개요 10. 작업할 때 추가
    return (
        <div className="TodoList">
            {/* 여기에 todo 데이터의 개수만큼 TodoItem 컴포넌트가 보여져야 함 */}
            {/* 일단 TodoList 컴포넌트 테스크 글씨. */}

            {/* (실습4) TodoItem의 모양이 어떠할지 알아보기 위해 가상의 데이터로 TodoItem컴포넌트 배치 */}
            {/* <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem> */}

            {/* 제작개요 10 [3]. 전달받은 할일데이터들 props.todos 배열의 요소개수만큼 TodoItem컴포넌트를 만들어서 보여주기 - 배열의 .map()메소드 사용 */}
            {/* {
                props.todos.map((todo, index)=>{
                    // 항목에 대한 식별자로 key속성지정. TodoItem컴포넌트에 1개 데이터 todo를 전달
                    return <TodoItem key={index} todo={todo}></TodoItem>
                })
            } */}


            {/* 제작개요 12. 각각의 삭제버튼을 가진 TodoItem컴포넌트에 전달받은 삭제기능 함수를 전달하는 코드..추가 */}
            {/* {
                props.todos.map((todo, index)=>{
                    // 항목에 대한 식별자로 key속성지정. TodoItem컴포넌트에 1개 데이터 todo를 전달
                    return <TodoItem key={index} todo={todo} deleteTodo={props.deleteTodo}></TodoItem>
                })
            } */}


            {/* 제작개요 13. 완료 체크박스모양을 가진 TodoItem컴포넌트에 전달받은 토글기능 함수를 전달하는 코드..추가 */}
            {
                props.todos.map((todo, index)=>{
                    // 항목에 대한 식별자로 key속성지정. TodoItem컴포넌트에 1개 데이터 todo를 전달
                    return <TodoItem key={index} todo={todo} deleteTodo={props.deleteTodo} toggleDone={props.toggleDone} index={ index }></TodoItem>
                })
            }
        </div>
    )
}

export default TodoList