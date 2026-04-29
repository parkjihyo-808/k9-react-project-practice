import React from 'react';
import Counter from './Counter';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Info from './Info';

const App = () => {
  return (
    <div>
      <h1>ch8 hooks 특수 함수 알아보기</h1>
      <h2>useState 기본 예시 연습</h2>
      <Counter></Counter>
      <h3>실습1 </h3>
      <p>
        버튼을 클릭하면 숫자가 2씩 증가하고, 다른 버튼을 클릭하면 0으로
        초기화되는 컴포넌트를 만들어 보세요
      </p>
      <Ex1></Ex1>
      <h3>실습2 </h3>
      <p>
        이름과 나이를 입력받는 폼 컴포넌트를 만드세요. 각각 별도의 state로
        관리하고, 현재 입력된 값을 화면에 표시하세요.
      </p>
      <Ex2></Ex2>

      <h2>useEffect 기본 예시 연습</h2>
      <Info></Info>
    </div>
  );
};

export default App;
