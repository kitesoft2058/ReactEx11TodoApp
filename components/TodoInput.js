// 스타일 적용
import './TodoInput.scss'

//제작 개요 11. 에서 추가
import { useState } from 'react'

//(2) 에서 사용할 icon 라이브러리 import [ https://react-icons.github.io/react-icons/ ]
import { IoMdAdd } from "react-icons/io"; 

const TodoInput= (props)=>{  // 제작 개요 11. 에서 항목을 todos 에 추가해주는 기능 메소들 전달받아 + 버튼에 설정해주기


    //제작개요 11. 에서 추가하는 코드 - input요소의 입력글씨가 변경될때 마다 반응할 함수와 그 값을 저장할 state 변수 준비
    // (1) 작업
    const [content, setContent] = useState('')

    const changeContent= (event)=>{
        // 파라미터 event 객체로부터 이벤트 발생요소를 얻어서 입력값(value속성)을 content에 저장
        setContent( event.target.value )
    }

    // (2) 작업
    const clickAddBtn=()=>{
        // props로 전달받은 todos에 데이터를 추가해주는 함수를 호출하면서 입력값이 저장되어 있는 content변수값 전달
        props.insertTodo(content)

        // 다음 입력을 편하게 하기 위해 input요소에 써있는 글씨를 모두 지우기 위해 value에 지정되어 있는 state 
        setContent('')
    }

    // (3) 작업
    const submit= (event)=>{ //모든 이벤트 콜백함수는 파라미터로 event객체를 전달받을 수 있음.
        //alert('엔터에 의한 submit 테스트')
        // 주의! form 요소에 action 을 지정하지 않았기에 페이지 전환은 없지만 현재 페이지가 새로고침 됨. 이를 방지하기!!
        event.preventDefault()

        // clickAddBtn()함수에서 했던 작업을 여기서 실행
        if(content=='') return //혹시 입력글씨가 없다면 추가작업 멈춤.
        
        props.insertTodo(content)
        setContent('')
    }


    

    return (
        // <div className="TodoInput">
        //     {/* (1) 할일을 입력할 수 있는 글씨입력 input요소 */}
        //     <input type="text" placeholder="할 일을 입력하세요"></input>
        //     {/* (2) 입력한 글씨을 할일목록에 등록하는 버튼 - 버튼내용은 글씨가 아니라 아이콘이 보이도록 */}
        //     <button><IoMdAdd></IoMdAdd></button>
        // </div>

        // 제작개요 11. 에서 새로운 항목 추가작업할 때 작성...
        // <div className="TodoInput">
        //     {/* (1) input요소에 글씨가 변경될때마다 그 값을 content라는 state변수에 저장, content 변수값을 다시 input요소의 value로 지정함으로 content값을 ''로 했을때 클리어되는 효과를 만들 수 있음. */}
        //     <input type="text" placeholder="할 일을 입력하세요" onChange={changeContent} value={content}></input>
        //     {/* (2) 버튼을 클릭되면 실행될 함수 지정  */}
        //     <button onClick={ clickAddBtn }><IoMdAdd></IoMdAdd></button>
        // </div>

        // (3) 키보드 엔터키로도 + 버튼의 onClick 과 같은 처리를 하고 싶다면. onKey 관련이벤트를 input요소에 처리하는 등의 작업이 필요함.
        //     '엔터'키 이벤트를 조금 편히 하고 싶다면..<form> 요소의 onSubmit 이벤트를 이용할 수도 있음. 
        //      form요소는 별도의 submit버튼없이 엔터키를 누르면 onSubmit이 발동함. 이 이벤트 특성을 이용하면 조금 편히 키보드 이벤트 처리 가능
        //      단, form요소안에 입력요소 중 submit 타입요소가 있어야 함. 그래서 <button>요소에 type='submit' 설정
        <form className="TodoInput" onSubmit={ submit }>
            {/* (1) input요소에 글씨가 변경될때마다 그 값을 content라는 state변수에 저장, content 변수값을 다시 input요소의 value로 지정함으로 content값을 ''로 했을때 클리어되는 효과를 만들 수 있음. */}
            <input type="text" placeholder="할 일을 입력하세요" onChange={changeContent} value={content}></input>
            {/* (2) 버튼의 type='submit'으로 변경 - form요소의 onSubmit으로 클릭이벤트 처리를 대신함. 그래서 onClick 이벤트는 제거  */}
            <button type='submit'><IoMdAdd></IoMdAdd></button>
        </form>

    )
}

export default TodoInput