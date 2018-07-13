import { IGhost } from './ghost';
import { IVillager } from './villager';
import { IPlayerBoards } from './player-boards';

export interface IBoard {
    villagers: IVillager[];
    playersBoards: IPlayerBoards;
    ghostCards: IGhost[];
    activeDices: number;
}
