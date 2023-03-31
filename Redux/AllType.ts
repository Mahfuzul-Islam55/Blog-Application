export interface IInitialState {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  likes: number;
  isSaved: boolean;
  createdAt: string;
}

export interface IAction {
  type: string;
  payload: {
    id?: number;
    allData?: IInitialState[];
    data?: IInitialState;
  };
}
