export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      chat: {
        Row: {
          created_at: string
          created_by: string
          id: string
          summary: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: string
          summary?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          summary?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      document: {
        Row: {
          created_at: string
          created_by: string
          id: number
          name: string
          storage_object_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: never
          name: string
          storage_object_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: never
          name?: string
          storage_object_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_storage_object_id_fkey"
            columns: ["storage_object_id"]
            isOneToOne: false
            referencedRelation: "objects"
            referencedColumns: ["id"]
          }
        ]
      }
      document_embedding: {
        Row: {
          content: string
          document_id: number
          embedding: string | null
          id: number
          metadata: Json | null
          staled: boolean | null
        }
        Insert: {
          content: string
          document_id: number
          embedding?: string | null
          id?: never
          metadata?: Json | null
          staled?: boolean | null
        }
        Update: {
          content?: string
          document_id?: number
          embedding?: string | null
          id?: never
          metadata?: Json | null
          staled?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "document_embedding_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "document"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_embedding_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "document_with_storage_path"
            referencedColumns: ["id"]
          }
        ]
      }
      google_drive: {
        Row: {
          created_at: string
          owner_id: string
          tokens: Json | null
        }
        Insert: {
          created_at?: string
          owner_id: string
          tokens?: Json | null
        }
        Update: {
          created_at?: string
          owner_id?: string
          tokens?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "google_drive_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      inbox: {
        Row: {
          created_at: string
          created_by: string
          data: Json
          id: number
          interested: boolean | null
          link: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          data: Json
          id?: never
          interested?: boolean | null
          link: string
        }
        Update: {
          created_at?: string
          created_by?: string
          data?: Json
          id?: never
          interested?: boolean | null
          link?: string
        }
        Relationships: [
          {
            foreignKeyName: "inbox_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      message: {
        Row: {
          chat_id: string
          content: string | null
          created_at: string
          created_by: string
          function_arguments: string | null
          function_name: string | null
          id: string
          parent_id: string | null
          role: string | null
        }
        Insert: {
          chat_id: string
          content?: string | null
          created_at?: string
          created_by?: string
          function_arguments?: string | null
          function_name?: string | null
          id?: string
          parent_id?: string | null
          role?: string | null
        }
        Update: {
          chat_id?: string
          content?: string | null
          created_at?: string
          created_by?: string
          function_arguments?: string | null
          function_name?: string | null
          id?: string
          parent_id?: string | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "message_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "message"
            referencedColumns: ["id"]
          }
        ]
      }
      note: {
        Row: {
          content: string | null
          created_at: string
          created_by: string
          id: string
          summary: string | null
          updated_at: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          created_by?: string
          id?: string
          summary?: string | null
          updated_at?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          created_by?: string
          id?: string
          summary?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "note_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      note_embedding: {
        Row: {
          content: string
          created_at: string
          embedding: string | null
          id: string
          metadata: Json | null
          note_id: string
          staled: boolean | null
        }
        Insert: {
          content: string
          created_at?: string
          embedding?: string | null
          id?: string
          metadata?: Json | null
          note_id: string
          staled?: boolean | null
        }
        Update: {
          content?: string
          created_at?: string
          embedding?: string | null
          id?: string
          metadata?: Json | null
          note_id?: string
          staled?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "note_embedding_note_id_fkey"
            columns: ["note_id"]
            isOneToOne: false
            referencedRelation: "note"
            referencedColumns: ["id"]
          }
        ]
      }
      note_tag: {
        Row: {
          note_id: string
          tag_id: string
        }
        Insert: {
          note_id: string
          tag_id: string
        }
        Update: {
          note_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "note_tag_note_id_fkey"
            columns: ["note_id"]
            isOneToOne: false
            referencedRelation: "note"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "note_tag_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tag"
            referencedColumns: ["id"]
          }
        ]
      }
      tag: {
        Row: {
          created_by: string
          id: string
          name: string
        }
        Insert: {
          created_by?: string
          id?: string
          name: string
        }
        Update: {
          created_by?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "tag_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      document_with_storage_path: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number | null
          name: string | null
          storage_object_id: string | null
          storage_object_path: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_storage_object_id_fkey"
            columns: ["storage_object_id"]
            isOneToOne: false
            referencedRelation: "objects"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Functions: {
      add_tags_to_note: {
        Args: {
          note_id_input: string
          tag_names: string[]
        }
        Returns: string[]
      }
      keyword_match_document_sections: {
        Args: {
          query_text: string
          match_limit: number
        }
        Returns: {
          id: number
          document_id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      keyword_match_note_sections: {
        Args: {
          query_text: string
          match_limit: number
        }
        Returns: {
          id: string
          note_id: string
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_document_sections: {
        Args: {
          query_embedding: string
          match_threshold?: number
          match_limit?: number
          filter?: Json
        }
        Returns: {
          id: number
          document_id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      match_note_sections: {
        Args: {
          query_embedding: string
          match_threshold?: number
          match_limit?: number
          filter?: Json
        }
        Returns: {
          id: string
          note_id: string
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      search_notes_by_tag: {
        Args: {
          tag_name: string
        }
        Returns: {
          content: string | null
          created_at: string
          created_by: string
          id: string
          summary: string | null
          updated_at: string
        }[]
      }
      supabase_url: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

