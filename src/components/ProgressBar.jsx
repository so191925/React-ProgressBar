import React from 'react';

const ProgressBar = () => {
    return (
        <>
            <div style={{width: '80%', height: '30px', backgroundColor: 'black'}}>{/* 큰막대 작성 */}
                 <div style={{height: '100%', backgroundColor: 'yellow'}}></div>{/*큰막대 속 작은막대작성 */}
            </div>
            <button>Start Download</button>{/* //useEffect를 이용할 버튼. 클릭시 진행바가 실행 */}
        </>
    );
};

export default ProgressBar;