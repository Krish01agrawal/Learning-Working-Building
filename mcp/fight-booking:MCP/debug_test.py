#!/usr/bin/env python3
"""
Debug Test - Simple connection test
"""

import asyncio
import sys
from mcp.client.stdio import stdio_client, StdioServerParameters
from mcp.client.session import ClientSession

async def simple_test():
    """Simple connection test"""
    print("🔍 Starting simple connection test...")
    
    try:
        server_params = StdioServerParameters(
            command="python3",
            args=["flight_booking_fastmcp.py"],
            cwd="/Users/krishagrawal/Desktop/mcp/fight-booking:MCP"
        )
        
        print("📡 Attempting to connect to server...")
        
        async with stdio_client(server_params) as (read_stream, write_stream):
            print("✅ Connected to server!")
            
            client = ClientSession(read_stream, write_stream)
            print("📋 Creating client session...")
            
            await client.initialize()
            print("🚀 Session initialized!")
            
            # Simple test - list tools
            print("🛠️ Testing list_tools...")
            tools = await client.list_tools()
            print(f"✅ Found {len(tools.tools)} tools")
            
            for tool in tools.tools:
                print(f"   - {tool.name}")
            
            print("🎉 Simple test completed successfully!")
            
    except Exception as e:
        print(f"❌ Error: {e}")
        print(f"Error type: {type(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    asyncio.run(simple_test())
