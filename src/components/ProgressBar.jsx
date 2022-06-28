import React, { useState } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);//0은 기본값. 계속해서 변화할 작은 바의 px상태

    const clickStart = () => {
        console.log(progress)
        setProgress((preProgress) => {
            if(preProgress < 100) { //limit 걸어주기. 100% 보다 작을경우 계속해서 +20%을 실행
           return preProgress + 20 //이전 상태를 받아와 계속해서 +20을 해주는 함수
            }
        })
    }


    return (
        <>
            <div style={{width: '80%', height: '30px', backgroundColor: 'black', margin: '50px 0'}}>{/* 큰막대 작성 */}
                 <div style={{height: '100%', backgroundColor: 'yellow', width: `${progress}%`}}></div>{/*큰막대 속 작은막대작성 */}
            </div>
            <button onClick={clickStart}>Start Download</button>{/* //clickStart함수를 실행시키는 버튼//useEffect를 이용할 버튼. 클릭시 진행바가 실행 */}
        </>
    );
};

export default ProgressBar;