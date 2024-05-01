//functinal component가 간결하게 제작이 가능함.
//스타일 작업은 scss 라이브러리를 이용. 

// [1] TodoContainer.scss 파일만들고 바로 적용
import './TodoContainer.scss'  //폴더경로 주의!![ 현재 .js와 같은 폴더임 ]
import TodoInput from './TodoInput'
import TodoList from './TodoList'

// 제작개요 10 [1]. 에서 추가
import {useState} from 'react'

const TodoContainer= ()=>{

    // 제작개요 10 [1]. 작업단계에서 추가  [할일 데이터 배열 - 데이터가 변경되는 만큼 state로 만들기]  .........
    // ~ 함수형컴포넌트이기에 useState() HOOK 기술 사용 ()안에 배열의 초기값은 [] 여야 하지만..지금은 테스트 목적으로 가상의 데이터를 미리 4개정도 추가해놓기.
    const [todos, setTodos] = useState([
        // todo 항목 한개 데이터는 단순히 string 1개가 아님. 완료여부에 대한 boolean과 식별번호같은 정보도 필요함. 그래서 todo 아이템1개의 데이터는 객체로 제작{번호, 내용, 완료여부}
        {no:1, content:'리액트 기초문법 학습', isDone:false},
        {no:2, content:'리액트 스타일링 학습', isDone:true},
        {no:3, content:'리액트 컴포넌트 학습', isDone:true},
        {no:4, content:'리액트 웹앱 제작', isDone:false},
    ]) 


    // 제작개요 11. 사용자가 입력한 데이터를 파라미터로 받아 todos state 배열변수에 추가해주는 기능메소드 만들기
    const insertTodo= ( content )=>{ //content : 사용자가 TodoInput컴포넌트를 통해 입력한 글씨데이터
        // state 변수는 불변성을 유지해야 하기에 기존 todos 배열에 직접 추가하는 것은 안됨.

        // 새로 추가할 content 을 todo item객체(번호, 내용, 완료여부)로 만들기
        const todo= {
            no: todos.length +1, //요소의 개수 + 1 번으로 번호를 부여
            content: content,
            isDone: false
        }

        // 기존 todos에 push()를 통해 요소를 넣으면 원본 배열을 건드리는 것이어서 권하지 않음
        // concat()을 이용하여 기존 배열에 데이터를 추가한 새로운 배열을 리턴받는 기능메소드 사용을 권장함
        const newTodos = todos.concat(todo)

        // todos state 변수를 설정하는 설정함수 호출
        setTodos(newTodos) 
    }

    // 제작개요 12. 삭제 아이콘을 클릭한 항목의 id 를 전달받아 삭제하는 기능 메소드 만들기
    const deleteTodo= (no)=>{
        // 기존 todos 배열에서 직접 요소를 빼내오는 pop() 이나 shift() 메소드 사용을 안됨.

        // 리액트에서 권장하는 state 배열의 일부 요소 삭제방식은 filter() 메소드 이용하는 것임
        // filter() : 특정 기준에 해당하는 요소들만 걸러서 새로운 배열로 리턴해 주는 메소드 [ .map() 처럼 배열요소개수만큼 파라미터에 전달된 함수가 실행됨 ]
        const newTodos = todos.filter( (todo, index)=>{
            //현재 요소의 특정 조건식을 만들어 리턴값이 true 인 요소들만 새로운 배열로 추가됨.
            //(구현원리.) 현재 todo 객체의 번호(todo.no) 가 이 deleteTodo() 함수의 파라미터로 전달된 no 와 같지 않으면 true. [결국. 해당 no값을 가진 요소는 리턴이 false가 되어 새로운 배열에 포함되지 않아 제거되는 효과를 보게됨]
            return todo.no != no            
        } ) 

        // no번의 항목이 제거된 새로운 newTodos를 state에 설정
        setTodos( newTodos )
    }


    // 제작개요 13. 전달받은 index 번호에서에 해당하는 todo 항목 체크상태 isDone 값을 변경하는 기능 메소드 만들기
    const toggleDone= (index)=>{
        // (1차 시도) todos배열의 특정요소인 객체의 멤버값만 변경..하면 UI는 갱신되지 않음. [값은 바뀌었기에 재 render()하면 UI변경은 됨]
        //todos[index].isDone= !todos[index].isDone

        // (2차 시도) UI가 자동 갱신되려면.. setTodos()메소드로 state값을 설정하여 변경해야 함.
        //setTodos( todos ) // 이렇게 지정해도 변경되지 않음. why? todos 배열자체는 변경되지 않았기에..배열요소 객체조차 변경되지 않았음..

        // (3차 시도) todos 배열의 no번호에 해당하는 요소객체만 새로 만들어 값을 변경하고 같은 todos 배열의 요소를 다시 설정하면 갱신되는가?
        // const todo= todos[index]
        // todo.isDone= !todo.isDone

        // todos[index]= todo
        // setTodos( todos ) //이렇게 해도 안됨. 결국 추가나 삭제했던 것처럼...새로운 배열로 만들어서 설정해야 함.

        // (최종 시도)
        // #방법1. 새로운 []리터럴 배열 만들고 요소값들은 ... spread 연산자를 이용하여 나열하면 배열 복제의 효과를 볼 수 있음. [객체도 가능한 기술임]
        const newTodos = [ ...todos ]
        newTodos[index].isDone= !newTodos[index].isDone

        setTodos(newTodos)

        // #방법2. 배열의 .map()을 이용하여 새로운 배열을 만들어내는 방식. [교재에서 소개하는 방식.. 참고]
    }


    return (
        // [1] 화면의 가운데 위치할 네모난 박스모양의 레이아웃 - 스타일작업은 scss 이용 [TodoContainer.scss 파일제작. 이 예제에서는 .js와 같은 폴더안에 파일위치]
        <div className="TodoContainer">
            {/* 타이틀 영역 */}
            <div className='app-title'>TODO LIST</div>

            {/* [2] 사용자가 할일 내용을 입력할 수 있는 스타일된 input용 컴포넌트 [TodoInput.js] */}
            {/* <TodoInput></TodoInput> */}

            {/* 제작개요 11. 에서 insertTodo함수를 전달하는 코드 작성.. */}
            <TodoInput insertTodo={insertTodo}></TodoInput>


            {/* [3] 할일 목록들을 보여줄 리스트뷰 역할의 컴포넌트 [TodoList.js] */}
            {/* <TodoList></TodoList> */}



            {/* 제작개요 10 [2]. 할일 목록의 데이터( todos )를 속성 props로 전달하는 TodoList 컴포넌트 */}
            {/* <TodoList todos={todos}></TodoList> */}


            {/* 제작개요 11. todos에 항목을 추가하는 기능메소드의 정상동작여부 확인용 버튼 [테스트 후 버튼은 삭제 또는 주석처리] */}
            {/* <button onClick={()=>insertTodo('새로운 데이터')}>add item</button> */}

            {/* 실제 todos 의 추가작업 이벤트는 TodoInput컴포넌트의 + 버튼을 눌렀을 때 발생함. */}
            {/* 그래서 TodoInput 컴포넌트에 insertTodo 함수를 props 속성으로 전달하여 호출되도록... ex07 컴포넌트간의 데이터 전달 예제 참고... */}



            {/* 제작개요 12. todos에 항목을 삭제하는 기능메소드의 정상동작여부 확인용 버튼 [테스트 후 버튼은 삭제 또는 주석처리] */}
            {/* <button onClick={ ()=>deleteTodo(2) }>delete item</button> */}

            {/* 삭제버튼 아이콘이 있는 TodoList 컴포넌트에 deleteTodo함수를 전달하는 코드 추가작성.. */}
            {/* <TodoList todos={todos} deleteTodo={ deleteTodo }></TodoList> */}



            {/* 제작개요 13. 완료버튼 토글링 정상동작여부 확인용 버튼 [테스트 후 버튼은 삭제 또는 주석처리] */}
            {/* <button onClick={ ()=>toggleDone(2) }>toggle isDone</button> */}

            {/* 완료 체크박스 토글 체크박스모양이 있는 TodoList 컴포넌트에 toggleDone함수를 전달하는 코드 추가작성.. */}
            <TodoList todos={todos} deleteTodo={ deleteTodo } toggleDone={ toggleDone }></TodoList>



        </div>
    )

}

export default TodoContainer