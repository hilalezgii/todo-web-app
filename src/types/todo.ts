export interface Todo {
  id: number;
  title: string;
  status: TodoStatus;
}

export enum TodoStatus {
  TODO = "todo",
  IN_PROGRESS = "in_progress",
  DONE = "done",
}

export enum SectionTitles {
  TODO = "YAPILACAKLAR",
  IN_PROGRESS = "DEVAM EDENLER",
  DONE = "TAMAMLANANLAR",
}

export enum TitleColor {
  TODO = "text-orange-500",
  IN_PROGRESS = "text-blue-400",
  DONE = "text-green-500",
}

export const TodoStatusLabel: Record<TodoStatus, string> = {
  [TodoStatus.TODO]: "BAŞLA",
  [TodoStatus.IN_PROGRESS]: "TAMAMLA",
  [TodoStatus.DONE]: "",
};
