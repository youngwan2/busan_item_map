import axios from "axios";

function gpt() {

const KAKAO_KEY =process.env.REACT_APP_KAKAO_APP_KEY

console.log(KAKAO_KEY)


    return (
        <article>
            <textarea></textarea>
            <button>전송</button>
        </article>
    );
}

export default gpt;