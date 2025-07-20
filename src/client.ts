import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const mcp = new Client({
	name: "Learn MCP Client",
	version: "1.0.0",
	capabilities: {
		sampling: {},
	}
})

const transport = new StdioClientTransport({
	command: "node",
	args: ["build/server.js"],
	stderr: "ignore"
})

async function main() {
	await mcp.connect(transport)
	const [{tools}, {prompts}, {resources}, {resourceTemplates}] = await Promise.all([
		mcp.listTools(),
		mcp.listPrompts(),
		mcp.listResources(),
		mcp.listResourceTemplates()
	])
}

main()