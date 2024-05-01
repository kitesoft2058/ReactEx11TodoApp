// TodoContainer 컴포넌만 놓여지면 되는 컴포넌트여서 간단하게 함수형 컴포넌트로 제작

//[2] TodoContainer component 기본제작 후 추가.
import TodoContainer from "./components/TodoContainer"

const Main= ()=>{
    //[1] 우선 컴포넌트가 잘 만들어는지 테스트를 위해.
    //return <div>Main component</div>

    //[2] 할일관리 웹앱의 박스 컴포넌트 배치.
    return (
        <>
            <TodoContainer></TodoContainer>
        </>        
    )
}

export default Main