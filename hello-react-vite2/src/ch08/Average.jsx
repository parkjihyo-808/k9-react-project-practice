import { useState, useMemo } from 'react';

// 무거운 연산을 수행하는 함수 (숫자 배열의 평균값 계산)
const getAverage = (numbers) => {
  console.log('평균값 계산 중...'); // 언제 호출되는지 확인용
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onInsert = () => {
    const parsed = parseInt(number, 10);
    if (isNaN(parsed)) return;
    setList(list.concat(parsed));
    setNumber('');
  };

  // list가 변경될 때만 getAverage 재계산. number 변경 시에는 이전 결과 재사용
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="숫자 입력"
      />
      <button onClick={onInsert}>추가</button>
      <ul>
        {list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
