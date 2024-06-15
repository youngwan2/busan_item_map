import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { type FormEventHandler, type MouseEventHandler } from 'react';
import { vi, describe, test, expect, beforeAll, beforeEach, } from 'vitest'
import SearchForm from '../SearchForm';
import SearchLabel from '../SearchLabel';
import SearchInput from '../SearchInput';

describe('SearchForm', () => {
    const mockOnSearch: MouseEventHandler<HTMLButtonElement> = vi.fn((e) => e.preventDefault());
    const mockOnReset: MouseEventHandler<HTMLButtonElement> = vi.fn();
    const mockAction: FormEventHandler<HTMLFormElement> = vi.fn();

    const inputOptions = {
        defaultValue: '김치전골',
        placeholder: 'ex.김치',
        id: 'search-input',
        type: 'text',
        name: 'search'
    };

    const buttonOptions = {
        text: '검색',
        type: 'submit' as const
    };

    const resetButtonOptions = {
        text: '리셋',
        type: 'reset' as const
    };

    render(
        <SearchForm
            onSearch={mockOnSearch}
            onReset={mockOnReset}
            action={mockAction}
            inputOptions={inputOptions}
            buttonOptions={buttonOptions}
            resetButtonOptions={resetButtonOptions}
        />
    )



    const searchButton = screen.getByRole('button', { name: /검색/i });
    const resetButton = screen.getByRole('button', { name: /리셋/i });


    test('버튼 클릭 시 이벤트 콜백이 정상 호출 된다.', async () => {
        await userEvent.click(searchButton);
        expect(mockOnSearch).toHaveBeenCalledTimes(1);

        await userEvent.click(resetButton);
        expect(mockOnReset).toHaveBeenCalledTimes(1);
    });

    test('버튼에 전달된 옵션이 정상적으로 바인딩 된다.', () => {
        expect(searchButton).toHaveProperty('type', 'submit')
        expect(resetButton).toHaveProperty('type', 'reset')

    })

    describe('SeachInput',()=>{
        
    test('인풋 옵션으로 전달된 텍스트가 정상적으로 value에 바인딩된다.', async () => {
        render(
            <>
                <SearchLabel htmlFor={inputOptions.id}>검색</SearchLabel>
                <SearchInput inputOptions={inputOptions} />
            </>)

        const input = screen.getByLabelText('검색')

        expect(input).toHaveProperty('value', '김치전골')
    })

    test('사용자가 입력한 텍스트가 정상적으로 value에 바인딩된다.', async () => {
        render(
            <>
                <SearchLabel htmlFor={inputOptions.id}>검색</SearchLabel>
                <SearchInput inputOptions={{...inputOptions,defaultValue:''}} />
            </>
        )

        const input = screen.getByLabelText('검색')
        
        await userEvent.type(input, '김치전골 아니고 쇠고기 전골')

        expect(input).toHaveProperty('value','김치전골 아니고 쇠고기 전골')
        
    })

    })

});
