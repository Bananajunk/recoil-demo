export interface TodoItem {
  id: string;
  text: string;
  isComplete: boolean;
  position: {
    x: number;
    y: number;
  };
}
