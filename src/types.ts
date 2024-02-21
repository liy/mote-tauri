export type UserMessage = {
  id: ID
  role: "user"
  content: string | undefined
}

/**
 * A message that represents a return value from a function call, that will be returned to the model
 */
export type FunctionMessage = {
  id: ID
  role: "function"
  name: string
  content: string | undefined
}

export type AssistantMessage = {
  id: ID
  role: "assistant"
  content: string | undefined
}

export type SystemMessage = {
  id: ID
  role: "system"
  content: string | undefined
}

export type ActionMessage = {
  id: ID
  role: "action"
  content: {
    title: string
    data: string
  }
}

export type ResourceMessage = {
  id: ID
  role: "resource"
  content: {
    title: string
    data: {
      name: string
      type: string
      url: string
      text?: string
    }[]
  }
}

/**
 * Message used on the client-side
 */
export type Message =
  | UserMessage
  | FunctionMessage
  | AssistantMessage
  | SystemMessage
  | ActionMessage
  | ResourceMessage

export type OptionalID<T> = Omit<T, "id"> & { id?: string }

/**
 * Message originated from client
 */
export type CreateMessage =
  | OptionalID<UserMessage>
  | OptionalID<FunctionMessage>
  | OptionalID<SystemMessage>
  | OptionalID<AssistantMessage>
  | OptionalID<ActionMessage>
  | OptionalID<ResourceMessage>

export type MessageTreeEdge = { parent_id: ID | undefined; childIDs: ID[] }

export type MessageTree = {
  edges: Map<ID, MessageTreeEdge>
  heads: ID[]
  dictionary: Map<ID, Message>
}

export type OpenEntry = {
  id: ID
  type: "chat" | "note"
}

export namespace API {
  export type Message = Database["public"]["Tables"]["message"]["Row"]
  export type Note = Database["public"]["Tables"]["note"]["Row"]
  export type Inbox = Database["public"]["Tables"]["inbox"]["Row"]
}
