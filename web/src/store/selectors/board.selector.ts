// reducers
import { BoardAdapter } from 'src/store/reducers/board.reducer';

// modlels
import { AppState } from './../reducers';

export const selectBoard = (state: AppState) => state.board;

const { selectAll } = BoardAdapter.getSelectors();

export const selectAllBoards = selectAll;
