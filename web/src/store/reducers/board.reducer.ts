import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

// actions
import * as boardActions from 'src/store/actions/board.action';

// models
import { BoardItem } from 'src/common/models/board';

export interface State extends EntityState<BoardItem> {}

export const BoardAdapter: EntityAdapter<BoardItem> = createEntityAdapter<BoardItem>({});

export const initialState: State = BoardAdapter.getInitialState({});

const onAddBoard = (state: State, { board }) => {
  return BoardAdapter.addOne(board, state);
};

const onGetBoards = (state: State, { boardList }) => {
  return BoardAdapter.setAll(boardList, state);
};

const boardReducer = createReducer(
  initialState,
  on(boardActions.AddBoardSuccess, onAddBoard),
  on(boardActions.GetBoardsSuccess, onGetBoards)
);

export function reducer(state: State | undefined, action: Action): State {
  return boardReducer(state, action);
}
