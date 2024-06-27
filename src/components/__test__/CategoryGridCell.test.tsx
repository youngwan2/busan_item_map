import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CategoryGridCell from '../CategoryGridCell';

describe('CategoryGridCell', () => {
  const props = {
    categoryName: '서울',
    classNames: {
      cell: 'local_category_grid_cell',
      img: 'local_category_grid_cell_img',
    },
    name: '서울',
    onSetPrdkind: vi.fn(),
  };
  const { categoryName, classNames, name, onSetPrdkind } = props;

  it('button 에 전달된  onSetPrdkind 함수가 정상적으로 호출된다.', async () => {
    render(
      <CategoryGridCell
        categoryName={categoryName}
        classNames={classNames}
        name={name}
        onSetPrdkind={onSetPrdkind}
      />,
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(onSetPrdkind).toHaveBeenCalledOnce();
  });

  it('props 중 name 과 categoryName 이 동일하면 active 클래스가 활성화 된다.', () => {
    render(
      <CategoryGridCell
        categoryName={categoryName}
        classNames={classNames}
        name={name}
        onSetPrdkind={onSetPrdkind}
      />,
    );

    const button = screen.getByRole('button');

    expect(button.className).toMatch('_active_');
  });

  it('전달된 classNames 가 정상적으로 적용된다. ', () => {
    render(
      <CategoryGridCell
        categoryName={categoryName}
        classNames={classNames}
        name={name}
        onSetPrdkind={onSetPrdkind}
      />,
    );

    const cellButton = screen.getByRole('button');
    const imgDiv = screen.getByLabelText('분류 이미지');

    expect(cellButton.className).toMatch(/_local_category_grid_cell_/);
    expect(imgDiv.className).toMatch(/_local_category_grid_cell_img_/);
  });
});
