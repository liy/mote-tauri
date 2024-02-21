import type { Database as DB } from "./database.types"

declare global {
  type ID = string

  // Override supabase database export with string literal types for message role
  type Database = DB & {
    public: {
      Tables: {
        message: {
          Row: DB["public"]["Tables"]["message"]["Row"] & {
            role: "system" | "user" | "assistant" | "function" | "action" | "resource"
          }
          Insert: DB["public"]["Tables"]["message"]["Insert"] & {
            role: "system" | "user" | "assistant" | "function" | "action" | "resource"
          }
          Update: DB["public"]["Tables"]["message"]["Update"] & {
            role: "system" | "user" | "assistant" | "function" | "action" | "resource"
          }
        }
      }
    }
  }

  interface Window {
    gapi: any
  }
}
