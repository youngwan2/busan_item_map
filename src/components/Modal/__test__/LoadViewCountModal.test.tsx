import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadViewCountModal from '../LoadViewCountModal';
import { userEvent } from '@testing-library/user-event';

describe('LoadViewCountModal', () => {
  const options = {
    type: true,
    totalProductCount: 5,
    currentProductCount: 1,
  };

  test('전달된 props 이 정상적으로 바인딩 된다.', () => {
    render(
      <LoadViewCountModal
        type={options.type}
        totalProductCount={options.totalProductCount}
        currentProductCount={options.currentProductCount}
      />,
    );

    const span = screen.getByText(
      `${options.type && Math.ceil(options.totalProductCount) + ' 페이지 중 ' + options.currentProductCount + ' 페이지 조회..'}`,
    );
    expect(span.textContent).toBe(
      `${options.type && Math.ceil(options.totalProductCount) + ' 페이지 중 ' + options.currentProductCount + ' 페이지 조회..'}`,
    );
  });

  test('버튼 클릭 시 aside의 클래스가 변경된다.', async () => {
    render(
      <LoadViewCountModal
        type={options.type}
        totalProductCount={options.totalProductCount}
        currentProductCount={options.currentProductCount}
      />,
    );

    const button = screen.getByRole('button');
    const aside = screen.getByRole('complementary');

    await userEvent.click(button);
    expect(aside.className).toContain('active');

    await userEvent.click(button);
    expect(aside.className).not.toContain('active');
  });
});
