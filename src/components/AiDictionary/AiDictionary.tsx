import { createPortal } from 'react-dom';
import { useState } from 'react';

import AiDictionaryButton from './AiDictionaryButton';
import AiDictionaryModal from './AiDictionaryModal';

import { ApiType, getDefaultFetcher } from '@/api/get.api';

interface PropsType {
  searchValue: string;
}
export default function AiDictionary({ searchValue }: PropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState({
    searchValue: '',
    aiResponse: '',
    recommand: [],
  });

  function onModalDisplay() {
    setIsOpen((old) => !old);
  }

  async function fetchData(url: string) {
    return await getDefaultFetcher(url, ApiType.INTERNAL);
  }

  function parseText(json: string = '') {
    if (json.length < 1) return;
    return JSON.parse(json);
  }

  async function onSearch(value: string) {
    const url = '/ai-dictionary?searchValue=' + value;
    onModalDisplay();

    const aiResponse = await fetchData(url);
    const parseResponse = parseText(aiResponse);
    setResponse((old) => ({
      ...old,
      searchValue: value,
      aiResponse: parseResponse.response,
      recommand: parseResponse.recommand,
    }));
  }

  return (
    <>
      <div>
        <AiDictionaryButton onClick={() => onSearch(searchValue)} />
      </div>
      {createPortal(
        <AiDictionaryModal
          response={response}
          isOpen={isOpen}
          onCloseModal={onModalDisplay}
        />,
        document.body,
      )}
    </>
  );
}
