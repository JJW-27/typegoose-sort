import { window } from 'vscode';
import { SortOrder } from '../types';
import { sortOrderOptions } from '../constants';

export async function handleSortOrderSelection() {
  const selectedSortOrder = (await window.showQuickPick(sortOrderOptions, {
    placeHolder: 'Choose a sort order',
  })) as SortOrder;

  if (!selectedSortOrder) {
    throw new Error('No sort order selected');
  } else {
    return selectedSortOrder;
  }
}
