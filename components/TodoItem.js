import './TodoItem.scss'
import { ImCheckboxUnchecked } from "react-icons/im"; //"checkbox" 검색.   
import { ImCheckboxChecked } from "react-icons/im"; //"checkbox" 
import { MdDeleteForever } from "react-icons/md"; // "delete"

const TodoItem= (props)=>{ // 제작개요 10. 작업할 때 추가....

    //제작개요 10 [4]. 에서 체크상태에 따라 스타일이 달라야 해서..클래스선택자 추가한 문자열 [클래스 선택자에 띄어쓰기가 있으면 2개의 클래스선택자가 적용됨]
    const todoItemStyleClassName = props.todo.isDone ? "TodoItem isDone" : "TodoItem"

    return (
        // [1] 할일 목록 아이템 UI 구성요소 3개 [체크박스, 글씨표시, 삭제버튼아이콘]
        // <div className='TodoItem'>
        //     {/* 1. 완료여부 체크를 위한 체크박스 */}
        //     <div className='checkbox'>
        //         {/* input 요소의 type='checkbox'로 구현해도 되지만 체크박스 아이콘 모양을 커스텀 하려면..이미지나 아이콘을 사용하여 체크상태값에 따라 이미지를 다르게 보여줘야 함 */}
        //         {/* (1)일단 uncheckbox 모양 아이콘 */}
        //         <ImCheckboxUnchecked/>
        //     </div>
        //     {/* 2. 할일 글씨 */}
        //     <div className='content'>
        //         TODO WEBAPP 만들기
        //     </div>
        //     {/* 3. 항목에서 제거하는 버튼 아이콘 */}
        //     <div className='delete'>
        //         <MdDeleteForever/>
        //     </div>
            
        // </div>

        // 제작개요 10 [4]. 실습에서 전달받은 할일데이터 (props.todo) 를 보여주기
        // todo데이터의 완료여부 정보를 가진 isDone 변수값에 따라 스타일을 다르게 하기 위해 .isDone 클래스 선택자 추가된 글씨 'TodoItem isDone'으로 된 변수값으로 지정 
        // <div className={todoItemStyleClassName}>
        //     {/* 1. 완료여부 체크를 위한 체크박스 */}            
        //     <div className='checkbox'>
        //         {/* todo데이터의 완료여부 정보를 가진 isDone 변수값에 따라 그려지는 아이콘 다르게 -- if문을 사용할 수 없어서 삼항연산자로.. */}
        //         { props.todo.isDone ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/> }
        //     </div>
        //     {/* 2. 할일 글씨 */}
        //     <div className='content'>
        //         { props.todo.content }
        //     </div>
        //     {/* 3. 항목에서 제거하는 버튼 아이콘 */}
        //     <div className='delete'>
        //         <MdDeleteForever/>
        //     </div>
            
        // </div>



        // 제작개요 12. 삭제버튼 아이콘 클릭시에 전달받은 함수를 실행할 수 있도록...
        // <div className={todoItemStyleClassName}>
        //     {/* 1. 완료여부 체크를 위한 체크박스 */}            
        //     <div className='checkbox'>
        //         {/* todo데이터의 완료여부 정보를 가진 isDone 변수값에 따라 그려지는 아이콘 다르게 -- if문을 사용할 수 없어서 삼항연산자로.. */}
        //         { props.todo.isDone ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/> }
        //     </div>
        //     {/* 2. 할일 글씨 */}
        //     <div className='content'>
        //         { props.todo.content }
        //     </div>
        //     {/* 3. 항목에서 제거하는 버튼 아이콘 [클릭이벤트에 실행할 이름없는 화살표함수 ()=>{}를 등록하고 이 함수가 호출될때 전달받은 deleteTodo()함수를 호출하면서 현재 todo데이터의 no 번호를 파라미터로 전달]*/}
        //     <div className='delete' onClick={ ()=>{ props.deleteTodo(props.todo.no) } }>
        //         <MdDeleteForever/>
        //     </div>
            
        // </div>



        // 제작개요 13. 완료 체크박스 아이콘 클릭시에 전달받은 toggleDone함수를 실행 할 수 있도록..코드 추가..[위 12번 항목에서 했던 방식과 같음. ]
        <div className={todoItemStyleClassName}>
            {/* 1. 완료여부 체크를 위한 체크박스 - [클릭이벤트에 실행할 이름없는 화살표함수 ()=>{}를 등록하고 이 함수가 호출될때 전달받은 toggleDone()함수를 호출하면서 전달된 index 속성의 값인 인덱스번호를 파라미터로 전달] */}            
            <div className='checkbox' onClick={ ()=> props.toggleDone(props.index) }>
                {/* todo데이터의 완료여부 정보를 가진 isDone 변수값에 따라 그려지는 아이콘 다르게 -- if문을 사용할 수 없어서 삼항연산자로.. */}
                { props.todo.isDone ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/> }
            </div>
            {/* 2. 할일 글씨 */}
            <div className='content'>
                { props.todo.content }
            </div>
            {/* 3. 항목에서 제거하는 버튼 아이콘 [클릭이벤트에 실행할 이름없는 화살표함수 ()=>{}를 등록하고 이 함수가 호출될대 전달받은 deleteTodo()함수를 호출하면서 현재 todo데이터의 no 번호를 파라미터로 전달]*/}
            <div className='delete' onClick={ ()=>{ props.deleteTodo(props.todo.no) } }>
                <MdDeleteForever/>
            </div>
            
        </div>

    )

}

export default TodoItem