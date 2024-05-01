import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Main';

// TODO webapp mini project.   [ 이번 예제의 스타일 적용방법은. 리액트 레거시 프로젝트에 가장많이 사용되었던 SASS/SCSS 라이브러리 사용해보기 ] 
// [제작 개요]
// 1. 필요한 라이브러리 추가 : sass(스타일 라이브러리), react-icons(아이콘 SVG 라이브러리)  [ $ npm install sass react-icons   or   $ yarn add sass react-icons ]
// 2. Home Component - functional component로 제작
// 3. UI 구성요소는 커스텀 컴포넌트로 영역을 구분하여 제작 [ 4개 component 제작 ]
//  3.1 TodoContainer : 화면 가운데 위치하며, 할일목록 웹앱의 Root 컴포넌트
//  3.2 TodoInput : 사용자가 할일을 입력할 수 있도록 스타일된 입력 컴포넌트
//  3.3 TodoList : 할일 항목(TodoItem)들이 놓여질 컴포넌트 - 안드로이드의 RecyclerView 같은 역할
//  3.4 TodoItem : 할일 글씨와 아이콘 이미지를 보여주는 UI로 스타일된 컴포넌트

// 4. Main.js 컴포넌트 만들기 - 회색배경에 TodoContainer가 배치될 컴포넌트
// 5. CRA 프레임워크에 의해 이미 만들어져 있는 index.css의 body요소 스타일을 조정 - 회색계열 배경

// 6. 화면의 일부영역 담당 개별 컴포넌트 제작 - [1]. TodoContainer [ components폴더 안에 파일제작  .js/.scss ]
// 7. 화면의 일부영역 담당 개별 컴포넌트 제작 - [2]. TodoInput     [ components폴더 안에 파일제작  .js/.scss]
// 8. 화면의 일부영역 담당 개별 컴포넌트 제작 - [3]. TodoList      [ components폴더 안에 파일제작  .js/.scss]
// 9. 화면의 일부영역 담당 개별 컴포넌트 제작 - [4]. TodoItem      [ components폴더 안에 파일제작  .js/.scss]

// 10. TodoList를 사용한 곳이 TodoContainer 컴포넌트이니 그 곳에서 할일데이터들 준비. [일단 가상의 데이터를 통해 데이터별 리스트 항목 나열되는 것 확인.]

// -------------------   여기까지 기본적인 컴포넌트 개발, 스타일 작업은 완료 ---------------

//  *** 여기부터 실제 todo 데이터 추가 | 삭제 | 수정 작업 진행.  ***
//  11. 우선 todo 데이터 추가를 위해 TodoInput요소의 입력 글씨값 처리하기 - todos 데이터가 있는 TodoContainer에서 작업시작..
//  12. todo 데이터 삭제하기 - todos 데이터가 있는 TodoContainer에서 작업시작...
//  13. 할일 완료 isDone값 변경 > todo 데이터 수정하기 - todos 데이터가 있는 TodoContainer에서 작업시작...


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Main></Main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
