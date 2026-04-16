export const PriorityType = ["High", "Medium", "Low"] as const;
export const PriorityLabelMap: Record<Priority, string> = {
  High: "🔴 High",
  Medium: "🟡 Medium",
  Low: "🟢 Low",
};
export type Priority = (typeof PriorityType)[number];
export const CategoryType = ["Work", "Personal", "Ideas"] as const;
export const CategoryLabelMap: Record<Category, string> = {
  Work: "💼 Work",
  Personal: "🏠 Personal",
  Ideas: "💡 Ideas",
};
export type Category = (typeof CategoryType)[number];
export type Note = {
  id: number;
  title: string;
  priority: Priority;
  category: Category;
  description: string;
};
export type NoteInput = Omit<Note, "id">;
