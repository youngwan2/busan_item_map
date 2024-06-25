import styles from './AiDictionary.module.scss';
import { MouseEventHandler } from 'react';

import { HiXMark } from 'react-icons/hi2';
import { DotLoader } from 'react-spinners';
import Message from '../Message';

interface PropsType {
  response: { searchValue: string; aiResponse: string; recommand: string[] };
  isOpen: boolean;
  onCloseModal: MouseEventHandler<HTMLButtonElement>;
}

export default function AiDictionaryModal({
  response,
  isOpen,
  onCloseModal,
}: PropsType) {
  const responsedData =
    response.aiResponse.length < 1 ? (
      <DotLoader color="white" />
    ) : (
      response.aiResponse
    );

  return (
    <div
      aria-hidden={isOpen ? 'true' : 'false'}
      className={`${styles.ai_dictionary_modal_container} ${isOpen ? styles.active : ''}`}
    >
      <div className={styles.ai_dictionary_modal_inner_boundary}>
        <Message styleClassName={styles.reference_message}>
          AI 답변은 부정확할 수 있습니다.
        </Message>
        <button
          title="창 닫기"
          onClick={onCloseModal}
          className={styles.close_button}
        >
          <HiXMark />{' '}
        </button>
        <div className={styles.response}>{responsedData}</div>
        {isOpen && <div className={styles.ai_guider}></div>}
        {/* 추천 태그 */}
        <div>
          {response.recommand?.map((tag) => {
            return (
              <a
                title={`현재는 Google 통함검색 "${tag}" 로 사이트를 띄웁니다.`}
                target="_blank"
                href={`https://www.google.com/search?q=${tag}`}
                className={styles.recommand_text}
                key={tag}
              >
                {tag}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
