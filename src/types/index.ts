import { z } from "zod";

/** Auth */
export const authSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
  password_confirmation: z.string(),
  token: z.string(),
});

type Auth = z.infer<typeof authSchema>;
export type ConfirmToken = Pick<Auth, "token">;
export type ForgotPasswordForm = Pick<Auth, "email">;
export type UserLoginForm = Pick<Auth, "email" | "password">;
export type RequestConfirmationCodeForm = Pick<Auth, "email">;
export type NewPasswordForm = Pick<Auth, "password" | "password_confirmation">;
export type UserRegistrationForm = Pick<
  Auth,
  "name" | "email" | "password" | "password_confirmation"
>;

/** Users */
export const userSchema = authSchema
  .pick({
    name: true,
    email: true,
  })
  .extend({
    _id: z.string(),
  });
export type User = z.infer<typeof userSchema>;

/** Tasks */
export const taskStatusSchema = z.enum([
  "pending",
  "onHold",
  "inProgress",
  "underReview",
  "completed",
]);
export type TaskStatus = z.infer<typeof taskStatusSchema>;

export const taskSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  project: z.string(),
  status: taskStatusSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
export type TaskFormData = Pick<Task, "name" | "description">;

/** Projects */
export const porjectSchema = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName: z.string(),
  description: z.string(),
  manager: z.string(),
});

export const dashboardSchema = z.array(
  porjectSchema.pick({
    _id: true,
    projectName: true,
    clientName: true,
    description: true,
    manager: true,
  })
);
export type Project = z.infer<typeof porjectSchema>;
export type ProjectFormData = Pick<
  Project,
  "projectName" | "clientName" | "description"
>;

/** Team */
export const teamMemberSchema = userSchema.pick({
  name: true,
  email: true,
  _id: true,
});
export const teamMembersScheme = z.array(teamMemberSchema);
export type TeamMember = z.infer<typeof teamMemberSchema>;
export type TeamMemberForm = Pick<TeamMember, "email">;
