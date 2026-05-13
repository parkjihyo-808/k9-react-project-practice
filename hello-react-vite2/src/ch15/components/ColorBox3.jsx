import { useContext } from 'react';
import ColorContext from '../contexts/ColorContext2';

const ColorBox3 = () => {
  const { state } = useContext(ColorContext); // 한 줄로 Context 접근!

  return (
    <div style={{ padding: '10px' }}>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
          fontSize: state.fontSize,
          border: '2px solid #333',
          marginBottom: '8px',
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
          border: '1px solid #333',
        }}
      />
      <p
        style={{
          fontSize: state.fontSize,
          border: '2px solid #333',
          marginBottom: '8px',
        }}
      >
        폰트 크기 테스트
      </p>
    </div>
  );
};

export default ColorBox3;
