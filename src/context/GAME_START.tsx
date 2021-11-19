export const GAME_START: string = 'GAME_START';
export const CLICK_HISTORY: string = 'CLICK_HISTORY';

export const gameStart = (index: any) => ({
  type: GAME_START,
  index,
});
export const clickhiHstory = (index: any) => ({
  type: CLICK_HISTORY,
  index,
});
