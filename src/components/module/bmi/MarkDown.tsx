import Markdown from 'react-markdown'



const markdown = '# 마크다운'
function MarkDown({}) {
    return (
        <div>
            <Markdown>{markdown}</Markdown>
        </div>
    );
}

export default MarkDown;