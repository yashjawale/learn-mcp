# Learn MCP Server and Client

This repository serves as a practical exploration of MCP concepts, learning how to build servers and clients using the `@modelcontextprotocol/sdk`. 

The project implements a user management system to learn about MCP resources, tools, prompts, and AI integration patterns.

## Architecture

### MCP Server (`src/server.ts`)
- **Resources**: Expose user data endpoints
- **Tools**: Create users and generate fake data  
- **Prompts**: AI-assisted user generation templates
- **Data Storage**: JSON file-based persistence

### MCP Client (`src/client.ts`)
- **Interactive CLI**: Menu-driven interface for testing
- **AI Integration**: Google Gemini for text generation
- **Tool Execution**: Direct MCP tool invocation
- **Resource Access**: Dynamic URI parameter handling

## Features

### Resources
- `users://all` - Retrieve all users from database
- `users://{userId}/profile` - Get specific user details by ID

### Tools
- **create-user** - Add new user with name, email, address, phone
- **create-random-user** - Generate fake user data using AI

### Prompts
- **generate-fake-user** - Template for creating realistic user profiles

### AI Capabilities
- Gemini 2.0 Flash integration for text generation
- Automatic fake data creation with realistic user information
- Interactive prompt execution with confirmation

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file with your Google AI API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

## Usage

### Development Mode

Start the server in development:
```bash
npm run server:dev
```

Run the client:
```bash
npm run client:dev
```

### Production Mode

Build and run:
```bash
npm run server:build
npm start
```

### MCP Inspector

Debug the server with the MCP Inspector:
```bash
npm run server:inspect
```

## Project Structure

```
src/
├── server.ts          # MCP server implementation
├── client.ts          # Interactive MCP client
└── data/
    └── users.json     # User data storage

build/                 # Compiled JavaScript output
├── server.js
├── client.js
└── data/
    └── users.json
```

## Key Concepts

### Model Context Protocol (MCP)
- **Standardized interface** for AI model interactions
- **Resources**: Read-only data endpoints
- **Tools**: Executable functions with parameters
- **Prompts**: Template-based AI interactions

### Resource Templates
Dynamic URIs with parameter substitution:
```typescript
new ResourceTemplate("users://{userId}/profile", {
  list: undefined
})
```

### Tool Definitions
Structured function calls with Zod validation:
```typescript
server.tool("create-user", "Create a new user", {
  name: z.string(),
  email: z.string(),
  address: z.string(),
  phone: z.string()
})
```

### AI Sampling
Server-side AI requests for data generation:
```typescript
server.server.request({
  method: "sampling/createMessage",
  params: { messages, maxTokens: 1024 }
})
```

## Dependencies

### Core MCP
- `@modelcontextprotocol/sdk` - MCP implementation
- `@modelcontextprotocol/inspector` - Development tools

### AI Integration  
- `@ai-sdk/google` - Google AI provider
- `ai` - Vercel AI SDK

### Development
- `typescript` - Type safety
- `tsx` - TypeScript execution
- `zod` - Schema validation
- `@inquirer/prompts` - Interactive CLI

## Key Learning Areas

- Understanding MCP's three core primitives: **Resources**, **Tools**, and **Prompts**
- Implementing dynamic resource templates with URI parameters
- Creating AI-powered tools that leverage server-side sampling
- Building interactive clients that consume MCP services
- Integrating external AI models with MCP workflows

> [!NOTE]
> Created by following [WebDevSimplified's Video on YouTube](https://www.youtube.com/watch?v=ZoZxQwp1PiM)

---

<a href="https://yashjawale.github.io/" target="_blank"><img style="height: 22px;" src="https://raw.githubusercontent.com/yashjawale/.github/main/docs/logo.svg" alt="Yash Jawale"/></a>