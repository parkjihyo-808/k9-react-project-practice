import React from 'react';
// ### 📝 실습 문제 1

// > ColorBox 컴포넌트를 수정해서 색상 이름 텍스트도 함께 표시하세요.
//  예: 박스 아래에 `"현재 색상: red"` 문구 출력
// >
import ColorContext from '../contexts/ColorContext';

const Ex1 = () => (
  <ColorContext.Consumer>
    {(value) => (
      <div
        style={{
          width: '64px',
          height: '64px',
          background: value.color,
          border: '1px solid #333',
        }}
      >
        <p>현재 색상: {value.color}</p>
      </div>
    )}
  </ColorContext.Consumer>
);

export default Ex1;
